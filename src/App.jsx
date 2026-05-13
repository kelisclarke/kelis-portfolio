import React, { useState } from "react";

const projects = [
  {
    title: "CTCIP.org",
    slug: "ctcip",
    file: "ctcip_website.html",
    type: "Web Design / UI/UX / WordPress",
    mark: "CTCIP",
    liveUrl: "https://ctcip.org",
    role: "Wireframes, page structure, WordPress build, Beaver Builder edits, client revisions",
    tools: "Figma, WordPress, Beaver Builder, custom CSS",
    focus: "Full website design and build for a nonprofit organization, including adapting wireframes to platform limits and client needs.",
    summary: "A website project for Children with Incarcerated Parents focused on organizing content, building key pages, and adapting Figma wireframes into a real WordPress site.",
    goal: "Create a clearer web presence that made CTCIP's history, news, resources, programs, and collaborators easier to browse.",
    part: "I started with Figma wireframes, then shifted into building and revising directly in WordPress once I understood what Beaver Builder could and could not do.",
    process: [
  ["Structuring the information", "I started by mapping the main pages and content types so the site would not feel like one long information dump. The goal was to separate history, news, resources, programs, and collaborators into sections that felt easier to scan and understand."],
  ["Wireframing the page experience", "The Figma wireframes helped me think through hierarchy, navigation, hero sections, card layouts, article sections, and program groupings before building anything live."],
  ["Adapting inside WordPress", "The biggest learning curve was understanding what Beaver Builder could and could not do. Instead of treating the wireframes as fixed mockups, I used them as a guide while making practical layout decisions directly inside the site."],
],
    deep: {
      title: "From Figma plan to WordPress reality.",
       text: "This project taught me that UX/UI work does not always move perfectly from Figma to final product. The early wireframes were useful for planning structure and hierarchy, but the actual design had to evolve inside WordPress. I had to think less like someone simply recreating a mockup and more like someone building a usable site within real platform constraints, client revisions, and content needs.",
      items: ["Home wireframe", "About page wireframe", "CIP in the News wireframe", "Resources / Programs wireframe"],
       },
  },
  {
    title: "Food Swipe App",
    slug: "food-swipe",
    file: "food_swipe_app.fig",
    type: "Mobile Onboarding / Product UX",
    mark: "🍽️",
    role: "Onboarding UX, mobile UI design, preference flow, personalization setup, Figma screen execution",
    tools: "Figma, mobile UI design, onboarding strategy, interaction design, visual hierarchy",
    focus: "Designing a quick, visual onboarding flow that makes food recommendations feel personalized from the start",
    summary: "A group mobile app concept built around the problem of deciding what to eat. My main responsibility was designing and executing the onboarding experience, which introduced the app, collected user preferences, and set up the personalized swipe flow.",
    goal: "Design an onboarding flow that helped users enter the product quickly while still collecting enough preference data to make the food recommendations feel relevant.",
    part: "The overall app concept was developed in a group, but I owned the onboarding screens. I designed the setup flow from the landing screen through account creation, dietary preferences, cravings, cooking vs. delivery, effort level, budget, dealbreakers, and the final ready-to-swipe screen.",
    process: [
  ["Defining the onboarding purpose", "I treated onboarding as the bridge between the concept and the actual product experience. It needed to explain the app quickly, collect useful information, and make the user feel like the app was already adapting to them."],
  ["Breaking setup into simple choices", "Instead of relying on long forms, I separated the setup into quick decision points: diet, cravings, cook vs. order, effort level, budget, and dealbreakers. This made the experience feel faster and more mobile-friendly."],
  ["Designing for a Gen Z audience", "The visual direction uses a bright green palette, rounded cards, food imagery, casual language, and Apple-style emojis to make the onboarding feel familiar, playful, and easy to move through without losing clarity."],
],
deep: {
  title: "Final onboarding flow.",
  text: "Each screen is designed to reduce friction, collect useful preference data, and make the app feel personalized before the user reaches the swipe feature.",
  items: ["Landing + account", "Diet preferences", "Food interests", "Effort + budget", "Dealbreakers + finish"],
},
},
{
  title: "QKit",
  slug: "qkit",
  file: "qkit_identity.ai",
  type: "Branding / Logo System",
  mark: "QK",
  logo: "/images/qkit-2.1",
  role: "Logo development, color exploration, favicon testing, small-scale identity refinement",
  tools: "Illustrator, Figma, logo design, visual identity testing",
  focus: "A compact Q/K mark designed to work as both a logo and favicon",
  summary: "A visual identity project built around the interaction between a Q and K. The goal was to create a compact mark that could feel branded, recognizable, and still readable at small digital sizes.",
  goal: "Create a QKit logo system that could work as a full brand mark, a favicon, and a small digital identifier without losing the relationship between the Q and K.",
  part: "I explored how the K could sit inside the Q and act as part of the mark instead of feeling like a separate letter. The final set includes draft, black, and color versions to test how the identity holds up across different use cases.",
  process: [
    ["Symbol exploration", "I tested how the K could interact with the Q while still keeping the mark readable and balanced."],
    ["Small-size testing", "Because the mark needed to work as a favicon, I paid attention to whether the shape stayed recognizable when scaled down."],
    ["Color + final variations", "I explored black-and-white and blue/yellow directions to see how the logo worked in both simplified and branded contexts."],
  ],
},
  {
    title: "Bandcamp Digital Audit",
    slug: "bandcamp",
    file: "bandcamp_audit.pdf",
    type: "Platform Audit / Content Strategy",
    mark: "♫",
    role: "Digital inventory, platform audit, competitor comparison, strategic recommendations",
    tools: "Research, content strategy, competitive analysis, presentation writing",
    focus: "Helping Bandcamp feel more culturally active without losing its independent identity",
    summary: "A digital media audit analyzing Bandcamp's website, social presence, search visibility, competitors, and opportunities for stronger artist/community storytelling.",
    goal: "Understand why Bandcamp is respected in indie music circles but less culturally visible than competitors like Spotify and SoundCloud, then build recommendations that connect the platform to artist growth, discovery, and culture.",
    part: "I broke down Bandcamp's digital presence across its website, social media, search visibility, competitor positioning, key insights, and strategic recommendations. Since this project is mostly writing and strategy, the case study focuses on the logic behind the recommendations instead of visual assets.",
    process: [
      ["Digital inventory", "I reviewed Bandcamp's website, social channels, and search presence to identify what was working and where the platform felt outdated, quiet, or unclear."],
      ["Deep-dive audit", "I analyzed the website experience, mobile behavior, social media tone, and lack of short-form presence to understand why Bandcamp feels more functional than culturally active."],
      ["Competitor comparison", "I compared Bandcamp with Spotify and SoundCloud, focusing on personalization, discovery, social presence, artist identity, and cultural relevance."],
    ],
    deep: {
      textOnly: true,
      title: "What the audit showed.",
      text: "The main issue was not that Bandcamp lacks purpose. The issue is that its digital presence does not fully communicate that purpose in a way that feels current, social, or culturally memorable.",
      items: [
        "Bandcamp works well as a direct-to-fan sales tool, but that can make it feel more like a tip jar than a real growth platform for artists.",
        "The website is functional and mission-driven, but it feels static and text-heavy compared to platforms that push discovery, personalization, and repeat engagement.",
        "The social presence exists, but it does not create much conversation. The content supports artists, but it rarely gives people a reason to share, remix, comment, or follow a larger story.",
        "Bandcamp lacks a cultural anchor. Spotify has Wrapped and personalization. SoundCloud has a strong discovery identity. Bandcamp needs a clearer cultural reason for people to talk about it."
      ],
    },
    recommendations: [
      {
        title: "Build a Poster Artist Program",
        why: "Bandcamp needs recognizable proof that artists can grow on the platform, not just receive support from fans who already know them.",
        strategy: "Spotlight one emerging artist each quarter with homepage placement, mini-doc content, editorial interviews, playlist features, and social storytelling.",
        payoff: "This gives Bandcamp a recurring cultural anchor and helps audiences associate the platform with discovering new movements early."
      },
      {
        title: "Use short-form video as artist storytelling",
        why: "Music discovery now happens heavily through short-form platforms. Bandcamp avoiding TikTok and Shorts makes it feel disconnected from where younger listeners find music.",
        strategy: "Create repeatable formats like artist origin clips, studio moments, fan reactions, Bandcamp finds of the week, and behind-the-release videos.",
        payoff: "The goal is not to chase random trends. It is to make Bandcamp's artist-first identity visible in the spaces where music culture already moves."
      },
      {
        title: "Launch community challenges and contests",
        why: "Bandcamp needs more reasons for users to interact with the brand instead of only visiting when they already plan to buy something.",
        strategy: "Run song challenges, remix prompts, themed compilation contests, or genre-based discovery weeks where winners receive homepage placement or merch support.",
        payoff: "This turns Bandcamp from a passive storefront into a place where artists and fans can participate in a shared music moment."
      },
      {
        title: "Create college radio partnerships",
        why: "College radio audiences already overlap with indie, alternative, underground, and discovery-driven music communities.",
        strategy: "Partner with stations like WHUS and other student-led radio programs to create Bandcamp-curated shows, live sessions, playlist swaps, and artist spotlights.",
        payoff: "This builds awareness with a younger audience while keeping Bandcamp connected to independent music culture instead of forcing a generic mainstream strategy."
      },
      {
        title: "Test global and fandom-driven collaborations",
        why: "Bandcamp's direct-to-fan model could connect with fandoms that already understand buying, collecting, supporting artists, and physical/digital releases.",
        strategy: "Explore partnerships with global scenes, including K-pop or other fandom-heavy markets, through exclusive digital releases, merch bundles, or artist-curated storefronts.",
        payoff: "This gives Bandcamp a path toward growth without abandoning its artist-first sales model."
      }
    ],
  },
  {
    title: "Behind the Bun",
    slug: "behind-the-bun",
    file: "behind_the_bun.deck",
    type: "Campaign Strategy / KPI Framework",
    mark: "🍔",
    role: "Content strategy, brand culture study, consumer behavior analysis, KPI framework, campaign measurement",
    tools: "Content strategy, brand culture research, consumer behavior, social media analysis, KPI planning",
    focus: "Connecting brand culture and audience behavior to measurable campaign goals",
    summary: "A Chick-fil-A campaign concept about employee culture and behind-the-scenes content. My focus was the strategic side: brand culture, consumer behavior, content direction, and how the campaign would be measured beyond surface-level engagement.",
    goal: "Make employee culture feel more visible and personal while giving the campaign a clear way to track whether it actually built awareness, engagement, and community connection.",
    part: "The overall campaign was a group concept, but my responsibility leaned into the strategy behind it. I focused on how Chick-fil-A’s brand culture could be shown more personally, how audiences might respond to employee-centered content, and how the campaign could be measured beyond views or likes.",
    process: [
      ["Brand culture study", "I looked at how Chick-fil-A already presents its culture and where the content still feels mostly external-facing instead of personal or behind-the-scenes."],
      ["Consumer behavior angle", "I thought about why audiences respond to more human brand content, especially when it shows real people, workplace culture, and moments that feel less polished."],
      ["KPI + measurement logic", "I connected the content strategy to metrics that could show whether the campaign was building awareness, engagement, community response, and stronger brand perception."],
    ],
    deep: {
      textOnly: true,
      title: "What the KPI framework needed to prove.",
      text: "Behind the Bun was not just about making Chick-fil-A look more personal. The strategy needed to show whether behind-the-scenes employee content could actually deepen audience connection and make the brand feel more human.",
      items: [
        "The campaign needed to measure more than views because a high view count does not automatically mean people cared about the content.",
        "Employee-centered storytelling had to be judged by whether it made the brand feel more personal, not just whether the posts looked polished.",
        "The KPI framework connected the creative direction to audience behavior, including saves, shares, comments, sentiment, and repeat engagement.",
        "The strongest measurement approach was to track both short-term content performance and longer-term changes in how audiences responded to the brand culture."
      ],
    },
    recommendations: [
      {
        title: "Awareness metrics",
        why: "The campaign first needs to prove that employee-centered content is reaching enough people to matter.",
        strategy: "Track impressions, reach, video views, profile visits, and follower growth across campaign posts.",
        payoff: "This shows whether Behind the Bun is expanding visibility beyond people who already interact with Chick-fil-A content."
      },
      {
        title: "Engagement quality",
        why: "Likes alone are too shallow. A campaign about culture should measure whether people are actually interacting with the story.",
        strategy: "Track comments, shares, saves, watch time, completion rate, and replies to prompts or questions.",
        payoff: "This proves whether the content is strong enough for people to respond to, save, or send to someone else."
      },
      {
        title: "Community response",
        why: "The whole point is to make the brand feel more personal, so the comment section and audience tone matter.",
        strategy: "Monitor comment sentiment, repeated themes, employee mentions, audience questions, and user-generated responses.",
        payoff: "This helps show whether people are reacting to the human side of the campaign instead of treating it like normal branded content."
      },
      {
        title: "Employee storytelling performance",
        why: "Since the campaign centers workers, the brand needs to know which types of employee stories perform best.",
        strategy: "Compare performance across day-in-the-life videos, team member spotlights, behind-the-scenes clips, and workplace culture posts.",
        payoff: "This gives the brand direction for which content formats should continue after the campaign ends."
      },
      {
        title: "Brand lift indicators",
        why: "Behind the Bun should support a bigger brand goal: making Chick-fil-A feel warmer, more transparent, and more community-driven.",
        strategy: "Use pre/post social listening, survey questions, sentiment tracking, and changes in branded search or profile engagement.",
        payoff: "This connects the campaign to perception change instead of treating it like a one-off content series."
      }
    ],
  },
];

