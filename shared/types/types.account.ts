export interface UserPockets {
  all: Pocket[]
  pinned: string[]
  archived: string[]
}

export interface Note {
  title: string
  content: string
  icon: string
  date: string
  heart?: boolean
}
