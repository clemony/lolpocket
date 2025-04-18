
import * as cheerio from 'cheerio';
import axios from 'axios'
import type { AnyNode } from 'domhandler';

type AsRatioData = {
  champion: string
  asRatio: string
}
import { load } from 'cheerio'

export async function getAsRatioData(html: string) {
  const $ = load(html)

  const tables = $('table') // Select all tables
  let targetTable

  tables.each((_, table) => {
    const headerCells = $(table).find('tr').first().find('th').map((_, th) => $(th).text().trim()).get()
    if (headerCells.includes('Champion') && headerCells.includes('AS Ratio')) {
      targetTable = table
    }
  })

  if (!targetTable) {
    throw new Error('Could not find table with AS Ratio and Champion headers')
  }

  const rows = $(targetTable).find('tr').slice(1)
  const data = rows.map((_, row) => {
    const cells = $(row).find('td')
    return {
      champion: $(cells[0]).text().trim(),
      base: $(cells[1]).text().trim(),
      asRatio: $(cells[2]).text().trim(),
    }
  }).get()

  return data
}

export default defineEventHandler(async () => {
  const data = await getAsRatioData('https://wiki.leagueoflegends.com/en-us/List_of_champions/Attack_speed')
  return data
})