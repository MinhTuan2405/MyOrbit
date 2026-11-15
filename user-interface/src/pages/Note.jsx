import { Link } from "react-router";
export default function Note() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <div className="header-inner shell">
          <Link className="brand" to="/" aria-label="Go to homepage">
            <img
              src="/assets/icons/warehouse-logo.svg"
              width={53}
              height={48}
              alt=""
            />
            <span>
              My Data Warehouse<span className="brand-spark">✦</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link className="nav-link" data-nav="home" to="/">
              Home
            </Link>
            <Link className="nav-link" data-nav="journey" to="/journey">
              Career Journey
            </Link>
            <Link className="nav-link" data-nav="notes" to="/notes">
              Knowledge Hub
            </Link>
            <Link className="nav-link" data-nav="projects" to="/projects">
              Portfolio
            </Link>
            <Link className="nav-link" data-nav="about" to="/about">
              About
            </Link>
          </nav>
          <div className="header-actions">
            <button
              className="icon-button search-open"
              type="button"
              aria-label="Search across website"
              title="Search (press /)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <circle cx="10.8" cy="10.8" r="7.5" />
                <path d="m16.6 16.6 5.1 5.1" strokeLinecap="round" />
              </svg>
            </button>
            <span className="header-divider" aria-hidden="true" />
            <Link className="coffee-button" to="/about#contact">
              ✉ Get in touch
            </Link>
            <button
              className="icon-button mobile-toggle"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <nav className="mobile-nav" hidden aria-label="Mobile navigation">
          <Link to="/">Home</Link>
          <Link to="/journey">Career Journey</Link>
          <Link to="/notes">Knowledge Hub</Link>
          <Link to="/projects">Portfolio</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main id="main">
        <div className="reading-progress" id="reading-progress" />
        <div className="shell breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/notes">Knowledge Hub</Link>
          <span>/</span>
          <span id="crumb-article">Article</span>
        </div>
        <section className="shell article-layout">
          <article className="reading-article" id="article-body" />
          <aside className="article-aside">
            <div className="aside-sticky">
              <div className="aside-card">
                <div className="eyebrow ink-eyebrow">ON THIS PAGE</div>
                <nav id="article-toc" aria-label="Article sections" />
              </div>
              <div className="aside-card aside-note">
                <strong>About this site</strong>
                <p>
                  This is a fully working website template with educational
                  example articles. Replace the samples with your own writing
                  before publishing.
                </p>
                <Link to="/about">Learn more ↗</Link>
              </div>
            </div>
          </aside>
        </section>
        <section className="shell related-section">
          <div className="section-heading">
            <h2>Keep exploring</h2>
            <Link className="text-link" to="/notes">
              All notes →
            </Link>
          </div>
          <div className="post-grid" id="related-notes" />
        </section>
      </main>
      <footer className="site-footer inner-footer" id="contact">
        <div className="shell footer-main">
          <div className="footer-message">
            <span className="footer-mail" aria-hidden="true">
              ✉
            </span>
            <div>
              <h2>Stay in the loop.</h2>
              <p>Notes, projects and what I'm working on.</p>
            </div>
          </div>
          <div className="footer-note">
            <strong>Newsletter preview</strong>
            <p>
              The subscription form is intentionally disabled until an email
              service is connected.
            </p>
          </div>
          <div className="footer-social">
            <Link to="/notes" aria-label="Read all notes">
              Notes ↗
            </Link>
            <Link to="/projects" aria-label="See all projects">
              Work ↗
            </Link>
          </div>
        </div>
        <div className="shell footer-lower">
          <span>An open shelf for ideas, notes and work in progress.</span>
          <span>
            © <span className="year" /> My Data Warehouse
          </span>
        </div>
      </footer>
      <dialog
        id="global-search"
        className="modal search-modal"
        aria-labelledby="search-title"
      >
        <div className="modal-header">
          <div>
            <span className="modal-kicker">SEARCH ALL SHELVES</span>
            <h2 id="search-title">Looking for something?</h2>
          </div>
          <button
            type="button"
            className="icon-button search-close"
            aria-label="Close search"
          >
            ✕
          </button>
        </div>
        <div className="search-input-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            id="global-search-input"
            placeholder="Search notes, projects, topics..."
            autoComplete="off"
            aria-label="Search website"
          />
          <span className="search-shortcut">ESC</span>
        </div>
        <div
          id="global-search-results"
          className="search-results"
          aria-live="polite"
        />
      </dialog>
      <div className="toast" role="status" id="page-toast" aria-live="polite" />
    </>
  );
}
