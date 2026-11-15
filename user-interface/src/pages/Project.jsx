export default function Project() {
  return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="site-header" id="top"><div className="header-inner shell">
      <a className="brand" href="index.html" aria-label="Go to homepage"><img src="assets/icons/warehouse-logo.svg" width={53} height={48} alt="" /><span>My Data Warehouse<span className="brand-spark">✦</span></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a className="nav-link" data-nav="home" href="index.html">Home</a><a className="nav-link" data-nav="journey" href="journey.html">Career Journey</a><a className="nav-link" data-nav="notes" href="notes.html">Knowledge Hub</a><a className="nav-link" data-nav="projects" href="projects.html">Portfolio</a><a className="nav-link" data-nav="about" href="about.html">About</a></nav>
      <div className="header-actions"><button className="icon-button search-open" type="button" aria-label="Search across website" title="Search (press /)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.5" /><path d="m16.6 16.6 5.1 5.1" strokeLinecap="round" /></svg></button><span className="header-divider" aria-hidden="true" /><a className="coffee-button" href="about.html#contact">✉ Get in touch</a><button className="icon-button mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button></div></div>
    <nav className="mobile-nav" hidden aria-label="Mobile navigation"><a href="index.html">Home</a><a href="journey.html">Career Journey</a><a href="notes.html">Knowledge Hub</a><a href="projects.html">Portfolio</a><a href="about.html">About</a></nav></header><main id="main">
    <div className="shell breadcrumbs"><a href="index.html">Home</a><span>/</span><a href="projects.html">Portfolio</a><span>/</span><span id="crumb-project">Project</span></div>
    <div className="shell case-study" id="case-study" />
    <section className="shell related-section"><div className="section-heading"><h2>More from the workshop</h2><a className="text-link" href="projects.html">All projects →</a></div><div id="related-projects" className="project-gallery" /></section>
  </main>
  <footer className="site-footer inner-footer" id="contact"><div className="shell footer-main">
      <div className="footer-message"><span className="footer-mail" aria-hidden="true">✉</span><div><h2>Stay in the loop.</h2><p>Notes, projects and what I'm working on.</p></div></div>
      <div className="footer-note"><strong>Newsletter preview</strong><p>The subscription form is intentionally disabled until an email service is connected.</p></div>
      <div className="footer-social"><a href="notes.html" aria-label="Read all notes">Notes ↗</a><a href="projects.html" aria-label="See all projects">Work ↗</a></div></div><div className="shell footer-lower"><span>An open shelf for ideas, notes and work in progress.</span><span>© <span className="year" /> My Data Warehouse</span></div></footer>
  <dialog id="global-search" className="modal search-modal" aria-labelledby="search-title"><div className="modal-header"><div><span className="modal-kicker">SEARCH ALL SHELVES</span><h2 id="search-title">Looking for something?</h2></div><button type="button" className="icon-button search-close" aria-label="Close search">✕</button></div><div className="search-input-wrap"><span aria-hidden="true">⌕</span><input type="search" id="global-search-input" placeholder="Search notes, projects, topics..." autoComplete="off" aria-label="Search website" /><span className="search-shortcut">ESC</span></div><div id="global-search-results" className="search-results" aria-live="polite" /></dialog>
  <div className="toast" role="status" id="page-toast" aria-live="polite" />
</>;
}
