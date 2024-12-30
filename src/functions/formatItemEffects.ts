export function formatEffects(effect) {
    if (!effect) {
        return
    }
    console.log('💠 - formatEffects - effect:', effect)
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
    }

    const b = [
        { pattern: /{{as\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{ii\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{as\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{fd\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{tt\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{ft\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{tip\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{ap\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{ap\|(.*?)}}/g, replacement: ' $1 ' },
        { pattern: /{{rd\|(.*?) for/g, replacement: ' $1 ' },
        {
            pattern: /{{rd\|(\d+%)\|(\d+%)(.*)}}/g,
            replacement: '($1 melee / $2 ranged)$3',
        },
        { pattern: /\w+#.*?\|/g, replacement: ' ' },
        { pattern: /\w+\|/g, replacement: ' ' },
        { pattern: /key=%\|0(.*?)\|0/g, replacement: ' $1 ' },
        { pattern: /\w+\|icononly=true/g, replacement: ' ' },
        { pattern: /\|Estimated /g, replacement: ' ' },
        { pattern: /{{g\|(.*?)}}/g, replacement: ' $1g ' },
        { pattern: /11\|(.*? to .*? )/g, replacement: ' ($1) ' },
        {
            pattern: /{{ui\|Blue Siege Minion\|link=Siege minion\|(.*)}}/g,
            replacement: ' $1 ',
        },
        {
            pattern: /{{ui\|Blue Super Minion\|link=Super minion\|(.*)}}/g,
            replacement: ' $1 ',
        },
        { pattern: / ,/g, replacement: ', ' },
        { pattern: /\(/g, replacement: ' ( ' },
        { pattern: /\)/g, replacement: ' ) ' },
        { pattern: /\*/g, replacement: ' × ' },
        { pattern: /\+/g, replacement: ' + ' },
        { pattern: /{{(.*)}}/g, replacement: ' $1 ' },
        { pattern: /{{pp\|(.*?)\|type=(.*)}}/g, replacement: '$1 based on $2' },
        { pattern: / \s+/g, replacement: ' ' },
        // { pattern: /\|/g, replacement: ' ' },
    ]

    Object.keys(a).forEach((key) => {
        effect = effect.replaceAll(key, a[key]).trim()
    })

    b.forEach(({ pattern, replacement }) => {
        effect = effect.replace(pattern, replacement).trim()
    })

    return effect
}
