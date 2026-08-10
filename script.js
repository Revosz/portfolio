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
