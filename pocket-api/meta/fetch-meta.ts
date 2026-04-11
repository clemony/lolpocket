import metascraper from "metascraper"
import metascraperAuthor from "metascraper-author"
import metascraperDate from "metascraper-date"
import metascraperDescription from "metascraper-description"
import metascraperImage from "metascraper-image"
import metascraperTitle from "metascraper-title"
import metascraperUrl from "metascraper-url"
import { ofetch } from "ofetch"

export async function fetchHtml(url: string): Promise<string> {
  return ofetch<string>(url, {
    headers: {
      "user-agent": "lolpocket-patch-bot/1.0 (+https://github.com)"
    },
    parseResponse: (input) => input
  })
}

export async function fetchMeta(url: string, locale: string, html?: string) {
  const pageHtml = html ?? (await fetchHtml(url))

  const scraper = metascraper([
    metascraperAuthor(),
    metascraperDate(),
    metascraperDescription(),
    metascraperImage(),
    metascraperTitle(),
    metascraperUrl()
  ])

  const metadata = await scraper({ html: pageHtml, url })

  const payload: Metadata = {
    fetchedAt: new Date().toISOString(),
    locale,
    metadata: {
      author: metadata.author ?? null,
      date: metadata.date ?? null,
      description: metadata.description ?? null,
      image: metadata.image ?? null,
      title: metadata.title ?? null,
      url: metadata.url ?? null
    },
    url: url
  }
  return payload
}
