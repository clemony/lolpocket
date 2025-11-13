export interface Thread {
  id: string
  comments: UUID[]
}

export interface Author {
  name: string
  puuid: UUID
  icon: string
  tag: string
  region: string
  username: string
}
