"use strict";

// Keep app destinations, availability, copy, and preview assets together.
const apps = [
  {
    id: "vo2cue",
    name: "VO2Cue",
    icon: "vo2cue-icon.png",
    category: "Fitness & training",
    headline: "Find your rhythm.",
    accent: "#a7c795",
    halo: "#253125",
    description:
      "An interval timer for iPhone and Apple Watch. It guides Norwegian-style 4×4 workouts with haptics, tones, and optional spoken cues.",
    details:
      "Use a 4×4 session or set your own intervals. Keep a local workout history and save sessions to Apple Health.",
    page: "https://greggroll.github.io/vo2cue/demo/",
    cta: "Try the timer",
    source: "https://github.com/GreggRoll/vo2cue",
    store: "https://apps.apple.com/us/app/vo2cue/id6804899072",
    caption: "VO2Cue · A cue for every interval.",
    preview: `<div class="promo-heading"><p class="promo-kicker">VO2Cue · iPhone + Apple Watch</p><h3>Less watching.<br>More working out.</h3><p>Your next interval. Right on cue.</p></div><div class="vo2-ring" aria-hidden="true"></div><img class="vo2-screenshot" src="assets/vo2cue-timer.jpg" alt="VO2Cue live sprint timer, round 1 of 4, with pause and skip controls" width="360" height="780">`,
    previewClass: "promo-vo2",
  },
  {
    id: "myjourney",
    name: "MyJourney",
    icon: "myjourney-icon.png",
    category: "Progress & perspective",
    headline: "See how far you’ve come.",
    accent: "#cfb0e4",
    halo: "#302739",
    description:
      "A progress photo journal. Take consistent photos, compare them side by side, and keep a timeline you can look back through.",
    details:
      "A ghost overlay, grid, and timer help you line up the next shot. Export a GIF or video when you want to share. Your photos stay on your device.",
    page: "https://greggroll.github.io/MyJourney/",
    cta: "Explore MyJourney",
    source: "https://github.com/GreggRoll/MyJourney",
    store:
      "https://apps.apple.com/us/app/my-journey-progress-in-pics/id6762496363",
    caption: "MyJourney · Small changes. A bigger picture.",
    preview: `<img class="full-promo" src="assets/myjourney-compare.png" alt="MyJourney promotional image showing side-by-side progress photo comparison" width="396" height="860">`,
    previewClass: "promo-journey",
  },
  {
    id: "time-boxed",
    name: "Time Boxed",
    icon: "time-boxed-icon.png",
    category: "Planning & focus",
    headline: "Make room for what matters.",
    accent: "#b5c995",
    halo: "#2b3024",
    description:
      "A daily planner for iPhone and iPad. Set your priorities, get loose thoughts out of your head, and put tasks on a timeline.",
    details:
      "Plan in 30- or 60-minute blocks, or merge blocks when you need more time. Your plan saves locally and works offline. You don’t need an account.",
    page: "https://greggroll.github.io/time-boxed/demo/",
    cta: "Try the web planner",
    source: "https://github.com/GreggRoll/time-boxed",
    store:
      "https://apps.apple.com/us/app/time-boxed-focus-your-day/id6762071236",
    caption: "Time Boxed · A little structure. A clearer day.",
    preview: `<div class="promo-heading"><p class="promo-kicker">Time Boxed</p><h3>A place for<br>every priority.</h3><p>Get it out of your head.<br>Give it time in your day.</p></div><div class="planner-preview"><p>YOUR DAY, WITH INTENTION</p><h4>Let’s make a plan.</h4><span class="planner-label">Give your priorities a little time</span><img src="assets/time-boxed-schedule.svg" alt="Time Boxed web planner daily schedule in time blocks"></div><p class="planner-promonote">Web planner preview · Also available for iPhone & iPad</p>`,
    previewClass: "promo-planner",
  },
  {
    id: "myfurbaby",
    name: "My Fur Baby",
    icon: "myfurbaby-icon.png",
    category: "Widgets & little companions",
    headline: "A little closer. Always.",
    accent: "#cfb0e4",
    halo: "#32263b",
    description:
      "Make a virtual pet for your iPhone Home Screen. Pick its species, colors, accessories, and name, then give it a widget to live in.",
    details:
      "Add a clock, a daily quote, or pet info to the widget. You can also put your pet into a photo, save it, and share it.",
    page: "https://greggroll.github.io/MyFurBaby/",
    cta: "Meet My Fur Baby",
    source: "https://github.com/GreggRoll/MyFurBaby",
    availability: "App Store · Coming soon",
    note: "Widgets, animations, and photo adventures are Pro features. AI creations use credits.",
    caption: "My Fur Baby · Real widgets. Really cute company.",
    preview: `<div class="promo-heading"><p class="promo-kicker">My Fur Baby</p><h3>Your Home Screen.<br>Their happy place.</h3><p>A playful hello. A sleepy little cuddle.</p></div><video class="pet-clock-preview" data-motion="pet" src="assets/myfurbaby-clock.mp4" poster="assets/myfurbaby-clock-poster.jpg" muted loop playsinline preload="metadata" aria-label="Animated My Fur Baby clock widget with a colorful companion"></video><video class="pet-sleep-preview" data-motion="pet" src="assets/myfurbaby-widget.mp4" poster="assets/myfurbaby-widget-poster.jpg" muted loop playsinline preload="metadata" aria-label="Sterling the white tiger sleeping in a My Fur Baby widget"></video><p class="pet-promo-label">A little love, every time you unlock.</p>`,
    previewClass: "promo-pet",
  },
  {
    id: "grave-maintenance",
    name: "Grave Maintenance",
    category: "Games & after-hours adventures",
    headline: "One shift. Five minutes. Stay quiet.",
    accent: "#bfcba0",
    halo: "#2a3027",
    description:
      "You have five minutes to finish a cemetery maintenance shift. Mow, rake, empty the trash, and clean the graves. Try not to wake the residents.",
    details:
      "Choose your tools, earn your pay, and get back to the truck before 3 AM. Play solo in the browser, or co-op with up to four players when the game server is online.",
    page: "https://greggroll.github.io/grave-maintenance/",
    cta: "Play the game",
    source: "https://github.com/GreggRoll/grave-maintenance",
    availability: "Browser game · No App Store release",
    note: "Browser prototype. Co-op needs the game server to be online.",
    caption: "Grave Maintenance · Try not to wake the residents.",
    preview: `<div class="promo-heading"><p class="promo-kicker">Grave Maintenance</p><h3>The night shift<br>starts here.</h3><p>Briar Hollow is counting on you.</p></div><div class="grave-preview"><img src="assets/grave-game.jpg" alt="Grave Maintenance browser game showing a night shift at Briar Hollow cemetery" width="1233" height="720"></div><div class="grave-promo-bottom"><p>Mow. Rake. Clean the graves.<br>Get back to the truck before 3 AM.</p><span>Browser game · Solo + co-op</span></div>`,
    previewClass: "promo-grave",
  },
];

