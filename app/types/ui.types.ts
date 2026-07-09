export interface IconProps {
  id?: number
  k?: string
  map?: number
  type?: DomainType
  summoner?: Summoner
  tooltip?: TooltipPropsExt
  avatar?: AvatarPropsExt
  winrates?: ChampionWinrate[]
  style?: CSSStyleValue
}

export type CarouselEvent = "init" | "reInit" | "select" | "scroll" | "resize"
export interface CarouselApi {
  scrollNext: () => void
  scrollPrev: () => void
  canScrollNext: () => boolean
  canScrollPrev: () => boolean
  off: (event: CarouselEvent, callback: (api?: CarouselApi) => void) => void
  on: (event: CarouselEvent, callback: (api?: CarouselApi) => void) => void
}
