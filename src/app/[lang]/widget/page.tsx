import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLang, localize, type Lang } from "@/lib/i18n";
import { WidgetBuilder } from "@/components/WidgetBuilder";
import { SiteFooter } from "@/components/SiteFooter";
import { KIT, BADGE_HTML } from "@/lib/widget-kit-i18n";

// Page « intégrer la carte » pour médias, mairies, sites météo : le widget
// gratuit contre un lien d'attribution — la machine à backlinks. v2 : un
// générateur par zone (département, pays, monde) en 4 langues — une rédaction
// locale repart avec SA carte en 20 secondes.
const T = {
  fr: {
    metaTitle: "Intégrer la carte des feux FireSight sur votre site (widget gratuit)",
    metaDesc:
      "Médias, mairies, sites météo : intégrez gratuitement la carte des feux en temps réel de FireSight, centrée sur votre département ou votre pays. Générateur de code, 4 langues, mise à jour continue.",
    h1: "Intégrez la carte des feux sur votre site",
    intro:
      "Média, mairie, site météo, blog : la carte FireSight (feux en temps réel, Canadair en direct, fumée) est intégrable gratuitement, centrée sur la zone de votre choix. Une seule condition : conserver le lien d'attribution vers firesight.io.",
    pressTitle: "Pour les rédactions",
    press: [
      "Le widget est libre d'utilisation dans vos articles et pages en direct, y compris en couverture d'un incendie en cours.",
      "Les chiffres de FireSight (feux actifs, détections, chronologies) sont citables librement : données ouvertes CC BY 4.0, mention « firesight.io ».",
      "Besoin d'une carte sur mesure, d'un export, d'un commentaire ou d'une chronologie précise pendant un épisode : contact@firesight.io — réponse rapide en période de feux.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Le widget est-il vraiment gratuit ?",
        a: "Oui, sans limite de trafic ni de durée. La seule condition est l'attribution : le lien vers firesight.io sous la carte.",
      },
      {
        q: "Puis-je centrer la carte sur ma commune ?",
        a: "Le générateur propose les départements et les pays. Pour un centrage plus fin, ajustez les paramètres lat, lon et z de l'URL de l'iframe : la carte les accepte librement.",
      },
      {
        q: "Les données sont-elles à jour pendant un incendie ?",
        a: "La carte embarquée est la même que firesight.io : détections satellite rafraîchies en continu (toutes les 10 minutes pour les satellites géostationnaires), avions en vol, signalements vérifiés.",
      },
    ],
  },
  en: {
    metaTitle: "Embed the FireSight wildfire map on your site (free widget)",
    metaDesc:
      "Newsrooms, municipalities, weather sites: embed FireSight's real-time wildfire map for free, centered on your country or area. Code generator, 4 languages, continuously updated.",
    h1: "Embed the wildfire map on your site",
    intro:
      "Newsroom, municipality, weather site, blog: the FireSight map (real-time fires, water bombers, smoke) can be embedded for free, centered on the area of your choice. One condition: keep the attribution link to firesight.io.",
    pressTitle: "For newsrooms",
    press: [
      "The widget is free to use in your articles and live pages, including live coverage of an ongoing wildfire.",
      "FireSight's figures (active fires, detections, timelines) are freely quotable: open data CC BY 4.0, attribution “firesight.io”.",
      "Need a custom map, an export, a quote or a precise timeline during an event: contact@firesight.io — fast replies during fire season.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Is the widget really free?",
        a: "Yes, with no traffic or time limit. The only condition is attribution: the link to firesight.io below the map.",
      },
      {
        q: "Can I center the map on my town?",
        a: "The generator offers departments and countries. For finer centering, adjust the lat, lon and z parameters of the iframe URL: the map accepts them freely.",
      },
      {
        q: "Is the data current during a wildfire?",
        a: "The embedded map is the same as firesight.io: satellite detections refreshed continuously (every 10 minutes for geostationary satellites), aircraft in flight, verified reports.",
      },
    ],
  },
  es: {
    metaTitle: "Insertar el mapa de incendios FireSight en tu sitio (widget gratuito)",
    metaDesc:
      "Medios, municipios, sitios de clima: inserten gratis el mapa de incendios en tiempo real de FireSight, centrado en su país o zona. Generador de código, 4 idiomas, actualización continua.",
    h1: "Inserta el mapa de incendios en tu sitio",
    intro:
      "Medio, municipio, sitio de clima, blog: el mapa FireSight (incendios en tiempo real, aviones cisterna, humo) se puede insertar gratis, centrado en la zona que elijas. Una sola condición: conservar el enlace de atribución a firesight.io.",
    pressTitle: "Para las redacciones",
    press: [
      "El widget es de uso libre en sus artículos y coberturas en directo, incluida la cobertura de un incendio en curso.",
      "Las cifras de FireSight (incendios activos, detecciones, cronologías) son citables libremente: datos abiertos CC BY 4.0, mención « firesight.io ».",
      "¿Necesitan un mapa a medida, un export, una cita o una cronología precisa durante un episodio? contact@firesight.io — respuesta rápida en temporada de incendios.",
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿El widget es realmente gratuito?",
        a: "Sí, sin límite de tráfico ni de tiempo. La única condición es la atribución: el enlace a firesight.io debajo del mapa.",
      },
      {
        q: "¿Puedo centrar el mapa en mi ciudad?",
        a: "El generador ofrece países y departamentos franceses. Para un centrado más fino, ajusta los parámetros lat, lon y z de la URL del iframe: el mapa los acepta libremente.",
      },
      {
        q: "¿Los datos están al día durante un incendio?",
        a: "El mapa insertado es el mismo que firesight.io: detecciones satelitales refrescadas de forma continua (cada 10 minutos para los satélites geoestacionarios), aeronaves en vuelo, reportes verificados.",
      },
    ],
  },
  pt: {
    metaTitle: "Inserir o mapa de incêndios FireSight no seu site (widget gratuito)",
    metaDesc:
      "Redações, prefeituras, sites de clima: insiram grátis o mapa de incêndios em tempo real do FireSight, centrado no seu país ou zona. Gerador de código, 4 línguas, atualização contínua.",
    h1: "Insira o mapa de incêndios no seu site",
    intro:
      "Redação, prefeitura, site de clima, blog: o mapa FireSight (incêndios em tempo real, aviões-tanque, fumaça) pode ser inserido gratuitamente, centrado na zona da sua escolha. Uma única condição: manter o link de atribuição para firesight.io.",
    pressTitle: "Para as redações",
    press: [
      "O widget é de uso livre em seus artigos e coberturas ao vivo, inclusive na cobertura de um incêndio em curso.",
      "Os números do FireSight (incêndios ativos, detecções, cronologias) são citáveis livremente: dados abertos CC BY 4.0, menção « firesight.io ».",
      "Precisa de um mapa sob medida, um export, uma citação ou uma cronologia precisa durante um episódio? contact@firesight.io — resposta rápida na temporada de incêndios.",
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "O widget é mesmo gratuito?",
        a: "Sim, sem limite de tráfego nem de tempo. A única condição é a atribuição: o link para firesight.io abaixo do mapa.",
      },
      {
        q: "Posso centrar o mapa na minha cidade?",
        a: "O gerador oferece países e departamentos franceses. Para um centro mais fino, ajuste os parâmetros lat, lon e z da URL do iframe: o mapa os aceita livremente.",
      },
      {
        q: "Os dados ficam atualizados durante um incêndio?",
        a: "O mapa inserido é o mesmo de firesight.io: detecções por satélite atualizadas continuamente (a cada 10 minutos para os satélites geoestacionários), aeronaves em voo, relatos verificados.",
      },
    ],
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = isValidLang(lang) ? lang : "fr";
  const t = localize(T, l);
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `/${l}/widget`,
      languages: {
        fr: "/fr/widget",
        en: "/en/widget",
        es: "/es/widget",
        pt: "/pt/widget",
      },
    },
  };
}

