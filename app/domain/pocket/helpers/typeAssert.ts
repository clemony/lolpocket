import type { Folder } from "#shared/schema"
import type { PocketProps, PocketPropsChildren } from "~/domain/pocket/types"

export function asPocketProps(
  item: PocketProps | PocketProps[] | undefined | PocketPropsChildren
): PocketProps {
  return item as PocketProps
}

export function asFolder(item: Folder | undefined): Folder {
  return item as Folder
}
