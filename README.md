# Trail IQ Public Website

This repository hosts the public Trail IQ website, task-based help centre and FAQ, privacy policy, and support pages for App Store release.

## Published URLs

- Home: <https://trailiqapp.github.io/>
- Features: <https://trailiqapp.github.io/features.html>
- Guides: <https://trailiqapp.github.io/guides/>
- Guide: <https://trailiqapp.github.io/guides/same-route-vs-average-pace/>
- Guide: <https://trailiqapp.github.io/guides/fastest-run-vs-best-executed-run/>
- Product comparison: <https://trailiqapp.github.io/compare/>
- Same-route comparison: <https://trailiqapp.github.io/compare-runs-same-route/>
- Private running app: <https://trailiqapp.github.io/private-running-app/>
- No-subscription running app: <https://trailiqapp.github.io/no-subscription-running-app/>
- Bluetooth heart-rate app: <https://trailiqapp.github.io/bluetooth-heart-rate-running-app/>
- Help: <https://trailiqapp.github.io/help.html>
- Privacy Policy: <https://trailiqapp.github.io/privacy.html>
- Support: <https://trailiqapp.github.io/support.html>
- Sitemap: <https://trailiqapp.github.io/sitemap.xml>

## App Store Connect URLs

Use these URLs in App Store Connect:

```text
Privacy Policy URL: https://trailiqapp.github.io/privacy.html
Support URL:        https://trailiqapp.github.io/support.html
Marketing URL:      https://trailiqapp.github.io/
```

The marketing URL is optional. The privacy policy and support URLs are the important release-readiness links.

## Files

- `index.html` - product landing page organised around the plan, move, learn, and return journey.
- `features.html` - before/during/after overview of Route Memory 2.0, structured workouts, training context, practical navigation, coaching, sensors, results, portability, and privacy.
- `guides/index.html` - practical route, pacing and effort guide collection.
- `guides/same-route-vs-average-pace/index.html` - why repeated-route context is more informative than one average.
- `guides/fastest-run-vs-best-executed-run/index.html` - how outcome, execution and workout intent differ.
- `compare/index.html` - factual comparison of Trail IQ, Moment, Strava, and Apple Race Route.
- `compare-runs-same-route/index.html` - focused explanation of same-route comparison and Route Memory.
- `private-running-app/index.html` - local-first private training without an account or social feed.
- `no-subscription-running-app/index.html` - Full Access and the one-time purchase model.
- `bluetooth-heart-rate-running-app/index.html` - compatible BLE monitors, live zones, workout HRV and route context.
- `help.html` - plain-language workflows and FAQs for workouts, route lookahead, structured sessions, ghosts, heart rate and movement sensors, coaching, training context, imports, exports, Apple Health, and local data.
- `privacy.html` - Trail IQ Privacy Policy.
- `support.html` - Trail IQ Support page.
- `robots.txt` - crawler access and sitemap location.
- `sitemap.xml` - canonical index of public Trail IQ pages.
- `assets/site.css` - shared styling for the public pages.
- `assets/app-icon.png` - Trail IQ app icon used by the public pages.
- `assets/screen-*.png` - Trail IQ product screenshots, including cadence and heart-rate goal comparisons; see `assets/SCREENSHOTS.md` for capture provenance.
- `assets/site.js` - expands screenshots and opens directly linked help workflows.
- `.nojekyll` - keeps GitHub Pages serving the static files directly.

## Release Notes

Trail IQ is positioned as a local-first fitness and wellness app. The public pages should continue to avoid diagnostic claims, broad unsupported sensor claims, analytics/tracking claims, or any wording that suggests Trail IQ uploads personal health data to Trail IQ servers.

The website reflects implemented features through Trail IQ **1.2.0 (259)**.
Apple's Australian storefront lookup confirmed public version **1.2.0**, released
**17 October 2026**, when checked on **18 October 2026**. Personal Route Strategy Days 1-12 are implemented;
later planned sprints and Apple Watch features are not advertised as available.
The corresponding app version is now publicly available. Website publication
is separate from an App Store submission; these pages do not change app builds,
purchase products or release settings.

Coverage includes the history-based route strategy and live execution guidance,
the optional Session selector, complete workout summaries, concentric comparison
donuts, same-route cadence traces, split baseline markers, selected heart-rate
target bands, and the existing structured sessions, imports, exports, sensor,
training-load, recovery and privacy workflows.

Build 257 adds the evidence-gated Typical and Best Executed recorded Ghosts,
Today's Strategy as a clearly labelled Generated reference, and strategy-aware
spoken coaching with correction priority, cooldowns and stable event identities.
Generated references are never stored as workouts or recorded result baselines.

Build 259 is the prepared release baseline. It changes the build number and
release documentation only; the build-257 feature set and screenshots remain
applicable. Capture build numbers are provenance, not separate advertised app
versions.

Open `index.html` directly in a browser to review the complete local site. Help
links to individual workflows expand the corresponding answer automatically.
