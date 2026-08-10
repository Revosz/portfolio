if (typeof CONTENT === "undefined") {
    document.body.innerHTML = `
        <div style="max-width:640px;margin:80px auto;padding:32px;font-family:ui-sans-serif,system-ui,sans-serif;color:#fff;background:#101010;border:1px solid #f1c645;border-radius:8px;">
            <h1 style="color:#f1c645;margin:0 0 12px;font-size:1.4rem;">content.js didn't load</h1>
            <p style="color:#a3a3a3;line-height:1.6;margin:0 0 12px;">The site couldn't find your content file. Common causes:</p>
            <ul style="color:#a3a3a3;line-height:1.6;padding-left:20px;">
                <li>Syntax error in <code style="color:#f1c645;">content.js</code> (missing comma, unclosed quote, etc.)</li>
                <li>File was renamed, moved, or deleted</li>
            </ul>
            <p style="color:#a3a3a3;margin-top:16px;">Open the browser DevTools (F12) and check the Console tab for the exact error line.</p>
        </div>`;
    throw new Error("CONTENT not defined — check content.js for syntax errors");
}

const C = CONTENT;

// ─── META ───
document.title = C.tabTitle;
document.querySelector('meta[name="description"]').setAttribute("content", C.metaDescription);

// ─── BRAND + NAV ───
document.querySelector(".brand").textContent = C.brand;
document.querySelector(".nav-links").innerHTML = C.nav
    .map((n) => `<li><a href="${n.href}">${n.label}</a></li>`)
    .join("");

// ─── HERO ───
document.querySelector(".hero").innerHTML = `
    <p class="eyebrow">${C.hero.eyebrow}</p>
    <h1 class="display-name">${C.hero.name}<span class="dot-gold">.</span></h1>
    <p class="hero-sub">${C.hero.tagline}</p>
    <p class="lede">${C.hero.lede}</p>
    <div class="cta-row">
        <a href="${C.hero.cta.href}" class="btn btn-primary">${C.hero.cta.label}</a>
    </div>
`;

// ─── ABOUT ───
document.getElementById("about").innerHTML = `
    <h2 class="section-title">${C.about.title}</h2>
    <div class="about-grid">
        ${C.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
`;

// ─── WHY / STAND OUT ───
const check = `<span class="mark check"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8.5 3.5 3.5L13 4.5"/></svg></span>`;
const cross = `<span class="mark cross"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg></span>`;

document.getElementById("why").innerHTML = `
    <h2 class="section-title">${C.why.title}</h2>
    <div class="traits">
        ${C.why.traits
            .map(
                (t) => `
            <div class="trait">
                <span class="trait-tag">${t.tag}</span>
                <h3>${t.heading}</h3>
                <ul>${t.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
            </div>
        `
            )
            .join("")}
    </div>
    <div class="stats">
        ${C.why.stats
            .map(
                (s) => `
            <div class="stat">
                <span class="stat-num">${s.number}</span>
                <span class="stat-label">${s.label}</span>
            </div>
        `
            )
            .join("")}
    </div>
    <div class="compare-wrap">
        <table class="compare">
            <thead>
                <tr>
                    <th>${C.why.compareHeaders[0]}</th>
                    <th class="col-me">${C.why.compareHeaders[1]}</th>
                    <th class="col-them">${C.why.compareHeaders[2]}</th>
                </tr>
            </thead>
            <tbody>
                ${C.why.compareRows
                    .map(
                        (r) => `
                    <tr>
                        <th scope="row">${r.feature}</th>
                        <td class="cell-yes">${r.me ? check : cross}</td>
                        <td class="cell-no">${r.them ? check : cross}</td>
                    </tr>
                `
                    )
                    .join("")}
            </tbody>
        </table>
    </div>
`;

// ─── EXAMPLES ───
document.getElementById("examples").innerHTML = `
    <h2 class="section-title">${C.examples.title}</h2>
    <div class="examples">
        ${C.examples.items
            .map(
                (e) => `
            <article class="card">
                <div class="card-tag">${e.tag}</div>
                <h3>${e.title}</h3>
                <p>${e.body}</p>
                <ul class="tech">${e.tech.map((t) => `<li>${t}</li>`).join("")}</ul>
            </article>
        `
            )
            .join("")}
    </div>
`;

// ─── GAMES ───
document.getElementById("games").innerHTML = `
    <h2 class="section-title">${C.games.title}</h2>
    <div class="games">
        ${C.games.urls
            .map(
                (url) => `
            <a class="game-card" href="${url}" target="_blank" rel="noopener">
                <div class="game-thumb"><img alt="" loading="lazy" /></div>
                <div class="game-meta">
                    <div class="game-title">Loading&hellip;</div>
                    <div class="game-stats"></div>
                </div>
            </a>
        `
            )
            .join("")}
    </div>
`;

// ─── VIDEOS ───
const extractYouTubeId = (url) => {
    const m = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]+)/);
    return m ? m[1] : "";
};

