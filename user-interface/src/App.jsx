import { useLayoutEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { initializeHome } from "../app.js";
import { initializePage } from "../pages.js";
import metadata from "./page-metadata.js";
import Home from "./pages/Home.jsx";
import Notes from "./pages/Notes.jsx";
import Note from "./pages/Note.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import Lab from "./pages/Lab.jsx";
import Journey from "./pages/Journey.jsx";
import About from "./pages/About.jsx";

const pages = {
  index: Home,
  notes: Notes,
  note: Note,
  projects: Projects,
  project: Project,
  lab: Lab,
  journey: Journey,
  about: About,
};
const routes = [
  ["/", "index"],
  ["/notes", "notes"],
  ["/notes/:id", "note"],
  ["/projects", "projects"],
  ["/projects/:id", "project"],
  ["/journey", "journey"],
  ["/about", "about"],
  ["/lab", "lab"],
];

function LegacyRedirect({ name }) {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  let pathname = name === "index" ? "/" : `/${name}`;

  if (name === "note" || name === "project") {
    const collection = name === "note" ? "notes" : "projects";
    const id =
      search.get("id") ||
      window.WAREHOUSE[collection === "notes" ? "posts" : "projects"][0].id;
    pathname = `/${collection}/${encodeURIComponent(id)}`;
    search.delete("id");
  }

  return (
    <Navigate
      replace
      to={pathname + (search.size ? `?${search}` : "") + location.hash}
    />
  );
}

function RoutedPage({ name }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const Component = pages[name];

  useLayoutEffect(() => {
    const page = metadata[name];
    document.title = page.title;
    document.querySelector('meta[name="description"]').content =
      page.description;
    if (page.page) document.body.dataset.page = page.page;
    else delete document.body.dataset.page;

    const controller = new AbortController();
    document.addEventListener(
      "click",
      (event) => {
        const link = event.target.closest("a[href]");
        if (
          !link ||
          event.defaultPrevented ||
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey ||
          link.hasAttribute("download") ||
          (link.target && link.target !== "_self")
        )
          return;
        if (link.getAttribute("href").startsWith("#")) return;
        const url = new URL(link.href);
        if (
          url.origin !== window.location.origin ||
          !/^\/(?:$|(?:notes|projects)(?:\/[^/]+)?$|(?:journey|about|lab)$)/.test(
            url.pathname,
          )
        )
          return;
        event.preventDefault();
        navigate(url.pathname + url.search + url.hash);
      },
      { signal: controller.signal },
    );

    const cleanup =
      name === "index"
        ? initializeHome(navigate)
        : initializePage(navigate, params);
    return () => {
      controller.abort();
      cleanup?.();
      document.body.classList.remove("modal-open");
    };
  }, [name, navigate, params.id]);

  useLayoutEffect(() => {
    if (location.hash)
      document
        .getElementById(decodeURIComponent(location.hash.slice(1)))
        ?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.search, location.hash]);

  return <Component />;
}

export default function App() {
  const location = useLocation();

  return (
    <Routes>
      {routes.map(([path, name]) => (
        <Route
          key={path}
          path={path}
          element={
            <RoutedPage key={location.pathname + location.search} name={name} />
          }
        />
      ))}
      <Route
        path="/home"
        element={
          <Navigate to={"/" + location.search + location.hash} replace />
        }
      />
      {Object.keys(pages).map((name) => (
        <Route
          key={name}
          path={`/${name}.html`}
          element={<LegacyRedirect name={name} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
