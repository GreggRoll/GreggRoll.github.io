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
- Feature copy and destinations come from the four app projects and their public demos.
- MyJourney and VO2Cue images are their existing public showcase assets.
- Grave Maintenance images show its browser prototype.
- Time Boxed images show its interactive **web preview**, clearly labeled on the homepage. Replace with native app screenshots when available.
- LinkedIn requires a confirmed profile URL. The site shows an honest pending label until one is supplied. X defaults to the account linked on GreggRoll’s public GitHub profile.

## Interaction

Each gallery supports swipe, keyboard arrows, previous/next controls, direct slide selection, and expanded screenshots. Galleries never autoplay. Scroll reveals honor reduced motion. The app navigator remains visible while browsing the showcases. External links open separately with `noopener noreferrer`.