const graveIcon = `<span class="app-icon grave-icon" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M12 32V15a8 8 0 0 1 16 0v17" fill="#819270" stroke="#d0daba" stroke-width="1.5"/><path d="M20 13v10m-4-6h8M8 32h24" stroke="#e2e9d2" stroke-width="1.5" stroke-linecap="round"/><path d="m5 28 2 4m27-4-2 4" stroke="#819270" stroke-width="1.5"/></svg></span>`;
const icon = (app) =>
  app.icon
    ? `<img class="app-icon" src="assets/${app.icon}" alt="" width="64" height="64">`
    : graveIcon;
const external = `target="_blank" rel="noopener noreferrer"`;
const panelsRoot = document.querySelector("#app-panels");
panelsRoot.innerHTML = apps
  .map(
    (
      app,
      i,
    ) => `<article class="copy-panel app-copy" data-panel="${app.id}" aria-labelledby="${app.id}-title">
  <p class="app-category">${String(i + 1).padStart(2, "0")} / ${app.category.toUpperCase()}</p>
  <div class="app-title-row">${icon(app)}<span>${app.name}</span></div>
  <h2 id="${app.id}-title">${app.name}</h2><p class="app-tagline">${app.headline}</p>
  <p class="app-description">${app.description}</p><p class="app-details">${app.details}</p>
  <div class="app-actions"><a class="button primary" href="${app.page}" ${external}>${app.cta} <span aria-hidden="true">↗</span></a>${app.store ? `<a class="text-link" href="${app.store}" ${external}>App Store ↗</a>` : `<span class="store-unavailable">${app.availability}</span>`}<a class="text-link" href="${app.source}" ${external}>GitHub ↗</a></div>${app.note ? `<p class="release-note">${app.note}</p>` : ""}
</article>`,
  )
  .join("");
document.querySelector("#home-apps").innerHTML = apps
  .map(
    (app) =>
      `<a class="home-app" href="#${app.id}" aria-label="Open ${app.name}">${icon(app)}<span>${app.name}</span></a>`,
  )
  .join("");
