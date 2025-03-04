declare global {

  interface Champion {
    name: string
    adaptivetype: string
    alttype: string
    apiname: string
    be: number
    changes: string
    client_positions: string
    control: number
    damage: number
    date: string
    difficulty: number
    external_positions: string
    herotype: string
    id: number
    mobility: number
    nickname: string
    patch: string
    rangetype: string
    resource: string
    role: string
    rp: number
    skills: {
      1: Skill
      2: Skill
      3: Skill
      4: Skill
      5: Skill
    }
    stats: {
      acquisition_radius: number
      arm_base: number
      arm_lvl: number
      as_base: number
      as_lvl: number
      as_ratio: number
      attack_cast_time: number
      attack_total_time: number
      dam_base: number
      dam_lvl: number
      hp5_base: number
      hp5_lvl: number
      hp_base: number
      hp_lvl: number
      mp5_base: number
      mp5_lvl: number
      mp_base: number
      mp_lvl: number
      mr_base: number
      mr_lvl: number
      ms: number
      pathing_radius: number
      range: number
      selection_height: number
      selection_radius: number
    }
    style: number | string
    title: string
    toughness: number
    utility: number
  }

  // type Champions = Champion[]

}
export { }