const skillCategories = [
  { title: "Design + Web", items: ["UI/UX", "Web design", "Figma", "WordPress", "Custom CSS", "HTML/CSS", "Framer"] },
  { title: "Creative + Strategy", items: ["Brand identity", "Content strategy", "Presentation design", "Consumer behavior", "Creative direction"] },
  { title: "Tools + Platforms", items: ["Photoshop", "Illustrator", "Premiere Pro", "Audition", "Cinema 4D", "AI media tools"] },
];

const experience = [
  ["Student UI/UX Designer", "UConn Internal Insights & Innovation", "May 2025 to Present", "Design Figma layouts, build WordPress pages, revise site structure, and support responsive web projects."],
  ["Media Cage Employee", "University of Connecticut, Stamford", "January 2024 to May 2024", "Prepared, checked out, inspected, and tracked media equipment for students and faculty."],
];
const CONTACT_EMAIL = "kelisclarke1@yahoo.com";

const foodSwipeScreens = [
  {
    title: "Landing screen",
    src: "/images/food-swipe-1.png",
    note: "Introduces the app quickly with the tinder x food concept and a bold food visual.",
  },
  {
    title: "Create account",
    src: "/images/food-swipe-2.png",
    note: "Keeps account creation simple so users can get into the preference flow fast.",
  },
  {
    title: "Diet preferences",
    src: "/images/food-swipe-3.png",
    note: "Collects basic dietary needs before recommendations begin.",
  },
  {
    title: "Food interests",
    src: "/images/food-swipe-4.png",
    note: "Uses visual food cards so the setup feels more like choosing than filling out a form.",
  },
  {
    title: "Cook or order",
    src: "/images/food-swipe-5.png",
    note: "Asks whether the user wants to cook, order delivery, or stay flexible.",
  },
  {
    title: "Effort level",
    src: "/images/food-swipe-6.png",
    note: "Makes recommendations more realistic based on how much time the user wants to spend.",
  },
  {
    title: "Budget",
    src: "/images/food-swipe-7.png",
    note: "Adds budget context so suggestions fit the user’s actual situation.",
  },
  {
    title: "Dealbreakers",
    src: "/images/food-swipe-8.png",
    note: "Lets users remove ingredients or foods they already know they dislike.",
  },
  {
    title: "Ready to swipe",
    src: "/images/food-swipe-9.png",
    note: "Ends the flow with a clear start point so users know setup is complete.",
  },
];

