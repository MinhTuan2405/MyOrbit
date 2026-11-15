import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import { initializeHome } from '../app.js';
import { initializePage } from '../pages.js';
import metadata from './page-metadata.js';
import Home from './pages/Home.jsx';
import Notes from './pages/Notes.jsx';
import Note from './pages/Note.jsx';
import Projects from './pages/Projects.jsx';
import Project from './pages/Project.jsx';
import Lab from './pages/Lab.jsx';
import Journey from './pages/Journey.jsx';
import About from './pages/About.jsx';

const pages = { index: Home, notes: Notes, note: Note, projects: Projects, project: Project, lab: Lab, journey: Journey, about: About };

function RoutedPage({ name }) {
  const navigate = useNavigate();
  const location = useLocation();
  const Component = pages[name];

  useLayoutEffect(() => {
    const page = metadata[name];
    document.title = page.title;
    document.querySelector('meta[name="description"]').content = page.description;
    if (page.page) document.body.dataset.page = page.page;
    else delete document.body.dataset.page;

    const controller = new AbortController();
    document.addEventListener('click', event => {
      const link = event.target.closest('a[href]');
      if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      if (link.getAttribute('href').startsWith('#')) return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin || !/^\/(?:index|notes|note|projects|project|lab|journey|about)\.html$|^\/$/.test(url.pathname)) return;
      event.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    }, { signal: controller.signal });

    const cleanup = name === 'index' ? initializeHome(navigate) : initializePage(navigate);
    return () => {
      controller.abort();
      cleanup?.();
      document.body.classList.remove('modal-open');
    };
  }, [name, navigate]);

  useLayoutEffect(() => {
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.search, location.hash]);

  return <Component />;
}

export default function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<RoutedPage key={location.pathname + location.search} name="index" />} />
      {Object.keys(pages).map(name => (
        <Route key={name} path={`/${name}.html`} element={<RoutedPage key={location.pathname + location.search} name={name} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
