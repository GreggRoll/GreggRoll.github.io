"use strict";

const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/gregory-adams/",
  github: "https://github.com/GreggRoll",
  x: "https://x.com/aGreggRoll",
};

const apps = [
  {
    id: "time-boxed",
    name: "Time Boxed",
    icon: "time-boxed-icon.png",
    description:
      "A daily planner for iPhone and iPad. Set your priorities, get loose thoughts out of your head, and put tasks on a timeline.",
    details:
      "Plan in 30- or 60-minute blocks, or merge blocks when you need more time. Your plan saves locally and works offline. You don’t need an account.",
    demo: "https://greggroll.github.io/time-boxed/demo/",
    cta: "Try the web planner",
    source: "https://github.com/GreggRoll/time-boxed",
    store:
      "https://apps.apple.com/us/app/time-boxed-focus-your-day/id6762071236",
    shots: [
      [
        "time-boxed-workspace.svg",
        "Priorities, notes, and your schedule in the web planner.",
        "wide",
        "Planner",
      ],
      [
        "time-boxed-thoughts.svg",
        "The priorities and Brain Dump panels.",
        "wide",
        "Notes",
      ],
      [
        "time-boxed-schedule.svg",
        "Time blocks on the daily timeline.",
        "wide",
        "Schedule",
      ],
    ],
  },
  {
    id: "myjourney",
    name: "MyJourney",
    icon: "myjourney-icon.png",
    description:
      "A progress photo journal. Take consistent photos, compare them side by side, and keep a timeline you can look back through.",
    details:
      "A ghost overlay, grid, and timer help you line up the next shot. Export a GIF or video when you want to share. Your photos stay on your device.",
    demo: "https://greggroll.github.io/MyJourney/",
    cta: "See MyJourney",
    source: "https://github.com/GreggRoll/MyJourney",
    store:
      "https://apps.apple.com/us/app/my-journey-progress-in-pics/id6762496363",
    shots: [
      [
        "myjourney-compare.png",
        "The before-and-after photo comparison.",
        "",
        "Compare",
      ],
      [
        "myjourney-timeline.png",
        "The progress photo timeline.",
        "",
        "Timeline",
      ],
      [
        "myjourney-privacy.png",
        "MyJourney’s on-device photo storage.",
        "",
        "Privacy",
      ],
    ],
  },
  {
    id: "vo2cue",
    name: "VO2Cue",
    icon: "vo2cue-icon.png",
    description:
      "An interval timer for iPhone and Apple Watch. It guides Norwegian-style 4×4 workouts with haptics, tones, and optional spoken cues.",
    details:
      "Use a 4×4 session or set your own intervals. Keep a local workout history and save sessions to Apple Health.",
    demo: "https://greggroll.github.io/vo2cue/demo/",
    cta: "Try the timer",
    source: "https://github.com/GreggRoll/vo2cue",
    store: "https://apps.apple.com/us/app/vo2cue/id6804899072",
    shots: [
      [
        "vo2cue-timer.jpg",
        "The live interval timer during a sprint.",
        "",
        "Timer",
      ],
      [
        "vo2cue-workouts.jpg",
        "Saved workouts and interval presets.",
        "",
        "Workouts",
      ],
      ["vo2cue-history.jpg", "Your completed workout sessions.", "", "History"],
      ["vo2cue-watch.jpg", "The interval timer on Apple Watch.", "", "Watch"],
    ],
  },
  {
    id: "grave-maintenance",
    name: "Grave Maintenance",
    description:
      "You have five minutes to finish a cemetery maintenance shift. Mow, rake, empty the trash, and clean the graves. Try not to wake the residents.",
    details:
      "Choose your tools, earn your pay, and get back to the truck before 3 AM. Play solo in the browser, or co-op with up to four players when the game server is online.",
    demo: "https://greggroll.github.io/grave-maintenance/",
    cta: "Play the game",
    source: "https://github.com/GreggRoll/grave-maintenance",
    note: "Browser prototype. Co-op needs the game server to be online.",
    shots: [
      [
        "grave-game.jpg",
        "A shift at Briar Hollow cemetery.",
        "wide",
        "Cemetery",
      ],
      [
        "grave-trailer.jpg",
        "The equipment trailer before a shift.",
        "wide",
        "Trailer",
      ],
      [
        "grave-shop.jpg",
        "The shop, where you can upgrade your equipment.",
        "wide",
        "Shop",
      ],
    ],
  },
  {
    id: "myfurbaby",
    name: "MyFurBaby",
    icon: "myfurbaby-icon.png",
    description:
      "Make a virtual pet for your iPhone Home Screen. Pick its species, colors, accessories, and name, then give it a widget to live in.",
    details:
      "Add a clock, a daily quote, or pet info to the widget. You can also put your pet into a photo, save it, and share it.",
    demo: "https://greggroll.github.io/MyFurBaby/",
    cta: "See MyFurBaby",
    source: "https://github.com/GreggRoll/MyFurBaby",
    note: "Coming soon to the App Store. Widgets and photo adventures require Pro; AI creations use credits.",
    shots: [
      [
        "myfurbaby-pet.jpg",
        "Sterling in a small Home Screen widget.",
        "",
        "Pet widget",
      ],
      [
        "myfurbaby-clock.jpg",
        "A wide widget with a clock and a pet.",
        "wide",
        "Clock",
      ],
      [
        "myfurbaby-quote.jpg",
        "A pet widget with a daily quote.",
        "wide",
        "Quote",
      ],
      [
        "myfurbaby-adventures.jpg",
        "A pet photo adventure on the moon.",
        "",
        "Adventure",
      ],
    ],
  },
];

