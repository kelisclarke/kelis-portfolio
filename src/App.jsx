import { useEffect, useMemo, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'SeeMe',
    type: 'INTERACTIVE MEDIA / PRODUCT DESIGN',
    image: '/assets/seeme-cover.png',
    blurb: 'An interactive media discovery platform that turns browsing into part of the experience.'
  },
  {
    id: '02',
    title: 'CTCIP',
    type: 'WEB DESIGN / REDESIGN',
    image: '/assets/ctcip-cover.png',
    blurb: 'A real-world website redesign focused on clearer structure, visual hierarchy, and implementation.'
  },
  {
    id: '03',
    title: 'Bandcamp Brand Audit',
    type: 'BRAND STRATEGY / RESEARCH',
    image: '/assets/bandcamp-logo.png',
    imageFit: 'contain',
    blurb: 'A brand audit exploring ways Bandcamp could strengthen visibility, positioning, and audience reach.'
  },
]

const menuItems = [
  { key: 'work', label: 'WORK' },
  { key: 'about', label: 'ABOUT' },
  { key: 'resume', label: 'RESUME' },
  { key: 'contact', label: 'CONTACT' },
]

export default function App() {
  const [screen, setScreen] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('screen')
    return ['menu', 'work', 'about', 'resume', 'contact', 'seeme', 'ctcip', 'bandcamp'].includes(requested) ? requested : 'menu'
  })
  const [menuIndex, setMenuIndex] = useState(0)
  const [projectIndex, setProjectIndex] = useState(0)

  const activeMenu = menuItems[menuIndex]
  const activeProject = projects[projectIndex]
  const openActiveProject = () => {
    if (activeProject.id === '01') setScreen('seeme')
    if (activeProject.id === '02') setScreen('ctcip')
    if (activeProject.id === '03') setScreen('bandcamp')
  }

  useEffect(() => {
    document.body.classList.toggle('case-study-active', screen === 'seeme' || screen === 'ctcip' || screen === 'bandcamp')
    return () => document.body.classList.remove('case-study-active')
  }, [screen])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (screen === 'menu') url.searchParams.delete('screen')
    else url.searchParams.set('screen', screen)
    window.history.replaceState({ screen }, '', `${url.pathname}${url.search}${url.hash}`)
  }, [screen])

  useEffect(() => {
    const onPopState = () => {
      const requested = new URLSearchParams(window.location.search).get('screen')
      setScreen(['menu', 'work', 'about', 'resume', 'contact', 'seeme', 'ctcip', 'bandcamp'].includes(requested) ? requested : 'menu')
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (!['seeme', 'ctcip', 'bandcamp'].includes(screen)) return
    let observer
    const frame = requestAnimationFrame(() => {
      const sections = document.querySelectorAll('.seeme-case .notebook-spread, .ctcip-case .ctcip-sheet, .bandcamp-case .bandcamp-sheet')
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer?.unobserve(entry.target)
          }
        })
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
      sections.forEach((section) => observer.observe(section))
    })
    return () => { cancelAnimationFrame(frame); observer?.disconnect() }
  }, [screen])

  const menuVisual = useMemo(() => {
    if (activeMenu.key === 'work') return { image: activeProject.image, title: 'SELECTED WORK', small: 'PROJECT ARCHIVE' }
    if (activeMenu.key === 'about') return { color: '#77786f', title: 'ABOUT ME', small: 'PROFILE / NOTES' }
    if (activeMenu.key === 'resume') return { color: '#77786f', title: 'RESUME', small: 'EXPERIENCE / SKILLS' }
    if (activeMenu.key === 'contact') return { color: '#77786f', title: 'CONTACT', small: 'EMAIL / LINKS' }
    return { color: '#77786f', title: 'CONTACT', small: 'EMAIL / LINKS' }
  }, [activeMenu, activeProject])

  useEffect(() => {
    const onKey = (e) => {
      if (screen === 'menu') {
        if (e.key === 'ArrowDown') setMenuIndex((i) => (i + 1) % menuItems.length)
        if (e.key === 'ArrowUp') setMenuIndex((i) => (i - 1 + menuItems.length) % menuItems.length)
        if (e.key === 'Enter' || e.key === 'ArrowRight') setScreen(activeMenu.key)
      } else if (screen === 'work') {
        if (e.key === 'Escape' || e.key === 'Backspace') setScreen('menu')
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        setScreen('menu')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [screen, activeMenu])

  if (screen === 'seeme') {
    return <SeeMeCaseStudy onBack={() => setScreen('work')} />
  }

  if (screen === 'ctcip') {
    return <CTCIPCaseStudy onBack={() => setScreen('work')} />
  }

  if (screen === 'bandcamp') {
    return <BandcampCaseStudy onBack={() => setScreen('work')} />
  }

  if (screen === 'work') {
    return <WorkScreen projectIndex={projectIndex} setProjectIndex={setProjectIndex} onBack={() => setScreen('menu')} onOpenProject={(project) => { if (project.id === '01') setScreen('seeme'); if (project.id === '02') setScreen('ctcip'); if (project.id === '03') setScreen('bandcamp') }} />
  }

  if (screen !== 'menu') {
    return <PaperScreen kind={screen} onBack={() => setScreen('menu')} />
  }

  return (
    <main className="skate-shell main-menu-screen home-collage">
      <Texture />

      <img className="home-top-ink texture-ink" src="/assets/brush-ink-dry.png" alt="" />
      <img className="home-bottom-ink texture-ink" src="/assets/brush-ink-wet.png" alt="" />
      <div className="home-paper-band" />

      <img className="bottom-left-smudge" src="/assets/bottom-left-smudge.png" alt="" />
      <img className="ambient-photo ambient-pond" src="/assets/pond-reflection.png" alt="" />
      <div className="edge-building" />
      <img className="edge-scrap edge-scrap-a" src="/assets/brush-ink-wet.png" alt="" />
      <img className="edge-scrap edge-scrap-b" src="/assets/brush-ink-dry.png" alt="" />
      <img className="ink-smudge ink-smudge-a" src="/assets/brush-ink-dry.png" alt="" />
      <img className="ink-smudge ink-smudge-b" src="/assets/brush-ink-wet.png" alt="" />

      <section className="home-name-card">
        <span className="home-mark">M</span>
        <strong>KELIS CLARKE</strong>
        <small>DIGITAL MEDIA &amp; DESIGN</small>
        <i>v1.0</i>
      </section>

      <section className="home-menu" aria-label="Portfolio navigation">
        {menuItems.map((item, index) => (
          <button
            key={item.key}
            className={`home-menu-item ${index === menuIndex ? 'is-selected' : ''}`}
            onMouseEnter={() => setMenuIndex(index)}
            onClick={() => { setMenuIndex(index); setScreen(item.key) }}
          >
            {index === menuIndex && <img className="menu-brush" src="/assets/brush-b.png" alt="" />}
            <span className="home-arrow" aria-hidden="true">➜</span>
            <span className="home-num">{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </section>

      <section className="feature-stack" aria-live="polite">
        <div className="feature-paper-under" />
        <div className="feature-black-under" />
        <div className="feature-frame">
          <button className="feature-main feature-main-link" onClick={openActiveProject} aria-label={`Open ${activeProject.title} case study`}>
            <img src={activeProject.image} alt="" style={{ objectFit: activeProject.imageFit || 'cover' }} />
            <div className="feature-grain" />
            <div className="feature-title">
              <strong>{activeProject.title}</strong>
              <small>{activeProject.type}</small>
            </div>
          </button>

          <div className="project-rail">
            {projects.map((p, i) => (
              <button key={p.title} className={i === projectIndex ? 'rail-active' : ''} onMouseEnter={() => setProjectIndex(i)} onClick={() => { setProjectIndex(i); if (p.id === '01') setScreen('seeme'); if (p.id === '02') setScreen('ctcip'); if (p.id === '03') setScreen('bandcamp') }}>
                <span>{p.id}</span><small>{p.title}</small>
                <img src={p.image} alt="" style={{ objectFit: p.imageFit || 'cover' }} />
              </button>
            ))}
          </div>
          <button className="frame-arrow frame-left" onClick={() => setProjectIndex((i) => (i - 1 + projects.length) % projects.length)}>◀</button>
          <button className="frame-arrow frame-right" onClick={() => setProjectIndex((i) => (i + 1) % projects.length)}>▶</button>
        </div>
        <div className="selected-tape">SELECTED<br/>WORK</div>
        <div className="caption-tape">2025–27</div>
      </section>

      <div className="home-footer">© 2026 KELIS CLARKE. ALL RIGHTS RESERVED.</div>
      <ControllerHelp selectLabel="OPEN" backLabel="BACK" desktop onSelect={() => activeMenu.key === 'work' ? openActiveProject() : setScreen(activeMenu.key)} onBack={() => window.history.back()} />
    </main>
  )
}

function WorkScreen({ projectIndex, setProjectIndex, onBack, onOpenProject }) {
  const project = projects[projectIndex]

  return (
    <main className="skate-shell notebook-screen">
      <Texture />
      <div className="top-paper-strip" />
      <div className="menu-tab small-tab">WORK</div>

      <section className="notebook-wrap">
        <div className="notebook-shadow" />
        <div className="notebook">
          <div className="spiral" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, i) => <i key={i} />)}
          </div>

          <div className="page left-page">
            <div className="page-title">PROJECT INDEX</div>
            <div className="project-list">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onMouseEnter={() => setProjectIndex(i)}
                  onClick={() => { setProjectIndex(i); if (p.id === '01' || p.id === '02' || p.id === '03') onOpenProject(p) }}
                  className={i === projectIndex ? 'active-project' : ''}
                >
                  <span>{p.id}</span>
                  <strong>{p.title}</strong>
                  <small>{p.type}</small>
                </button>
              ))}
            </div>
            <div className="work-index-note">SELECTED / 03</div>
          </div>

          <div className="page right-page" key={project.id}>
            <div className="project-number">{project.id}</div>
            <button className="project-photo-card project-open-card" onClick={() => onOpenProject(project)} aria-label={`Open ${project.title} case study`}>
              <img src={project.image} alt={`${project.title} preview`} style={{ objectFit: project.imageFit || 'cover' }} />
              <span>OPEN CASE STUDY →</span>
            </button>
            <h1>{project.title}</h1>
            <p>{project.blurb}</p>
            <div className="project-meta">{project.type}</div>
          </div>
        </div>

      </section>

      <img className="work-edge-ink work-edge-ink-top" src="/assets/brush-ink-dry.png" alt="" />
      <img className="work-edge-ink work-edge-ink-bottom" src="/assets/brush-ink-wet.png" alt="" />
      <div className="work-grid-patch" />
      <div className="desk-tape tape-a" />
      <div className="desk-tape tape-b" />
      <div className="loose-note">KELIS / 2026<br/>SELECTED WORK</div>
      <ControllerHelp onBack={onBack} backLabel="BACK" selectLabel="OPEN" onSelect={() => onOpenProject(project)} />
    </main>
  )
}


