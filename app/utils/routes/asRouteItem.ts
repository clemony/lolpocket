import type { ButtonRouteItem, RouteGroup } from "~/types/route.types"

export const asRouteButton = (item: any): ButtonRouteItem => {
  return item
}
export const asRouteButtonGroup = (item: any): RouteGroup<ButtonRouteItem> => {
  return item
}
