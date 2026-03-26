import Link from "next/link";

const footerLinks = {
  "What We Do": [
    { href: "/#what-we-do", label: "Acquisition" },
    { href: "/#what-we-do", label: "Operations" },
    { href: "/#what-we-do", label: "Turnarounds" },
    { href: "/#what-we-do", label: "Network Access" },
  ],
  "Company": [
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#approach", label: "Our Approach" },
    { href: "/#team", label: "Team" },
    { href: "/insights", label: "Insights" },
    { href: "/#get-started", label: "Get Started" },
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
            <p className="text-sm leading-relaxed max-w-xs mb-4">
              Operational partners for investors and business owners across NZ and Australia.
              We source, acquire, operate, and scale businesses on your behalf.
            </p>
            <p className="text-xs text-offwhite/40 leading-relaxed max-w-xs">
              Fairhaven Advisory Ltd is not a licensed immigration adviser. AIP pathway content is
              educational only. All investment activities are subject to New Zealand and Australian
              regulatory requirements. Past performance is not indicative of future results.
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
                  <li key={l.label}>
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
            Auckland · Wellington · Sydney · Melbourne
          </p>
        </div>
      </div>
    </footer>
  );
}
