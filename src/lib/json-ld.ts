const BASE = "https://getlightpath.ai";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LightPathAI",
    url: BASE,
    logo: `${BASE}/logo.png`,
    sameAs: [
      "https://linkedin.com/company/lightpathai",
      "https://x.com/lightpathai",
      "https://instagram.com/lightpathai",
    ],
    description:
      "A personalized plan, clear next steps, and real human support for when you don't know where to start.",
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  slug,
  date,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE}/resources/${slug}`,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "LightPathAI",
    },
    publisher: {
      "@type": "Organization",
      name: "LightPathAI",
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
  };
}