document.querySelector("#phone-apps").innerHTML = apps
  .map(
    (app) =>
      `<div class="app-window ${app.previewClass}" data-app="${app.id}" role="group" aria-label="${app.name} promotional preview" aria-hidden="true">${app.preview}</div>`,
  )
  .join("");
const contacts = [
  {
    name: "Email",
    href: "mailto:GregInPublic@icloud.com",
    icon: "email",
    svg: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  },
  {
    name: "X",
    href: "https://x.com/aGreggRoll",
    icon: "x",
    svg: '<path d="m4 3 12 18h4L8 3H4Z"/><path d="m20 3-7 8M4 21l7-8"/>',
  },
  {
    name: "GitHub",
    href: "https://github.com/GreggRoll",
    icon: "github",
    svg: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .2-1.7-.5-2.4 3-.3 6-1.5 6-5.6A4.4 4.4 0 0 0 19.3 7c.2-1 .2-2-.3-3-1 0-2 .5-3 1a13 13 0 0 0-8 0C7 4.5 6 4 5 4c-.5 1-.5 2-.3 3a4.4 4.4 0 0 0-1.2 3c0 4.1 3 5.3 6 5.6-.7.7-.5 1.4-.5 2.4v4"/>',
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gregory-adams/",
    icon: "linkedin",
    svg: '<path d="M5 9v11M5 4v.1M10 20V9h4v2c1-3 6-3 6 2v7M14 12v8"/>',
  },
];
const contactLink = (contact) =>
  `<a href="${contact.href}" ${contact.icon === "email" ? 'aria-label="Email Greg at GregInPublic@icloud.com"' : external}>${contact.name} <span aria-hidden="true">↗</span></a>`;
document.querySelector("#contact-bar").innerHTML = contacts
  .map(contactLink)
  .join("");
document.querySelector("#social-links").innerHTML = contacts
  .map(contactLink)
  .join("");
document.querySelector("#contact-dock").innerHTML = contacts
  .map(
    (contact) =>
      `<a class="dock-contact" href="${contact.href}" aria-label="${contact.icon === "email" ? "Email Greg at GregInPublic@icloud.com" : `Greg on ${contact.name}`}" ${contact.icon === "email" ? "" : external}><span class="dock-icon dock-${contact.icon}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${contact.svg}</svg></span><span class="dock-label">${contact.name}</span></a>`,
  )
  .join("");
document
  .querySelector("#scroll-track")
  .insertAdjacentHTML(
    "beforeend",
    apps
      .map(
        (app) =>
          `<div class="scroll-step" id="${app.id}" data-step="${app.id}" aria-hidden="true"></div>`,
      )
      .join(""),
  );
document.querySelector("#year").textContent = new Date().getFullYear();

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const panels = [...document.querySelectorAll(".copy-panel")];
const steps = [...document.querySelectorAll(".scroll-step")];
const windows = [...document.querySelectorAll(".app-window")];
const appLinks = [...document.querySelectorAll(".home-app")];
const videos = [...document.querySelectorAll("video[data-motion]")];
const home = document.querySelector("#home-screen");
const screen = document.querySelector(".phone-screen");
const toggle = document.querySelector("#motion-toggle");
let current = -1;
let paused = reducedMotion.matches;
let openAmount = 0;
let stepPositions = [];
let iconOrigins = [];
let frame = 0;
let videoState = "";

function syncMotion() {
  const state = `${paused}:${document.hidden}:${current}:${openAmount > 0.15}:${openAmount < 0.95}`;
  if (videoState === state) return;
  videoState = state;
  videos.forEach((video) => {
    const visible =
      video.dataset.motion === "home"
        ? openAmount < 0.95
        : current === 4 && openAmount > 0.15;
    if (!paused && !document.hidden && visible) video.play().catch(() => {});
    else video.pause();
  });
  toggle.setAttribute("aria-pressed", String(paused));
  toggle.innerHTML = paused
    ? `Play animations <span aria-hidden="true">▷</span>`
    : `Pause animations <span aria-hidden="true">Ⅱ</span>`;
  document.documentElement.classList.toggle("motion-paused", paused);
}

function measure() {
  document.documentElement.style.setProperty(
    "--stage-height",
    `${document.querySelector(".stage").offsetHeight}px`,
  );
  stepPositions = steps.map((step) => ({
    top: step.getBoundingClientRect().top + scrollY,
    height: step.offsetHeight,
  }));
  const sr = screen.getBoundingClientRect();
  iconOrigins = apps.map((app) => {
    const ir = document
      .querySelector(`.home-app[href="#${app.id}"] .app-icon`)
      .getBoundingClientRect();
    const factor = screen.offsetWidth / sr.width;
    return {
      x: (ir.left + ir.width / 2 - sr.left - sr.width / 2) * factor,
      y: (ir.top + ir.height / 2 - sr.top - sr.height / 2) * factor,
      scale: ir.width / sr.width,
    };
  });
  render();
}

