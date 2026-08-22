import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLang, localize, type Lang } from "@/lib/i18n";
import { SiteFooter } from "@/components/SiteFooter";

// Méthodologie et citation : la page de référence (E-E-A-T) que la presse,
// les chercheurs et les assistants IA peuvent relier et citer — sources,
// seuils, limites, licence, formats de citation. Statique, 4 langues.
export const revalidate = 86400;

type Section = { h: string; p: string[] };

const M = {
  fr: {
    title: "Méthodologie FireSight : sources, seuils, limites, citation",
    desc: "Comment FireSight détecte, vérifie et archive les feux de forêt : satellites NASA FIRMS, GOES et Meteosat MTG, témoins vérifiés par IA, seuils d'archivage, précocité mesurée, limites, licence CC BY 4.0 et formats de citation.",
    h1: "Méthodologie, sources et citation",
    intro: "Cette page décrit précisément ce que mesure FireSight, comment, avec quelles limites, et comment réutiliser ou citer ses chiffres. Elle fait foi pour toute donnée publiée sur firesight.io, dans l'API, le serveur MCP et l'open data.",
    sections: [
      { h: "1. Ce que FireSight détecte", p: [
        "FireSight agrège des détections thermiques satellites publiques : NASA FIRMS (capteurs VIIRS à 375 m sur Suomi-NPP, NOAA-20 et NOAA-21, plusieurs passages par jour), NOAA GOES-East et GOES-West (Amériques, rafraîchissement 10 minutes) et EUMETSAT Meteosat MTG FCI Active Fire Monitoring (Europe et Afrique, 10 minutes). Les horodatages sont ceux des agences, en UTC ; FireSight n'en produit aucun.",
        "Un point chaud satellite n'est pas forcément un feu de forêt : il peut s'agir d'un brûlage agricole, d'une torchère industrielle, d'un incendie urbain ou d'une fausse alarme. Les nuages masquent les feux ; une absence de détection n'est pas une absence de feu.",
      ]},
      { h: "2. Fusion et vérification", p: [
        "Les détections sont regroupées en foyers (cellules d'environ 4 km). La première détection sert d'indicateur de l'heure de départ. Chaque foyer reçoit un niveau : « possible » (un seul capteur géostationnaire), « probable » (plusieurs détections ou capteur VIIRS), « corroboré » (recoupé avec des témoignages publics).",
        "Les témoignages (Bluesky, presse via GDELT, Telegram) sont géolocalisés puis évalués deux fois par des modèles d'IA indépendants (pertinence, lieu, fraîcheur) avant d'être rattachés à un foyer. Tout témoignage affiché est public et lié à sa source.",
      ]},
      { h: "3. Archivage et seuils", p: [
        "Un foyer devient une page permanente (mémoire des feux) s'il est corroboré, ou s'il dépasse des seuils : en France, au moins 2 détections ou 20 MW de puissance radiative ; ailleurs, au moins 8 détections ou 100 MW. Les totaux FireSight (bilans, statistiques, observatoire par pays et par mois) comptent ces feux significatifs : ils ne sont pas comparables aux recensements officiels exhaustifs, qui incluent les petits feux éteints avant tout passage satellite.",
        "L'archive commence le 3 août 2026. Chaque fiche conserve la chronologie des détections par capteur, la puissance maximale, le statut (actif ou terminé), les témoignages et les moyens aériens observés à proximité.",
      ]},
      { h: "4. Précocité mesurée", p: [
        "Pour chaque foyer corroboré des 72 dernières heures, FireSight compare l'heure du premier passage satellite et l'heure de publication du premier article de presse repéré. L'écart est l'avance mesurée sur la presse. Elle ne dit rien de l'avance sur les secours, qui disposent de canaux plus rapides (appels d'urgence, vigies, caméras). Les cas et la médiane sont publiés sur la page Précocité.",
      ]},
      { h: "5. Moyens aériens", p: [
        "Les positions des bombardiers d'eau et hélicoptères anti-incendie proviennent de l'ADS-B (transpondeurs), identifiés par immatriculation et type ICAO. Les appareils volent de jour ; une absence sur la carte n'est pas une absence d'engagement.",
      ]},
      { h: "6. Limites et bon usage", p: [
        "FireSight est un service d'information indépendant, pas un canal d'alerte officiel. Aucune décision de sécurité ne doit reposer uniquement sur ces données. En urgence : 18 ou 112 en France, 112 en Europe, 911 en Amérique du Nord, 193 au Brésil.",
        "Les chiffres en temps réel peuvent être révisés lorsqu'un foyer est fusionné, requalifié ou clos. Les pages d'archive indiquent l'heure de dernière mise à jour.",
      ]},
      { h: "7. Données ouvertes et licence", p: [
        "Toutes les données FireSight sont publiées sous licence Creative Commons Attribution 4.0 (CC BY 4.0). Réutilisation libre, y compris commerciale, à condition de créditer « firesight.io » avec un lien. Archive complète en CSV : firesight.io/opendata/feux.csv. API JSON et serveur MCP documentés sur firesight.io/fr/api. Le code source est public sur GitHub.",
      ]},
    ] as Section[],
    citeTitle: "8. Comment citer FireSight",
    citeIntro: "Format conseillé (texte) :",
    citeText: "FireSight (2026). Mémoire des feux de forêt détectés par satellite et témoins vérifiés [jeu de données]. https://firesight.io. Consulté le JJ/MM/AAAA.",
    citeBib: "BibTeX :",
    citeDoi: "Un identifiant pérenne (DOI) du jeu de données est en cours de dépôt ; cette page sera mise à jour.",
    changelogTitle: "Historique",
    changelog: [
      "3 août 2026 : début de l'archive permanente des feux significatifs.",
      "21 août 2026 : allègement du flux temps réel (2 000 foyers les plus pertinents par défaut, full=1 pour l'intégralité).",
      "22 août 2026 : serveur MCP public, observatoire par pays et par mois, page méthodologie.",
    ],
    links: "Voir aussi",
  },
  en: {
    title: "FireSight methodology: sources, thresholds, limits, how to cite",
    desc: "How FireSight detects, verifies and archives wildfires: NASA FIRMS, GOES and Meteosat MTG satellites, AI-verified witnesses, archiving thresholds, measured earliness, limits, CC BY 4.0 licence and citation formats.",
    h1: "Methodology, sources and citation",
    intro: "This page states precisely what FireSight measures, how, with which limits, and how to reuse or cite its figures. It is the reference for every number published on firesight.io, in the API, the MCP server and the open data.",
    sections: [
      { h: "1. What FireSight detects", p: [
        "FireSight aggregates public satellite thermal detections: NASA FIRMS (375 m VIIRS sensors on Suomi-NPP, NOAA-20 and NOAA-21, several passes a day), NOAA GOES-East and GOES-West (Americas, 10-minute refresh) and EUMETSAT Meteosat MTG FCI Active Fire Monitoring (Europe and Africa, 10 minutes). Timestamps are the agencies' own, in UTC; FireSight produces none.",
        "A satellite hotspot is not necessarily a wildfire: it can be an agricultural burn, an industrial flare, an urban fire or a false alarm. Clouds hide fires; no detection does not mean no fire.",
      ]},
      { h: "2. Fusion and verification", p: [
        "Detections are clustered into fire events (cells of about 4 km). The first detection is the proxy for ignition time. Each event gets a level: 'possible' (a single geostationary sensor), 'probable' (several detections or a VIIRS sensor), 'corroborated' (cross-checked with public witness reports).",
        "Witness reports (Bluesky, press via GDELT, Telegram) are geoparsed then assessed twice by independent AI models (relevance, place, recency) before being attached to an event. Every displayed report is public and linked to its source.",
      ]},
      { h: "3. Archiving and thresholds", p: [
        "An event becomes a permanent page (fire memory) when it is corroborated, or above thresholds: in France, at least 2 detections or 20 MW of fire radiative power; elsewhere, at least 8 detections or 100 MW. FireSight totals (daily reports, statistics, per-country and per-month observatory) count these significant fires: they are not comparable to exhaustive official tallies, which include small fires extinguished before any satellite pass.",
        "The archive starts on August 3, 2026. Each record keeps the per-sensor detection timeline, peak power, status (active or ended), witness reports and firefighting aircraft observed nearby.",
      ]},
      { h: "4. Measured earliness", p: [
        "For every corroborated event of the last 72 hours, FireSight compares the time of the first satellite pass with the publication time of the first press article found. The gap is the measured lead over the press. It says nothing about a lead over emergency services, which have faster channels (emergency calls, lookouts, cameras). Cases and the median are published on the Earliness page.",
      ]},
      { h: "5. Firefighting aircraft", p: [
        "Positions of water bombers and firefighting helicopters come from ADS-B transponders, identified by registration and ICAO type. Aircraft fly in daylight; absence on the map is not absence of deployment.",
      ]},
      { h: "6. Limits and proper use", p: [
        "FireSight is an independent information service, not an official alert channel. No safety decision should rely on this data alone. In an emergency: 112 in Europe, 911 in North America, 193 in Brazil, or the local emergency number.",
        "Real-time figures may be revised when an event is merged, requalified or closed. Archive pages show their last update time.",
      ]},
      { h: "7. Open data and licence", p: [
        "All FireSight data is published under Creative Commons Attribution 4.0 (CC BY 4.0). Free reuse, including commercial, provided 'firesight.io' is credited with a link. Full archive as CSV: firesight.io/opendata/feux.csv. JSON API and MCP server documented at firesight.io/en/api. Source code is public on GitHub.",
      ]},
    ] as Section[],
    citeTitle: "8. How to cite FireSight",
    citeIntro: "Suggested format (text):",
    citeText: "FireSight (2026). Archive of wildfires detected by satellite and verified witnesses [dataset]. https://firesight.io. Accessed YYYY-MM-DD.",
    citeBib: "BibTeX:",
    citeDoi: "A persistent identifier (DOI) for the dataset is being registered; this page will be updated.",
    changelogTitle: "Changelog",
    changelog: [
      "August 3, 2026: start of the permanent archive of significant fires.",
      "August 21, 2026: lighter real-time feed (2,000 most relevant clusters by default, full=1 for everything).",
      "August 22, 2026: public MCP server, per-country and per-month observatory, methodology page.",
    ],
    links: "See also",
  },
  es: {
    title: "Metodología firesight: fuentes, umbrales, límites, cómo citar",
    desc: "Cómo FireSight detecta, verifica y archiva los incendios forestales: satélites NASA FIRMS, GOES y Meteosat MTG, testigos verificados por IA, umbrales de archivo, precocidad medida, límites, licencia CC BY 4.0 y formatos de cita.",
    h1: "Metodología, fuentes y cita",
    intro: "Esta página describe con precisión qué mide FireSight, cómo, con qué límites y cómo reutilizar o citar sus cifras. Es la referencia para todo dato publicado en firesight.io, en la API, el servidor MCP y los datos abiertos.",
    sections: [
      { h: "1. Qué detecta FireSight", p: [
        "FireSight agrega detecciones térmicas satelitales públicas: NASA FIRMS (sensores VIIRS de 375 m en Suomi-NPP, NOAA-20 y NOAA-21, varios pases al día), NOAA GOES-Este y GOES-Oeste (Américas, actualización cada 10 minutos) y EUMETSAT Meteosat MTG FCI Active Fire Monitoring (Europa y África, 10 minutos). Las marcas de tiempo son las de las agencias, en UTC; FireSight no produce ninguna.",
        "Un punto caliente satelital no es necesariamente un incendio forestal: puede ser una quema agrícola, una antorcha industrial, un incendio urbano o una falsa alarma. Las nubes ocultan los incendios; la ausencia de detección no significa ausencia de fuego.",
      ]},
      { h: "2. Fusión y verificación", p: [
        "Las detecciones se agrupan en focos (celdas de unos 4 km). La primera detección es el indicador de la hora de inicio. Cada foco recibe un nivel: « posible » (un solo sensor geoestacionario), « probable » (varias detecciones o sensor VIIRS), « corroborado » (cruzado con testimonios públicos).",
        "Los testimonios (Bluesky, prensa vía GDELT, Telegram) se geolocalizan y se evalúan dos veces por modelos de IA independientes (pertinencia, lugar, frescura) antes de asociarse a un foco. Todo testimonio mostrado es público y enlaza a su fuente.",
      ]},
      { h: "3. Archivo y umbrales", p: [
        "Un foco se convierte en página permanente si está corroborado o supera umbrales: en Francia, al menos 2 detecciones o 20 MW; en el resto del mundo, al menos 8 detecciones o 100 MW. Los totales de FireSight cuentan estos incendios significativos y no son comparables con los recuentos oficiales exhaustivos.",
        "El archivo empieza el 3 de agosto de 2026. Cada ficha conserva la cronología de detecciones por sensor, la potencia máxima, el estado, los testimonios y los medios aéreos observados cerca.",
      ]},
      { h: "4. Precocidad medida", p: [
        "Para cada foco corroborado de las últimas 72 horas, FireSight compara la hora del primer pase satelital con la hora de publicación del primer artículo de prensa encontrado. La diferencia es la ventaja medida sobre la prensa; no dice nada sobre una ventaja frente a los servicios de emergencia.",
      ]},
      { h: "5. Medios aéreos", p: [
        "Las posiciones de aviones cisterna y helicópteros provienen de transpondedores ADS-B, identificados por matrícula y tipo OACI. Los aparatos vuelan de día; su ausencia en el mapa no significa ausencia de intervención.",
      ]},
      { h: "6. Límites y buen uso", p: [
        "FireSight es un servicio de información independiente, no un canal oficial de alerta. Ninguna decisión de seguridad debe basarse solo en estos datos. En emergencia: 112 en Europa, 911 en América del Norte o el número local.",
      ]},
      { h: "7. Datos abiertos y licencia", p: [
        "Todos los datos de FireSight se publican bajo Creative Commons Atribución 4.0 (CC BY 4.0): reutilización libre, incluso comercial, citando « firesight.io » con un enlace. Archivo completo en CSV: firesight.io/opendata/feux.csv. API JSON y servidor MCP documentados en firesight.io/en/api. Código fuente público en GitHub.",
      ]},
    ] as Section[],
    citeTitle: "8. Cómo citar a FireSight",
    citeIntro: "Formato sugerido (texto):",
    citeText: "FireSight (2026). Archivo de incendios forestales detectados por satélite y testigos verificados [conjunto de datos]. https://firesight.io. Consultado el DD/MM/AAAA.",
    citeBib: "BibTeX:",
    citeDoi: "Se está registrando un identificador persistente (DOI) del conjunto de datos; esta página se actualizará.",
    changelogTitle: "Historial",
    changelog: [
      "3 de agosto de 2026: inicio del archivo permanente de incendios significativos.",
      "22 de agosto de 2026: servidor MCP público, observatorio por país y por mes, página de metodología.",
    ],
    links: "Ver también",
  },
  pt: {
    title: "Metodologia firesight: fontes, limiares, limites, como citar",
    desc: "Como o FireSight detecta, verifica e arquiva incêndios florestais: satélites NASA FIRMS, GOES e Meteosat MTG, testemunhas verificadas por IA, limiares de arquivamento, precocidade medida, limites, licença CC BY 4.0 e formatos de citação.",
    h1: "Metodologia, fontes e citação",
    intro: "Esta página descreve com precisão o que o FireSight mede, como, com quais limites e como reutilizar ou citar seus números. É a referência para todo dado publicado em firesight.io, na API, no servidor MCP e nos dados abertos.",
    sections: [
      { h: "1. O que o FireSight detecta", p: [
        "O FireSight agrega detecções térmicas de satélite públicas: NASA FIRMS (sensores VIIRS de 375 m no Suomi-NPP, NOAA-20 e NOAA-21, várias passagens por dia), NOAA GOES-Leste e GOES-Oeste (Américas, atualização a cada 10 minutos) e EUMETSAT Meteosat MTG FCI Active Fire Monitoring (Europa e África, 10 minutos). Os horários são os das agências, em UTC; o FireSight não produz nenhum.",
        "Um ponto quente de satélite não é necessariamente um incêndio florestal: pode ser uma queimada agrícola, uma tocha industrial, um incêndio urbano ou um falso alarme. Nuvens escondem incêndios; ausência de detecção não significa ausência de fogo.",
      ]},
      { h: "2. Fusão e verificação", p: [
        "As detecções são agrupadas em focos (células de cerca de 4 km). A primeira detecção é o indicador da hora de início. Cada foco recebe um nível: « possível » (um único sensor geoestacionário), « provável » (várias detecções ou sensor VIIRS), « corroborado » (cruzado com relatos públicos).",
        "Os relatos (Bluesky, imprensa via GDELT, Telegram) são geolocalizados e avaliados duas vezes por modelos de IA independentes (relevância, local, atualidade) antes de serem associados a um foco. Todo relato exibido é público e vinculado à fonte.",
      ]},
      { h: "3. Arquivamento e limiares", p: [
        "Um foco vira página permanente se for corroborado ou ultrapassar limiares: na França, pelo menos 2 detecções ou 20 MW; no resto do mundo, pelo menos 8 detecções ou 100 MW. Os totais do FireSight contam esses incêndios significativos e não são comparáveis aos levantamentos oficiais exaustivos.",
        "O arquivo começa em 3 de agosto de 2026. Cada ficha guarda a cronologia das detecções por sensor, a potência máxima, o status, os relatos e os meios aéreos observados nas proximidades.",
      ]},
      { h: "4. Precocidade medida", p: [
        "Para cada foco corroborado das últimas 72 horas, o FireSight compara a hora da primeira passagem de satélite com a hora de publicação do primeiro artigo de imprensa encontrado. A diferença é a vantagem medida sobre a imprensa; não diz nada sobre uma vantagem em relação aos serviços de emergência.",
      ]},
      { h: "5. Meios aéreos", p: [
        "As posições de aviões-tanque e helicópteros vêm de transponders ADS-B, identificados por matrícula e tipo OACI. As aeronaves voam de dia; ausência no mapa não significa ausência de atuação.",
      ]},
      { h: "6. Limites e bom uso", p: [
        "O FireSight é um serviço de informação independente, não um canal oficial de alerta. Nenhuma decisão de segurança deve se basear apenas nesses dados. Em emergência: 193 no Brasil, 112 em Portugal e na Europa, 911 na América do Norte.",
      ]},
      { h: "7. Dados abertos e licença", p: [
        "Todos os dados do FireSight são publicados sob Creative Commons Atribuição 4.0 (CC BY 4.0): reutilização livre, inclusive comercial, citando « firesight.io » com um link. Arquivo completo em CSV: firesight.io/opendata/feux.csv. API JSON e servidor MCP documentados em firesight.io/en/api. Código-fonte público no GitHub.",
      ]},
    ] as Section[],
    citeTitle: "8. Como citar o FireSight",
    citeIntro: "Formato sugerido (texto):",
    citeText: "FireSight (2026). Arquivo de incêndios florestais detectados por satélite e testemunhas verificadas [conjunto de dados]. https://firesight.io. Acessado em DD/MM/AAAA.",
    citeBib: "BibTeX:",
    citeDoi: "Um identificador persistente (DOI) do conjunto de dados está sendo registrado; esta página será atualizada.",
    changelogTitle: "Histórico",
    changelog: [
      "3 de agosto de 2026: início do arquivo permanente de incêndios significativos.",
      "22 de agosto de 2026: servidor MCP público, observatório por país e por mês, página de metodologia.",
    ],
    links: "Ver também",
  },
} as const;

