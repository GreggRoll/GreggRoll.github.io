# Gregory Adams — portfolio

A static portfolio for https://greggroll.github.io, published by GitHub Pages from the root of `master`. No build step or backend is needed.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. App content, screenshot paths, and social profiles are defined in `script.js`; layout is in `styles.css`.

## Content and assets

- The homepage contains no phone number, street address, or contact email.
- Veteran background comes from the original portfolio.
- Feature copy and destinations come from the five app projects and their public demos.
- MyJourney, VO2Cue, and MyFurBaby images are their existing public showcase assets.
- MyFurBaby links to its website and is labeled coming soon to the App Store.
- Grave Maintenance images show its browser prototype.
- Time Boxed uses crisp SVG previews of the web planner’s actual layout and sample content. These remain clearly labeled as web previews on the homepage.
- LinkedIn links to the confirmed Gregory Adams profile, with sharing parameters removed. X links to the account listed on GreggRoll’s public GitHub profile.

## Interaction

Each gallery supports swipe, keyboard arrows, previous/next controls, direct slide selection, and expanded screenshots. Galleries never autoplay. Only gallery navigation animates, and it honors reduced motion. Page content and navigation stay still while scrolling. The project index wraps naturally on small screens. External links open separately with `noopener noreferrer`.

## Presentation

The homepage uses plain first-person copy and keeps the established charcoal/orange palette. There are no section numbers, uppercase eyebrow labels, decorative dots, scroll progress bars, or entrance animations. Each app has a different composition: a wide planner with side notes, a photo journal with its gallery beside the copy, an interval timer with workout notes, a full-width game gallery, and a pet showcase. Shared gallery controls use descriptive text instead of dots.
