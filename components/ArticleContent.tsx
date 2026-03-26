// components/ArticleContent.tsx
import { ArticleSection } from '@/lib/articles';

interface ArticleContentProps {
  sections: ArticleSection[];
}

export default function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2
            className="text-2xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            {section.heading}
          </h2>
          <p className="text-stone leading-relaxed whitespace-pre-wrap">
            {section.body}
          </p>
        </div>
      ))}
    </div>
  );
}
