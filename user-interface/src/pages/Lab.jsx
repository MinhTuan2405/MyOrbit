import { Link } from "react-router";
export default function Lab() {
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
        <div className="shell breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Portfolio</Link>
          <span>/</span>
          <span>Interactive dashboard</span>
        </div>
        <section className="shell dashboard-shell">
          <div className="dashboard-heading">
            <div>
              <span className="eyebrow ink-eyebrow">
                LIVE INTERACTIVE DEMO / SYNTHETIC DATA
              </span>
              <h1>
                Commerce overview{" "}
                <span className="dashboard-beta">LIVE DEMO</span>
              </h1>
              <p>
                Change the filters and the KPI cards, line chart and table will
                all update. The figures are generated sample data, not actual
                sales.
              </p>
            </div>
            <Link to="/projects/ecommerce-dashboard" className="outline-button">
              View case study ↗
            </Link>
          </div>
          <div className="dashboard-panel">
            <div className="dashboard-toolbar">
              <label>
                Region{" "}
                <select id="dash-region">
                  <option value="all">All regions</option>
                  <option value="North">North</option>
                  <option value="Central">Central</option>
                  <option value="South">South</option>
                </select>
              </label>
              <label>
                Metric{" "}
                <select id="dash-metric">
                  <option value="revenue">Revenue</option>
                  <option value="orders">Orders</option>
                  <option value="aov">Avg. order value</option>
                </select>
              </label>
              <button className="outline-button" id="dash-export" type="button">
                ↓ Export CSV
              </button>
            </div>
            <div id="dash-kpis" className="kpi-grid" />
            <div className="dashboard-chart-wrap">
              <div className="chart-heading">
                <div>
                  <h2 id="chart-title">Revenue over time</h2>
                  <p>Monthly synthetic performance · Jan-Dec 2025</p>
                </div>
                <span id="chart-legend" className="chart-legend">
                  ● Selected metric
                </span>
              </div>
              <div id="dash-chart" className="chart-svg-wrap" />
            </div>
            <div className="table-heading">
              <h2>Monthly breakdown</h2>
              <span>Updated with filters</span>
            </div>
            <div className="table-scroll">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Revenue</th>
                    <th>Orders</th>
                    <th>Avg. order value</th>
                  </tr>
                </thead>
                <tbody id="dash-table-body" />
              </table>
            </div>
          </div>
          <div className="lab-explainer">
            <strong>What is functional here?</strong>
            <p>
              Filters recalculate metrics, the chart redraws, and Export CSV
              saves the filtered dataset. There is no server or real customer
              data behind this demo.
            </p>
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
