import type { Metadata } from "next";

const SITE_NAME = "Fairhaven Advisory";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fairhavenadvisory.co.nz";
const DEFAULT_DESCRIPTION =
  "Fairhaven Advisory partners with investors and business owners across NZ and Australia to source, acquire, operate, and scale profitable businesses. We operate, not advise.";

export function buildMetadata(overrides: Partial<Metadata> & { slug?: string } = {}): Metadata {
  const { slug, ...rest } = overrides;
  const canonical = slug ? `${SITE_URL}/${slug}` : SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} | Operational Partners for NZ & AU Business Acquisition`,
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
