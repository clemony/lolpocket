/*

# breakpoints
2. clean name
3. format link
4. get wiki link
5. make box
8. ger random
*/

// clean name

export function cleanName(name: string): string[] {
  const cleanedName = name
    .replace(/\b(the|of)\b/gi, '')
    .replace(/\./g, '')
    .trim()

  return cleanedName.split(/\s+/).filter(Boolean)
}

// format link

export function formatLink(link: string) {
  return link.replace(' ', '_').replace('\'', '%27')
}

// get wiki link

export function getWikiLink(thing: string) {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/en-us/${a}`
}

// make box

export function makeBox(length, target) {
  if (length < target) {
    return (target - length) as number
  }
}

export function getRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}

export function extractUniqueFileListingsFromArray(arr) {
  const fileRegex = /\[\[File:.*?\]\]/g
  const uniqueFiles = new Set()

  function searchInValues(value) {
    if (typeof value === 'string') {
      const matches = value.match(fileRegex)
      if (matches) {
        matches.forEach(match => uniqueFiles.add(match))
      }
    }
    else if (Array.isArray(value)) {
      value.forEach(searchInValues)
    }
    else if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(searchInValues)
    }
  }

  // Loop through the array of objects
  arr.forEach(obj => searchInValues(obj))

  return Array.from(uniqueFiles)
}

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function getUniqueArray(arr, propKeys?) {
  if (propKeys) {
    return [
      ...new Set(
        arr
          .filter(item => item.menu) // make sure it has a menu
          .flatMap(item => Object.keys(item.menu)),
      ),
    ]
  }
  else {
    const allThings = arr
      .flatMap(item => item.tags ?? []) // flatten all tags arrays, skip if undefined
      .filter((tag): tag is string => typeof tag === 'string') // filter out non-strings just in case
    return [...new Set(allThings)]
  }
}
