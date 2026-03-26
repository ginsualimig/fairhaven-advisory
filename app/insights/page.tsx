// app/insights/page.tsx
import { getArticles, getCategoryColor } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/AnimatedSection';

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 px-6 border-b border-gold/20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
            Insights
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-offwhite mb-4"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Operational intelligence.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-2xl">
            Case studies, market intelligence, and operational frameworks —
            written by operators, not marketers.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerMs={50}
          >
            {articles.map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCard
                  article={article}
                  categoryColor={getCategoryColor(article.category)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
