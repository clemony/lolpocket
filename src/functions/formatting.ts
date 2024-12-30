export const formatDataText = (text) => {
    let a = text

    const format = {
        '<scaleAP>':
            '<span class="font-medium tracking-tight text-violet-500">',

        '</scaleAP>': '</span>',

        '<scaleAD>': '<span class="font-medium tracking-tight text-amber-500">',

        '</scaleAD>': '</span>',

        '<scaleLevel>':
            '<span class="font-medium tracking-tight text-[#f76cbc]">',

        '</scaleLevel>': '</span>',

        '<scalehealth>':
            '<span class="font-medium tracking-tight text-emerald-500">',

        '</scalehealth>': '</span>',

        '<speed>': '<span class="font-medium tracking-tight text-lime-500">',

        '</speed>': '</span>',

        '<status>': '<span class="font-medium text-[#C2A564]">',

        '</status>': '</span>',

        '<gold>': '<span class="font-medium text-yellow-500">',

        '</gold>': '</span>',

        '<truedamage>': '<span class="font-medium text-[#ff6b72]">',

        '</truedamage>': '</span>',

        '<healing>': '<span class="font-medium text-teal-500">',

        '</healing>': '</span>',
    }
    Object.keys(format).forEach((key) => {
        a = a.replaceAll(key, format[key])
    })

    return a
}

export function formatItemStats(stats) {
    if (!stats) {
        return
    }
    const statNames = {
        hp: 'Health',
        ap: 'Ability Power',
        ad: 'Attack Damage',
        as: 'Attack Speed',
        armor: 'Armor',
        msflat: 'Base Movespeed',
        ms: 'Movespeed',
        mr: 'Magic Resist',
        ah: 'Ability Haste',
        hsp: 'Heal & Shield Power',
        mp5: 'Mana Regen / 5',
        hp5: 'Health Regen / 5',
        gp10: 'Gold / 10',
        lethality: 'Lethality',
        mana: 'Mana',
        tenacity: 'Tenacity',
        lifesteal: 'Lifesteal',
        armpen: 'Armor Penetration',
        mpen: 'Magic Penetration',
        mpenflat: 'Flat Magic Pen',
        crit: 'Crit Chance',
        critdamage: 'Crit Damage',
    }

    const replacedStats = Object.entries(stats).map(([key, value]) => {
        const isPercentStat =
            key === 'ms' ||
            key === 'as' ||
            key === 'hp5' ||
            key === 'mp5' ||
            key === 'tenacity' ||
            key === 'mpen' ||
            key === 'lifesteal' ||
            key === 'hsp' ||
            key === 'crit'

        return {
            key: statNames[key] || key, // Use the formatted name or fallback to the key
            value: isPercentStat ? `${value}%` : value, // Append '%' for specific keys
        }
    })

    return replacedStats // Add this return statement
}
