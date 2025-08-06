export async function insertMatchIds({
  puuid,
  matchIds,
  db,
}: {
  puuid: string
  matchIds: string[]
  db: D1Database
}) {
  const insertStmt = `
    INSERT OR IGNORE INTO match_ids (id, puuid)
    VALUES (?1, ?2)
  `

  for (const id of matchIds) {
    await db.prepare(insertStmt).bind(id, puuid).run()
  }
}

export async function getMatchHistory({
  puuid,
  limit = 40,
  before,
  db,
}: {
  puuid: string
  limit?: number
  before?: number
  db: D1Database
}) {
  let query = `
    SELECT * FROM match_ids
    WHERE puuid = ?
  `
  const params: (string | number)[] = [puuid]

  if (before) {
    query += ` AND game_end_ts < ?`
    params.push(before)
  }

  query += ` ORDER BY game_end_ts DESC LIMIT ?`
  params.push(limit)

  const result = await db.prepare(query).bind(...params).all()
  return result.results
}