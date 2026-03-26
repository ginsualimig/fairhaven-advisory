import type { Metadata } from "next";

const SITE_NAME = "Fairhaven Advisory";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fairhavenproperty.co.nz";
const DEFAULT_DESCRIPTION =
  "Fairhaven Advisory partners with investors and business owners across NZ and Australia to source, acquire, operate, and scale ventures across property, infrastructure, and allied sectors.";

export function buildMetadata(overrides: Partial<Metadata> & { slug?: string } = {}): Metadata {
  const { slug, ...rest } = overrides;
  const canonical = slug ? `${SITE_URL}/${slug}` : SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} | Property & Infrastructure Partners — NZ & Australia`,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
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
