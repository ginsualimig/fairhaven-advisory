import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date?: string;
}

export default function CaseStudyCard({ title, excerpt, category, slug, date }: CaseStudyCardProps) {
  return (
    <article className="group border border-stone/20 rounded-lg bg-white hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Category bar */}
      <div className="h-1 bg-gold" />

      <div className="p-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-3">
          {category}
        </span>
        <h3 className="text-navy font-semibold text-lg mb-2 group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="text-stone text-sm leading-relaxed mb-4">{excerpt}</p>

        <div className="flex items-center justify-between">
          {date && <time className="text-xs text-stone/70">{date}</time>}
          <Link
            href={`/insights/${slug}`}
            className="text-sm text-gold font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
