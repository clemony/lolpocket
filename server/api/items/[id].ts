import { getRouterParam } from 'h3'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const filePath = resolve(`./data/items/${id}.json`)

  try {
    const json = readFileSync(filePath, 'utf-8')
    return JSON.parse(json)
  }
  catch {
    throw createError({ statusCode: 404, statusMessage: `Item ${id} not found` })
  }
})