export default function Home() {
  return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="site-header" id="top">
    <div className="header-inner shell">
      <a className="brand" href="index.html" aria-label="My Data Warehouse homepage">
        <img src="assets/icons/warehouse-logo.svg" width={56} height={50} alt="" />
        <span>My Data Warehouse<span className="brand-spark">✦</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a className="nav-link active" href="index.html">Home</a>
        <a className="nav-link" href="journey.html">Career Journey</a>
        <a className="nav-link" href="notes.html">Knowledge Hub</a>
        <a className="nav-link" href="projects.html">Portfolio</a>
        <a className="nav-link" href="about.html">About</a>
      </nav>
      <div className="header-actions">
        <button type="button" className="icon-button search-open" aria-label="Search posts and projects" title="Search (press /)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.5" /><path d="m16.6 16.6 5.1 5.1" strokeLinecap="round" /></svg>
        </button>
        <span className="header-divider" aria-hidden="true" />
        <button className="coffee-button" data-social="coffee" type="button"><span aria-hidden="true">☕</span> Buy Me a Coffee <span aria-hidden="true">♡</span></button>
        <button className="icon-button mobile-toggle" aria-label="Open menu" aria-expanded="false" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </div>
    <nav className="mobile-nav" aria-label="Mobile navigation" hidden>
      <a href="index.html">Home</a><a href="journey.html">Career Journey</a><a href="notes.html">Knowledge Hub</a><a href="projects.html">Portfolio</a><a href="about.html">About</a>
      <button type="button" data-social="coffee">☕ Buy Me a Coffee ♡</button>
    </nav>
  </header>
  <main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-overlay" />
      <div className="hero-inner shell">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span className="dot-live" /> NOTES, PROJECTS &amp; IDEAS IN ONE PLACE</span>
          <h1 id="hero-title">My Data <span>Warehouse</span><span className="hero-sparkles" aria-hidden="true">✳</span></h1>
          <p>A place to store what I build, learn, and want to share. Browse the notes, open a case study, or poke around the shelves.</p>
          <div className="hero-links">
            <a className="hero-link hero-link-lavender" href="journey.html"><span className="link-icon" aria-hidden="true">🪧</span><span>My Career<br />Journey</span><span className="link-arrow">↗</span></a>
            <a className="hero-link hero-link-butter" href="notes.html"><span className="link-icon" aria-hidden="true">📚</span><span>Knowledge<br />Hub</span><span className="link-arrow">↗</span></a>
            <a className="hero-link hero-link-mint" href="projects.html"><span className="link-icon" aria-hidden="true">💻</span><span>Portfolio<br />(Projects)</span><span className="link-arrow">↗</span></a>
          </div>
        </div>
        <div className="hero-mobile-art" role="img" aria-label="Cozy illustration of a person working with a laptop in a warehouse of SQL, Python, and analytics boxes" />
      </div>
    </section>
    <section className="first-look shell" aria-label="Recent posts and featured work">
      <div className="recent-panel">
        <div className="section-heading compact-heading">
          <div className="heading-title"><span className="heading-emoji" aria-hidden="true">📦</span><h2>Recent from the Warehouse</h2></div>
          <a className="text-link" href="notes.html">View all posts <span aria-hidden="true">→</span></a>
        </div>
        <div id="recent-posts" className="recent-posts" />
      </div>
      <div className="feature-panel">
        <div className="section-heading compact-heading">
          <div className="heading-title"><span className="heading-emoji" aria-hidden="true">💻</span><h2>Featured Projects <span className="title-parenthetical">(Portfolio)</span></h2></div>
          <a className="text-link" href="projects.html">View all projects <span aria-hidden="true">→</span></a>
        </div>
        <div className="feature-stage">
          <article className="feature-card" id="featured-project" aria-live="polite" />
          <div className="carousel-controls" aria-label="Featured project carousel">
            <button type="button" id="featured-prev" className="carousel-arrow" aria-label="Previous featured project">‹</button>
            <div id="featured-dots" className="carousel-dots" />
            <button type="button" id="featured-next" className="carousel-arrow" aria-label="Next featured project">›</button>
          </div>
        </div>
      </div>
    </section>
    <section className="knowledge-section section-pad" id="knowledge">
      <div className="shell">
        <div className="section-intro">
          <div><span className="eyebrow ink-eyebrow">OPEN A BOX, LEARN A THING ✦</span><h2>Explore the <em>knowledge shelves</em></h2><p>Notes I wish someone had handed me earlier. From SQL snippets to figuring out life in data.</p></div>
          <span className="sketch-star" aria-hidden="true">✳</span>
        </div>
        <div className="filter-bar" id="post-filters" role="group" aria-label="Filter posts by category" />
        <div className="post-grid" id="post-grid" />
        <div className="section-bottom"><span id="post-count" className="soft-note" /><button id="show-more" className="outline-button" type="button">Show more notes <span aria-hidden="true">↓</span></button></div>
      </div>
    </section>
    <section className="career-section section-pad" id="career">
      <div className="shell career-grid">
        <div className="career-intro">
          <span className="eyebrow ink-eyebrow">THE STORY BEHIND THE WORK</span>
          <h2>My career journey <span className="highlight-stroke">so far.</span></h2>
          <p>A timeline of projects, detours, experiments, and lessons along the way.</p>
          <button type="button" className="outline-button" id="career-story-btn">Read the full story <span aria-hidden="true">↗</span></button>
          <div className="career-doodle" aria-hidden="true">↝ <span>still learning...</span> ✿</div>
        </div>
        <div className="timeline" id="timeline" />
      </div>
    </section>
    <section className="portfolio-section section-pad" id="portfolio">
      <div className="shell">
        <div className="section-intro portfolio-intro"><div><span className="eyebrow ink-eyebrow">A PEEK INSIDE MY WORKSHOP ✦</span><h2>Projects, experiments <em>&amp; things I built</em></h2><p>A collection of dashboards, pipelines, experiments, and the stories behind them.</p></div><span className="portfolio-decoration" aria-hidden="true">✧</span></div>
        <div className="project-grid" id="project-grid" />
        <p className="disclaimer">The articles and projects here are complete educational examples, not claims about personal work. Replace them with your own work in <code>content.js</code>.</p>
      </div>
    </section>
    <section className="about-section section-pad" id="about">
      <div className="shell about-grid">
        <div className="about-art" aria-hidden="true"><div className="about-art-inner"><span className="about-avatar">💻</span><span className="about-float float-one">SELECT * FROM curiosity;</span><span className="about-float float-two">☕ + 📊 = ♡</span><span className="about-flower">✿</span></div></div>
        <div className="about-copy"><span className="eyebrow ink-eyebrow">HELLO, HUMAN BEHIND THE DATA</span><h2>A little about the<br /><em>warehouse.</em></h2><p>I keep projects, useful notes, experiments and random ideas here. The site is a place to document what I build and share what I learn along the way.</p><p>Browse what's on the shelves, or head to the About page for more context.</p><div className="about-actions"><button className="primary-button" type="button" data-social="email">Say hello <span aria-hidden="true">↗</span></button><button type="button" className="minimal-button" data-social="github">Explore my GitHub <span aria-hidden="true">↗</span></button></div></div>
      </div>
    </section>
  </main>
  <footer className="site-footer" id="contact">
    <div className="shell footer-main">
      <div className="footer-message"><span className="footer-mail" aria-hidden="true">✉</span><div><h2>Let's keep in touch! ♡</h2><p>New posts, project updates, and tiny data discoveries.</p></div></div>
      <form className="subscribe-form" id="subscribe-form" noValidate><label className="visually-hidden" htmlFor="subscribe-email">Your email address</label><input id="subscribe-email" name="email" type="email" placeholder="Your email..." required autoComplete="email" /><button type="submit" aria-label="Save email for demo newsletter" title="Save email in this browser">➜</button></form>
      <div className="footer-social" aria-label="Social links"><button type="button" data-social="linkedin" aria-label="LinkedIn" title="LinkedIn">in</button><button type="button" data-social="github" aria-label="GitHub" title="GitHub">⌘</button><button type="button" data-social="youtube" aria-label="YouTube" title="YouTube">▶</button><button type="button" data-social="medium" aria-label="Medium" title="Medium">M</button></div>
    </div>
    <div className="shell footer-lower"><span>Made with ☕, curiosity, and a lot of SELECT statements.</span><span>© <span id="year" /> My Data Warehouse · Built with love ♡</span></div>
  </footer>
  <dialog id="search-dialog" className="modal search-modal" aria-labelledby="search-title">
    <div className="modal-header"><div><span className="modal-kicker">FIND SOMETHING GOOD ✦</span><h2 id="search-title">Search the warehouse</h2></div><button className="close-modal icon-button" type="button" aria-label="Close search">✕</button></div>
    <div className="search-input-wrap"><span aria-hidden="true">⌕</span><input type="search" id="search-input" placeholder="Try SQL, dashboard, career..." aria-label="Search posts and projects" autoComplete="off" /><span className="search-shortcut">ESC</span></div>
    <div className="search-results" id="search-results" aria-live="polite" />
  </dialog>
  <dialog id="detail-dialog" className="modal detail-modal" aria-labelledby="detail-title"><div className="detail-modal-top"><span id="detail-type" className="modal-kicker" /><button className="close-modal icon-button" type="button" aria-label="Close details">✕</button></div><div id="detail-content" /></dialog>
  <div id="toast" className="toast" role="status" aria-live="polite" />
</>;
}