const qkitAssets = [
  {
    title: "Draft mark",
    src: "/images/qkit-draft.png",
    note: "The early black-and-white version testing the Q and K interaction in its simplest form.",
  },
  {
    title: "Black polished mark",
    src: "/images/qkit-1.png",
    note: "A more polished black version that keeps the dimensional feel while removing the color system.",
  },
  {
    title: "Color direction 1",
    src: "/images/qkit-2.png",
    note: "A blue and yellow version testing how the mark could feel as a fuller brand identity.",
  },
  {
    title: "Color direction 2",
    src: "/images/qkit-2.1.png",
    note: "A second color variation with a slightly different balance between the ring, K, and yellow accent.",
  },
];

const ctcipWireframes = [
  {
    title: "Home wireframe",
    src: "/images/ctcip-home.png",
  },
  {
    title: "About page wireframe",
    src: "/images/ctcip-about.png",
  },
  {
    title: "CIP in the News wireframe",
    src: "/images/ctcip-news.png",
  },
  {
    title: "Resources / Programs wireframe",
    src: "/images/ctcip-programs2.png",
  },
];
function Controls() {
  return <div className="flex gap-1"><span className="win-btn">_</span><span className="win-btn">□</span><span className="win-btn">×</span></div>;
}

function Window({ title, children, className = "" }) {
  return (
    <div className={`border border-slate-400 bg-slate-400 p-[2px] shadow-[0_0_35px_rgba(99,102,241,.25)] ${className}`}>
      <div className="flex items-center justify-between border border-slate-950 bg-gradient-to-r from-indigo-950 via-[#26145c] to-slate-300 px-2 py-1 text-xs font-bold text-white">
        <span className="truncate">▣ {title}</span><Controls />
      </div>
      <div className="border-x border-b border-slate-950 bg-[#080b18] p-6">{children}</div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="border border-indigo-300/30 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-100 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-400/20 hover:text-white">
      {children}
    </span>
  );
}

