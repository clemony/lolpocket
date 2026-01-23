/* import { defineEventHandler, getQuery } from 'h3'
import { JSDOM } from 'jsdom'
import metascraper from 'metascraper'
import metascraperAuthor from 'metascraper-author'
import metascraperDate from 'metascraper-date'
import metascraperDescription from 'metascraper-description'
import metascraperImage from 'metascraper-image'
import metascraperTitle from 'metascraper-title'
import metascraperUrl from 'metascraper-url'

const scraper = metascraper([
  metascraperAuthor(),
  metascraperDate(),
  metascraperDescription(),
  metascraperImage(),
  metascraperTitle(),
  metascraperUrl(),
])

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const targetUrl = query.url as string

  if (!targetUrl) {
    throw createError({
      statusCode: 400,
      statusMessage: 'URL parameter is missing.',
    })
  }

  try {
    const response = await fetch(targetUrl)
    const html = await response.text()
    const { document } = (new JSDOM(html)).window
    const metadata = await scraper({ html: document.body.innerHTML, url: targetUrl })
    return metadata
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch or parse Open Graph data.',
    })
  }
}) */
