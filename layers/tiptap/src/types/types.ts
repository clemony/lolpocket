export interface IndexGroup {
  name: string
  icon: string
  items: Index[]
}
export interface MentionData {
  items: Index[]
  groups: IndexGroup[]
}