const BIBTEX = `@misc{firesight2026,
  author = {FireSight},
  title  = {firesight: wildfire detections and archive (satellite + verified witnesses)},
  year   = {2026},
  url    = {https://firesight.io},
  note   = {CC BY 4.0. Open data: https://firesight.io/opendata/feux.csv}
}`;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = isValidLang(lang) ? lang : "en";
  const t = localize(M, l);
  return {
    title: t.title,
    description: t.desc,
    alternates: {
      canonical: `/${l}/methodologie`,
      languages: { fr: "/fr/methodologie", en: "/en/methodologie", es: "/es/methodologie", pt: "/pt/methodologie" },
    },
  };
}

export default async function MethodologyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();
  const t = localize(M, lang);
  const h2 = { fontFamily: "var(--font-display)", color: "var(--ink)" } as const;
  const code = { background: "var(--charcoal)", color: "#E8E6E1", borderRadius: 12, padding: "12px 16px", fontSize: 12.5, overflowX: "auto" as const };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: t.h1,
    description: t.desc,
    inLanguage: lang,
    url: `https://firesight.io/${lang}/methodologie`,
    dateModified: "2026-08-22",
    author: { "@id": "https://firesight.io/#org" },
    publisher: { "@id": "https://firesight.io/#org" },
    about: {
      "@type": "Dataset",
      name: "FireSight wildfire archive",
      url: `https://firesight.io/${lang}/statistiques`,
      license: "https://creativecommons.org/licenses/by/4.0/",
      distribution: [{ "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: "https://firesight.io/opendata/feux.csv" }],
    },
  };
  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FireSight", item: `https://firesight.io/${lang}` },
      { "@type": "ListItem", position: 2, name: t.h1, item: `https://firesight.io/${lang}/methodologie` },
    ],
  };
  const seeAlso: { href: string; label: string }[] = [
    { href: `/${lang}/statistiques`, label: { fr: "Observatoire et statistiques", en: "Observatory and statistics", es: "Observatorio y estadísticas", pt: "Observatório e estatísticas" }[lang] },
    { href: `/${lang === "es" || lang === "pt" ? "en" : lang}/precocite`, label: { fr: "Précocité mesurée", en: "Measured earliness", es: "Precocidad medida (EN)", pt: "Precocidade medida (EN)" }[lang] },
    { href: `/${lang === "es" || lang === "pt" ? "en" : lang}/api`, label: { fr: "API, open data et serveur MCP", en: "API, open data and MCP server", es: "API, datos abiertos y servidor MCP", pt: "API, dados abertos e servidor MCP" }[lang] },
    { href: `/${lang}/a-propos`, label: { fr: "À propos de FireSight", en: "About FireSight", es: "Sobre FireSight", pt: "Sobre o FireSight" }[lang] },
  ];

  return (
    <div className="k-scroll h-full overflow-y-auto" style={{ background: "var(--paper)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14" style={{ color: "var(--ink-2)" }}>
        <h1 className="mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", color: "var(--ink)" }}>{t.h1}</h1>
        <p className="mb-8 text-[15px] leading-relaxed">{t.intro}</p>

        {t.sections.map((s) => (
          <section key={s.h} className="mb-7 text-[14.5px] leading-relaxed">
            <h2 className="mb-2 text-[19px] font-semibold" style={h2}>{s.h}</h2>
            {s.p.map((p, i) => (
              <p key={i} className="mb-2">{p}</p>
            ))}
          </section>
        ))}

        <section className="mb-7 text-[14.5px] leading-relaxed">
          <h2 className="mb-2 text-[19px] font-semibold" style={h2}>{t.citeTitle}</h2>
          <p className="mb-2">{t.citeIntro}</p>
          <pre style={code}>{t.citeText}</pre>
          <p className="mt-3 mb-2">{t.citeBib}</p>
          <pre style={code}>{BIBTEX}</pre>
          <p className="mt-3 text-[13.5px]" style={{ color: "var(--ink-3)" }}>{t.citeDoi}</p>
        </section>

        <section className="mb-7 text-[14px] leading-relaxed">
          <h2 className="mb-2 text-[17px] font-semibold" style={h2}>{t.changelogTitle}</h2>
          <ul className="list-disc space-y-1 pl-5">
            {t.changelog.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 text-[14px]">
          <h2 className="mb-2 text-[17px] font-semibold" style={h2}>{t.links}</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {seeAlso.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: "var(--link)" }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
