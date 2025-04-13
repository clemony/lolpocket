export const championStats = [
  {
    name: 'Attack Damage',
    img: '/img/stats/ad.webp',
    color: getColorFromVariable('--color-fighter'),
    stats: [
      { id: 'dam_base', display: 'base ad' },
      { id: 'dam_lvl', display: 'ad / lvl' },
    ],
  },
  {
    name: 'Attack Speed',
    img: '/img/stats/as.webp',
    color: getColorFromVariable('--color-precision'),
    stats: [
      { id: 'as_base', display: 'base as' },
      { id: 'as_lvl', display: 'as / lvl' },
      { id: 'as_ratio', display: 'as ratio' },
    ],
  },
  {
    name: 'Armor',
    img: '/img/stats/arm.webp',
    color: getColorFromVariable('--color-precision-w600'),
    stats: [
      { id: 'arm_base', display: 'base armor' },
      { id: 'arm_lvl', display: 'armor / lvl' },
    ],
  },
  {
    name: 'Magic Resist',
    img: '/img/stats/mr.webp',
    color: getColorFromVariable('--color-master'),
    stats: [
      { id: 'mr_base', display: 'base mr' },
      { id: 'mr_lvl', display: 'mr / lvl' },
    ],
  },
  {
    name: 'Health',
    img: '/img/stats/hp.webp',
    color: getColorFromVariable('--color-resolve'),
    stats: [
      { id: 'hp_base', display: 'base hp' },
      { id: 'hp_lvl', display: 'hp / lvl' },
    ],
  },
  {
    name: 'Health Regen',
    img: '/img/stats/hpregen.webp',
    color: getColorFromVariable('--color-resolve-light'),
    stats: [
      { id: 'hp5_lvl', display: 'base hp 5' },
      { id: 'hp5_base', display: 'hp 5 / lvl' },
    ],
  },
  {
    name: 'Mana',
    img: '/img/stats/mana.webp',
    color: getColorFromVariable('--color-inspiration'),
    stats: [
      { id: 'mp_base', display: 'base mana' },
      { id: 'mp_lvl', display: 'mana / lvl' },
    ],
  },
  {
    name: 'Mana Regen',
    img: '/img/stats/manaregen.webp',
    color: getColorFromVariable('--color-inspiration-light'),
    stats: [
      { id: 'mp5_base', display: 'base mp 5' },
      { id: 'mp5_lvl', display: 'mp 5 / lvl' },
    ],
  },
] /*  { id: 'range', display: 'range' },
    { id: 'ms', display: 'ms' },
    { id: 'attack_cast_time', display: 'attack cast time' },
    { id: 'attack_total_time', display: 'attack total time' },
    { id: 'pathing_radius', display: 'pathing radius' },
    { id: 'selection_height', display: 'selection height' },
    { id: 'selection_radius', display: 'selection radius' },
    { id: 'acquisition_radius', display: 'acquisition radius' }, */
