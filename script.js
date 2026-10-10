"use strict";

// Edit profile URLs here. A missing URL is shown honestly rather than guessed.
const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/gregory-adams/",
  github: "https://github.com/GreggRoll",
  x: "https://x.com/aGreggRoll",
};

const apps = [
  {
    id: "time-boxed",
    name: "Time Boxed",
    category: "Focus & daily planning",
    icon: "time-boxed-icon.png",
    accent: "#bdd4b0",
    tint: "#252e23",
    tagline: "Give your priorities a place in your day.",
    description:
      "A calm daily planner for iPhone and iPad. Bring your priorities, loose thoughts, and time boxes into one workspace, then make room for what matters.",
    features: [
      "Choose your priorities. Clear your head with a Brain Dump.",
      "Plan in 30- or 60-minute blocks. Merge time for deep work.",
      "Local saving, offline planning, and no account required.",
    ],
    demo: "https://greggroll.github.io/time-boxed/demo/",
    cta: "Try the planner",
    source: "https://github.com/GreggRoll/time-boxed",
    store:
      "https://apps.apple.com/us/app/time-boxed-focus-your-day/id6762071236",
    galleryLabel: "INSIDE THE WEB PREVIEW",
    shots: [
      [
        "time-boxed-workspace.svg",
        "Your daily workspace, all in one place.",
        "wide",
      ],
      [
        "time-boxed-thoughts.svg",
        "Priorities and a little room to think.",
        "wide",
      ],
      [
        "time-boxed-schedule.svg",
        "Give the important things time on your timeline.",
        "wide",
      ],
    ],
  },
  {
    id: "myjourney",
    name: "MyJourney",
    category: "Progress & personal growth",
    icon: "myjourney-icon.png",
    accent: "#c2b4e5",
    tint: "#2b2536",
    tagline: "Small changes. A bigger picture.",
    description:
      "Progress is easy to miss when you see it every day. Build a photo journal, line up consistent shots, and look back at how far you’ve come. Your photos stay on your device.",
    features: [
      "Frame your next photo with a ghost overlay, grid, and timer.",
      "Slide between before and after. Revisit your photo timeline.",
      "Turn a journey into a GIF or video when you’re ready to share.",
    ],
    demo: "https://greggroll.github.io/MyJourney/",
    cta: "Explore MyJourney",
    source: "https://github.com/GreggRoll/MyJourney",
    store:
      "https://apps.apple.com/us/app/my-journey-progress-in-pics/id6762496363",
    galleryLabel: "PROGRESS, IN PICTURES",
    shots: [
      ["myjourney-compare.png", "Compare two moments. See every change."],
      ["myjourney-timeline.png", "Build a habit, one photo at a time."],
      ["myjourney-privacy.png", "Your journey stays yours."],
    ],
  },
  {
    id: "vo2cue",
    name: "VO2Cue",
    category: "Fitness & interval training",
    icon: "vo2cue-icon.png",
    accent: "#ffab84",
    tint: "#332820",
    tagline: "Find your rhythm. Leave the clock to me.",
    description:
      "An interval coach for iPhone and Apple Watch, built around Norwegian-style 4×4 training. Haptics, tones, and spoken cues guide your workout so you can keep your attention on the effort.",
    features: [
      "Run a 4×4 session or customize your own intervals.",
      "Train with Watch haptics, audio, and optional voice cues.",
      "Track sessions locally. Save workouts to Apple Health.",
    ],
    demo: "https://greggroll.github.io/vo2cue/demo/",
    cta: "Explore VO2Cue",
    source: "https://github.com/GreggRoll/vo2cue",
    store: "https://apps.apple.com/us/app/vo2cue/id6804899072",
    galleryLabel: "LESS WATCHING. MORE MOVING.",
    shots: [
      ["vo2cue-timer.jpg", "A clear live timer for every interval."],
      ["vo2cue-workouts.jpg", "Your workouts, ready when you are."],
      ["vo2cue-history.jpg", "See your sessions and keep the momentum."],
      ["vo2cue-watch.jpg", "Your interval coach, right on your wrist."],
    ],
  },
  {
    id: "grave-maintenance",
    name: "Grave Maintenance",
    category: "A game for the night shift",
    accent: "#d9c28d",
    tint: "#242b28",
    tagline: "An honest day’s work. After dark.",
    description:
      "A cemetery maintenance game with a five-minute shift and a few very unhappy residents. Mow, rake, take out the trash, and clean graves. Make a mistake, and you may wake something you wish you hadn’t.",
    features: [
      "Four jobs. Five minutes. Get back to the truck before 3 AM.",
      "Choose your tools, earn your pay, and recover your equipment.",
      "Play solo in your browser. Co-op supports up to four players.",
    ],
    demo: "https://greggroll.github.io/grave-maintenance/",
    cta: "Play a shift",
    source: "https://github.com/GreggRoll/grave-maintenance",
    note: "Playable prototype · Co-op requires the game server to be online.",
    galleryLabel: "WELCOME TO BRIAR HOLLOW",
    shots: [
      ["grave-game.jpg", "A quiet cemetery. For now.", "wide"],
      ["grave-trailer.jpg", "Pack the trailer before you clock in.", "wide"],
      ["grave-shop.jpg", "Better equipment. Bigger decisions.", "wide"],
    ],
  },

  {
    id: "myfurbaby",
    name: "MyFurBaby",
    category: "Personal pets & Home Screen widgets",
    icon: "myfurbaby-icon.png",
    accent: "#d0b8ef",
    tint: "#302538",
    tagline: "Your Home Screen. Their happy place.",
    description:
      "Dream up your own little companion, give them a cozy home on your iPhone Home Screen, and take them on photo adventures. Choose their species, colors, accessories, and name to make your Fur Baby your own.",
    features: [
      "Small and wide widgets with a clock, daily quote, or pet info.",
      "Playful and sleepy animations, with backgrounds that feel like you.",
      "Bring your pet into your photos. Save and share the adventures.",
    ],
    demo: "https://greggroll.github.io/MyFurBaby/",
    cta: "Meet MyFurBaby",
    source: "https://github.com/GreggRoll/MyFurBaby",
    note: "Coming soon to the App Store · Widgets and adventures require Pro; AI creations use credits.",
    galleryLabel: "A LITTLE FRIEND. A LITTLE MORE JOY.",
    shots: [
      ["myfurbaby-pet.jpg", "A sleepy companion, right on your Home Screen."],
      [
        "myfurbaby-clock.jpg",
        "A clock with a colorful little sidekick.",
        "wide",
      ],
      [
        "myfurbaby-quote.jpg",
        "A daily quote. A cozy corner. Your Fur Baby.",
        "wide",
      ],
      [
        "myfurbaby-adventures.jpg",
        "Take your little friend on a photo adventure.",
      ],
    ],
  },
];