function heading(app) {
  return `<div class="project-title">${app.icon ? `<img src="assets/${app.icon}" alt="" width="52" height="52" loading="lazy">` : ""}<h3 id="${app.id}-title">${app.name}</h3></div>`;
}

function links(app) {
  return `<div class="app-actions"><a class="app-cta" href="${app.demo}" target="_blank" rel="noopener noreferrer">${app.cta} ↗</a>${app.store ? `<a href="${app.store}" target="_blank" rel="noopener noreferrer">App Store</a>` : ""}<a href="${app.source}" target="_blank" rel="noopener noreferrer">Source code</a></div>${app.note ? `<p class="release-note">${app.note}</p>` : ""}`;
}

function gallery(app) {
  return `<div class="carousel" role="region" aria-roledescription="carousel" aria-label="${app.name} screenshots">
    <div class="carousel-track" tabindex="0" aria-label="${app.name} gallery. Swipe or use the arrow keys to browse.">
      ${app.shots.map(([src, caption, kind], index) => `<figure class="slide ${kind || ""}" role="group" aria-roledescription="slide" aria-label="${caption}" ${index === 0 ? "" : 'inert aria-hidden="true"'}><button class="screenshot-button" type="button" aria-label="Expand screenshot: ${caption}"><img src="assets/${src}" alt="${app.name}: ${caption}" loading="lazy" decoding="async"></button><figcaption>${caption}</figcaption></figure>`).join("")}
    </div>
    <div class="carousel-controls"><div class="slide-picker" aria-label="Choose a screenshot">${app.shots.map((shot, index) => `<button type="button" aria-label="Show ${app.name}: ${shot[3]}" ${index === 0 ? 'aria-current="true"' : ""}>${shot[3]}</button>`).join("")}</div><div class="control-group"><button class="previous" type="button" aria-label="Previous ${app.name} screenshot">←</button><button class="next" type="button" aria-label="Next ${app.name} screenshot">→</button></div></div>
    <p class="sr-only gallery-status" aria-live="polite" aria-atomic="true">${app.shots[0][1]}</p>
  </div>`;
}

