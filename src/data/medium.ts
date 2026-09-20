// Build-time Medium RSS fetcher — no client-side JS required.

export interface MediumArticle {
	title: string;
	link: string;
	pubDate: string;
	excerpt: string;
	thumbnail: string | null;
}

const MEDIUM_RSS_URL = "https://medium.com/feed/@fares7elsadek";

function extractExcerpt(html: string, maxLength = 160): string {
	// Strip HTML tags and decode common entities
	const text = html
		.replace(/<[^>]*>/g, "")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, " ")
		.trim();
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

function extractThumbnail(html: string): string | null {
	const match = html.match(/<img[^>]+src="([^"]+)"/);
	return match && match[1] ? match[1] : null;
}

function parseItem(itemXml: string): MediumArticle | null {
	const getTag = (tag: string): string => {
		const match = itemXml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
		return (match?.[1] ?? match?.[2] ?? "").trim();
	};

	const title = getTag("title");
	const link = getTag("link");
	const pubDate = getTag("pubDate");
	const contentEncoded = getTag("content:encoded");
	const description = getTag("description");

	if (!title || !link) return null;

	const content = contentEncoded || description;

	return {
		title,
		link,
		pubDate,
		excerpt: extractExcerpt(content),
		thumbnail: extractThumbnail(content),
	};
}

export async function fetchMediumArticles(limit = 10): Promise<MediumArticle[]> {
	try {
		const response = await fetch(MEDIUM_RSS_URL, {
			signal: AbortSignal.timeout(10000),
		});

		if (!response.ok) {
			console.warn(`[Medium RSS] HTTP ${response.status} — skipping article fetch.`);
			return [];
		}

		const xml = await response.text();

		// Split items and parse
		const items = xml.split("<item>").slice(1);
		const articles: MediumArticle[] = [];

		for (const item of items) {
			const parsed = parseItem(item);
			if (parsed) {
				articles.push(parsed);
				if (articles.length >= limit) break;
			}
		}

		return articles;
	} catch (error) {
		console.warn("[Medium RSS] Failed to fetch articles:", error instanceof Error ? error.message : error);
		return [];
	}
}
