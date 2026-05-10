import type { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"

const folderKeys = computed(() => user().settings?.folders.map((f) => f.id))

export type DefaultFolderKey = keyof typeof defaultPocketFolders
export type FolderKey = DefaultFolderKey | keyof typeof folderKeys
