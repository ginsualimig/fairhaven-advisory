import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services/investor-visa", label: "Investor Visas" },
    { href: "/services/entrepreneur-visa", label: "Entrepreneur Visas" },
    { href: "/services/skilled-migrant", label: "Skilled Migrant" },
    { href: "/services/business-acquisition", label: "Business Acquisition" },
  ],
  Company: [
    { href: "/approach", label: "Our Approach" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-offwhite/70 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-gold font-bold text-xl mb-3">Fairhaven Advisory</div>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium NZ business immigration & investment advisory. Guiding entrepreneurs,
              investors and families to New Zealand with confidence.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-offwhite text-sm font-semibold mb-4 tracking-wider uppercase">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-offwhite/40">
            © {new Date().getFullYear()} Fairhaven Advisory Ltd. All rights reserved.
          </p>
          <p className="text-xs text-offwhite/40">
            Licensed Immigration Adviser · New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