function SeeMeCaseStudy({ onBack }) {
  const meta = [
    ['CONTEXT', 'Class project / digital publication'],
    ['ROLE', 'Designer / individual'],
    ['DURATION', '1 month'],
    ['TOOLS', 'Figma'],
  ]

  return <main className="case-study-shell seeme-case">
    <Texture />
    <div className="case-study-topbar">
      <button onClick={onBack}>← WORK</button>
      <span>01 / SEE ME</span>
    </div>

    <div className="case-study-stack">
      <section className="notebook-spread case-hero-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left">
          <span className="case-index">01 /</span>
          <h1>SeeMe</h1>
          <div className="marker-label">Interactive Media Discovery Platform</div>
          <p className="case-lede">SeeMe reimagines how people discover and engage with media. Instead of traditional lists and grids, it invites users to explore music, movies, games, books, and fashion through familiar physical interactions that make discovery feel immersive and personal.</p>
          <div className="case-meta-grid">{meta.map(([a,b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</div>
        </div>
        <div className="case-page case-page-right hero-visual-page">
          <div className="physical-piece hero-piece">
            <span className="tape-strip tape-strip-wide" aria-hidden="true" />
            <img className="hero-mockup" src="/assets/seeme-laptop-mockup.png" alt="SeeMe landing page shown on a laptop mockup" />
          </div>
        </div>
      </section>

      <section className="notebook-spread airy-spread origin-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left">
          <span className="case-index">02 /</span>
          <h2><span className="highlight">Where It Started</span></h2>
          <p>The assignment was to create a digital publication, and I've always liked taking an assignment a little outside the box so it feels different and actually sticks with people.</p>
          <p>For SeeMe, I wanted to recreate parts of a physical media experience digitally. I built it as a side-scroller and used familiar physical interactions to make discovery feel more tactile, playful, and intentional.</p>
        </div>
        <div className="case-page case-page-right inspiration-page">
          <span className="case-badge badge-blue">Visual Inspiration</span>
          <div className="apple-inspo-collage">
            <figure className="apple-ref apple-ref-ufo"><span className="tape-strip tape-strip-small" aria-hidden="true"/><img src="/assets/apple-ufo.png" alt="Vintage Apple Mac OS 8 advertisement"/></figure>
            <figure className="apple-ref apple-ref-carrots"><span className="tape-strip tape-strip-small" aria-hidden="true"/><img src="/assets/apple-carrots.png" alt="Vintage Apples make great carrots advertisement"/></figure>
            <figure className="apple-ref apple-ref-explore"><span className="tape-strip tape-strip-small" aria-hidden="true"/><img src="/assets/apple-explore.png" alt="Explore your mind Apple Macintosh advertisement"/></figure>
          </div>
        </div>
      </section>

      <section className="notebook-spread airy-spread structure-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left">
          <span className="case-index">03 /</span>
          <h2><span className="highlight">The Structure</span></h2>
          <span className="case-badge badge-yellow">Five Categories</span>
          <p>SeeMe is organized into five main categories. Each one keeps the publication connected, but gives discovery its own environment inspired by how that media is traditionally experienced.</p>
        </div>
        <div className="case-page case-page-right structure-visual-page">
          <div className="physical-piece structure-piece">
            <span className="tape-strip tape-strip-corner" aria-hidden="true" />
            <img className="structure-image" src="/assets/seeme-structure.png" alt="SeeMe category hub for Music, Games, Books, Fashion, and Shows and Movies" />
          </div>
        </div>
      </section>

      <section className="notebook-spread iteration-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left">
          <span className="case-index">04 /</span>
          <h2><span className="highlight">Iterations</span></h2>
          <span className="case-badge badge-red">Design Iterations</span>
          <p>The core ideas stayed the same, but the presentation evolved into something more immersive and atmospheric.</p>
          <div className="iteration-pair">
            <figure className="pasted-shot old-shot"><img src="/assets/seeme-old-music.png" alt="Earlier SeeMe Music layout using CDs"/><figcaption>EARLY / CD LAYOUT</figcaption></figure>
            <div className="iteration-arrow">↓</div>
            <figure className="pasted-shot final-shot"><img src="/assets/seeme-final-music.png" alt="Final SeeMe Music record store environment"/><figcaption>FINAL / RECORD STORE</figcaption></figure>
          </div>
        </div>
        <div className="case-page case-page-right">
          <div className="iteration-pair iteration-tv">
            <figure className="pasted-shot old-shot"><img src="/assets/seeme-old-tv.png" alt="Earlier Shows and Movies wall of televisions"/><figcaption>EARLY / TV WALL</figcaption></figure>
            <div className="iteration-arrow">↓</div>
            <figure className="pasted-shot final-shot"><img src="/assets/seeme-final-tv.png" alt="Final Shows and Movies focused television environment"/><figcaption>FINAL / FOCUSED TV</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="notebook-spread final-experience-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left final-copy">
          <span className="case-index">05 /</span>
          <h2><span className="highlight">The Final Experience</span></h2>
          <span className="case-badge badge-green">Category Browsing</span>
          <p>Each category became its own browsing environment. Instead of forcing everything into one visual system, the interaction changes with the kind of media being explored.</p>
        </div>
        <div className="case-page case-page-right final-collage">
          <figure className="final-card music-card">
            <span className="tape-strip tape-strip-small final-card-tape" aria-hidden="true" />
            <span>MUSIC</span><img src="/assets/seeme-final-music.png" alt="Final Music category"/>
          </figure>
          <figure className="final-card shows-card">
            <span className="tape-strip tape-strip-small final-card-tape" aria-hidden="true" />
            <span>SHOWS + MOVIES</span><img src="/assets/seeme-final-tv.png" alt="Final Shows and Movies category"/>
          </figure>
          <figure className="final-card games-card">
            <span className="tape-strip tape-strip-small final-card-tape" aria-hidden="true" />
            <span>GAMES</span><img src="/assets/seeme-games.png" alt="Final Games category"/>
          </figure>
        </div>
      </section>

      <section className="notebook-spread publication-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left publication-copy">
          <span className="case-index">06 /</span>
          <h2><span className="highlight">It's Still a Publication</span></h2>
          <span className="case-badge badge-blue">Editorial View</span>
          <p>The interactive environments are for discovery. Once you choose something you actually want to read about, SeeMe shifts back into a familiar online article format so the content is easy to read.</p>
          <p>For example, selecting beabadoobee's vinyl opens the Beatopia feature. From there, you can read the write-up normally and then return to the more physical browsing experience.</p>
        </div>
        <div className="case-page case-page-right publication-visual publication-beatopia">
          <figure className="beatopia-paper">
            <span className="tape-strip tape-strip-wide beatopia-tape" aria-hidden="true" />
            <img src="/assets/seeme-beatopia-article.png" alt="SeeMe Beatopia editorial article page" />
            <figcaption>BEATOPIA / MUSIC FEATURE</figcaption>
          </figure>
        </div>
      </section>

      <section className="notebook-spread mobile-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left mobile-copy">
          <span className="case-index">07 /</span>
          <h2><span className="highlight">Across Screens</span></h2>
          <span className="case-badge badge-yellow">Responsive Adaptation</span>
          <p>The desktop experience gets to lean into the side-scrolling, physical-media idea. Mobile was harder because so much of SeeMe depends on having enough screen space to actually explore.</p>
          <p>I didn't want to just shrink the desktop version down. I kept the same editorial identity and tried to hold onto the interactive, playful feeling, but made browsing more direct so it still worked on a smaller screen. It became a different version of the same idea instead of a copy of the desktop experience.</p>
        </div>
        <div className="case-page case-page-right device-scrapbook-page">
          <div className="physical-piece laptop-sticker">
            <span className="tape-strip tape-strip-wide" aria-hidden="true" />
            <img src="/assets/seeme-laptop-mockup.png" alt="SeeMe desktop experience shown on a laptop" />
          </div>
          <div className="physical-piece phone-sticker">
            <img src="/assets/seeme-phone-mockup.png" alt="SeeMe article page shown in a phone mockup" />
          </div>
          <div className="physical-piece mobile-feed-piece mobile-feed-right">
            <span className="tape-strip tape-strip-small" aria-hidden="true" />
            <img className="mobile-feed-card" src="/assets/seeme-mobile-feed.png" alt="SeeMe mobile Music feed" />
          </div>
        </div>
      </section>

      <section className="notebook-spread walkthrough-spread">
        <div className="case-spiral" aria-hidden="true" />
        <div className="case-page case-page-left walkthrough-copy">
          <span className="case-index">08 /</span>
          <h2><span className="highlight">See For Yourself</span></h2>
          <p>The walkthrough shows how the side-scrolling publication moves from the landing page into category discovery and the editorial experience.</p>
        </div>
        <div className="case-page case-page-right video-page">
          <div className="video-label">Product Walkthrough</div>
          <div className="video-player-shell"><div className="video-player-top"><i/><i/><i/><span>SEE ME / DEMO</span></div><div className="video-frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/roDoJ6nWjSo?si=CMkXVLrH8ScFwS1i" title="SeeMe product walkthrough" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><div className="video-player-bottom"><span>◀</span><span className="fake-track"><i/></span><span>▶</span></div></div>
        </div>
      </section>

    </div>
  </main>
}


function CTCIPCaseStudy({ onBack }) {
  const meta = [['PROJECT','CTCIP.org'],['ROLE','Web Design + Implementation'],['TOOLS','Figma / WordPress / Beaver Builder'],['TYPE','Website redesign']]
  return <main className="case-study-shell ctcip-case">
    <BackToTop />
    <div className="case-study-topbar">
      <button className="case-work-button ctcip-work-button" onClick={onBack}>← WORK</button>
      <span>02 / CTCIP</span>
    </div>
    <div className="ctcip-stack">
      <section className="ctcip-sheet ctcip-hero">
        <div className="ctcip-hero-copy">
          <span className="case-index">01 /</span>
          <h1>CTCIP.org</h1>
          <span className="case-badge badge-green">Web Design + Redesign</span>
          <p>CTCIP was a website redesign focused on reorganizing key pages and translating Figma wireframes into the existing WordPress site.</p>
          <div className="ctcip-meta">{meta.map(([a,b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</div>
        </div>
        <div className="ctcip-hero-visual">
          <div className="ctcip-browser"><div className="browser-bar"><i/><i/><i/><span>ctcip.org</span></div><img src="/assets/ctcip-cover.png" alt="CTCIP website homepage" /></div>
          <span className="case-badge badge-green ctcip-live-badge">LIVE SITE / WORDPRESS</span>
        </div>
      </section>

      <section className="ctcip-sheet ctcip-brief">
        <div className="ctcip-section-copy">
          <span className="case-index">02 /</span><h2>Starting With Structure</h2>
          <span className="case-badge badge-yellow">Figma Wireframes</span>
          <p>I used the wireframes to figure out page hierarchy, navigation, and how the main content should be organized before bringing the redesign into WordPress.</p>
        </div>
        <div className="wireframe-board">
          <figure className="wire wire-home"><img src="/assets/ctcip-wire-home.png" alt="CTCIP homepage Figma wireframe"/><figcaption>HOME / FIGMA</figcaption></figure>
          <figure className="wire wire-news"><img src="/assets/ctcip-wire-news.png" alt="CTCIP news page Figma wireframe"/><figcaption>CIP IN THE NEWS</figcaption></figure>
        </div>
      </section>

      <section className="ctcip-sheet ctcip-map">
        <div className="ctcip-map-head"><span className="case-index">03 /</span><h2>Mapping the Site</h2><span className="case-badge badge-blue">Content System</span></div>
        <div className="ctcip-map-grid">
          <div><b>HOME</b><span>Mission, approach, collaborators</span></div>
          <div><b>ABOUT US</b><span>Who we are, history, team</span></div>
          <div><b>CIP IN THE NEWS</b><span>Featured story + recent articles</span></div>
          <div><b>PROGRAMS + RESOURCES</b><span>Scholarships, funded work, useful information</span></div>
        </div>
      </section>

      <section className="ctcip-sheet ctcip-build">
        <div className="ctcip-section-copy">
          <span className="case-index">04 /</span><h2>From Figma to WordPress</h2>
          <span className="case-badge badge-red">Build + Adapt</span>
          <p>I built the redesigned pages in WordPress using Beaver Builder, using the Figma wireframes as the starting point for the page structure.</p>
          <p>From there, I adjusted the layouts around the site's existing content and structure, along with feedback from the team and client.</p>
        </div>
        <div className="ctcip-before-after">
          <div className="ba-card plan"><span>01 / PLAN</span><img src="/assets/ctcip-wire-news.png" alt="CIP in the News recent articles wireframe"/></div>
          <div className="ba-arrow">→</div>
          <div className="ba-card live"><span>02 / LIVE</span><img src="/assets/ctcip-live-news.png" alt="Implemented CTCIP CIP in the News page"/></div>
        </div>
      </section>

      <section className="ctcip-sheet ctcip-pages">
        <div className="ctcip-pages-head"><span className="case-index">05 /</span><h2>Designing for Real Content</h2><p>The redesign covered different kinds of content across the site, including organizational information, news, programs, and resources.</p></div>
        <div className="ctcip-page-papers">
          <figure><img src="/assets/ctcip-wire-about.png" alt="About page wireframe"/><figcaption>ABOUT / LONG-FORM INFO</figcaption></figure>
          <figure><img src="/assets/ctcip-wire-programs.png" alt="Programs page wireframe"/><figcaption>PROGRAMS / REPEATABLE CONTENT</figcaption></figure>
          <figure><img src="/assets/ctcip-wire-home.png" alt="Homepage wireframe"/><figcaption>HOME / ORGANIZATIONAL CONTENT</figcaption></figure>
        </div>
      </section>

      <section className="ctcip-sheet ctcip-result">
        <div className="ctcip-result-copy"><span className="case-index">06 /</span><h2>The Result</h2><span className="case-badge badge-green">Live Website</span><p>The final redesign brought the Figma structure into the existing WordPress site and gave CTCIP an updated set of pages built around its real content.</p><p>The project gave me experience taking wireframes into a live CMS and adapting the design as I built it.</p><a href="https://ctcip.org/" target="_blank" rel="noreferrer" className="ctcip-live-link"><span className="ctcip-live-icon">↗</span><span><b>VISIT CTCIP.ORG</b><small>View the live website</small></span></a></div>
        <div className="ctcip-result-visual"><div className="ctcip-browser result-browser"><div className="browser-bar"><i/><i/><i/><span>ctcip.org</span></div><img src="/assets/ctcip-cover.png" alt="CTCIP live website" /></div></div>
      </section>
    </div>
  </main>
}


function BandcampCaseStudy({ onBack }) {
  return <main className="case-study-shell bandcamp-case">
    <BackToTop />
    <div className="case-study-topbar bandcamp-topbar">
      <button className="case-work-button" onClick={onBack}>← WORK</button>
      <span>03 / BANDCAMP</span>
    </div>

    <div className="bandcamp-stack">
      <section className="bandcamp-sheet bandcamp-hero">
        <div className="bandcamp-hero-copy">
          <span className="case-index">01 /</span>
          <span className="case-badge badge-blue bandcamp-kicker">Platform Audit / Content Strategy</span>
          <h1>Bandcamp<br/>Digital Audit</h1>
          <p><strong>A short digital audit exploring how Bandcamp could become more culturally visible while keeping its independent, artist-first identity.</strong></p>
          <div className="bandcamp-meta">
            <div><span className="bandcamp-meta-label">Role</span><span>Digital inventory<br/>Competitive analysis<br/>Strategic recommendations</span></div>
            <div><span className="bandcamp-meta-label">Tools</span><span>Research<br/>Content strategy<br/>Presentation writing</span></div>
          </div>
          <div className="bandcamp-focus"><span className="bandcamp-meta-label">Focus</span><p>Where Bandcamp's digital presence supports its artist-first positioning, and where discovery, engagement, and cultural relevance start to fall short.</p></div>
        </div>
        <div className="bandcamp-hero-art">
          <div className="bandcamp-logo-paper"><img src="/assets/bandcamp-logo.png" alt="Bandcamp logo"/></div>
          <span className="tape-strip bandcamp-paper-tape tape-one" aria-hidden="true"/><span className="tape-strip bandcamp-paper-tape tape-two" aria-hidden="true"/>
        </div>
      </section>

      <section className="bandcamp-sheet bandcamp-process bandcamp-observations">
        <div className="bandcamp-section-head"><span className="case-index">02 / THE AUDIT</span><h2>Looking at the Platform</h2></div>
        <div className="bandcamp-process-grid">
          <article><span>01 / PLATFORM</span><h3>Functional, but largely transactional.</h3><p>Bandcamp makes it easy to buy music and directly support artists, but the experience gives new users fewer reasons to explore beyond what they came for.</p><small>CLEAR NAVIGATION · DIRECT-TO-FAN · LIMITED DISCOVERY</small></article>
          <article><span>02 / PRESENCE</span><h3>Artist-focused, but easy to scroll past.</h3><p>Its social presence consistently supports artists, but the content is more informative than participatory, leaving less room for conversation and cultural momentum.</p><small>ARTIST-LED · LOW INTERACTION · LIMITED SHORT-FORM</small></article>
          <article><span>03 / POSITION</span><h3>A strong mission without an equally strong shorthand.</h3><p>Spotify is closely associated with personalization and Wrapped. SoundCloud built an identity around emerging discovery. Bandcamp's differentiator isn't communicated as immediately.</p><small>ARTIST-FIRST · INDEPENDENT · UNCLEAR CULTURAL HOOK</small></article>
        </div>
      </section>

      <section className="bandcamp-sheet bandcamp-finding">
        <div className="finding-statement"><span className="case-index">03 / THE QUESTION</span><h2>You found<br/>Bandcamp.<br/><mark>Why choose it?</mark></h2><p>The platform already has something its competitors don't: a reputation for directly supporting independent artists. The challenge is turning that value into an experience and identity that gives listeners a reason to actively choose Bandcamp.</p></div>
        <div className="bandcamp-strengths"><div><b>DIRECT SUPPORT</b><span>Fans can financially support artists more directly.</span></div><div><b>INDEPENDENT CREDIBILITY</b><span>Existing trust across indie and underground music communities.</span></div><div><b>DISCOVERY POTENTIAL</b><span>A catalog and artist community that could support a stronger discovery identity.</span></div></div>
      </section>

      <section className="bandcamp-sheet bandcamp-recs bandcamp-culture">
        <div className="bandcamp-section-head bandcamp-recs-head"><span className="case-index">04 / STRATEGY</span><h2>Make the Culture More Visible</h2></div>
        <div className="bandcamp-culture-layout">
          <div className="bandcamp-taped-photo concert-photo"><span className="tape-strip bandcamp-photo-tape bandcamp-photo-tape-a" aria-hidden="true"/><span className="tape-strip bandcamp-photo-tape bandcamp-photo-tape-b" aria-hidden="true"/><img src="/assets/bandcamp-live-stock.png" alt="Live band performing on stage"/><small>LIVE MUSIC / ARTIST CULTURE</small></div>
          <div className="bandcamp-rec-list">
            <article><span className="case-badge badge-red">01</span><div><h3>Poster Artist Program</h3><b>Give discovery a face.</b><p>Spotlight one emerging artist each quarter through homepage placement, editorial, social storytelling, and original content.</p><small>Creates a recurring cultural anchor while showing artists that Bandcamp can contribute to growth, not just sales.</small></div></article>
            <article><span className="case-badge badge-blue">02</span><div><h3>Participatory Discovery</h3><b>Give fans something to do.</b><p>Build song challenges, remix prompts, genre discovery weeks, and community competitions around Bandcamp artists.</p><small>Discovery becomes an activity instead of something that ends after a purchase.</small></div></article>
            <article><span className="case-badge badge-yellow">03</span><div><h3>Artist-Led Short Form</h3><b>Bring the story behind the music forward.</b><p>Use short-form content for song origins, studio moments, artist introductions, live clips, and behind-the-work storytelling.</p><small>Translates Bandcamp's artist-first identity into formats people already use to discover music.</small></div></article>
          </div>
        </div>
      </section>

      <section className="bandcamp-sheet bandcamp-communities">
        <div className="bandcamp-section-head"><span className="case-index">05 / EXTENSION</span><h2>Meet Listeners Where They Are</h2><p>Not every recommendation had to live inside Bandcamp. Some of the strongest opportunities were about connecting the platform to communities that already care about independent discovery.</p></div>
        <div className="community-layout">
          <div className="bandcamp-taped-photo radio-photo"><span className="tape-strip bandcamp-photo-tape bandcamp-photo-tape-a" aria-hidden="true"/><span className="tape-strip bandcamp-photo-tape bandcamp-photo-tape-b" aria-hidden="true"/><img src="/assets/campus-radio.png" alt="Campus radio station studio"/><small>CAMPUS RADIO / COMMUNITY DISCOVERY</small></div>
          <div className="community-copy">
            <article><span className="case-badge badge-green">COLLEGE RADIO</span><h3>Put Bandcamp inside existing discovery ecosystems.</h3><p>Partner with student-run stations for Bandcamp-curated shows, artist spotlights, live sessions, and playlist crossovers.</p><small>UNDERGROUND · LOCAL · DISCOVERY</small></article>
            <article><span className="case-badge badge-blue">GLOBAL + FANDOM</span><h3>Extend direct-to-fan thinking beyond the platform.</h3><p>Explore collaborations around physical releases, collectibles, artist storefronts, and highly engaged international music communities.</p><small>PHYSICAL MEDIA · FANDOM · DIRECT-TO-FAN</small></article>
          </div>
        </div>
        <div className="bandcamp-throughline"><b>THE THROUGHLINE</b><p>Build on what already makes Bandcamp valuable to artists while creating more reasons for listeners to discover, participate, and identify with the platform.</p></div>
        <a className="bandcamp-pdf-cta" href="/assets/bandcamp-digital-audit-kelis-clarke.pdf" target="_blank" rel="noreferrer"><span className="pdf-btn-icon">↗</span><span><b>READ THE FULL AUDIT</b><small>8-page Digital Media Audit · PDF</small></span></a>
      </section>
    </div>
  </main>
}

function PaperScreen({ kind, onBack }) {
  if (kind === 'about') return <AboutScreen onBack={onBack} />
  if (kind === 'resume') return <ResumeScreen onBack={onBack} />
  return <ContactScreen onBack={onBack} />
}

function InteriorChrome({ label, code }) {
  return <>
    <img className="interior-top-ink" src="/assets/brush-ink-dry.png" alt="" />
    <div className="interior-paper-band" />
    <div className="interior-label">{label}</div>
    <div className="interior-code">{code} / KELIS / 2026</div>
  </>
}

function AboutScreen({ onBack }) {
  return <main className="skate-shell interior-screen about-world">
    <Texture /><InteriorChrome label="ABOUT" code="02" />
    <img className="about-smudge" src="/assets/bottom-left-smudge.png" alt="" />
    <div className="about-grid-scrap" />
    <section className="about-photo-stack">
      <div className="about-black-back" />
      <figure className="about-photo"><img src="/assets/pond-reflection.png" alt="" /><figcaption>FIELD NOTE / 02</figcaption></figure>
      <div className="about-tape about-tape-a"/><div className="about-tape about-tape-b"/>
    </section>
    <section className="about-copy-sheet">
      <span className="sheet-kicker about-badge">CREATIVE + PROJECT COORDINATION</span>
      <h1>KELIS<br/>CLARKE</h1>
      <p>I’ve always had my hand in a little bit of everything. My background spans web, design, branding, content, and digital strategy, but I’ve realized I work best somewhere in the middle of all of it. I like keeping projects moving, organizing the details, and being the person who can understand the technical side and explain it clearly to a creative team, client, or partner.</p>
      <p>Outside of work, I really enjoy making music, playing video games, and recently I’ve started getting into photography.</p>
      <div className="about-tags"><span>PROJECT COORDINATION</span><span>CREATIVE</span><span>WEB</span><span>DIGITAL</span><span>AI TOOLS</span></div>
    </section>
    <img className="about-edge-ink" src="/assets/brush-ink-dry.png" alt="" />
    <div className="about-number-stamp">02 / PROFILE</div>
    <div className="interior-footer">© 2026 KELIS CLARKE. PROFILE / 02</div>
    <ControllerHelp onBack={onBack} backLabel="BACK" />
  </main>
}

function ResumeScreen({ onBack }) {
  return <main className="skate-shell interior-screen resume-world resume-simple-world">
    <Texture /><InteriorChrome label="RESUME" code="03" />
    <img className="resume-smudge" src="/assets/bottom-left-smudge.png" alt="" />
    <img className="resume-top-swipe" src="/assets/brush-ink-dry.png" alt="" />
    <div className="resume-grid-patch" />

    <section className="resume-pdf-stage" aria-label="Kelis Clarke resume">
      <div className="resume-pdf-shadow" aria-hidden="true" />
      <div className="resume-pdf-paper">
        <iframe
          className="resume-pdf-frame"
          src="/assets/kelis-clarke-resume.pdf#view=FitH&toolbar=0&navpanes=0"
          title="Kelis Clarke Resume"
        />
      </div>
      <div className="resume-pdf-tape" aria-hidden="true" />
    </section>

    <a className="resume-download-button" href="/assets/kelis-clarke-resume.pdf" download>
      <span className="resume-download-icon" aria-hidden="true">↓</span>
      <span>DOWNLOAD PDF</span>
    </a>

    <div className="interior-footer">© 2026 KELIS CLARKE. RESUME / 03</div>
    <ControllerHelp onBack={onBack} backLabel="BACK" />
  </main>
}

function ContactScreen({ onBack }) {
  return <main className="skate-shell interior-screen contact-notebook-world">
    <Texture /><InteriorChrome label="CONTACT" code="04" />
    <img className="contact-notebook-smudge" src="/assets/bottom-left-smudge.png" alt="" />
    <img className="contact-notebook-ink" src="/assets/brush-ink-dry.png" alt="" />
    <div className="contact-notebook-grid" />

    <section className="contact-notebook-wrap">
      <div className="contact-notebook-back" />
      <div className="contact-notebook-page">
        <div className="contact-punched-edge" aria-hidden="true">
          {Array.from({ length: 11 }).map((_, i) => <i key={i} />)}
        </div>
        <div className="contact-page-tape" aria-hidden="true" />
        <span className="contact-page-index">04 / CONTACT</span>
        <h1>CONTACT</h1>
        <div className="contact-green-underline" />

        <nav className="contact-notebook-links" aria-label="Contact links">
          <a href="mailto:kelisclarke1@yahoo.com">
            <span className="contact-icon envelope-icon" aria-hidden="true">✉</span>
            <span className="contact-link-copy"><small>EMAIL</small><strong>kelisclarke1@yahoo.com</strong></span>
            <i aria-hidden="true">→</i>
          </a>
          <a href="https://www.linkedin.com/in/kelis-c" target="_blank" rel="noreferrer">
            <span className="contact-icon linkedin-icon" aria-hidden="true">in</span>
            <span className="contact-link-copy"><small>LINKEDIN</small><strong>linkedin.com/in/kelis-c</strong></span>
            <i aria-hidden="true">→</i>
          </a>
        </nav>

      </div>
      <div className="contact-registration">+</div>
    </section>

    <div className="interior-footer">© 2026 KELIS CLARKE. CONTACT / 04</div>
    <ControllerHelp onBack={onBack} backLabel="BACK" />
  </main>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 620)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <button
      type="button"
      className={`mobile-back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

function Texture() {
  return (
    <>
      <div className="base-grain" aria-hidden="true" />
      <div className="paper-grid" aria-hidden="true" />
      <div className="corner-scrap scrap-one" aria-hidden="true" />
      <div className="corner-scrap scrap-two" aria-hidden="true" />
      <BackToTop />
    </>
  )
}

function ControllerHelp({ onBack, onSelect, selectLabel = 'SELECT', backLabel = 'BACK', desktop = false }) {
  return (
    <div className={`controller-strip ${desktop ? 'desktop-prompt' : ''} ${onSelect ? 'has-select' : 'back-only'}`}>
      {onSelect && <>
        <button className="control-action control-primary" onClick={onSelect} aria-label={selectLabel}>
          <b className="a-btn mouse-btn" aria-hidden="true">
            <img className="mouse-control-icon" src="/assets/mouse-icon-clean.png" alt="" />
          </b>
          <span className="control-label">{selectLabel}</span>
        </button>
        <span className="prompt-divider" />
      </>}
      <button className="control-action control-back" onClick={onBack} disabled={!onBack} aria-label={backLabel}>
        <b className="b-btn" aria-hidden="true">×</b>
        <span className="control-label">{backLabel}</span>
      </button>
    </div>
  )
}
