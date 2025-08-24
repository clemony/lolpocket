import { db } from 'api/d1Client'
import { eq, sql } from 'drizzle-orm'
import { championItems, championRunes, champions, championSummoners } from './schema'

type RoleFilter = string | undefined

function buildRoleFilter<T extends { teamPosition: any }>(table: T, role?: RoleFilter) {
  return role ? eq(table.teamPosition, role) : undefined
}

export async function getAllWinrates(role?: RoleFilter) {
  // Build filters for each table
  const champFilter = buildRoleFilter(champions, role)
  const itemFilter = buildRoleFilter(championItems, role)
  const runeFilter = buildRoleFilter(championRunes, role)
  const summFilter = buildRoleFilter(championSummoners, role)

  // Run all in parallel for efficiency
  const [championResults, itemResults, runeResults, summonerResults] = await Promise.all([
    db.select({
      championId: champions.championId,
      teamPosition: champions.teamPosition,
      totalGames: champions.totalGames,
      totalWins: champions.totalWins,
      winrate: sql<number>`CAST(${champions.totalWins} AS FLOAT) / ${champions.totalGames}`,
    })
      .from(champions)
      .where(champFilter)
      .orderBy(sql`winrate DESC`),

    db.select({
      championId: championItems.championId,
      itemId: championItems.itemId,
      teamPosition: championItems.teamPosition,
      totalGames: championItems.totalGames,
      totalWins: championItems.totalWins,
      winrate: sql<number>`CAST(${championItems.totalWins} AS FLOAT) / ${championItems.totalGames}`,
    })
      .from(championItems)
      .where(itemFilter)
      .orderBy(sql`winrate DESC`),

    db.select({
      championId: championRunes.championId,
      runeId: championRunes.runeId,
      teamPosition: championRunes.teamPosition,
      totalGames: championRunes.totalGames,
      totalWins: championRunes.totalWins,
      winrate: sql<number>`CAST(${championRunes.totalWins} AS FLOAT) / ${championRunes.totalGames}`,
    })
      .from(championRunes)
      .where(runeFilter)
      .orderBy(sql`winrate DESC`),

    db.select({
      championId: championSummoners.championId,
      summonerSpellId: championSummoners.summonerSpellId,
      teamPosition: championSummoners.teamPosition,
      totalGames: championSummoners.totalGames,
      totalWins: championSummoners.totalWins,
      winrate: sql<number>`CAST(${championSummoners.totalWins} AS FLOAT) / ${championSummoners.totalGames}`,
    })
      .from(championSummoners)
      .where(summFilter)
      .orderBy(sql`winrate DESC`),
  ])

  return {
    champions: championResults,
    items: itemResults,
    runes: runeResults,
    summoners: summonerResults,
  }
}