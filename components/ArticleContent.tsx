// components/ArticleContent.tsx
import { ArticleSection } from '@/lib/articles';

interface ArticleContentProps {
  sections: ArticleSection[];
  content?: string;
}

function formatInline(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function markdownishToHtml(text: string) {
  const lines = text.split('\n');
  const parts: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let htmlBlock: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    parts.push(`<p>${formatInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length || !listType) return;
    parts.push(`<${listType}>${listItems.join('')}</${listType}>`);
    listItems = [];
    listType = null;
  };

  const flushHtmlBlock = () => {
    if (!htmlBlock.length) return;
    parts.push(htmlBlock.join('\n'));
    htmlBlock = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushHtmlBlock();
      continue;
    }

    if (line.startsWith('<')) {
      flushParagraph();
      flushList();
      htmlBlock.push(line);
      continue;
    }

    if (htmlBlock.length) {
      if (line.endsWith('>') || line.includes('</')) {
        htmlBlock.push(line);
        continue;
      }
      flushHtmlBlock();
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = Math.min(heading[1].length, 4);
      parts.push(`<h${level}>${formatInline(heading[2])}</h${level}>`);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(`<li>${formatInline(ordered[1])}</li>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(`<li>${formatInline(unordered[1])}</li>`);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushHtmlBlock();

  return parts.join('\n');
}

function HtmlArticle({ html }: { html: string }) {
  return (
    <div
      className="space-y-6 text-stone leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-navy [&_h4]:mt-4 [&_h4]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_table]:w-full [&_strong]:text-navy"
      dangerouslySetInnerHTML={{ __html: markdownishToHtml(html) }}
    />
  );
}

export default function ArticleContent({ sections, content }: ArticleContentProps) {
  if (content) {
    return <HtmlArticle html={content} />;
  }

  return (
    <div className="space-y-12">
      {sections.map((section) => {
        const hasHtml = /<[^>]+>/.test(section.body);

        return (
          <div key={section.heading}>
            <h2
              className="text-2xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              {section.heading}
            </h2>
            {hasHtml ? (
              <div
                className="text-stone leading-relaxed space-y-4 [&_p]:mb-4 [&_strong]:text-navy [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            ) : (
              <p className="text-stone leading-relaxed whitespace-pre-wrap">
                {section.body}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