function Button({ children, href, onClick, primary }) {
  const cls = primary
    ? "inline-flex gap-5 border border-indigo-100 bg-indigo-400 px-5 py-3 text-sm font-extrabold text-[#080b18] transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-300 hover:shadow-[4px_4px_0_rgba(255,255,255,.22)] focus:outline-none focus:ring-2 focus:ring-indigo-200"
    : "inline-flex gap-5 border border-slate-400 bg-black/20 px-5 py-3 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-400/10 hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300";
  return href ? <a className={cls} href={href}>{children} →</a> : <button className={cls} onClick={onClick}>{children} →</button>;
}
function EmailCopyButton({ children = "Copy email", primary }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const cls = primary
    ? "inline-flex gap-5 border border-indigo-100 bg-indigo-400 px-5 py-3 text-sm font-extrabold text-[#080b18] transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-300 hover:shadow-[4px_4px_0_rgba(255,255,255,.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
    : "inline-flex gap-5 border border-slate-400 bg-black/20 px-5 py-3 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-400/10 hover:text-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300";

  return (
    <button onClick={handleCopy} className={cls} type="button">
      {copied ? "Email copied" : children} →
    </button>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group block text-left text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      <Window
        title={project.title}
        className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:border-indigo-300 group-hover:shadow-[0_0_42px_rgba(129,140,248,.28)]"
      >
        <div className="relative mb-4 min-h-52 overflow-hidden bg-black p-4 transition duration-300 group-hover:bg-slate-950">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-400/50 blur-2xl transition duration-300 group-hover:scale-125 group-hover:bg-indigo-300/70" />
          <p className="relative text-[10px] uppercase tracking-[.2em] text-indigo-100/70">
            {project.file}
          </p>
          <div className="absolute right-4 top-12 text-5xl font-black text-indigo-100/60 transition duration-300 group-hover:scale-110 group-hover:text-indigo-100">
            {project.mark}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm italic text-indigo-200">{project.kicker}</p>
            <h3 className="text-3xl font-bold leading-none">{project.title}</h3>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-300">{project.summary}</p>
        <p className="mt-4 translate-y-2 text-xs font-bold uppercase tracking-[.2em] text-indigo-300 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Open project →
        </p>
      </Window>
    </button>
  );
}

