<script setup lang="ts">
import { ListboxFilter } from "reka-ui"
import { accountOptions } from "~/components/user/settings/account/accountOptions"

definePageMeta({
  title: "Account",
  description: "Manage your account safeSettings and login safeSettings.",
  icon: "at",
  path: "/settings/account",
  auth: true,
  order: 1,
  prefix: "Settings"
  /*   middleware: 'confirm-auth', */
})
const client = useSupabaseClient()

const { account, settings, identities } = storeToRefs(user())

const safeAccount = computed(() => safeObject(account.value))
const safeSettings = computed(() => safeObject(settings.value))
const safeId = computed(() => safeObject(identities.value))

const email = shallowRef<string>(safeId.value.email?.name ?? "")
const { history: emailHistory } = useRefHistory(email)

const username = shallowRef<string>(safeAccount.value.username ?? "")
const { history: usernameHistory } = useRefHistory(username)

const blockedUsers = shallowRef<string[]>(safeSettings.value?.blocked_users)
const { history: blockedHistory } = useRefHistory(blockedUsers)

const blockInput = shallowRef<string | undefined>("")
const filterInput = shallowRef<string | undefined>("")

const isSaving = ref(false)

function onCreate(item: string) {
  blockedUsers.value.push(item)

  blockInput.value = item
}

onMounted(() => {
  email.value = safeId.value.email?.name ?? ""
  username.value = safeAccount.value.username ?? ""
  blockedUsers.value
    ? (blockedUsers.value = safeSettings.value?.blocked_users)
    : (blockedUsers.value = [] as string[])
})
function updateEmail() {
  if (
    emailHistory.value.length > 1 &&
    emailHistory.value[0] !== identities.value?.email?.name
  ) {
    const client = useSupabaseClient()
  }
}
async function saveAccount() {
  isSaving.value = true

  if (
    usernameHistory.value.length > 1 &&
    usernameHistory.value.at(-1) !== account.value?.username
  ) {
    accountUpdate({ username: username.value || undefined }, { silent: true })
  }
  isSaving.value = false
}
</script>

<template>
  <UForm @submit.prevent="saveAccount">
    <!-- username -->
    <UFormField
      size="lg"
      :label="accountOptions.username.label"
      :description="accountOptions.username.description">
      <UInput
        v-model:model-value="username"
        :model-modifiers="{ trim: true }"
        size="md"
        icon="i-user"
        @blur="validateField(usernameSchema)">
        <template #trailing>
          <LazyInputClear @clear-input="username = ''" />
        </template>
      </UInput>
    </UFormField>

    <!-- email -->

    <UFormField
      size="lg"
      :label="accountOptions.email.label"
      :description="accountOptions.email.description">
      <UInput
        v-model:model-value="email"
        :model-modifiers="{ trim: true }"
        icon="i-mail"
        size="md"
        @blur="validateField(emailSchema)">
        <template #trailing>
          <LazyInputClear @clear-input="email = ''" />
          <Tooltip v-if="safeId.email?.description" label="Verified!">
            <div
              class="mr-1 grid size-12 shrink-0 place-items-center group-focus-within/input:hidden">
              <Icon name="check-fill" class="dst size-4.25!" />
            </div>
          </Tooltip>
          <Tooltip
            v-else
            :label="`Check your inbox! Verification email sent at ${'hi'}.`">
            <div class="mr-1 grid size-12 shrink-0 place-items-center">
              <LazySpinner class="size-4.5 opacity-80" />
            </div>
          </Tooltip>
        </template>
      </UInput>
    </UFormField>

    <!-- connected accounts -->

    <UFormField
      size="lg"
      :label="accountOptions.accounts.label"
      :description="accountOptions.accounts.description">
      <ProviderCards />
    </UFormField>

    <!-- block -->
    <div class="flex w-full flex-wrap gap-8">
      <UFormField
        :ui="{
          root: 'max-w-[calc(50%-var(--spacing)*4)]',
          help: 'px-3 text-center! text-pretty'
        }"
        size="lg"
        :label="accountOptions.block.label"
        :help="accountOptions.block.description">
        <UInput
          v-model:model-value="blockInput"
          icon="i-search"
          :model-modifiers="{ trim: true }"
          size="md">
          <template #trailing>
            <LazyInputClear @clear-input="blockInput = ''" />
          </template>
        </UInput>
      </UFormField>

      <!-- block list -->
      <UFormField
        size="lg"
        :ui="{
          root: 'max-w-[calc(50%-var(--spacing)*4)]',
          label: 'opacity-0'
        }"
        :label="accountOptions.blocked.label">
        <template v-if="settings?.blocked_users.length">
          <UInput
            v-model:model-value="filterInput"
            :disabled="!settings?.blocked_users.length"
            icon="i-lucide-text-search"
            :ui="{
              leadingIcon: 'scale-110'
            }"
            :model-modifiers="{ trim: true }"
            size="md">
            <template #trailing>
              <LazyInputClear @clear-input="filterInput = ''" />
            </template>
          </UInput>
          <UScrollArea class="h-72" />
        </template>
        <UEmpty
          v-else
          size="md"
          :ui="{
            header: 'flex-row flex-wrap justify-center',
            avatar: '-ml-4 size-max translate-y-0.75 scale-110',
            title: 'w-max',
            description: 'w-full'
          }"
          :title="accountOptions.blocked.title"
          :description="accountOptions.blocked.description"
          :icon="accountOptions.blocked.icon"
          variant="outline" />
      </UFormField>
    </div>
    <Separator />
    <div class="flex justify-start">
      <UButton color="neutral" type="submit" :loading="isSaving" label="Save" />
    </div>
  </UForm>
</template>
