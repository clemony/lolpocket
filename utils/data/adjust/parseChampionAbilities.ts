export function parseWikiData(data: string): ChampionAbility {
  const regex = /^\|\s*([\w-]+)\s*=\s*([^\n]*)/gm
  const parsedData: Record<string, string> = {}

  let match: RegExpExecArray | null
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(data)) !== null) {
    // Remove HTML tags, triple single quotes, and trim whitespace
    const cleanedValue = match[2]
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/'''/g, '') // Remove triple single quotes
      .trim()

    parsedData[match[1]] = cleanedValue
  }

  return {
    name: parsedData.champion || 'Unknown',
    champion: parsedData.champion || 'Unknown',
    skill: parsedData.skill || 'Unknown',
    blurbIcon: parsedData.blurbicon || '',
    icon: parsedData.icon || '',
    icon3: parsedData.icon3 || '',
    description: parsedData.description || '',
    description2: parsedData.description2,
    description3: parsedData.description3,
    leveling3: parsedData.leveling3,
    cooldown: parsedData.cooldown
      ? parsedData.cooldown.split('/').map(Number)
      : [],
    cost: parsedData.cost ? parsedData.cost.split('/').map(Number) : [],
    costType: parsedData.costtype || '',
    targeting: parsedData.targeting || '',
    affects: parsedData.affects || '',
    video: parsedData.video,
    notes: parsedData.notes,
    flavorSound: parsedData.flavorsound,
    blurb: parsedData.blurb || '',
    blurb2: parsedData.blurb2,
    blurb3: parsedData.blurb3,
  }
}

// Function to parse abilities for each champion
export function parseChampionAbilities(abilitiesData: Record<string, Record<string, string>>) {
  const ds = useDataStore()
  const parsedChampionAbilities: Record<string, ChampionAbility[]> = {}

  for (const champion in abilitiesData) {
    const abilities = abilitiesData[champion]
    const abilityList: ChampionAbility[] = []

    for (const abilityName in abilities) {
      const abilityData = abilities[abilityName]
      const parsedAbility = parseWikiData(abilityData)
      abilityList.push(parsedAbility)
    }

    parsedChampionAbilities[champion] = abilityList

    // Ensure the champion exists in ds.champions before assigning abilities
    if (!ds.champions[champion]) {
      ds.champions[champion] = { abilities: [] } // Initialize champion if missing
    }

    ds.champions[champion].abilities = abilityList
    console.log(`✅ Stored abilities for champion: ${champion}`)
  }

  for (const champ in parsedChampionAbilities) {
    ds.championAbilityData[champ] = parsedChampionAbilities[champ]
  }
  console.log('💠 - parseChampionAbilities - ds.championAbilityData:', ds.championAbilityData)
  ds.$persist
  return parsedChampionAbilities
}