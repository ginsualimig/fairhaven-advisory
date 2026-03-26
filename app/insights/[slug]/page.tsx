// app/insights/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getArticles,
  getCategoryColor,
  getRelatedArticles,
} from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import ArticleContent from '@/components/ArticleContent';
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/AnimatedSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function InsightPost({ params }: PageProps) {
  const { slug } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedArticles(article.relatedSlugs, slug);

  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 px-6 border-b border-gold/20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="text-teal text-sm hover:underline mb-6 block"
          >
            ← Back to Insights
          </Link>
          <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
            {article.category}
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold text-offwhite mb-4"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-offwhite/50 text-sm">
            <span>{article.date}</span>
            {article.readTime && <span>{article.readTime}</span>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-stone text-lg leading-relaxed mb-12 font-medium border-l-4 border-gold pl-6">
            {article.intro}
          </p>

          <ArticleContent sections={article.sections} content={article.content} />

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mt-20 pt-20 border-t border-stone/10">
              <h2
                className="text-3xl font-bold text-navy mb-8"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                Related Articles
              </h2>
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                staggerMs={50}
              >
                {related.map((relatedArticle) => (
                  <StaggerItem key={relatedArticle.slug}>
                    <ArticleCard
                      article={relatedArticle}
                      categoryColor={getCategoryColor(relatedArticle.category)}
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
