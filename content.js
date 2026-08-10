// ═══════════════════════════════════════════════════════════════════════════
//                          EDIT YOUR SITE HERE
// ═══════════════════════════════════════════════════════════════════════════
// Everything in this file controls the text and content on your portfolio.
// Change any value, save the file, refresh the browser (Ctrl+F5) to see it.
//
// To publish changes to the live site, run in the portfolio folder:
//     git add content.js
//     git commit -m "update content"
//     git push
// ═══════════════════════════════════════════════════════════════════════════

const CONTENT = {

    // ─────────────────────── SITE META ───────────────────────
    tabTitle: "daze | Roblox Scripter",
    metaDescription: "Roblox scripting portfolio. Luau systems, gameplay code, and game development.",
    brand: "daze",

    // ─────────────────────── NAV LINKS ───────────────────────
    // These show in the top nav. Order matters. Remove any you don't want.
    nav: [
        { label: "about",    href: "#about" },
        { label: "why me",   href: "#why" },
        { label: "examples", href: "#examples" },
        { label: "games",    href: "#games" },
        { label: "videos",   href: "#videos" },
        { label: "skills",   href: "#skills" }
    ],

    // ─────────────────────── HERO (top of page) ───────────────────────
    hero: {
        eyebrow: "roblox scripter · luau developer",
        name: "daze",
        // Tagline. Wrap words with <span class="accent">...</span> to highlight in gold.
        tagline: 'Premium quality, Fast delivery, <span class="accent"> turning exactly what you want into reality..</span>',
        lede: "Combat, economy, data: I can get it done quickly and I can get it done right. Hire me and your game will be done in half the time you expect, with double the quality you wanted.",
        cta: { label: "See examples", href: "#examples" }
    },

    // ─────────────────────── ABOUT ───────────────────────
    about: {
        title: "About",
        // Each string in the array is a separate paragraph.
        paragraphs: [
            "I'm a Roblox developer focused on Luau scripting: server architecture, gameplay systems, and the kind of infrastructure code that never gets seen but always gets blamed when it breaks. I care about clean data flow, tight networking, and code that reads well six months later.",
            "Currently open to commissioned work and long-term collaborations on serious projects."
        ]
    },

    // ─────────────────────── HOW I STAND OUT ───────────────────────
    why: {
        title: "How I stand out",

        // Three trait cards. Add or remove entries as you like.
        traits: [
            {
                tag: "01",
                heading: "Premium quality",
                bullets: [
                    "Server-authoritative by default",
                    "Reviewed for exploit surface",
                    "Reads well six months later"
                ]
            },
            {
                tag: "02",
                heading: "Fast delivery",
                bullets: [
                    "Prototypes inside 48 hours",
                    "Milestone builds every 3 to 5 days",
                    "No missed deadlines to date"
                ]
            },
            {
                tag: "03",
                heading: "Clear communication",
                bullets: [
                    "First reply under 12 hours",
                    "Written weekly progress reports",
                    "Screen-share debugging on request"
                ]
            }
        ],

        // Four stat tiles below the traits.
        stats: [
            { number: "<12h",   label: "Avg response" },
            { number: "50+",    label: "Projects shipped" },
            { number: "100%",   label: "On-time delivery" },
            { number: "5+ yrs", label: "Luau experience" }
        ],

        // Comparison table. `me: true` shows a gold check; `false` shows a muted x.
        compareHeaders: ["Feature", "Me", "Typical dev"],
        compareRows: [
            { feature: "Response within 12 hours",       me: true, them: false },
            { feature: "Unlimited revisions",            me: true, them: false },
            { feature: "Anti-exploit review included",   me: true, them: false },
            { feature: "Full documented source",         me: true, them: false },
            { feature: "Weekly written progress updates", me: true, them: false },
            { feature: "Post-ship support",              me: true, them: false }
        ]
    },

    // ─────────────────────── EXAMPLES (formerly Projects) ───────────────────────
    examples: {
        title: "Examples",
        items: [
            {
                tag: "Combat System",
                title: "Melee Framework",
                body: "Server-authoritative hitbox system with client prediction, lag compensation, and a modular ability layer. Handles 40+ concurrent fights per server without frame drops.",
                tech: ["Luau", "ProfileService", "Roact"]
            },
            {
                tag: "Data",
                title: "Persistent Economy",
                body: "Session-locked player data with transaction rollback, cross-server trade queue, and an admin dashboard. Zero data loss across ~2M sessions logged.",
                tech: ["DataStore2", "MessagingService", "Luau"]
            },
            {
                tag: "Systems",
                title: "Round Manager",
                body: "Match lifecycle framework covering queueing, teleport, in-round state, and post-round rewards. Reused across three different game modes with minimal per-mode glue code.",
                tech: ["Luau", "TeleportService", "Knit"]
            },
            {
                tag: "Tooling",
                title: "Live Ops Console",
                body: "In-game admin panel for tuning drop rates, patching values, and triggering events without a redeploy. Backed by an external config service.",
                tech: ["HttpService", "Fusion", "Luau"]
            }
        ]
    },

    // ─────────────────────── GAMES ───────────────────────
    // Just paste the Roblox URL. Title, thumbnail, and genre auto-load.
    games: {
        title: "Games",
        urls: [
            "https://www.roblox.com/games/130975201996641/Turret-Empire",
            "https://www.roblox.com/games/78934162817711/Mini-Kingdoms",
            "https://www.roblox.com/games/139887524801159/Inside-Job"
        ]
    },

    // ─────────────────────── VIDEOS ───────────────────────
    // Just paste the YouTube URL. Title and thumbnail auto-load.
    videos: {
        title: "Videos",
        urls: [
            "https://youtu.be/rg470gpmmy8",
            "https://www.youtube.com/watch?v=lCo29CaYKEI"
        ]
    },

    // ─────────────────────── SKILLS ───────────────────────
    skills: {
        title: "Skills",
        groups: [
            { heading: "Languages",  items: ["Luau", "Lua", "TypeScript (roblox-ts)"] },
            { heading: "Frameworks", items: ["Knit", "Fusion", "Roact", "ProfileService"] },
            { heading: "Services",   items: ["DataStore", "MessagingService", "MemoryStore", "HttpService"] },
            { heading: "Practices",  items: ["Server-authoritative design", "Anti-exploit", "Testing", "Version control"] }
        ]
    }
};
