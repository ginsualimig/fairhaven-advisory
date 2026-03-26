import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-stone/20 bg-white p-8 hover:border-teal/60 hover:shadow-lg transition-all duration-300"
    >
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy/5 text-teal group-hover:bg-teal/10 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-navy font-semibold text-lg mb-2 group-hover:text-teal transition-colors">
        {title}
      </h3>
      <p className="text-stone text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm text-gold font-medium gap-1 group-hover:gap-2 transition-all">
        Learn more <span>→</span>
      </span>
    </Link>
  );
}
