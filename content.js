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
        { label: "about",  href: "#about" },
        { label: "why me", href: "#why" },
        { label: "games",  href: "#games" },
        { label: "videos", href: "#videos" },
        { label: "skills", href: "#skills" }
    ],

    // ─────────────────────── HERO (top of page) ───────────────────────
    hero: {
        eyebrow: "roblox scripter · luau developer",
        name: "daze",
        // Tagline. Wrap words with <span class="accent">...</span> to highlight in gold.
        tagline: 'Premium quality, Fast delivery, <span class="accent"> turning exactly what you want into reality..</span>',
        lede: "Combat, economy, data: I can get it done quickly and I can get it done right. Hire me and your game will be done in half the time you expect, with double the quality you wanted.",
        cta: { label: "See games", href: "#games" }
    },

    // ─────────────────────── ABOUT ───────────────────────
    about: {
        title: "About",
        // Each string in the array is a separate paragraph.
        paragraphs: [
            "I'm a Roblox scripter who works like a teammate, not a contractor. Sharp Luau code, real game design instincts, honest feedback on your ideas, and I execute your task list without needing to be chased.",
            "Open to both short-term commissions and long-term collaborations. Any project, any timeline."
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
                    "Solid under real player load",
                    "Locked down against exploiters",
                    "Clean code, not spaghetti"
                ]
            },
            {
                tag: "02",
                heading: "Fast delivery",
                bullets: [
                    "First playable in 48 hours",
                    "Fresh builds every few days",
                    "On time, every time"
                ]
            },
            {
                tag: "03",
                heading: "Clear communication",
                bullets: [
                    "Replies in minutes, not hours",
                    "Daily updates while I work",
                    "Screen-share or video calls anytime"
                ]
            }
        ],

        // Four stat tiles below the traits.
        stats: [
            { number: "Instant", label: "Avg response" },
            { number: "15+",     label: "Projects shipped" },
            { number: "100%",    label: "On-time delivery" },
            { number: "3+ yrs",  label: "Luau experience" }
        ],

        // Comparison table. `me: true` shows a gold check; `false` shows a muted x.
        compareHeaders: ["Feature", "Me", "Typical dev"],
        compareRows: [
            { feature: "Practically instant replies",    me: true, them: false },
            { feature: "Open to constant feedback",      me: true, them: false },
            { feature: "Secure unexploitable systems",   me: true, them: false },
            { feature: "Videos as I progress",           me: true, them: false },
            { feature: "Daily progress updates",         me: true, them: false }
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
