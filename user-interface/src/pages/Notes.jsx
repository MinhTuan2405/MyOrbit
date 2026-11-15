import { Link } from "react-router";
export default function Notes() {
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
        <section className="page-hero page-hero-notes">
          <div className="shell">
            <div className="eyebrow ink-eyebrow">
              THE KNOWLEDGE SHELVES / OPEN TO EVERYONE
            </div>
            <h1>
              Notes worth <em>keeping.</em>
            </h1>
            <p>
              Things I've learned, broken, fixed, and wanted to remember. Browse
              by topic or search the whole shelf.
            </p>
            <div className="page-hero-actions">
              <span className="data-counter" id="notes-total">
                11 example notes
              </span>
              <button
                id="view-bookmarks"
                className="outline-button"
                type="button"
              >
                ☆ Saved notes <span id="saved-count" />
              </button>
            </div>
          </div>
        </section>
        <section className="shell collection-area">
          <div className="collection-toolbar">
            <div
              className="filter-bar"
              id="notes-filters"
              aria-label="Filter notes by topic"
            />
            <label className="field-search">
              <span aria-hidden="true">⌕</span>
              <input
                id="notes-search"
                placeholder="Find a note..."
                type="search"
                aria-label="Find notes"
              />
            </label>
          </div>
          <div className="collection-summary">
            <span id="notes-result-count">Loading notes...</span>
            <label className="sort-wrapper">
              Sort{" "}
              <select id="notes-sort">
                <option value="default">Featured first</option>
                <option value="az">Title A-Z</option>
                <option value="short">Quickest reads</option>
              </select>
            </label>
          </div>
          <div id="notes-list" className="post-grid roomy-grid" />
          <div id="notes-empty" className="empty-results" hidden>
            <h2>Nothing in this box yet.</h2>
            <p>Try a different topic or search phrase.</p>
            <button className="outline-button" id="notes-reset" type="button">
              Clear filters
            </button>
          </div>
        </section>
        <section className="shell section-crosslink">
          <div className="crosslink-card">
            <div>
              <span className="eyebrow ink-eyebrow">SEE THE PRACTICE</span>
              <h2>Want to see these ideas in action?</h2>
              <p>
                Head to the project shelf for case studies and a live
                interactive example.
              </p>
            </div>
            <Link className="primary-button" to="/projects">
              Explore projects ↗
            </Link>
          </div>
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