const clamp = (value) => Math.max(0, Math.min(1, value));
const ease = (value) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};
function render() {
  frame = 0;
  if (!stepPositions.length) return;
  const y = Math.max(0, scrollY);
  let next = 0;
  for (let i = 1; i < stepPositions.length; i++) {
    if (y >= stepPositions[i].top - 1) next = i;
  }
  const step = stepPositions[next];
  const progress = clamp((y - step.top) / step.height);
  let amount =
    next === 0
      ? 0
      : Math.min(ease((progress - 0.025) / 0.2), ease((1 - progress) / 0.18));
  if (paused || reducedMotion.matches)
    amount = next && progress >= 0.1 && progress < 0.92 ? 1 : 0;
  openAmount = amount;
  if (current !== next) {
    current = next;
    const app = apps[next - 1];
    document.documentElement.style.setProperty(
      "--accent",
      app?.accent || "#f2a27f",
    );
    document.querySelector(".phone-halo").style.background =
      app?.halo || "#272723";
    panels.forEach((panel, i) => {
      panel.classList.toggle("is-active", i === next);
      panel.inert = i !== next;
      panel.setAttribute("aria-hidden", String(i !== next));
    });
    appLinks.forEach((link, i) =>
      i === next - 1
        ? link.setAttribute("aria-current", "true")
        : link.removeAttribute("aria-current"),
    );
    document.querySelector("#phone-caption").textContent =
      app?.caption || "Five apps. One curious mind.";
  }
  windows.forEach((window, i) => {
    const visible = i === next - 1 && amount > 0.001;
    window.classList.toggle("is-visible", visible);
    window.setAttribute("aria-hidden", String(!visible));
    window.inert = !visible;
    if (!visible) return;
    const origin = iconOrigins[i];
    window.style.transform = `translate(${origin.x * (1 - amount)}px, ${origin.y * (1 - amount)}px) scale(${origin.scale + (1 - origin.scale) * amount})`;
    window.style.opacity = String(clamp(amount * 4));
    window.style.borderRadius = `${35 * (1 - amount)}px`;
  });
  home.inert = amount > 0.5;
  home.setAttribute("aria-hidden", String(amount > 0.5));
  home.style.filter = `brightness(${1 - amount * 0.14})`;
  syncMotion();
}
function schedule() {
  if (!frame) frame = requestAnimationFrame(render);
}
function navigate(id, behavior = paused ? "instant" : "smooth") {
  const index = apps.findIndex((app) => app.id === id);
  if (index < 0 && id !== "main" && id !== "home") return false;
  const target =
    index < 0
      ? 0
      : stepPositions[index + 1].top + stepPositions[index + 1].height * 0.34;
  window.scrollTo({ top: target, behavior });
  return true;
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
    return;
  const id = link.getAttribute("href").slice(1);
  if (!navigate(id)) return;
  event.preventDefault();
  if (link.classList.contains("skip-link"))
    document.querySelector("#main").focus({ preventScroll: true });
  history.pushState(null, "", `#${id}`);
});
document.querySelector(".home-indicator").addEventListener("click", () => {
  navigate("main");
  history.pushState(null, "", "#main");
});
toggle.addEventListener("click", () => {
  paused = !paused;
  videoState = "";
  render();
});
reducedMotion.addEventListener("change", () => {
  paused = reducedMotion.matches;
  videoState = "";
  render();
});
document.addEventListener("visibilitychange", () => {
  videoState = "";
  syncMotion();
});
window.addEventListener("scroll", schedule, { passive: true });
window.addEventListener("resize", measure);
window.addEventListener("popstate", () => {
  const id = location.hash.slice(1) || "main";
  if (!navigate(id, "instant")) document.getElementById(id)?.scrollIntoView();
});
window.addEventListener("pageshow", measure);
window.addEventListener("hashchange", () =>
  navigate(location.hash.slice(1) || "main", "instant"),
);
window.addEventListener("load", () => {
  measure();
  if (location.hash) navigate(location.hash.slice(1), "instant");
});
// Pause videos before enabling the stage, then play only what is visible.
videos.forEach((video) => video.pause());
document.documentElement.classList.add("js-enabled");
measure();
if (location.hash)
  requestAnimationFrame(() => navigate(location.hash.slice(1), "instant"));
document.fonts.ready.then(measure);
