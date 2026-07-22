// components/ArticleCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
  categoryColor: string;
}

export default function ArticleCard({
  article,
  categoryColor,
}: ArticleCardProps) {
  const imageByCategory: Record<string, string> = {
    'Market Intelligence': '/images/advisory-strategy.webp',
    'AIP': '/images/advisory-thinking.webp',
    'Sector Focus': '/images/advisory-operations.webp',
    'Regional Markets': '/images/advisory-insights.webp',
    'Operations': '/images/advisory-hero.webp',
    'Acquisition Guide': '/images/advisory-strategy.webp',
    'Tax & Strategy': '/images/advisory-thinking.webp',
  };
  const image = imageByCategory[article.category] ?? '/images/advisory-insights.webp';

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-stone/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-navy">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColor}`}
        >
          {article.category}
        </span>
        <span className="text-xs text-stone">{article.date}</span>
      </div>
      <h2
        className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors flex-1"
        style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
      >
        {article.title}
      </h2>
      <p className="text-stone text-sm leading-relaxed mb-4">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto">
        {article.readTime && (
          <span className="text-xs text-stone">{article.readTime}</span>
        )}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold ml-auto">
          Read article →
        </span>
      </div>
      </div>
    </Link>
  );
}
