export function formatEffects(effect) {
  if (!effect) {
    return
  }

  // Static replacements
  const a = {
    '{{g|text=*none*}}': '',
    '{{tip|cr|icononly: true}}': '',
    'ability|ability': 'ability',
    "'''": '',
    '{{tip|stasis (buff)|stasis}}': 'Stasis',
    'Damage modifier|': '',
    '|Damage calculated after modifiers': '',
    "''": '',
    '\|180{{degree}}': ' (180°)',
    '\|pp=true}}': '',
    'levels=1;9': ' levels 1 ',
    ' ,': ', ',
    ']': '',
    '[': '',
    // Add item-specific static replacements here
  }

  // Pattern-based replacements
  const b = [
    { pattern: /{{as\|(.*?)}}/g, replacement: ' $1 ' },
    { pattern: /{{ii\|(.*?)}}/g, replacement: ' $1 ' },
    { pattern: /{{fd\|(.*?)}}/g, replacement: ' $1 ' },
    { pattern: /{{tip\|(.*?)}}/g, replacement: ' $1 ' },
    { pattern: /{{ap\|(.*?)}}/g, replacement: ' $1 ' },
    {
      pattern: /{{rd\|(\d+%)\|(\d+%)(.*)}}/g,
      replacement: '($1 melee / $2 ranged)$3',
    },
    // Add item-specific pattern replacements here
    {
      pattern: /{{itemEffect\|(.*?)\|(.*?)}}/g,
      replacement: ' $1 effect: $2 ',
    },
    { pattern: /{{unique\|(.*?)}}/g, replacement: ' Unique: $1 ' },
    { pattern: /{{passive\|(.*?)}}/g, replacement: ' Passive: $1 ' },
    { pattern: /{{active\|(.*?)}}/g, replacement: ' Active: $1 ' },
    // General clean-up patterns
    { pattern: / ,/g, replacement: ', ' },
    { pattern: /\(/g, replacement: ' ( ' },
    { pattern: /\)/g, replacement: ' ) ' },
    { pattern: /\*/g, replacement: ' × ' },
    { pattern: /\+/g, replacement: ' + ' },
    { pattern: /{{(.*)}}/g, replacement: ' $1 ' },
    { pattern: / \s+/g, replacement: ' ' },
    { pattern: /\[+?(.*)\]+?/g, replacement: '$1' },
    { pattern: /\s.*\|/g, replacement: ' ' },
  ]

  // Apply static replacements
  Object.keys(a).forEach((key) => {
    effect = effect.replaceAll(key, a[key]).trim()
  })

  // Apply pattern-based replacements
  b.forEach(({ pattern, replacement }) => {
    effect = effect.replace(pattern, replacement).trim()
  })

  return effect
}
