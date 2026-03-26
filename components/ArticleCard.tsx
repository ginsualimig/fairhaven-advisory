// components/ArticleCard.tsx
import Link from 'next/link';
import { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
  categoryColor: string;
}

export default function ArticleCard({
  article,
  categoryColor,
}: ArticleCardProps) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block rounded-lg border border-stone/10 bg-white p-8 h-full flex flex-col hover:border-gold/30 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-4">
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
    </Link>
  );
}