const showcases = document.querySelector("#app-showcases");
showcases.innerHTML = apps
  .map(
    (app, index) => `
  <article class="showcase reveal" id="${app.id}" style="--accent:${app.accent};--tint:${app.tint}" aria-labelledby="${app.id}-title">
    <div class="app-copy">
      <div class="app-identity">${app.icon ? `<img src="assets/${app.icon}" alt="" width="54" height="54" loading="lazy">` : '<span class="game-icon" aria-hidden="true">GM</span>'}<div><span class="app-number">0${index + 1} / BUILT BY GREG</span><span class="app-category">${app.category}</span></div></div>
      <h3 id="${app.id}-title">${app.name}</h3><p class="app-tagline">${app.tagline}</p><p class="app-description">${app.description}</p>
      <ul class="feature-list">${app.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      <div class="app-actions"><a class="button" href="${app.demo}" target="_blank" rel="noopener noreferrer">${app.cta} <span aria-hidden="true">↗</span></a><a class="source-link" href="${app.source}" target="_blank" rel="noopener noreferrer">View the code ↗</a></div>
      ${app.store ? `<a class="store-link" href="${app.store}" target="_blank" rel="noopener noreferrer">Find it on the App Store ↗</a>` : `<p class="carousel-hint">${app.note}</p>`}
    </div>
    <div class="carousel" role="region" aria-roledescription="carousel" aria-label="${app.name} screenshots">
      <span class="gallery-label">${app.galleryLabel}</span>
      <div class="carousel-track" tabindex="0" aria-label="${app.name} screenshot gallery. Use left and right arrow keys or swipe.">
        ${app.shots.map(([src, caption, kind], shotIndex) => `<figure class="slide ${kind || ""}" role="group" aria-roledescription="slide" aria-label="${shotIndex + 1} of ${app.shots.length}" ${shotIndex === 0 ? "" : 'inert aria-hidden="true"'}><button class="screenshot-button" type="button" aria-label="Expand screenshot: ${caption}"><img src="assets/${src}" alt="${app.name}: ${caption}" loading="lazy" decoding="async"></button><figcaption>${caption}</figcaption></figure>`).join("")}
      </div>
      <div class="carousel-controls"><span class="slide-count" aria-live="polite" aria-atomic="true">01 / 0${app.shots.length}</span><div class="dots">${app.shots.map((_, shotIndex) => `<button type="button" aria-label="Show ${app.name} screenshot ${shotIndex + 1}" ${shotIndex === 0 ? 'aria-current="true"' : ""}></button>`).join("")}</div><div class="control-group"><button class="previous" type="button" aria-label="Previous ${app.name} screenshot">←</button><button class="next" type="button" aria-label="Next ${app.name} screenshot">→</button></div></div>
    </div>
  </article>
`,
  )
  .join("");

