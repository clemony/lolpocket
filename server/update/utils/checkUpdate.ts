import { resolvePath } from '../resolvePath'
import { spellsUpdated } from '../spells/raw/spells-updated'

export type UpdateType = 'champion' | 'item' | 'rune' | 'spell'

export function checkUpdate(type: UpdateType): boolean {
  const patch = resolvePath('./misc/fetch-patch.json')

  if (type === 'spell')
    return Number(patch[0]) === Number(spellsUpdated)
  else return false
}