export default async function WidgetPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();
  const t = localize(T, lang);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <div className="k-scroll h-full overflow-y-auto" style={{ background: "var(--paper)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
        <h1 className="mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", color: "var(--ink)" }}>
          {t.h1}
        </h1>
        <p className="mb-7 text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
          {t.intro}
        </p>

        <WidgetBuilder lang={lang} />

        <section className="mb-8 mt-8 rounded-[18px] p-5" style={{ background: "var(--canary-tint)" }}>
          <h2 className="mb-2 text-[17px] font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            {t.pressTitle}
          </h2>
          <ul className="flex flex-col gap-2 pl-5 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)", listStyle: "disc" }}>
            {t.press.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {(() => {
          const k = KIT[lang];
          const code = { background: "var(--charcoal)", color: "#E8E6E1", borderRadius: 12, padding: "12px 16px", fontSize: 12.5, overflowX: "auto" as const };
          const h2 = { fontFamily: "var(--font-display)", color: "var(--ink)" } as const;
          return (
            <>
              <section className="mb-8">
                <h2 className="mb-3 text-[19px] font-semibold" style={h2}>{k.whoTitle}</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {k.who.map((a) => (
                    <div key={a.h} className="rounded-[18px] p-4" style={{ background: "var(--white)", boxShadow: "var(--shadow-s)" }}>
                      <h3 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--ink)" }}>{a.h}</h3>
                      <p className="mb-2 text-[13.5px] leading-relaxed" style={{ color: "var(--ink-2)" }}>{a.p}</p>
                      <Link href={a.cta.href} className="text-[13.5px] font-semibold" style={{ color: "var(--link)" }}>{a.cta.label} →</Link>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                <h2 className="mb-2 text-[19px] font-semibold" style={h2}>{k.beyondTitle}</h2>
                <p className="mb-2">{k.beyondIntro}</p>
                <ul className="flex flex-col gap-2">
                  <li><span className="font-semibold" style={{ color: "var(--ink)" }}>{k.apiLabel}</span><pre style={code}>GET https://firesight.io/api/events?hours=24</pre></li>
                  <li><span className="font-semibold" style={{ color: "var(--ink)" }}>{k.mcpLabel}</span><pre style={code}>{`{ "mcpServers": { "FireSight": { "url": "https://firesight.io/api/mcp" } } }`}</pre></li>
                  <li><span className="font-semibold" style={{ color: "var(--ink)" }}>{k.csvLabel}</span><pre style={code}>https://firesight.io/opendata/feux.csv</pre></li>
                  <li><span className="font-semibold" style={{ color: "var(--ink)" }}>{k.rssLabel}</span><pre style={code}>https://firesight.io/feed.xml</pre></li>
                </ul>
              </section>

              <section className="mb-8 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                <h2 className="mb-2 text-[19px] font-semibold" style={h2}>{k.badgeTitle}</h2>
                <p className="mb-3">{k.badgeText}</p>
                <p className="mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/brand/badge-firesight-${lang === "fr" ? "fr" : "en"}.svg`} alt={lang === "fr" ? "Données : firesight.io" : "Data: firesight.io"} height={28} />
                </p>
                <p className="mb-1 font-semibold" style={{ color: "var(--ink)" }}>{k.badgeHtmlLabel}</p>
                <pre style={code}>{BADGE_HTML(lang)}</pre>
                <p className="mt-3">
                  <span className="font-semibold" style={{ color: "var(--ink)" }}>{k.logosLabel} : </span>
                  <a href="/brand/firesight.svg" style={{ color: "var(--link)" }}>firesight.svg</a>{" · "}
                  <a href="/brand/firesight-noir.svg" style={{ color: "var(--link)" }}>firesight-noir.svg</a>{" · "}
                  <a href="/brand/firesight-blanc.svg" style={{ color: "var(--link)" }}>firesight-blanc.svg</a>{" · "}
                  <a href="/brand/logo-symbole.svg" style={{ color: "var(--link)" }}>logo-symbole.svg</a>
                </p>
                <p className="mt-3">{k.contact}</p>
              </section>

            </>
          );
        })()}

        <section className="mb-4">
          <h2 className="mb-3 text-[19px] font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            {t.faqTitle}
          </h2>
          {t.faq.map((it) => (
            <details key={it.q} className="mb-2 rounded-[14px] px-4 py-3" style={{ background: "var(--white)", boxShadow: "var(--shadow-s)" }}>
              <summary className="cursor-pointer text-[14.5px] font-semibold" style={{ color: "var(--ink)" }}>{it.q}</summary>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>{it.a}</p>
            </details>
          ))}
        </section>

        <p className="mt-8 border-t pt-4 text-[12.5px]" style={{ borderColor: "var(--line)", color: "var(--ink-3)" }}>
          {lang === "fr" ? (
            <>
              Voir aussi : <Link href="/fr/api" style={{ color: "var(--link)" }}>l&apos;API publique</Link> ·{" "}
              <Link href="/fr/statistiques" style={{ color: "var(--link)" }}>les chiffres en direct</Link> ·{" "}
              <Link href="/fr/sdis" style={{ color: "var(--link)" }}>l&apos;offre SDIS et collectivités</Link>.
            </>
          ) : lang === "es" ? (
            <>
              Ver también: <Link href="/en/api" style={{ color: "var(--link)" }}>la API pública</Link> ·{" "}
              <Link href="/es/statistiques" style={{ color: "var(--link)" }}>las cifras en vivo</Link>.
            </>
          ) : lang === "pt" ? (
            <>
              Ver também: <Link href="/en/api" style={{ color: "var(--link)" }}>a API pública</Link> ·{" "}
              <Link href="/pt/statistiques" style={{ color: "var(--link)" }}>os números ao vivo</Link>.
            </>
          ) : (
            <>
              See also: <Link href="/en/api" style={{ color: "var(--link)" }}>the public API</Link> ·{" "}
              <Link href="/en/statistiques" style={{ color: "var(--link)" }}>live statistics</Link>.
            </>
          )}
        </p>
        <SiteFooter lang={lang} />
      </div>
    </div>
  );
}
