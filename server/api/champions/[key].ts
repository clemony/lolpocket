import { getRouterParam } from 'h3'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineEventHandler((event) => {
  console.log("💠 - defineEventHandler - event:", event)
  const key = getRouterParam(event, 'key')
  console.log("💠 - defineEventHandler - key:", key)
  const filePath = resolve(`./data/champions/${key}.json`)

  try {
    const json = readFileSync(filePath, 'utf-8')
    return JSON.parse(json)
  }
  catch {
    throw createError({ statusCode: 404, statusMessage: `champ ${key} not found` })
  }
})