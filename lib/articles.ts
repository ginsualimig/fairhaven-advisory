// lib/articles.ts
export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author?: string;
  readTime?: string;
  featured?: boolean;
  intro: string;
  sections: ArticleSection[];
  content?: string;
  relatedSlugs?: string[];
}

let cachedArticles: Article[] | null = null;

export async function getArticles(): Promise<Article[]> {
  if (cachedArticles) return cachedArticles;

  try {
    const imported = await import('./articles.json');
    cachedArticles = imported.default as Article[];
    return cachedArticles;
  } catch (error) {
    console.error('Failed to load articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const allArticles = await getArticles();
  return allArticles.find((a) => a.slug === slug) || null;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Market Intelligence': 'bg-gold/10 text-gold border-gold/20',
    'AIP': 'bg-navy/10 text-navy border-navy/20',
    'Sector Focus': 'bg-teal/10 text-teal border-teal/20',
    'Regional Markets': 'bg-stone/10 text-stone border-stone/20',
    'Operations': 'bg-teal/10 text-teal border-teal/20',
    'Acquisition Guide': 'bg-navy/10 text-navy border-navy/20',
    'Tax & Strategy': 'bg-gold/10 text-gold border-gold/20',
  };
  return colors[category] ?? 'bg-stone/10 text-stone border-stone/20';
}

export async function getRelatedArticles(
  slugs: string[] | undefined,
  currentSlug: string
): Promise<Article[]> {
  if (!slugs || slugs.length === 0) return [];

  const allArticles = await getArticles();
  return allArticles.filter(
    (a) => slugs.includes(a.slug) && a.slug !== currentSlug
  );
}
