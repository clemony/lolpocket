import { stats } from '@data/champion'
import { growth } from '@lolmath/calc'

const statistics = Object.entries(stats)

const base = (stat) => {
    return statistics.find((key) => key[0] == stat.value.stats[0].id)
}

const perLvl = (stat) => {
    return statistics.find((key) => key[0] == stat.value.stats[1].id)
}

const asRatio = (stat) => {
    return statistics.find((key) => key[0] == stat.value.stats[2].id)
}

const calcStat = (stat, lvl) => {
    //const calc = base(stat) + growth(lvl) * perLvl(stat)
}
