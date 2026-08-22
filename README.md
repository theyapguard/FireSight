<p align="center">
  <img src="./public/brand/firesight.svg" alt="FireSight logo — an eye watching over a flame" width="440" />
</p>

<h2 align="center">Every spark in sight.</h2>

<p align="center"><strong>FireSight</strong> — early wildfire detection, worldwide, free.</p>

<p align="center">
  <a href="https://firesight.io"><img src="https://img.shields.io/badge/live%20map-firesight.io-F6C83E" alt="Live map" /></a>
  <a href="https://firesight.io/en/api"><img src="https://img.shields.io/badge/API-JSON%20%7C%20CSV%20%7C%20RSS-1B1C1E" alt="API" /></a>
  <a href="https://firesight.io/en/api#mcp"><img src="https://img.shields.io/badge/MCP-firesight.io%2Fapi%2Fmcp-6B4FBB" alt="MCP server" /></a>
  <a href="https://firesight.io/opendata/feux.csv"><img src="https://img.shields.io/badge/open%20data-CC%20BY%204.0-2DA2BB" alt="Open data" /></a>
</p>

> The canary once sang in the coal mine; FireSight simply keeps its eyes on the fire — satellites, sensors and verified witnesses, so every ignition is seen the moment it starts, often before the media.

**FireSight** is a free, independent, near real-time world map of wildfire ignitions. It fuses satellite fire detections — NASA FIRMS (VIIRS 375 m), NOAA GOES and EUMETSAT Meteosat MTG (10-minute refresh) — with citizen reports verified twice by AI, tracks firefighting aircraft live (ADS-B), and archives every significant fire as a permanent page. Goal: surface fire starts as early as possible, often before the media. Available in French, English, Spanish and Portuguese.

> ⚠️ FireSight is an information service, **not an official alert channel**. In an emergency call 112 (Europe), 911 (North America), 193 (Brazil) or your local emergency number.

## Use it

| What | Where |
| --- | --- |
| Live map (4 languages) | <https://firesight.io/en> · [fr](https://firesight.io/fr) · [es](https://firesight.io/es) · [pt](https://firesight.io/pt) |
| Wildfires by country / US state | <https://firesight.io/en/fires> (e.g. [/en/fires/california](https://firesight.io/en/fires/california)) |
| Feux par département (France) | <https://firesight.io/fr/feux> |
| Observatory: citable figures per country and month | <https://firesight.io/en/statistiques> (e.g. [/en/statistiques/brazil/2026-08](https://firesight.io/en/statistiques/brazil/2026-08)) |
| Fire memory: one permanent page per significant fire | <https://firesight.io/fr/feu> |
| Water bombers live | <https://firesight.io/en/canadair> |
| Measured earliness over press coverage | <https://firesight.io/en/precocite> |
| Methodology, limits, how to cite | <https://firesight.io/en/methodologie> |
| Embed the map (free widget) | <https://firesight.io/en/widget> |

## Data, API and MCP server

Everything is free, without key or account. Attribution required: “Source: firesight.io” with a link (CC BY 4.0).

- **REST API** — fire clusters `https://firesight.io/api/events?hours=24` (add `full=1` for the complete set), verified witness signals `https://firesight.io/api/signals?hours=24`. Docs: <https://firesight.io/en/api>.
- **Open data** — full archive of significant fires as CSV, continuously updated: <https://firesight.io/opendata/feux.csv>. RSS feed: <https://firesight.io/feed.xml>.
- **MCP server** (Model Context Protocol, Streamable HTTP) — let Claude, ChatGPT, Cursor or any agent query FireSight directly:

  ```json
  { "mcpServers": { "firesight": { "url": "https://firesight.io/api/mcp" } } }
  ```

  Tools: `active_fires`, `fire_archive_search`, `fire_details`, `wildfire_stats`, `firefighting_aircraft`, `earliness_cases`. Stdio-only clients: `npx -y mcp-remote https://firesight.io/api/mcp`. Registry manifest: [`server.json`](server.json).

- **JavaScript client** — [`packages/firesight-fires`](packages/firesight-fires): a tiny, dependency-free wrapper around the public API.
- **For LLMs** — <https://firesight.io/llms.txt>.

## How it works (short version)

1. Satellite hotspots from NASA FIRMS, GOES and Meteosat MTG are clustered into fire events (≈4 km cells); the first detection is the proxy for ignition time.
2. Public witness reports (Bluesky, press via GDELT, Telegram) are geoparsed and assessed twice by independent AI models before being attached to an event (`possible` → `probable` → `corrobore`).
3. Significant events (corroborated, or above detection/power thresholds) are archived with a permanent page; aggregates feed the daily reports, the observatory and the API.
4. Firefighting aircraft are identified from ADS-B (registration, ICAO type) and shown live.

Full methodology, thresholds and limits: <https://firesight.io/en/methodologie>.

## Architecture

Next.js (App Router) on Vercel, Supabase (archive, witness signals), Vercel Blob (caches), GitHub Actions cron every 5 minutes.

- `src/lib/firms.ts`, `goesdirect.ts`, `mtg.ts` — satellite ingestion; `cluster.ts` — event clustering
- `src/lib/social.ts`, `triage.ts`, `press.ts` — witness reports and AI verification
- `src/lib/firearchive.ts`, `observatory.ts` — fire memory and aggregates; `precocity.ts` — measured earliness
- `src/app/api/events`, `api/signals`, `api/mcp` — public API and MCP server; `src/app/opendata` — CSV
- `src/components/FireMap.tsx` — MapLibre GL map; `src/app/[lang]/…` — pages in fr/en/es/pt
- `scripts/seo-guard.mjs` — structural SEO contracts enforced in CI

## Development

```bash
# .env.local: a free NASA FIRMS map key is enough for the live map
# https://firms.modaps.eosdis.nasa.gov/api/map_key/
echo "FIRMS_MAP_KEY=your_key" > .env.local
npm install
npm run dev
```

Archive, witness signals and aircraft need Supabase and a few provider keys; every page degrades gracefully without them (the CI builds and runs the SEO guard with no secrets).

## Cite FireSight

> FireSight (2026). Archive of wildfires detected by satellite and verified witnesses [dataset]. https://firesight.io. Accessed YYYY-MM-DD.

Data licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). A DOI for the dataset is being registered.

## Contributing

Ideas, data sources, bug reports: open an issue or see <https://firesight.io/fr/contribuer>. Contact: contact@firesight.io.

---

### En français

**Chaque étincelle en ligne de mire.** FireSight est une carte mondiale, gratuite et indépendante, des départs de feu détectés par satellite (NASA FIRMS, GOES, Meteosat MTG) et recoupés avec des témoignages vérifiés par IA, avec suivi des Canadair et bombardiers d'eau en direct, mémoire permanente des feux, observatoire par pays et par mois, API, open data (CC BY 4.0) et serveur MCP. Service d'information, pas un canal d'alerte officiel : en urgence, 18 ou 112. Méthodologie complète : <https://firesight.io/fr/methodologie>.
