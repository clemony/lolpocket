import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID!
// Run the Supabase type generator normally (change to your project ID and types file path ie.: ./app/types/database.types.ts)
/* execSync(`npx supabase gen types --lang=typescript --project-id zsxuzlzfwovsbzzrpcbc --schema public ./types/db/db-types.ts`)
 */
// Get the path to the output file
const typesFilePath = path.resolve('./types/db/database.types.ts')
const jsonType = path.resolve('./types/db/supabase.json.ts')

let content = fs.readFileSync(typesFilePath, 'utf8')

/* const type = 'export type Json<D extends number = 9, DA extends any[] = []>
= | string
  | number
  | boolean
  | null
  | (D extends DA['length'] ? any : { [key: string]: Json<D, [0, ...DA]> | undefined })
  | (D extends DA['length'] ? any : Json<D, [0, ...DA]>[])' */
// Find the Json type on the generated file and replace it
content = content.replace(
  /export type Json\n\s+= \| string\n\s+\| number\n\s+\| boolean\n\s+\| null\n\s+\| \{ \[key: string\]: Json \| undefined \}\n\s+\| Json\[\]/g,
  'export type Json = Record<string, any>'
) // You can change the type to any other type you want ''

fs.writeFileSync(typesFilePath, content)

console.log('Types generated and Json type simplified successfully.')
