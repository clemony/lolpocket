import type { Shard } from 'types'

export function runeColors(runeSet) {
    const keystone = runeSet.keystone

    if (keystone.path != 'empty' && runeSet.secondary != 'empty') {
        var k = ''
        if (keystone.path == 'resolve') {
            k = 'via-resolve'
        } else if (keystone.path == 'sorcery') {
            k = 'via-sorcery'
        } else if (keystone.path == 'inspiration') {
            k = 'via-inspiration'
        } else if (keystone.path == 'domination') {
            k = 'via-domination'
        } else if (keystone.path == 'precision') {
            k = 'via-precision'
        }
        var r = ''

        if (runeSet.secondary == 'resolve') {
            var r = 'to-resolve'
        } else if (runeSet.secondary == 'sorcery') {
            var r = 'to-sorcery'
        } else if (runeSet.secondary == 'inspiration') {
            var r = 'to-inspiration'
        } else if (runeSet.secondary == 'domination') {
            var r = 'to-domination'
        } else if (runeSet.secondary == 'precision') {
            var r = 'to-precision'
        } else if (runeSet.secondary == 'empty') {
            var r = 'to-bg-b2'
        }

        const classes = k + ' ' + r
        return classes.toString()
    } else if (keystone.path != 'empty' && runeSet.secondary == 'empty') {
        if (runeSet.secondary == 'empty') {
            return 'to-resolve'
        } else if (keystone.path == 'sorcery') {
            return 'to-sorcery'
        } else if (keystone.path == 'inspiration') {
            return 'to-inspiration'
        } else if (keystone.path == 'domination') {
            return 'to-domination'
        } else if (keystone.path == 'precision') {
            return 'to-precision'
        }
    } else if (keystone.path != 'empty' && runeSet.secondary == 'empty') {
        return 'to-b2'
    }
}

export function getShardClass(shard: Shard) {
    const gray = ['[&_svg]:text-b3 border-b3']
    const green = [
        'has-[:checked]:shadow-[0_3px_20px_#a3be8c,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-resolve border-resolve',
    ]
    const blue = [
        'has-[:checked]:shadow-[0_3px_20px_#A4C1C4,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-inspiration border-inspiration',
    ]
    const yellow = [
        'has-[:checked]:shadow-[0_3px_20px_#ebcb8b,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-precision border-precision',
    ]
    const purple = [
        'has-[:checked]:shadow-[0_3px_20px_#b48dad,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-sorcery border-sorcery',
    ]

    const c =
        shard.name == 'Adaptive Power' ? purple
        : shard.name == 'Attack Speed' ? yellow
        : (
            shard.name == 'Ability Haste' ||
            shard.name == 'Tenacity and Slow Resist' ||
            shard.name == 'Move Speed'
        ) ?
            blue
        : shard.name == 'Scaling Health' || shard.name == 'Health' ? green
        : gray
    return c
}

export function getShardIcon(shard: Shard) {
    const s =
        shard.name == 'Adaptive Power' ? 'mdi:star-four-points'
        : shard.name == 'Attack Speed' ? 'mdi:axe'
        : shard.name == 'Ability Haste' ? 'ph:hourglass-medium-fill'
        : shard.name == 'Move Speed' ? 'mdi:run-fast'
        : shard.name == 'Scaling Health' ? 'mdi:heart-plus'
        : shard.name == 'Health' ? 'mdi:heart'
        : shard.name == 'Tenacity and Slow Resist' ? 'ph:spiral-light'
        : 'icomoon-free:diamonds'
    return s
}

// from = location of primary or secondary color identifier
export function getColor(from, prefix, opacity?) {
    const a = from != 'empty' ? from : 'b2'
    const b = prefix + '-' + a
    const c = opacity ? b + '/' + opacity : b
    return c
}
export function getLightColor(from, prefix, opacity?) {
    const a = from != 'empty' ? from : 'b2'
    const b = prefix + '-' + a + '-light'
    const c = opacity ? b + '/' + opacity : b
    return c
}

/* "getColor(set.primary, 'from', 60), getColor(set.secondary, 'to', 60)"
 */
export function makeGradient(from, fromOpacity, to, toOpacity, direction) {
    let a = 'from-' + from
    a = fromOpacity ? a + '/' + fromOpacity : a

    let b = 'to-' + to
    b = fromOpacity ? b + '/' + toOpacity : b

    const c = 'bg-gradient-to-' + direction

    return a + ' ' + b + ' ' + c
}