// Each project has a composition suited to its content; galleries share controls.
const layouts = {
  "time-boxed": (app) =>
    `${heading(app)}<p class="project-summary">${app.description}</p><div class="planner-body">${gallery(app)}<div class="planner-notes"><h4>Planning a day</h4><p>${app.details}</p>${links(app)}<p class="preview-note">These previews show the web planner. You can try it without installing the app.</p></div></div>`,
  myjourney: (app) =>
    `<div class="project-copy">${heading(app)}<p class="project-summary">${app.description}</p><p>${app.details}</p>${links(app)}</div>${gallery(app)}`,
  vo2cue: (app) =>
    `<div class="coach-copy">${heading(app)}<p class="project-summary">${app.description}</p><dl class="workout-notes"><div><dt>Intervals</dt><dd>4×4 sessions or your own timing.</dd></div><div><dt>Cues</dt><dd>Watch haptics, audio, and optional voice.</dd></div><div><dt>History</dt><dd>Local sessions and Apple Health.</dd></div></dl>${links(app)}</div>${gallery(app)}`,
  "grave-maintenance": (app) =>
    `<div class="game-intro"><div>${heading(app)}<p class="project-summary">${app.description}</p></div><div>${links(app)}</div></div>${gallery(app)}<p class="game-notes">${app.details}</p>`,
  myfurbaby: (app) =>
    `<div class="pet-intro">${heading(app)}<p class="project-summary">${app.description}</p></div><div class="pet-body"><div class="pet-notes"><p>${app.details}</p><p>The pet can play or sleep, with a background you choose.</p>${links(app)}</div>${gallery(app)}</div>`,
};

document.querySelector("#app-showcases").innerHTML = apps
  .map(
    (app) =>
      `<article class="project project-${app.id}" id="${app.id}" aria-labelledby="${app.id}-title">${layouts[app.id](app)}</article>`,
  )
  .join("");
document.querySelector("#social-links").innerHTML = Object.entries(
  socialProfiles,
)
  .map(
    ([key, url]) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${{ linkedin: "LinkedIn", github: "GitHub", x: "X" }[key]} ↗</a>`,
  )
  .join("");
document.querySelector("#year").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const scrollBehavior = () => (reducedMotion.matches ? "instant" : "smooth");

for (const carousel of document.querySelectorAll(".carousel")) {
  const track = carousel.querySelector(".carousel-track");
  const slides = [...track.children];
  const choices = [...carousel.querySelectorAll(".slide-picker button")];
  let activeIndex = 0;
  const currentIndex = () =>
    Math.max(
      0,
      Math.min(
        slides.length - 1,
        Math.round(track.scrollLeft / track.clientWidth),
      ),
    );
  const goTo = (index) => {
    const targetIndex = (index + slides.length) % slides.length;
    track.scrollTo({
      left: targetIndex * track.clientWidth,
      behavior: scrollBehavior(),
    });
  };
  const updateSlide = () => {
    const index = currentIndex();
    if (index === activeIndex) return;
    activeIndex = index;
    slides.forEach((slide, i) => {
      slide.inert = i !== index;
      if (i === index) slide.removeAttribute("aria-hidden");
      else slide.setAttribute("aria-hidden", "true");
    });
    choices.forEach((choice, i) =>
      i === index
        ? choice.setAttribute("aria-current", "true")
        : choice.removeAttribute("aria-current"),
    );
    carousel.querySelector(".gallery-status").textContent =
      slides[index].querySelector("figcaption").textContent;
  };
  carousel
    .querySelector(".previous")
    .addEventListener("click", () => goTo(currentIndex() - 1));
  carousel
    .querySelector(".next")
    .addEventListener("click", () => goTo(currentIndex() + 1));
  choices.forEach((choice, i) =>
    choice.addEventListener("click", () => goTo(i)),
  );
  let scrollFrame;
  track.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(updateSlide);
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
    if (track.clientWidth === oldWidth || !track.clientWidth) return;
    oldWidth = track.clientWidth;
    track.scrollTo({ left: activeIndex * oldWidth, behavior: "instant" });
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
