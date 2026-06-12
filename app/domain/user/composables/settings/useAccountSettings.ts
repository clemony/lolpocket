import { providers as providerData } from "~/domain/about/external/authProviders"
import type { ProviderProps } from "~~/shared/types"

export const useAccountSettings = () => {
  const client = useSupabaseClient()

  const { account, settings, identities } = storeToRefs(user())

  const safeAccount = computed(() => safeObject(account.value))
  const safeSettings = computed(() => safeObject(settings.value))
  const safeId = computed(() => safeObject(identities.value))
  const email = useRefHistory(
    shallowRef<string>(safeId.value.email?.name ?? "")
  )

  const username = useRefHistory(
    shallowRef<string>(safeAccount.value.username ?? "")
  )

  const blockedUsers = shallowRef<string[]>(
    safeSettings.value?.blocked_users ?? []
  )
  const { history: blockedHistory } = useRefHistory(blockedUsers)

  const blockInput = shallowRef<string | undefined>("")
  const filterInput = shallowRef<string | undefined>("")

  function onAddBlock(item: string) {
    blockedUsers.value.push(item)

    blockInput.value = item
  }

  const providers = computed<ProviderProps[]>(() =>
    Object.entries(providerData).map(([key, provider]) => {
      const identity = safeId.value?.[key as ProviderKey]

      return {
        ...provider,
        label: key as ProviderKey,
        connected: Boolean(identity),
        name: identity?.name,
        description: identity?.description,
        avatar: {
          icon: provider.icon,
          src: identity?.avatar,
          size: "3xl",
        },
      }
    })
  )
  const fields = computed(() => {
    return {
      username: {
        label: "Username",
        help: "Used to identify you and your account. Your main display name if you haven't connected a Riot account.",
        required: true,
        modelValue: username.source.value,
        icon: "i-user",
        onBlur() {
          validateRefHistory(usernameSchema, true)
        },
      },
      email: {
        label: "Email",
        help: "Receive password reset and update messages, or use as your main login method.",
        icon: "i-mail",
        required: false,
        modelValue: email.source.value,
        onBlur() {
          validateField(emailSchema)
        },
        loading: !safeId.value.email?.description,
        trailingIcon: !safeId.value.email?.description
          ? "check-fill"
          : undefined,
        tooltip: safeId.value.email?.description
          ? "Verified!"
          : `Check your inbox! Verification email sent at ${"hi"}.`,
      },
      accounts: {
        label: "Connected Accounts",

        description: "Manage the accounts used to log in to lolpocket.",
      },
      block: {
        label: "Block Users",
        help: "Cast summmoner spell Block.",
        modelValue: blockInput,
        items: filterInput,
        disabled: !safeSettings?.value?.blocked_users?.length,
        icon: "i-search",
        empty: {
          label: "Blocked",
          title: "Empty",
          icon: "i-mingcute-empty-box-line",
          description:
            "Any users you block will show up here. They'll be unallowed to ,contact you through lolpocket.",
        },
      },
    }
  })

  return computed(() => ({
    fields,
    blockedHistory,
    onAddBlock,
    providers: providers.value,
  }))
}
