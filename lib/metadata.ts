import type { Metadata } from "next";

const SITE_NAME = "Fairhaven Advisory";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fairhavenadvisory.co.nz";
const DEFAULT_DESCRIPTION =
  "Premium NZ business immigration & investment advisory. We help entrepreneurs, investors and families navigate New Zealand's immigration pathways with confidence.";

export function buildMetadata(overrides: Partial<Metadata> & { slug?: string } = {}): Metadata {
  const { slug, ...rest } = overrides;
  const canonical = slug ? `${SITE_URL}/${slug}` : SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    openGraph: {
      siteName: SITE_NAME,
      url: canonical,
      type: "website",
      locale: "en_NZ",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical,
    },
    ...rest,
  };
}

export const defaultMetadata = buildMetadata();
