import type { Folder } from "#shared/schema"
import type { PocketProps, PocketPropsChildren } from "~/domain/pocket/types"

export function asPocketProps(
  item: PocketProps | PocketProps[] | undefined | PocketPropsChildren | Folder
): PocketProps {
  return item as PocketProps
}

export function asFolder(item: Folder | undefined | string | number): Folder {
  return item as Folder
}
