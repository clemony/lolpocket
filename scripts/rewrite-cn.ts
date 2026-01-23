import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()

const exts = new Set(['.js', '.ts', '.vue', '.jsx', '.tsx'])

function processText(text) {
  const re = /cn\(\s*`([\s\S]*?)`\s*,/g
  return text.replace(re, (_, classes) => {
    const collapsed = classes.replace(/\s+/g, ' ').trim()
    return `cn('${collapsed}',`
  })
}

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      walk(full)
      continue
    }
    if (!exts.has(path.extname(full)))
      continue
    const original = fs.readFileSync(full, 'utf8')
    const updated = processText(original)
    if (updated !== original)
      fs.writeFileSync(full, updated)
  }
}

walk(root)
