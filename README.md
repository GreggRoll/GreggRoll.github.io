# Gregory Adams — portfolio

A static portfolio for https://greggroll.github.io, published by GitHub Pages from the root of `master`. No build step or backend is needed.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. App copy, destinations, availability, promotional previews, and accent colors are defined in `script.js`. Layout and responsive breakpoints are in `styles.css`.

## The scrolling showcase

The opening scene introduces Greg beside an interactive iPhone Home Screen. Scrolling opens, holds, and closes five app previews, in order:

1. VO2Cue
2. MyJourney
3. Time Boxed
4. My Fur Baby
5. Grave Maintenance

The description and links on the left follow the current app. Each preview expands from its actual Home Screen icon and returns there before the next opens. Scrolling backward reverses the sequence. The final scene has enough scroll space to close before the biography comes into view.

Click an app icon, the pet widget, or a name in the bottom index to jump to its fully open preview. The iPhone Home indicator returns to the introduction. App fragment links (for example `/#time-boxed`) work on entry and when navigating browser history. On phones, copy sits above the device; shorter screens use a smaller device and tighter composition.

Inactive panels are removed from keyboard and assistive-technology navigation. Native page scrolling stays available. Reduced motion replaces the scale animation with a direct switch and pauses videos by default. The pause/play control manages motion, and hidden widget videos stop playing. The introduction, biography, social links, and an app link fallback remain usable without JavaScript.

## Content and assets

- Bio and app descriptions retain the original portfolio content.
- Each app links to its existing website/demo and GitHub repository.
- VO2Cue, MyJourney, and Time Boxed have their existing App Store links.
- My Fur Baby is labeled coming soon to the App Store; Grave Maintenance is identified as a browser prototype. No store URLs are invented.
- MyJourney and VO2Cue previews use the existing app images.
- Time Boxed uses its existing SVG web-planner preview, explicitly labeled as a web preview.
- Grave Maintenance uses the existing cemetery game screenshot.
- The My Fur Baby widget and clock videos and their still posters come from the app's public website assets. Videos are local, muted, looped, and inline; no generated substitute pet is used.
- The homepage contains no phone number, street address, or contact email.
- Fonts come from Google Fonts, with local sans-serif and Georgia fallbacks.

## Verification

The redesign was checked in Chromium at desktop, tablet, and mobile sizes, including 1440×900, 1024×768, 768×1024, 390×844, 375×667, and 320×568. Browser checks cover all five open/hold/close sequences, backward scrolling, app-icon and Home navigation, direct fragments, reduced motion, video pause/play, horizontal overflow, and the no-JavaScript fallback. Local assets load successfully without page errors.

For source checks:

```sh
node --check script.js
git diff --check
```
