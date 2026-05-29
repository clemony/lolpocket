import { nowInstantString } from "#shared/utils"
import { skinKeyFromUrl } from "#shared/utils/img-url"
import * as v from "valibot"
import { backpackFolders } from "~/domain/backpack/utils/folder/defaultFolders"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"
import { backpackFolderKeys } from "~~/shared/types/types.sortable"

export const user = defineStore(
  "userStore",
  () => {
    const account = ref<Account>()
    const settings = ref<Settings>()
    const summoner = ref<Summoner>()
    const inbox = ref<Inbox>(createEmptyInbox())

    const identities =
      ref<Record<ProviderKey<string>, ProviderIdentity | null>>()

    const { cache } = storeToRefs(summonerStore())
    function map() {
      if (!settings.value?.folders) return
      settings.value.folders = settings.value?.folders.map((f) =>
        f.location === "backpack" || !f.location
          ? {
              ...f,
              location: "folders"
            }
          : {
              ...f
            }
      )
    }
    watch(
      () =>
        (cache.value as Record<string, Summoner> | undefined)?.[
          account.value?.puuid ?? ""
        ],
      (update) => {
        if (!update || !summoner.value) return

        if (
          !summoner.value.lastDataUpdate ||
          update.lastDataUpdate > summoner.value.lastDataUpdate
        ) {
          Object.assign(summoner.value, update)
        }
      }
    )

    const localSettings = ref<LocalSettings>({
      sidebar_sort_folder_first: true,
      sidebar_sort_method: "date",
      sidebar_sort_mode: "desc",
      backpack_group_by: "folder",
      confirm_folder_delete: true,
      confirm_pocket_delete: true
    })

    function updateSortMethod(method: "date" | "alpha") {
      localSettings.value.sidebar_sort_method = method
    }

    const hotkeys = {
      search: ["meta", "k"],
      subSearch: ["meta", "shift", "k"],
      logIn: ["shift", "meta", "s"],
      logOut: ["shift", "meta", "q"],
      open: ["meta", "o"],
      close: ["meta", "x"]
    }

    function clearAccount() {
      account.value = getEmptyAccount() as unknown as Account
      summoner.value = undefined
      setInbox()
    }

    function migrateAccountSplashUrlToSkinKey() {
      if (!account.value || account.value.skin) return null

      const { splash, ...nextAccount } = account.value as Account & {
        splash?: string
      }
      const skin = splash ? skinKeyFromUrl(splash) : null
      if (!skin) return null

      account.value = { ...nextAccount, skin }
      return skin
    }

    function createEmptyInbox(): Inbox {
      return { messages: [], notifications: [] }
    }

    function setInbox(nextInbox?: Partial<Inbox> | null) {
      inbox.value = {
        ...createEmptyInbox(),
        ...(nextInbox ?? {}),
        messages: [...(nextInbox?.messages ?? [])],
        notifications: [...(nextInbox?.notifications ?? [])]
      }
    }

    function addInboxMessage(message: InboxMessage) {
      inbox.value.messages = [...inbox.value.messages, message]
    }

    function addInboxNotification(notification: InboxNotification) {
      inbox.value.notifications = [
        notification,
        ...inbox.value.notifications
      ].slice(0, 20)
    }

    function markInboxMessageRead(id: string, read = true) {
      inbox.value.messages = inbox.value.messages.map(
        (message: InboxMessage) =>
          message.id === id
            ? { ...message, read_at: read ? nowInstantString() : null }
            : message
      )
    }

    function markInboxNotificationRead(id: string, read = true) {
      inbox.value.notifications = inbox.value.notifications.map(
        (notification: InboxNotification) =>
          notification.id === id
            ? {
                ...notification,
                read_at: read ? nowInstantString() : null
              }
            : notification
      )
    }

    /**
     * Deletes a message from the inbox object by its id
     * @param id the id of the message to delete
     */
    function deleteInboxMessage(id: string) {
      inbox.value.messages = inbox.value.messages.map(
        (message: InboxMessage) =>
          message.id === id
            ? { ...message, trashed_at: nowInstantString() }
            : message
      )
    }

    const keybinds = ref<Record<string, string[]>>({
      subSearch: ["meta", "shift", "K"]
    })

    /*     FOLDERS */

    const folderKeys = computed(() => {
      const userFolders =
        settings.value && settings?.value.folders
          ? settings?.value.folders.map((f) => f.id)
          : []
      return [...(userFolders || "")].filter(Boolean)
    })

    const folderLocationSchema = v.fallback(
      v.picklist(folderKeys.value ?? []),
      "folders"
    )

    const folderIcon = (location: string) => {
      const folders = computed<Folder[]>(() => [
        ...Object.values(backpackFolders),
        ...(settings.value?.folders ?? [])
      ])

      const key = folders.value.find((f) => f.id === location)?.iconKey
      if (key) return iconSets[key]
    }

    const match = /Entitled Folder.*/

    function createEntitledName(): string {
      const folders = settings?.value?.folders
        .map((folder) => folder.label)
        .filter((f) => match.test(f))

      if (!folders || !folders.length) return "Entitled Folder"
      else if (folders && folders.length)
        return `Entitled Folder (${folders.length - 1})`
      else return "Entitled Folder"
    }

    function setDefaultFolderName(
      folder: ComputedRef<Folder> | undefined,
      name?: string
    ) {
      if (!folder?.value) return
      if (name === "") folder.value.label = createEntitledName()
      else folder.value.label = String(name)
    }

    function updateFolderName(folderId: string, newLabel: string) {
      if (!settings.value?.folders) return
      settings.value.folders = settings.value.folders.map((f) =>
        f.id === folderId
          ? { ...f, label: newLabel ?? createEntitledName() }
          : f
      )
    }

    function newPocketFolder(options?: { label?: string; location?: string }) {
      const folder = {
        label: "",
        id: crypto.randomUUID(),
        iconKey: "folder",
        location: options?.location || "folders",
        order: settings.value?.folders.length || 0
      }

      if (options?.label) folder.label = String(options.label)
      else folder.label = createEntitledName()

      if (!settings.value)
        settings.value = getEmptySettings() as unknown as Settings
      settings.value.folders = [...settings.value.folders, folder]

      return folder
    }

    function getFolder(folderId: string) {
      return settings.value?.folders.find((f) => f.id === folderId)
    }

    const defaultFolderOrder = ref<Record<BackpackFolderKey, number>>(
      Object.fromEntries(
        backpackFolderKeys.map((folderId, index) => [folderId, index])
      ) as Record<BackpackFolderKey, number>
    )

    function updateDefaultFolderSort(folderId: string, newIndex: number) {
      if (!backpackFolderKeys.includes(folderId as BackpackFolderKey)) return

      const ordered = [...backpackFolderKeys].sort(
        (a, b) => defaultFolderOrder.value[a] - defaultFolderOrder.value[b]
      )
      const currentIndex = ordered.indexOf(folderId as BackpackFolderKey)
      if (currentIndex === -1) return

      const [folder] = ordered.splice(currentIndex, 1)
      if (!folder) return

      ordered.splice(Math.max(0, Math.min(newIndex, ordered.length)), 0, folder)

      defaultFolderOrder.value = Object.fromEntries(
        ordered.map((id, index) => [id, index])
      ) as Record<BackpackFolderKey, number>
    }

    function updateFolderSort(folderId: string, order: number) {
      const folder = getFolder(folderId)
      if (!folder) return

      const byOrder = (a: Folder, b: Folder) =>
        (a.order ?? 0) - (b.order ?? 0) ||
        String(a.label ?? "").localeCompare(String(b.label ?? ""), undefined, {
          numeric: true,
          sensitivity: "base"
        })
      const folders =
        settings.value?.folders
          .filter((f) => f.id !== folder.id)
          .sort(byOrder) ?? []

      folders.splice(Math.max(0, Math.min(order, folders.length)), 0, folder)

      const updates = new Map<string, number>()
      folders.forEach((f, index) => {
        updates.set(f.id, index)
      })

      if (settings.value)
        settings.value.folders = settings.value?.folders.map((f) => {
          const update = updates.get(f.id)
          return update !== undefined ? { ...f, order: update } : f
        })
    }

    return {
      settings,
      keybinds,
      summoner,
      account,
      localSettings,
      migrateAccountSplashUrlToSkinKey,
      clearAccount,
      inbox,
      setInbox,
      addInboxMessage,
      addInboxNotification,
      markInboxMessageRead,
      markInboxNotificationRead,
      deleteInboxMessage,

      //folder
      newPocketFolder,
      createEntitledName,
      folderLocationSchema,
      updateFolderName,
      updateFolderSort,
      defaultFolderOrder,
      updateDefaultFolderSort,
      getFolder,
      folderIcon,
      folderKeys,

      //
      updateSortMethod,
      identities,
      hotkeys,
      map,
      setDefaultFolderName
    }
  },
  {
    persist: {
      key: "accountStore",
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