document.querySelector("#social-links").innerHTML = Object.entries(
  socialProfiles,
)
  .map(([key, url]) => {
    const label = { linkedin: "LinkedIn", github: "GitHub", x: "X / Twitter" }[
      key
    ];
    return url
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer"><span>${label}</span><span aria-hidden="true">↗</span></a>`
      : `<div class="pending-social"><span>${label}</span><small>Profile link coming soon</small></div>`;
  })
  .join("");
document.querySelector("#year").textContent = new Date().getFullYear();
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const scrollBehavior = () => (reducedMotion.matches ? "instant" : "smooth");

for (const carousel of document.querySelectorAll(".carousel")) {
  const track = carousel.querySelector(".carousel-track");
  const slides = [...track.children];
  const dots = [...carousel.querySelectorAll(".dots button")];
  const currentIndex = () => Math.round(track.scrollLeft / track.clientWidth);
  const goTo = (index) => {
    const target = (index + slides.length) % slides.length;
    track.scrollTo({
      left: target * track.clientWidth,
      behavior: scrollBehavior(),
    });
  };
  carousel
    .querySelector(".previous")
    .addEventListener("click", () => goTo(currentIndex() - 1));
  carousel
    .querySelector(".next")
    .addEventListener("click", () => goTo(currentIndex() + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
  let scrollFrame;
  track.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const index = currentIndex();
        slides.forEach((slide, i) => {
          slide.inert = i !== index;
          if (i === index) slide.removeAttribute("aria-hidden");
          else slide.setAttribute("aria-hidden", "true");
        });
        dots.forEach((dot, i) =>
          i === index
            ? dot.setAttribute("aria-current", "true")
            : dot.removeAttribute("aria-current"),
        );
        carousel.querySelector(".slide-count").textContent =
          `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      });
    },
    { passive: true },
  );
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex() + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  let oldWidth = track.clientWidth;
  new ResizeObserver(() => {
    const index = Math.round(track.scrollLeft / oldWidth);
    oldWidth = track.clientWidth;
    track.scrollTo({ left: index * oldWidth, behavior: "instant" });
  }).observe(track);
}

const dialog = document.querySelector("#screenshot-dialog");
for (const button of document.querySelectorAll(".screenshot-button")) {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    dialog.querySelector("img").src = image.src;
    dialog.querySelector("img").alt = image.alt;
    dialog.querySelector("p").textContent = button
      .closest("figure")
      .querySelector("figcaption").textContent;
    dialog.showModal();
  });
}
dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      dialog.close();
  }
});

if ("IntersectionObserver" in window) {
  if (!reducedMotion.matches)
    document.documentElement.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
    },
    { threshold: 0.06 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => revealObserver.observe(element));
  const appObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          const navigation = document.querySelector(".app-nav");
          document.querySelectorAll(".app-nav a").forEach((link) => {
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.setAttribute("aria-current", "location");
              if (navigation.scrollWidth > navigation.clientWidth)
                navigation.scrollTo({
                  left:
                    link.offsetLeft -
                    (navigation.clientWidth - link.offsetWidth) / 2,
                  behavior: scrollBehavior(),
                });
            } else link.removeAttribute("aria-current");
          });
        }
    },
    { rootMargin: "-15% 0px -45% 0px", threshold: 0 },
  );
  document
    .querySelectorAll(".showcase")
    .forEach((element) => appObserver.observe(element));
}
let progressFrame;
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector(".scroll-progress").style.transform =
    `scaleX(${available > 0 ? window.scrollY / available : 0})`;
}
window.addEventListener(
  "scroll",
  () => {
    if (!progressFrame)
      progressFrame = requestAnimationFrame(() => {
        updateProgress();
        progressFrame = null;
      });
  },
  { passive: true },
);
window.addEventListener("resize", updateProgress);
updateProgress();
