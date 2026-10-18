# Website Screenshot Provenance

Local website refresh for Trail IQ **1.2.0 (259)**, prepared 16 October 2026.
Build 259 changes release metadata only; capture provenance below is unchanged.
Public app version 1.2.0 was confirmed live in Apple's Australian storefront
on 18 October 2026, with a release date of 17 October 2026.

## Capture Method

New release captures are lossless 1284 x 2778 PNGs from the build-257 iPhone 14
Plus simulator on 16 October. They show the app itself, not composited interface
mockups. The website scales them for layout and offers a full-resolution view
when selected. The upload set is converted to opaque sRGB PNG without resizing
or changing the interface. Three unchanged workflow images, identified below,
are retained from build 256's 3 October capture; they are not relabelled as new.

Maps follow **The Tan Track, Melbourne**, using the real route geometry from the
public Bushwalk GPX used by the app's screenshot fixture script:
<https://api.bushwalk.com/journey/BB4YXL/maps/gpx/en-AU>.

Six illustrative runs provide repeat-route history. Times, heart-rate samples,
cadence, elevation, calories and fitness values are demonstration data, not a
claim about an actual athlete or measured training outcome. Cadence was added to
the simulator-only fixture to show the implemented comparison report. Live
captures use location updates along the real GPX at a running speed. No personal
phone data was changed or used for these captures.

## Images

| Asset | What It Shows | Capture Build |
| --- | --- | --- |
| `screen-home.png` | Start screen with a selected real route | 256, unchanged workflow |
| `screen-result.png` | Complete Workout Result with concentric key-number comparisons | 257 |
| `screen-trends.png` | Results fitness snapshots and training context | 257 |
| `screen-routes.png` | Saved route library with six prior efforts | 257 |
| `screen-session.png` | Optional session picker, templates and saved threshold session | 257 |
| `screen-strategy.png` | Ready route briefing, prior times and Coming Up context | 256, unchanged workflow |
| `screen-live.png` | Live route, pace, distance and distance remaining with Ghost enabled | 257 |
| `screen-ghost.png` | The same live capture with optional recorded Ghost | 257 |
| `screen-ghost-options.png` | Fastest, Latest, Typical and manual recorded Ghost choices | 257 |
| `screen-highlights.png` | Consolidated Result Highlights and Data Details | 256, unchanged workflow |
| `screen-comparison.png` | Route Story map and time-comparison donut | 257 |
| `screen-replay.png` | The same Route Story capture, including available overlay controls | 257 |
| `screen-cadence.png` | Running Cadence concentric comparison and Cadence Over Route | 257 |
| `screen-effort.png` | Selected heart-rate target range, zone donut and timeline | 257 |

The Ready capture intentionally shows the route briefing rather than claiming a
personal strategy is visible without a selected effort goal and the supporting
sensor/history evidence. Feature copy and help explain those prerequisites.

The new Ghost picker capture does not manufacture Best Executed or Generated
choices for the six-run fixture. It shows the options that its actual evidence
supports, including Typical. Help documents the additional eligibility gates.

The matching App Store set is in the app repository at
`AppStoreScreenshots/Build-257-1.2.0-1284x2778/Final-Upload` (ten PNGs). They are
reused for the selected build **259**, whose interface is unchanged. Capture
build provenance remains separate from the final upload/build selection.

Website publication accompanies the live 1.2.0 release; these images do not
change the app binary or App Store settings.
