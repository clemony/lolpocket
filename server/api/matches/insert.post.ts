export default defineEventHandler(async (event) => {
  const body = await readBody<{
    puuid: string
    matchIds: string[]
  }>(event)

  if (!body.puuid || !body.matchIds?.length)
    throw createError({ statusCode: 400, statusMessage: 'Missing data' })

  /* await insertMatchIds({ puuid: body.puuid, matchIds: body.matchIds }) */

  return { success: true }
})