import fs from 'node:fs'
import path from 'node:path'

const storesDir = path.resolve('stores')
const composablesDir = path.resolve('composables/alias')

if (!fs.existsSync(composablesDir))
  fs.mkdirSync(composablesDir, { recursive: true })

const files = fs.readdirSync(storesDir).filter(f => f.endsWith('.ts'))

for (const file of files) {
  const storeName = path.basename(file, '.ts') // e.g. cooldownStore
  const composableName = storeName.replace(/Store$/, '') // cooldown
  const aliasName = composableName === 'index' ? 'ix' : composableName[0] + composableName[1] // e.g. 'cd'

  const storeImport = `use${capitalize(composableName)}Store`

  const content = `export const ${aliasName} = () => ${storeImport}()\n`

  const filePath = path.join(composablesDir, `${aliasName}.ts`)
  fs.writeFileSync(filePath, content)
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

console.log('✅ Store aliases generated in composables/storeAliases/')