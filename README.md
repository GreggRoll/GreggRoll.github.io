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

The description and links on the left follow the current app. While an app is fully open, its screenshots cycle every 4.5 seconds. Previous/next buttons and keyboard arrows provide manual browsing, with wraparound. Cycling pauses during mouse hover or keyboard focus, while the tab is hidden, and when the app is closing. The shared pause/play control also pauses the slideshow; reduced motion disables automatic cycling by default. Each preview expands from its actual Home Screen icon and returns there before the next opens. Scrolling backward reverses the sequence. The final scene has enough scroll space to close before the biography comes into view.

Click an app icon or the pet widget to jump to its fully open preview. The iPhone dock and the website’s bottom bar provide email (GregInPublic@icloud.com), X, GitHub, and LinkedIn links. The iPhone Home indicator returns to the introduction. App fragment links (for example `/#time-boxed`) work on entry and when navigating browser history. On phones, copy sits above the device; shorter screens use a smaller device and tighter composition.

Inactive panels are removed from keyboard and assistive-technology navigation. Native page scrolling stays available. Reduced motion replaces the scale animation with a direct switch and pauses videos by default. The pause/play control manages motion, and hidden widget videos stop playing. The introduction, biography, social links, and an app link fallback remain usable without JavaScript.

## Content and assets

- Bio and app descriptions retain the original portfolio content.
- Each app links to its existing website/demo and GitHub repository.
- VO2Cue, MyJourney, and Time Boxed have their existing App Store links.
- My Fur Baby is labeled coming soon to the App Store; Grave Maintenance is identified as a browser prototype. No store URLs are invented.
- Four galleries use the complete iPhone App Store screenshot sets from the Desktop app projects: VO2Cue (6), MyJourney (3), Time Boxed (7), and My Fur Baby (8).
- Grave Maintenance has no App Store set; its gallery cycles 4 browser-game captures from the Desktop project.
- Screenshot artwork is displayed proportionally without cropping. WebP derivatives keep the full artwork while reducing download size; the original Desktop exports are unchanged. See `assets/screenshots/README.md` for source folders.
- The animated boxing-rhino Home Screen widget remains separate from My Fur Baby’s screenshot gallery, with its existing pause/play behavior.
- VO2Cue’s app-page link is https://greggroll.github.io/VO2Cue/.
- The homepage uses the original charcoal dark palette with peach accents.
- The Home Screen has one medium animated boxing rhino widget, copied with its poster from the supplied local MyFurBaby website assets. The decorative Make Your Day widget is removed.
- The homepage lists the requested contact email and contains no phone number or street address.
- Fonts come from Google Fonts, with local sans-serif and Georgia fallbacks.

## Verification

The redesign was checked in Chromium at desktop, tablet, and mobile sizes, including 1440×900, 1024×768, 768×1024, 390×844, 375×667, and 320×568. Browser checks cover all five open/hold/close sequences, backward scrolling, app-icon and Home navigation, direct fragments, reduced motion, video pause/play, horizontal overflow, and the no-JavaScript fallback. Gallery checks additionally verify all 28 images, cycling for every app, wraparound, pause/play, keyboard navigation, reduced motion, and controls at mobile and short desktop sizes. Local assets load successfully without page errors.

For source checks:

```sh
node --check script.js
git diff --check
```
