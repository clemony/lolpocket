/* eslint-disable no-cond-assign */
import fs from 'node:fs'
import path from 'node:path'

const projectDir = './types' // or wherever your types are
const settingsPath = path.resolve('.vscode/settings.json')

const typeRegex = /\b(?:interface|type|enum|class)\s+(\w+)/g

const excludedTags = new Set([
  'number',
  'boolean',
  'Array',
  'object',
  'string',
  'any',
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

// Recursively walk through directories
function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filepath = path.join(dir, file)
    const stat = fs.statSync(filepath)
    if (stat.isDirectory()) {
      walk(filepath, fileList)
    }
    else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fileList.push(filepath)
    }
  }
  return fileList
}

// Extract type names
function extractTypeNames(filePaths) {
  const types = new Set()
  for (const file of filePaths) {
    const content = fs.readFileSync(file, 'utf8')
    let match
    while ((match = typeRegex.exec(content))) {
      types.add(match[1])
    }
  }
  return types
}

// Main
;(function () {
  const tsFiles = walk(projectDir)
  const types = extractTypeNames(tsFiles)

  // Read settings.json
  const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'))
  const current = new Set(settings['auto-close-tag.excludedTags'] || [])

  // Add found types
  for (const t of types) {
    current.add(t)
  }

  // Sort and write back
  settings['auto-close-tag.excludedTags'] = Array.from(current).sort()
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2))
  console.log('✅ VSCode settings updated with TypeScript types.')
})()
