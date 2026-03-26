import Link from "next/link";

const footerLinks = {
  "Work": [
    { href: "/#what-we-do", label: "What We Do" },
    { href: "/#process", label: "Our Process" },
    { href: "/#expertise", label: "Expertise" },
  ],
  "Company": [
    { href: "/#thinking", label: "Our Thinking" },
    { href: "/#team", label: "Team" },
    { href: "/insights", label: "Insights" },
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
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Strategic operators working with investors and business owners across New Zealand and Australia.
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
            © {new Date().getFullYear()} Fairhaven Property Group Limited. All rights reserved.
          </p>
          <p className="text-xs text-offwhite/40">
            New Zealand · Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