function Home({ openProject }) {
  return (
    <>
      <section className="grid gap-10 border-b border-white/10 px-5 py-16 lg:grid-cols-[.95fr_.85fr] lg:items-center lg:px-12">
        <div>
          <p className="mb-5 inline-block border border-indigo-300/30 bg-indigo-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[.25em] text-indigo-100">digital media designer + creative strategist</p>
          <h1 className="max-w-[12ch] text-[clamp(3.4rem,9vw,7.5rem)] font-black leading-[.95] tracking-[-.05em] text-indigo-100">Digital work that feels like you<span className="text-indigo-400">.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">I’m Kelis Clarke, a digital media designer and creative strategist working across web design, UX/UI, branding, and content strategy. My work usually starts with structure: what the user needs, what the brand is trying to say, and how the experience should move. From there, I build digital work that still has a clear point of view.</p>
          <div className="mt-10 flex flex-wrap gap-3"><Button href="#work" primary>See the work</Button><EmailCopyButton>Copy email</EmailCopyButton></div>
        </div>
        <Window
  title="quick_notes.txt"
  className="w-full max-w-[430px] self-center justify-self-center lg:-translate-y-8"
>
  <p className="font-mono text-sm leading-8 text-slate-300">
    Strategy first.
    <br />
    Design with intent.
    <br />
    Make it feel like something.
    <br />
    <span className="text-indigo-300">▌</span>
  </p>
</Window>
      </section>

      <section id="work" className="border-b border-white/10 px-5 py-14 lg:px-12">
        <h2 className="mb-4 text-3xl font-bold text-indigo-100">Selected Work</h2>
        <p className="mb-8 max-w-3xl leading-7 text-slate-300">A mix of real web work, app/product thinking, branding, platform strategy, and campaign measurement.</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">{projects.map((p) => <ProjectCard key={p.slug} project={p} onOpen={() => openProject(p.slug)} />)}</div>
      </section>

      <section id="about" className="grid gap-5 border-b border-white/10 px-5 py-14 lg:grid-cols-2 lg:px-12">
        <Window title="about_me.exe"><h2 className="mb-5 text-3xl font-bold">About ▌</h2><p className="leading-7 text-slate-300">My work sits somewhere between design, culture, and digital behavior. I’m trained mostly in UI/UX and web design, but I’m also drawn to branding, social media, entertainment, and creative strategy.</p></Window>
        <Window title="my_toolbox.sys"><h2 className="mb-6 text-3xl font-bold">My Toolbox ▌</h2><div className="space-y-6">{skillCategories.map((cat) => <div key={cat.title}><h3 className="mb-3 font-bold text-indigo-300">{cat.title}</h3><div className="flex flex-wrap gap-2">{cat.items.map((i) => <Tag key={i}>{i}</Tag>)}</div></div>)}</div></Window>
      </section>

      <section id="experience" className="grid gap-5 border-b border-white/10 px-5 py-14 lg:grid-cols-2 lg:px-12">{experience.map(([t,c,d,desc]) => <Window key={t} title={`${t}.txt`}><p className="text-indigo-200">{c}</p><h2 className="text-2xl font-bold">{t}</h2><p className="my-3 text-sm text-indigo-100">{d}</p><p className="leading-7 text-slate-300">{desc}</p></Window>)}</section>

      <section id="contact" className="px-5 py-14 lg:px-12"><Window title="new_message.eml"><h2 className="text-[clamp(2.4rem,5vw,4.6rem)] font-black leading-tight">Let’s make something cool together!.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Based in Bridgeport, CT. Open to web design, branding, content strategy, UI/UX, social media, and creative direction opportunities.</p><p className="mt-4 font-mono text-sm text-indigo-200">
  {CONTACT_EMAIL}
</p><div className="mt-8 flex flex-wrap gap-3"><EmailCopyButton primary>Email me</EmailCopyButton><Button href="https://linkedin.com/in/kelis-c">LinkedIn</Button></div></Window></section>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="border border-indigo-300/10 bg-white/[.03] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:bg-white/[.06] hover:shadow-[0_0_24px_rgba(129,140,248,.16)]">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[.2em] text-indigo-300">
        {label}
      </p>
      <p className="text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}

function Placeholder({ label }) {
  return <div className="min-h-48 border border-indigo-300/10 bg-black p-4"><p className="text-[10px] uppercase tracking-[.2em] text-indigo-200/70">placeholder</p><p className="mt-20 text-xl font-bold">{label}</p></div>;
}
function QKitGallery() {
  return (
    <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
      {qkitAssets.map((asset) => (
        <div
          key={asset.title}
          className="border border-indigo-300/10 bg-white/[.03] p-4"
        >
          <div className="mb-4 grid min-h-72 place-items-center overflow-hidden border border-slate-700 bg-white p-4">
            <img
              src={asset.src}
              alt={asset.title}
              className="max-h-72 w-full object-contain"
            />
          </div>
          <h3 className="mb-2 text-lg font-bold text-white">{asset.title}</h3>
          <p className="text-sm leading-7 text-slate-300">{asset.note}</p>
        </div>
      ))}
    </div>
  );
}

function PhoneSwiper({ screens }) {
  const [current, setCurrent] = useState(0);
  const screen = screens[current];

  const goBack = () => {
    setCurrent((current - 1 + screens.length) % screens.length);
  };

  const goNext = () => {
    setCurrent((current + 1) % screens.length);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[430px_1fr] lg:items-center">
      <div className="mx-auto w-full max-w-[370px]">
        <div className="rounded-[2.5rem] border border-indigo-200/40 bg-black p-3 shadow-[0_0_40px_rgba(99,102,241,.35)]">
          <div className="overflow-hidden rounded-[2rem] bg-slate-950">
            <img
              src={screen.src}
              alt={screen.title}
              className="h-[720px] w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={goBack}
            className="border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-bold text-indigo-100 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-400/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            ← Back
          </button>

          <p className="text-sm text-slate-300">
            {current + 1} / {screens.length}
          </p>

          <button
            onClick={goNext}
            className="border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-bold text-indigo-100 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-400/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Next →
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {screens.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full ${
                index === current ? "bg-indigo-300" : "bg-slate-600"
              }`}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-indigo-300">
          Step {current + 1}
        </p>
        <h3 className="mb-4 text-3xl font-black text-white">{screen.title}</h3>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          {screen.note}
        </p>
      </div>
    </div>
  );
}

function WireframeGrid({ wireframes }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {wireframes.map((wireframe) => (
        <div
          key={wireframe.title}
          className="border border-indigo-300/10 bg-white/[.03] p-4"
        >
          <div className="mb-4 max-h-[420px] overflow-auto border border-slate-700 bg-black">
            <img
              src={wireframe.src}
              alt={wireframe.title}
              className="w-full"
            />
          </div>
          <h3 className="text-lg font-bold text-white">{wireframe.title}</h3>
        </div>
      ))}
    </div>
  );
}

function ProjectPage({ project, openProject, goHome }) {
  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <section className="border-b border-white/10 px-5 py-10 lg:px-12">
        <div className="mb-5 flex justify-between gap-3">
          <button
            onClick={goHome}
            className="border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-bold text-indigo-100 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-400/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            ← Back
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => openProject(prev.slug)}
              className="border border-slate-400 bg-black/20 px-4 py-2 text-sm font-bold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-400/10 hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Previous
            </button>
            <button
              onClick={() => openProject(next.slug)}
              className="border border-slate-400 bg-black/20 px-4 py-2 text-sm font-bold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-400/10 hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Next
            </button>
          </div>
        </div>

        <Window title={project.file}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="mb-4 text-indigo-300">{project.type}</p>
              <h1 className="mb-5 text-[clamp(3rem,7vw,6rem)] font-black leading-none">
                {project.title}
                <span className="text-indigo-400">.</span>
              </h1>
              <p className="text-lg leading-8 text-slate-300">
                {project.summary}
              </p>
            </div>

            <div className="grid gap-3">
              <Info label="Role" value={project.role} />
              <Info label="Tools" value={project.tools} />
              <Info label="Focus" value={project.focus} />
            </div>
          </div>
        </Window>
      </section>

      <section className="grid gap-5 border-b border-white/10 px-5 py-10 lg:grid-cols-2 lg:px-12">
        <Window title="goal.txt">
          <h2 className="mb-4 text-3xl font-bold">Goal</h2>
          <p className="leading-8 text-slate-300">{project.goal}</p>
        </Window>

        <Window title="my_part.txt">
          <h2 className="mb-4 text-3xl font-bold">My Part</h2>
          <p className="leading-8 text-slate-300">{project.part}</p>
        </Window>
      </section>

      <section className="border-b border-white/10 px-5 py-10 lg:px-12">
        <Window title="process.folder">
          <h2 className="mb-6 text-3xl font-bold">Process</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.process.map(([label, text], n) => (
              <div
                key={label}
                className="group border border-indigo-300/10 bg-white/[.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/50 hover:bg-indigo-400/[.06] hover:shadow-[0_0_28px_rgba(129,140,248,.18)]"
              >
                <p className="font-mono text-xs text-indigo-300">
                  0{n + 1}
                </p>
                <h3 className="my-3 text-xl font-bold">{label}</h3>
                <p className="my-3 text-xl font-bold transition group-hover:text-indigo-200">{text}</p>
              </div>
            ))}
          </div>
        </Window>
      </section>

      {project.deep && (
        <section className="border-b border-white/10 px-5 py-10 lg:px-12">
          <Window
            title={
              project.slug === "food-swipe"
                ? "final_onboarding_screens.folder"
                : project.slug === "ctcip"
                ? "wireframes.folder"
                : "process_notes.folder"
            }
          >
            <h2 className="mb-4 text-3xl font-bold">{project.deep.title}</h2>
            <p className="mb-6 leading-8 text-slate-300">
              {project.deep.text}
            </p>

            {project.slug === "food-swipe" ? (
              <PhoneSwiper screens={foodSwipeScreens} />
            ) : project.slug === "ctcip" ? (
              <WireframeGrid wireframes={ctcipWireframes} />
            ) : project.deep.textOnly ? (
              <div className="grid gap-3 md:grid-cols-2">
                {project.deep.items.map((v, n) => (
                  <div
                    key={v}
                    className="border border-indigo-300/10 bg-white/[.03] p-5"
                  >
                    <p className="mb-3 font-mono text-xs text-indigo-300">
                      0{n + 1}
                    </p>
                    <p className="text-sm leading-7 text-slate-300">{v}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {project.deep.items.map((v) => (
                  <Placeholder key={v} label={v} />
                ))}
              </div>
            )}
          </Window>
        </section>
      )}

      {project.recommendations && (
        <section className="border-b border-white/10 px-5 py-10 lg:px-12">
          <Window title="content_strategy_recommendations.folder">
            <h2 className="mb-4 text-3xl font-bold">
              Recommendations + why they matter.
            </h2>
            <p className="mb-6 max-w-4xl leading-8 text-slate-300">
              {project.slug === "bandcamp"
                ? "These recommendations are meant to move Bandcamp from a quiet transactional platform into a more visible cultural space for independent music discovery, without copying Spotify or SoundCloud outright."
                : "These recommendations explain how the campaign should be measured, what each metric proves, and why the KPI framework matters to the strategy."}
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              {project.recommendations.map((rec, n) => (
                <div
                  key={rec.title}
                  className="border border-indigo-300/10 bg-white/[.03] p-5"
                >
                  <p className="mb-3 font-mono text-xs text-indigo-300">
                    0{n + 1}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {rec.title}
                  </h3>
                  <p className="mb-3 text-sm leading-7 text-slate-300">
                    <span className="font-bold text-indigo-200">Why: </span>
                    {rec.why}
                  </p>
                  <p className="mb-3 text-sm leading-7 text-slate-300">
                    <span className="font-bold text-indigo-200">
                      Strategy:{" "}
                    </span>
                    {rec.strategy}
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    <span className="font-bold text-indigo-200">Payoff: </span>
                    {rec.payoff}
                  </p>
                </div>
              ))}
            </div>
          </Window>
        </section>
      )}

{(project.liveUrl || !project.deep) &&
  (project.slug === "qkit" ? (
    <section className="border-b border-white/10 px-5 py-10 lg:px-12">
      <Window title="project_assets.folder">
        <h2 className="mb-6 text-center text-3xl font-bold">
          QKit Logo System
        </h2>
        <QKitGallery />
      </Window>
    </section>
  ) : (
    <section className="grid gap-5 border-b border-white/10 px-5 py-10 lg:grid-cols-[.95fr_1.05fr] lg:px-12">
      <Window
        title={project.liveUrl ? "live_site.url" : "project_assets.folder"}
      >
        <h2 className="mb-4 text-3xl font-bold">
          {project.liveUrl ? "Live Site" : "Project Assets"}
        </h2>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="block border border-indigo-300/20 bg-black p-6 hover:border-indigo-300"
          >
            <p className="text-[10px] uppercase tracking-[.2em] text-indigo-200/70">
              live website
            </p>
            <h3 className="mt-3 text-4xl font-black">
              Visit CTCIP.org ↗
            </h3>
          </a>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {["Final screen", "Prototype", "Key detail", "Presentation view"].map(
              (v) => (
                <Placeholder key={v} label={v} />
              )
            )}
          </div>
        )}
      </Window>

      <Window title="reflection.note">
        <h2 className="mb-4 text-3xl font-bold">Reflection</h2>
        <p className="leading-8 text-slate-300">{project.focus}</p>
      </Window>
    </section>
  ))}
    </>
  );
}

function Shell({ children, activeProject, goHome }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b18] py-8 text-slate-100" style={{ fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); body{margin:0}.win-btn{display:grid;height:1rem;width:1rem;place-items:center;border:1px solid #020617;background:#cbd5e1;color:#020617;font-size:10px;font-weight:900}main:before{content:"";position:fixed;inset:0;pointer-events:none;z-index:80;opacity:.13;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px);background-size:100% 4px;mix-blend-mode:screen}`}</style>
      <div className="relative z-10 mx-auto w-[94vw] max-w-[1500px] border border-slate-400 bg-slate-500 p-[3px] shadow-[0_0_60px_rgba(67,56,202,.45)]"><div className="border border-slate-950 bg-[#080b18]"><header className="sticky top-0 z-50 border-b border-slate-950 bg-slate-300 text-slate-950"><div className="flex items-center justify-between border-b border-slate-950 bg-gradient-to-r from-indigo-950 via-[#26145c] to-slate-400 px-2 py-1 text-white"><Controls /><Controls /></div><div className="flex items-center gap-2 p-3"><button onClick={goHome} className="hidden border border-slate-950 bg-slate-200 px-3 py-2 font-black sm:block">←</button><button onClick={goHome} className="min-w-0 flex-1 truncate border border-slate-950 bg-white px-4 py-2 text-left font-black">{activeProject ? `Kelis Clarke / work / ${activeProject.file}` : "Kelis Clarke"}</button><span className="text-xl">☆</span><span className="text-xl">≡</span></div><nav className="flex gap-5 overflow-x-auto border-t border-slate-950 bg-[#090b16] px-4 py-3 text-sm text-slate-200"><button onClick={goHome} className="text-indigo-300">Work</button><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav></header>{children}<footer className="flex justify-between border-t border-slate-950 bg-slate-300 px-5 py-4 text-xs text-slate-950"><span>© 2026 Kelis Clarke</span><span>in · mail</span></footer></div></div>
    </main>
  );
}

export default function PortfolioStarter() {
  const [activeSlug, setActiveSlug] = useState(null);
  const activeProject = projects.find((p) => p.slug === activeSlug) || null;
  const openProject = (slug) => { setActiveSlug(slug); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goHome = () => { setActiveSlug(null); };
  return <Shell activeProject={activeProject} goHome={goHome}>{activeProject ? <ProjectPage project={activeProject} openProject={openProject} goHome={goHome} /> : <Home openProject={openProject} />}</Shell>;
}
