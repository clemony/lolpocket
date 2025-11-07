import { championRoleIndex, runeToPath } from '~~/shared/indexes'

export function constructMentionAttrs(attrs) {
  const item = computed (() => attrsToProps(attrs)).value
  const label = computed (() => ['item', 'rune', 'spell'].includes(item.key) ? item.key : 'champion').value

  return {
    'class': 'mention',
    'data-label': label,
    'data-path': label === 'rune' ? runeToPath[item.id]?.toLowerCase() : null,
    'data-role': label === 'champion' ? championRoleIndex[item.key]?.toLowerCase() : null,
    'data-tier': label === 'item' ? getTierGroup(item.id)?.toLowerCase() : null,
  }
}
