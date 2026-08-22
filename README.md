<div align="center">

<img src="./public/brand/firesight.svg" alt="FireSight logo — an eye watching over a flame" width="420" />

# 🔥 FireSight

### Every spark in sight. 🛰️👁️

**Early wildfire detection — worldwide, free, and often before the media.**

🌍 *Built for* ***NextStep Hacks 2026*** *— theme:* ***Earth Forward*** 🌱

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_16-App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![MapLibre GL](https://img.shields.io/badge/MapLibre_GL_5-396CB2?style=for-the-badge&logo=maplibre&logoColor=white)](https://maplibre.org)

[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=black)](https://supabase.com)
[![NASA FIRMS](https://img.shields.io/badge/NASA_FIRMS-VIIRS_375m-E03C31?style=for-the-badge&logo=nasa&logoColor=white)](https://firms.modaps.eosdis.nasa.gov)
[![NOAA GOES](https://img.shields.io/badge/NOAA-GOES-003087?style=for-the-badge)](https://www.noaa.gov)
[![EUMETSAT](https://img.shields.io/badge/EUMETSAT-Meteosat_MTG-1B4F8A?style=for-the-badge)](https://www.eumetsat.int)
[![MCP Server](https://img.shields.io/badge/MCP-Server-6B4FBB?style=for-the-badge&logo=modelcontextprotocol&logoColor=white)](https://modelcontextprotocol.io)

[![CI](https://img.shields.io/github/actions/workflow/status/theyapguard/FireSight/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white)](https://github.com/theyapguard/FireSight/actions)
[![License: CC BY 4.0](https://img.shields.io/badge/Data-CC_BY_4.0-2DA2BB?style=for-the-badge&logo=creativecommons&logoColor=white)](https://creativecommons.org/licenses/by/4.0/)
[![Languages](https://img.shields.io/badge/i18n-FR_·_EN_·_ES_·_PT-F6C83E?style=for-the-badge)](#-features)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](#-contributing)

</div>

---

> 🐤 *The canary once sang in the coal mine. FireSight simply keeps its eyes on the fire — satellites, sensors and verified witnesses — so every ignition is seen the moment it starts.*

> ⚠️ **FireSight is an information service, not an official alert channel.** In an emergency call **112** (Europe), **911** (North America), **193** (Brazil) or your local emergency number.

---

## 📑 Table of Contents

- [🌍 The Problem](#-the-problem)
- [💡 The Solution](#-the-solution)
- [📸 Demo](#-demo)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🧠 How It Works](#-how-it-works)
- [🧰 Tech Stack](#-tech-stack)
- [🔌 API, Open Data & MCP](#-api-open-data--mcp)
- [🚀 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🏆 Why FireSight Wins (Judging Criteria)](#-why-firesight-wins-judging-criteria)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📜 License & Citation](#-license--citation)

---

## 🌍 The Problem

Wildfires are getting **bigger, faster and more frequent** — and the first hours decide everything. Yet today:

| 😱 Reality | 💥 Impact |
| --- | --- |
| 🕐 Official alerts often arrive **hours late** | Families evacuate too late; first responders lose the "golden hour" |
| 📰 People learn about fires **from the media** | News breaks *after* the fire is already out of control |
| 🛰️ Satellite data exists, but is **raw and scattered** | NASA/NOAA/EUMETSAT feeds are hard to read, spread across portals |
| 🗣️ Witness reports drown in **social noise** | A tweet saying "fire near my village" never reaches the right people |
| 💸 Existing dashboards are **paywalled or regional** | Most of the world has no free, global, real-time picture |

**The result:** every wildfire season, communities are surprised by fires that satellites had already seen. 🔥

---

## 💡 The Solution

**FireSight is a free, independent, near real-time world map of wildfire ignitions.** It sees the spark the moment it starts — and tells everyone, in 4 languages, for free.

| 🧩 Piece | ✅ What FireSight does |
| --- | --- |
| 🛰️ **Satellites** | Fuses **NASA FIRMS (VIIRS 375 m)**, **NOAA GOES** and **EUMETSAT Meteosat MTG** (10-minute refresh) into one live feed |
| 🧠 **AI-verified witnesses** | Citizen reports (Bluesky, press via GDELT, Telegram) are geoparsed and **checked twice by independent AI models** before being shown |
| ✈️ **Live aircraft tracking** | Follows water bombers & firefighting planes in real time via **ADS-B** |
| 📖 **Fire memory** | Every significant fire gets a **permanent, citable archive page** |
| 🔔 **Alerts for anyone** | "Alert me on this area" — free **web-push notifications**, no account needed |
| 🌐 **Open by design** | Free REST API, open data (CC BY 4.0), RSS, and an **MCP server** so AI agents can query fires directly |

**One goal:** surface fire starts as early as possible — often **before the media**. ⏱️

---

## 📸 Demo

<div align="center">

<img src="./docs/screenshots/live-globe-africa.png" alt="FireSight live globe — active fires across Africa, Europe and Asia" width="90%" />

*🌍 Live 3D globe — every active ignition on Earth, updated every few minutes. 15 firefighting aircraft airborne. 116 active fires in Russia right now.*

<br/><br/>

<img src="./docs/screenshots/live-globe-americas.png" alt="FireSight 24-hour view — the Americas burning" width="90%" />

*🕐 24-hour window over the Americas — 254 active fires in Brazil, tracked in real time.*

<br/><br/>

<img src="./docs/screenshots/live-globe-amazon.png" alt="FireSight zoomed into South America — fire clusters over Brazil and Bolivia" width="90%" />

*🔎 Zoom into South America — clustered fire events, per-country live counters, one-tap area alerts.*

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🗺️ See everything, live
- 🌐 **Interactive 3D globe & flat map** (MapLibre GL)
- ⏱️ Time windows: **6 h / 24 h / 72 h**
- 💨 **Smoke layer** overlay
- 🔍 Search any city or area + 📍 "My location"
- 🟢 Live counters: active fires per country, aircraft airborne

</td>
<td width="50%">

### 🧠 Trust what you see
- 🤖 **Double AI verification** of every witness report
- 🚦 Confidence levels: `possible` → `probable` → `corroborated`
- 🛰️ Multi-satellite cross-check (VIIRS + GOES + MTG)
- 📰 Measured **earliness vs press coverage** (we publish our lead time!)

</td>
</tr>
<tr>
<td width="50%">

### 🔔 Act on it
- 🆘 **Report a fire** with photo upload
- 🔔 **"Alert me on this area"** — free web-push, no account
- ✈️ Live **water-bomber tracking** (per-aircraft pages)
- 🧯 Fire-risk & strategic layers (NIFC perimeters, DFCI)

</td>
<td width="50%">

### 🌍 Built for everyone
- 🗣️ **4 languages**: French, English, Spanish, Portuguese
- 📊 **Observatory**: citable stats per country & month
- 📖 **Fire memory**: permanent page per significant fire
- 🧩 Free **embeddable widget** for any website
- ♿ Pages **degrade gracefully** with zero secrets configured

</td>
</tr>
</table>

---

## 🏗️ Architecture

```mermaid
flowchart TB
    subgraph Space["🛰️ Eyes in the Sky"]
        FIRMS["🔥 NASA FIRMS<br/>VIIRS 375 m"]
        GOES["🌎 NOAA GOES"]
        MTG["🌍 EUMETSAT<br/>Meteosat MTG · 10 min"]
    end

    subgraph People["🗣️ Eyes on the Ground"]
        BSKY["🦋 Bluesky"]
        GDELT["📰 Press via GDELT"]
        TG["✈️ Telegram"]
        USERS["🆘 User reports<br/>+ photos"]
    end

    subgraph Sky["✈️ Firefighting Fleet"]
        ADSB["📡 ADS-B<br/>aircraft telemetry"]
    end

    subgraph Brain["🧠 FireSight Core — Next.js 16 App Router"]
        INGEST["📥 Ingestion<br/>firms · goesdirect · mtg"]
        CLUSTER["🧮 Event Clustering<br/>~4 km grid · 8-neighbour<br/>connected components"]
        GEO["🗺️ Geoparsing<br/>gazetteer"]
        TRIAGE["🤖 AI Triage ×2<br/>independent models<br/>budget-capped · cached 7 d"]
        CONF["🚦 Confidence Engine<br/>possible → probable → corroborated"]
        ARCHIVE["📖 Fire Archive<br/>permanent pages"]
        PRECO["⏱️ Precocity Meter<br/>our lead time vs press"]
    end

    subgraph Store["💾 Data Layer"]
        SUPA[("🐘 Supabase<br/>fire events · signals<br/>analytics · trends")]
        BLOB[("☁️ Vercel Blob<br/>caches · verdicts")]
    end

    subgraph Out["🚪 Output — free for everyone"]
        MAP["🗺️ Live Map<br/>FR · EN · ES · PT"]
        API["🔌 REST API<br/>JSON · CSV · RSS"]
        MCP["🤖 MCP Server<br/>Claude · ChatGPT · Cursor"]
        PUSH["🔔 Web-Push Alerts"]
        WIDGET["🧩 Embeddable Widget"]
        OPEN["📦 Open Data<br/>CC BY 4.0"]
    end

    CRON["⏰ GitHub Actions<br/>cron every 5 min"] --> Brain

    FIRMS & GOES & MTG --> INGEST
    BSKY & GDELT & TG --> GEO
    USERS --> TRIAGE
    ADSB --> MAP

    INGEST --> CLUSTER
    GEO --> TRIAGE
    TRIAGE --> CONF
    CLUSTER --> CONF
    CONF --> ARCHIVE
    ARCHIVE --> PRECO

    CLUSTER --> BLOB
    TRIAGE --> BLOB
    CONF --> SUPA
    ARCHIVE --> SUPA

    SUPA --> MAP & API & MCP & OPEN
    BLOB --> MAP
    CONF --> PUSH
    MAP --> WIDGET
```

<details>
<summary>🚦 <b>The confidence state machine</b> — how a spark earns trust (click to expand)</summary>

```mermaid
stateDiagram-v2
    [*] --> possible: 🛰️ single satellite detection
    possible --> probable: 🛰️🛰️ multiple detections<br/>or high FRP confidence
    probable --> corrobore: 🗣️ AI-verified witnesses<br/>within range
    possible --> corrobore: 🗣️ strong corroborated signal
    corrobore --> archived: 📖 significant event →<br/>permanent page + API + open data
    probable --> archived: ⚡ above power thresholds
    archived --> [*]: feeds observatory,<br/>daily reports & stats
```

</details>

---

## 🧠 How It Works

1. **🛰️ Satellites spot the heat.** Hotspots from NASA FIRMS, GOES and Meteosat MTG are clustered into fire events on a ~4 km grid (8-neighbour connected components). The **first detection = proxy for ignition time**.
2. **🗣️ Humans confirm it.** Public witness reports (Bluesky, press via GDELT, Telegram) are geoparsed against a gazetteer, then judged **twice by independent AI models** — is this a fire *happening right now*, and *where exactly*? (Goodbye, "The Globe and Mail" → Globe, Arizona traps. 😉)
3. **🚦 Trust is earned.** Events climb `possible` → `probable` → `corroborated`. Significant events get a **permanent archive page**; aggregates feed the observatory, daily reports and the API.
4. **✈️ Help is tracked.** Firefighting aircraft are identified from ADS-B (registration, ICAO type) and shown live.
5. **⏱️ We measure ourselves.** The *precocity* module compares our first detection against first press coverage — and publishes the lead time.

---

## 🧰 Tech Stack

<div align="center">

| 🎨 Frontend | ⚙️ Backend & Data | 🛰️ Sources & AI | 🚧 DevOps & Quality |
| --- | --- | --- | --- |
| Next.js 16 (App Router) | Supabase (Postgres) | NASA FIRMS · VIIRS 375 m | GitHub Actions CI |
| React 19 | Vercel Blob (caches) | NOAA GOES · EUMETSAT MTG | Cron ingest every 5 min |
| TypeScript 5 (strict) | MCP server (`mcp-handler`) | ADS-B aircraft telemetry | Blocking SEO guard (`seo-guard.mjs`) |
| Tailwind CSS 4 | Web-Push notifications | OpenAI double-triage | Lighthouse perf watch |
| MapLibre GL 5 | Zod-validated APIs | GDELT · Bluesky · Telegram | `tsc --noEmit` + build gate |
| h5wasm (HDF5 in WASM) | fflate compression | Gazetteer geoparsing | Zero-secret CI builds |

</div>

### 📈 By the numbers

<div align="center">

| 📄 TS/TSX files | 🧮 Lines of code | 🛰️ Satellite sources | 🗣️ Witness channels | 🌐 Languages | ⏱️ Refresh | 🔌 API routes | 💰 Price |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **124** | **~23 900** | **3 agencies · 5+ instruments** | **3** | **4** | **~10 min** | **15+** | **$0, forever** |

</div>

---

## 🔌 API, Open Data & MCP

Everything is **free — no key, no account.** Attribution required: *"Source: FireSight"* (CC BY 4.0).

| 🎁 What | 📦 Format | 💡 Good for |
| --- | --- | --- |
| **REST API** — live fire clusters & verified witness signals | JSON | Apps, dashboards, research |
| **Open data archive** — every significant fire, continuously updated | CSV | Data science, journalism |
| **RSS feed** — latest significant fires | RSS | Newsrooms, alerts |
| **MCP server** (Model Context Protocol, Streamable HTTP) | MCP | Let Claude, ChatGPT, Cursor or any agent query fires directly |
| **JS client** — [`packages/firesight-fires`](packages/firesight-fires) | npm | Tiny, dependency-free wrapper |

🤖 **MCP tools:** `active_fires` · `fire_archive_search` · `fire_details` · `wildfire_stats` · `firefighting_aircraft` · `earliness_cases` — registry manifest in [`server.json`](server.json).

---

## 🚀 Getting Started

```bash
# 1️⃣ Clone it
git clone https://github.com/theyapguard/FireSight.git
cd FireSight

# 2️⃣ One free key is enough for the live map
#    Get yours: https://firms.modaps.eosdis.nasa.gov/api/map_key/
echo "FIRMS_MAP_KEY=your_key" > .env.local

# 3️⃣ Run it
npm install
npm run dev
```

🎉 Open **http://localhost:3000** — the map is live.

> 💡 Archive, witness signals and aircraft need Supabase + a few provider keys — but **every page degrades gracefully without them**. Our CI builds and runs the full SEO guard with *zero* secrets.

<details>
<summary>🔧 <b>Optional environment variables</b> (click to expand)</summary>

| Variable | 🔓 Unlocks |
| --- | --- |
| `FIRMS_MAP_KEY` | 🛰️ Live satellite map — the only required key |
| `OPENAI_API_KEY` | 🤖 Double AI verification of witness reports |
| `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` | 🗄️ Fire archive, witness signals, observatory |
| `BLOB_READ_WRITE_TOKEN` | ☁️ Shared edge caches |
| `CRON_SECRET` | ⏰ Protects the alert cron endpoint |

</details>

---

## 📂 Project Structure

```
FireSight/
├── 🛰️ src/lib/
│   ├── firms.ts · goesdirect.ts · mtg.ts   # satellite ingestion
│   ├── cluster.ts                          # ~4 km event clustering
│   ├── social.ts · triage.ts · press.ts    # witness reports + double AI verification
│   ├── firearchive.ts · observatory.ts     # fire memory + aggregates
│   ├── precocity.ts                        # measured earliness vs press
│   └── aircraft.ts · perimeters.ts · firerisk.ts
├── 🗺️ src/components/FireMap.tsx           # MapLibre GL live map
├── 🌐 src/app/[lang]/…                     # pages in FR · EN · ES · PT
├── 🔌 src/app/api/                         # events · signals · mcp · report · …
├── 📦 src/app/opendata/                    # open-data CSV
├── 🧰 packages/firesight-fires/            # dependency-free JS client
├── 🐘 supabase/                            # SQL schemas
├── ⏰ .github/workflows/                   # CI + cron ingestion
└── 🛡️ scripts/seo-guard.mjs                # structural SEO contracts in CI
```

---

## 🏆 Why FireSight Wins (Judging Criteria)

| 🥇 Criterion | 🔥 How FireSight answers |
| --- | --- |
| **Originality** | Not another dashboard — a *detection pipeline*: multi-satellite fusion + double-AI-verified citizen signals + live firefighting aircraft + a permanent "fire memory". We even publish our **measured lead time over the press**. |
| **Adherence to Track** | 100% **Earth Forward** 🌱: earlier wildfire detection = faster response = saved forests, saved biodiversity, saved CO₂, saved lives. Free & global, so it helps the communities that need it most. |
| **Completion** | Fully working: live map, alerts, archive, observatory, API, open data, MCP server, embeddable widget, 4 languages — with CI enforcing quality on every push. |
| **Learning** | HDF5 satellite products parsed in WASM (`h5wasm`), connected-components clustering, ADS-B decoding, MCP protocol, web-push — a lot of new ground in one project. |
| **Design** | Clean, friendly, mobile-first UI (see [Demo](#-demo)) with a full design system in [`handoff/`](handoff). |
| **Technology** | 3 satellite constellations + 3 social sources + 2 AI judges + ADS-B + push + MCP — many hard pieces, one elegant pipeline. 🤯 |

---

## 🗺️ Roadmap

- [x] 🛰️ Multi-satellite live detection (FIRMS + GOES + MTG)
- [x] 🤖 Double-AI witness verification
- [x] ✈️ Live firefighting aircraft tracking
- [x] 🔔 Free area alerts (web-push)
- [x] 📖 Permanent fire archive + observatory
- [x] 🤖 MCP server for AI agents
- [ ] 📱 Native mobile app (PWA first)
- [ ] 🌫️ Smoke-drift forecasting
- [ ] 🏘️ Community verification network with local organizations
- [ ] 📡 DOI for the open dataset

---

## 🤝 Contributing

Ideas, data sources, bug reports — **all welcome!** 🙌

1. 📥 Clone the repo: `git clone https://github.com/theyapguard/FireSight.git`
2. 🌿 Create a branch: `git checkout -b feat/my-idea`
3. 💾 Commit: `git commit -m "feat: my idea"`
4. 🚀 Open a PR — CI (types + build + SEO guard) must pass ✅

---

## 📜 License

[MIT](LICENSE) — free to use, learn from, and build on.

---

<div align="center">

### 🌱 Earth Forward — because the planet can't wait for the news. 🔥

**Built with ❤️ for NextStep Hacks 2026**

⭐ *If FireSight sparked your interest, star the repo!* ⭐

</div>
