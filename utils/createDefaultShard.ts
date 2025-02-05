export default function createDefaultShard(): {
  name: string
  slotID: number
  slotName: string
  type: string
  icon: string
  stats: string
  color: string
} {
  return {
    name: 'empty',
    stats: 'h',
    slotID: 0,
    slotName: 'empty',
    type: 'h',
    icon: 'oui:shard',
    color: 'empty',
  }
}
