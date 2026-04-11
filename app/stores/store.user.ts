export const user = defineStore(
  "userStore",
  () => {
    const sb = ref<Account>()
    const account = ref<AccountData>()
    const settings = ref<Settings>()
    const identities =
      ref<Record<ProviderKey<string>, ProviderIdentity | null>>()
    const inbox = ref<Inbox>({ messages: [], notifications: [] })

    const { cache } = storeToRefs(summonerStore())

    watch(
      () =>
        (cache.value as Record<string, Summoner> | undefined)?.[
          account.value?.puuid ?? ""
        ],
      (update) => {
        if (!update || !account.value) return

        if (
          !account.value.lastDataUpdate ||
          update.lastDataUpdate > account.value.lastDataUpdate
        ) {
          Object.assign(account.value, update)
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
      account.value = getEmptyAccount() as unknown as AccountData
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
      inbox.value ??= createEmptyInbox()
      inbox.value.messages = [...inbox.value.messages, message]
    }

    function markInboxMessageRead(id: string, read = true) {
      inbox.value ??= createEmptyInbox()
      inbox.value.messages = inbox.value.messages.map(
        (message: InboxMessage) =>
          message.id === id ? { ...message, read } : message
      )
    }

    /**
     * Deletes a message from the inbox object by its id
     * @param id the id of the message to delete
     */
    function deleteInboxMessage(id: string) {
      inbox.value ??= createEmptyInbox()
      inbox.value.messages = inbox.value.messages.filter(
        (message: InboxMessage) => message.id !== id
      )
    }

    const keybinds = ref<Record<string, string[]>>({
      subSearch: ["meta", "shift", "K"]
    })

    return {
      settings,
      keybinds,
      account,
      clearAccount,
      inbox,
      setInbox,
      addInboxMessage,
      markInboxMessageRead,
      deleteInboxMessage,
      sb,
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
