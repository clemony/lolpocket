export async function formatChampionAbilities(htmlContent) {
  console.log('💠 - formatChampionAbilities - htmlContent:', htmlContent)
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')

  const abilities = []

  const skillClasses = ['skill skill_innate', 'skill skill_q', 'skill skill_w', 'skill skill_e', 'skill skill_r']

  skillClasses.forEach((skillClass) => {
    const skillElements = doc.querySelectorAll(`.${skillClass}`)

    skillElements.forEach((skillElement) => {
      const ability: ChampionAbility = {
        name: skillElement.querySelector('.skill_header')?.textContent?.trim() || 'Unknown Ability',

        description: skillElement.querySelector('.ability-json')?.textContent?.trim() || '',

        // Extract all text from .ability-info-content
        info: Array.from(skillElement.querySelectorAll('.ability-info-content'))
          .map(infoElement => infoElement.textContent?.trim()) // Extract text from each .ability-info-content
          .join(' ') // Join all texts together if there are multiple .ability-info-content elements
          || '', // Fallback to an empty string if no info is found
      }

      abilities.push(ability)
    })
  })

  console.log('Final Abilities:', abilities)
}