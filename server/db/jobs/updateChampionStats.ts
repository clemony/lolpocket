// server/jobs/updateChampionStats.ts
import { sql } from 'drizzle-orm'
import { db, tables } from '../client'
import { championItems } from '../schemas/championItems'
import { championRunes } from '../schemas/championRunes'
import { championSummoners } from '../schemas/championSummoners'
import { champions } from '../schemas/champions'

// server/db/jobs/updateChampionStats.ts

export async function updateChampionStats(matches: any[]) {
  const champUpdates = new Map()
  const itemUpdates = new Map()
  const runeUpdates = new Map()
  const summonerUpdates = new Map()

  for (const match of matches) {
    for (const p of match.participants) {
      const championId = p.championId
      const teamPosition = p.teamPosition
      const win = p.win ? 1 : 0

      // --- Champions ---
      const champKey = `${championId}_${teamPosition}`
      const champ = champUpdates.get(champKey) || { championId, teamPosition, totalGames: 0, totalWins: 0 }
      champ.totalGames += 1
      champ.totalWins += win
      champUpdates.set(champKey, champ)

      // --- Items ---
      const items = [p.item0, p.item1, p.item2, p.item3, p.item4, p.item5, p.item6].filter(Boolean)
      for (const itemId of items) {
        const itemKey = `${championId}_${itemId}_${teamPosition}`
        const item = itemUpdates.get(itemKey) || { championId, itemId, teamPosition, totalGames: 0, totalWins: 0 }
        item.totalGames += 1
        item.totalWins += win
        itemUpdates.set(itemKey, item)
      }

      // --- Runes ---
      const allRunes = [
        ...p.perks.styles.flatMap(s => s.selections.map(sel => sel.perk)),
      ]
      for (const runeId of allRunes) {
        const runeKey = `${championId}_${runeId}_${teamPosition}`
        const rune = runeUpdates.get(runeKey) || { championId, runeId, teamPosition, totalGames: 0, totalWins: 0 }
        rune.totalGames += 1
        rune.totalWins += win
        runeUpdates.set(runeKey, rune)
      }

      // --- Summoners ---
      const summonersSpells = [p.summoner1Id, p.summoner2Id]
      for (const summonerSpellId of summonersSpells) {
        const summKey = `${championId}_${summonerSpellId}_${teamPosition}`
        const summ = summonerUpdates.get(summKey) || { championId, summonerSpellId, teamPosition, totalGames: 0, totalWins: 0 }
        summ.totalGames += 1
        summ.totalWins += win
        summonerUpdates.set(summKey, summ)
      }
    }
  }

  // Champions
  if (champUpdates.size > 0) {
    await db.insert(champions)
      .values([...champUpdates.values()])
      .onConflictDoUpdate({
        target: [champions.championId, champions.teamPosition],
        set: {
          totalGames: sql`${champions.totalGames} + excluded.total_games`,
          totalWins: sql`${champions.totalWins} + excluded.total_wins`,
        },
      })
  }

  // Items
  if (itemUpdates.size > 0) {
    await db.insert(championItems)
      .values([...itemUpdates.values()])
      .onConflictDoUpdate({
        target: [championItems.championId, championItems.itemId, championItems.teamPosition],
        set: {
          totalGames: sql`${championItems.totalGames} + excluded.total_games`,
          totalWins: sql`${championItems.totalWins} + excluded.total_wins`,
        },
      })
  }

  // Runes
  if (runeUpdates.size > 0) {
    await db.insert(championRunes)
      .values([...runeUpdates.values()])
      .onConflictDoUpdate({
        target: [championRunes.championId, championRunes.runeId, championRunes.teamPosition],
        set: {
          totalGames: sql`${championRunes.totalGames} + excluded.total_games`,
          totalWins: sql`${championRunes.totalWins} + excluded.total_wins`,
        },
      })
  }

  // Summoners
  if (summonerUpdates.size > 0) {
    await db.insert(championSummoners)
      .values([...summonerUpdates.values()])
      .onConflictDoUpdate({
        target: [championSummoners.championId, championSummoners.summonerSpellId, championSummoners.teamPosition],
        set: {
          totalGames: sql`${championSummoners.totalGames} + excluded.total_games`,
          totalWins: sql`${championSummoners.totalWins} + excluded.total_wins`,
        },
      })
  }
}