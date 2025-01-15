// rune
declare global {
  interface Path {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: Slot[]; // Slots are represented as an array
  }

  interface Slot {
    runes: Rune[]; // Each slot contains an array of runes
  }

  interface Rune {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
  }

  /*  interface Shard {
    mPerkId: number
    mPerkName: string
    mScript: {
        mSpellScriptData: {
            mEffectAmount: effectAmount[]
        }
    }
} */
  type effectAmount = number;
  // champion

  type Champions = Champion[];

  interface Champion {
    name: string;
    adaptivetype: string;
    alttype: string;
    apiname: string;
    be: number;
    changes: string;
    client_positions: string;
    control: number;
    damage: number;
    date: string;
    difficulty: number;
    external_positions: string;
    herotype: string;
    id: number;
    mobility: number;
    nickname: string;
    patch: string;
    rangetype: string;
    resource: string;
    role: string;
    rp: number;
    skills: {
      1: Skill;
      2: Skill;
      3: Skill;
      4: Skill;
      5: Skill;
    };
    stats: {
      acquisition_radius: number;
      arm_base: number;
      arm_lvl: number;
      as_base: number;
      as_lvl: number;
      as_ratio: number;
      attack_cast_time: number;
      attack_total_time: number;
      dam_base: number;
      dam_lvl: number;
      hp5_base: number;
      hp5_lvl: number;
      hp_base: number;
      hp_lvl: number;
      mp5_base: number;
      mp5_lvl: number;
      mp_base: number;
      mp_lvl: number;
      mr_base: number;
      mr_lvl: number;
      ms: number;
      pathing_radius: number;
      range: number;
      selection_height: number;
      selection_radius: number;
    };
    style: number | string;
    title: string;
    toughness: number;
    utility: number;
  }

  // item

  type stat = string | number;

  type StatKeys = keyof Item['stats'];

  type Items = [Item];

  interface Item {
    id?: number;
    name?: string;
    nickname?: string | string[] | null;
    tier?: number;
    type?: string;
    caption?: string;
    champion?: string;
    itemlimit?: string;
    limit?: string;
    modes?: {
      'classic sr 5v5'?: boolean;
      aram?: boolean;
      nb?: boolean;
      arena?: boolean;
    };
    menu?: {
      fighter?: boolean;
      marksman?: boolean;
      assassin?: boolean;
      mage?: boolean;
      tank?: boolean;
      support?: boolean;
      'attack damage'?: boolean;
      'critical strike'?: boolean;
      'attack speed'?: boolean;
      'onhit effects'?: boolean;
      'armor pen'?: boolean;
      'ability power'?: boolean;
      'mana and reg'?: boolean;
      'magic pen'?: boolean;
      'health and reg'?: boolean;
      armor?: boolean;
      'magic res'?: boolean;
      'ability haste'?: boolean;
      movement?: boolean;
      'lifesteal vamp'?: boolean;
    };
    stats?: {
      ad?: number;
      ah?: number;
      ap?: number;
      armor?: number;
      armpen?: number;
      as?: number;
      cdr?: number;
      cdrunique?: number;
      crit?: number;
      gp10?: number;
      hp?: number;
      hp5?: number;
      hp5?: number;
      hsp?: number;
      hspunique?: number;
      lethality?: number;
      lethalityunique?: number;
      lifesteal?: number;
      mana?: number;
      mp5?: number;
      mp5?: number;
      mpen?: number;
      mpenflat?: number;
      mr?: number;
      ms?: number;
      msflat?: number;
      msunique?: number;
      omnivamp?: number;
      pvamp?: number;
      spellvamp?: number;
      spec?: number;
      spec2?: number;
    };
    effects?: {
      pass?: effect;
      pass2?: effect;
      pass3?: effect;

      act?: effect;
    };
    recipe?: [Item[]];
    buy?: number;
    removed?: boolean | string;
  }

  interface effect {
    name?: string;
    unique?: boolean;
    description?: string;
    cd?: number | string;
    recharge?: string;
    charges?: string | number;
    range?: string;
  }
}

export {};
