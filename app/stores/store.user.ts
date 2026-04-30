import * as v from "valibot"

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
            ? { ...message, read_at: read ? new Date().toISOString() : null }
            : message
      )
    }

    function markInboxNotificationRead(id: string, read = true) {
      inbox.value.notifications = inbox.value.notifications.map(
        (notification: InboxNotification) =>
          notification.id === id
            ? {
                ...notification,
                read_at: read ? new Date().toISOString() : null
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
            ? { ...message, trashed_at: new Date().toISOString() }
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
      return ["pockets", "archive", "trash", ...(userFolders || "")].filter(
        Boolean
      )
    })

    const folderLocationSchema = v.fallback(
      v.picklist(folderKeys.value ?? []),
      "pockets"
    )

    function newPocketFolder(options?: { label?: string; location?: string }) {
      const folder = {
        label: options?.label || "",
        id: crypto.randomUUID(),
        icon: "i-folder",
        location: options?.location || "",
        order: settings.value?.folders.length || 0
      }

      if (!settings.value)
        settings.value = getEmptySettings() as unknown as Settings
      settings.value.folders = [...settings.value.folders, folder]

      return folder
    }

    function updateFolderName(folderId: string, newLabel: string) {
      console.log("🥸 - updateFolderName - newName:", newLabel)
      if (!settings.value) return
      settings.value.folders = settings.value.folders.map((f) =>
        f.id === folderId ? { ...f, label: newLabel } : f
      )
      console.log(
        "🥸 - updateFolderName - settings.value.folders:",
        settings.value.folders
      )
    }
    return {
      settings,
      keybinds,
      summoner,
      account,
      clearAccount,
      inbox,
      setInbox,
      addInboxMessage,
      addInboxNotification,
      markInboxMessageRead,
      markInboxNotificationRead,
      deleteInboxMessage,
      newPocketFolder,
      folderLocationSchema,
      updateFolderName,
      folderKeys,
      identities,
      hotkeys
    }
  },
  {
    persist: {
      key: "accountStore",
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