document.getElementById("videos").innerHTML = `
    <h2 class="section-title">${C.videos.title}</h2>
    <div class="videos">
        ${C.videos.urls
            .map((url) => {
                const id = extractYouTubeId(url);
                return `
                <a class="video-card" href="${url}" data-video-id="${id}" target="_blank" rel="noopener">
                    <div class="video-thumb">
                        <img alt="" loading="lazy" />
                        <span class="play" aria-hidden="true"></span>
                    </div>
                    <div class="video-title">Loading&hellip;</div>
                </a>`;
            })
            .join("")}
    </div>
`;

// ─── SKILLS ───
document.getElementById("skills").innerHTML = `
    <h2 class="section-title">${C.skills.title}</h2>
    <div class="skills-grid">
        ${C.skills.groups
            .map(
                (g) => `
            <div class="skill-group">
                <h4>${g.heading}</h4>
                <ul>${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>
            </div>
        `
            )
            .join("")}
    </div>
`;

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    },
    { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ─── YOUTUBE HYDRATION ───
async function hydrateVideo(card) {
    const id = card.dataset.videoId;
    const img = card.querySelector("img");
    const titleEl = card.querySelector(".video-title");
    const thumb = card.querySelector(".video-thumb");

    const setImg = (src) => {
        img.onload = () => img.classList.add("loaded");
        img.src = src;
    };

    setImg(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);

    const maxres = new Image();
    maxres.onload = () => {
        if (maxres.naturalWidth > 320) setImg(maxres.src);
    };
    maxres.src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

    try {
        const res = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
        );
        if (res.ok) {
            const data = await res.json();
            titleEl.textContent = data.title;
            img.alt = data.title;
        } else {
            titleEl.textContent = "Watch on YouTube";
        }
    } catch {
        titleEl.textContent = "Watch on YouTube";
    }

    card.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if (thumb.querySelector("iframe")) return;
        e.preventDefault();
        const title = titleEl.textContent || "YouTube video";
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        iframe.title = title;
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        thumb.replaceChildren(iframe);
    });
}

document.querySelectorAll("[data-video-id]").forEach(hydrateVideo);

// ─── ROBLOX HYDRATION ───
async function hydrateGame(card) {
    const match = card.href.match(/\/games\/(\d+)\/([^/?#]+)/);
    if (!match) return;
    const [, placeId, slug] = match;
    const fallbackTitle = decodeURIComponent(slug).replace(/-/g, " ");
    const titleEl = card.querySelector(".game-title");
    const statsEl = card.querySelector(".game-stats");
    const img = card.querySelector("img");

    titleEl.textContent = fallbackTitle;

    try {
        const uRes = await fetch(
            `https://apis.roproxy.com/universes/v1/places/${placeId}/universe`,
            { headers: { Accept: "application/json" } }
        );
        if (!uRes.ok) return;
        const { universeId } = await uRes.json();
        if (!universeId) return;

        const [gameRes, thumbRes] = await Promise.all([
            fetch(`https://games.roproxy.com/v1/games?universeIds=${universeId}`),
            fetch(
                `https://thumbnails.roproxy.com/v1/games/multiget/thumbnails?universeIds=${universeId}&countPerUniverse=1&defaults=true&size=768x432&format=Png`
            ),
        ]);

        if (gameRes.ok) {
            const g = (await gameRes.json()).data?.[0];
            if (g) {
                titleEl.textContent = g.name;
                const parts = [g.genre_l1, g.genre_l2].filter(Boolean);
                statsEl.innerHTML = parts.map((p) => `<span>${p}</span>`).join("");
                img.alt = g.name;
            }
        }

        if (thumbRes.ok) {
            const t = (await thumbRes.json()).data?.[0]?.thumbnails?.[0];
            if (t?.imageUrl) {
                img.onload = () => img.classList.add("loaded");
                img.src = t.imageUrl;
            }
        }
    } catch {
        // Silently keep the fallback title; card still links to Roblox.
    }
}

document.querySelectorAll(".game-card").forEach(hydrateGame);
