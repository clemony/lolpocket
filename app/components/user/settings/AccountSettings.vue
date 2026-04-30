<script setup lang="ts">
import { accountOptions } from "~/components/user/settings/data/accountOptions"

const { orientation = "horizontal" } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()
const client = useSupabaseClient()

const { account, settings, identities } = storeToRefs(user())
console.log("🥸 - identities:", identities)

const safeAccount = computed(() => safeObject(account.value))
const safeSettings = computed(() => safeObject(settings.value))
const safeId = computed(() => safeObject(identities.value))
const email = useRefHistory(shallowRef<string>(safeId.value.email?.name ?? ""))

const username = useRefHistory(
  shallowRef<string>(safeAccount.value.username ?? "")
)

const blockedUsers = shallowRef<string[]>(safeSettings.value?.blocked_users ?? [])
const { history: blockedHistory } = useRefHistory(blockedUsers)

const blockInput = shallowRef<string | undefined>("")
const filterInput = shallowRef<string | undefined>("")

function onAddBlock(item: string) {
  blockedUsers.value.push(item)

  blockInput.value = item
}
//
//     i-mynaui-asterisk-circle
</script>

<template>
  <!-- username -->
  <UFormField
    size="lg"
    :label="accountOptions.username.label"
    name="username"
    :required="true"
    :ui="{
      label: 'flex w-full grow items-center justify-between'
    }"
    :help="
      orientation === 'horizontal'
        ? accountOptions.username.description
        : undefined
    ">
    <template #label>
      {{ accountOptions.username.label }}
      <Icon name="" class="size-3.5 justify-self-end" />
      <HintTooltip type="required" arrow />
    </template>
    <template v-if="orientation === 'vertical'" #hint>
      <HintTooltip :label="accountOptions.username.description" />
    </template>
    <UInput
      v-model:model-value="username.source.value"
      :model-modifiers="{ trim: true }"
      size="md"
      icon="i-user"
      @blur="validateRefHistory(usernameSchema, true)">
      <template #trailing>
        <LazyInputClear @clear-input="username.clear()" />
      </template>
    </UInput>
    <template #error="{ error }">
      <span>{{ error }}</span>
    </template>
  </UFormField>

  <!-- email -->

  <UFormField
    size="lg"
    :label="accountOptions.email.label"
    :help="
      orientation === 'horizontal'
        ? accountOptions.email.description
        : undefined
    ">
    <template v-if="orientation === 'vertical'" #hint>
      <HintTooltip :label="accountOptions.email.description" />
    </template>
    <UInput
      v-model:model-value="email.source.value"
      :model-modifiers="{ trim: true }"
      icon="i-mail"
      size="md"
      @blur="validateField(emailSchema)">
      <template #trailing>
        <LazyInputClear @clear-input="email.source.value = ''" />
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
    :description="
      orientation === 'horizontal'
        ? accountOptions.accounts.description
        : undefined
    ">
    <template v-if="orientation === 'vertical'" #hint>
      <HintTooltip :label="accountOptions.accounts.description" />
    </template>
    <ProviderCards :orientation />
  </UFormField>

  <div
    :class="
      cn('flex w-full flex-wrap gap-8', {
        'flex-col gap-3': orientation === 'vertical'
      })
    ">
    <!-- block -->
    <UTheme
      :ui="{
        formField: {
          root: cn('max-w-[calc(50%-var(--spacing)*4)]', {
            'w-full max-w-full': orientation === 'vertical'
          }),
          help: 'px-3 text-center! text-pretty'
        },
        input: {
          root: 'w-full'
        }
      }">
      <UFormField
        size="lg"
        :label="accountOptions.block.label"
        :help="
          orientation === 'horizontal'
            ? accountOptions.block.description
            : undefined
        ">
        <template v-if="orientation === 'vertical'" #hint>
          <HintTooltip :label="accountOptions.block.description" />
        </template>
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
      <UFormField size="lg" :label="accountOptions.blocked.label">
        <template v-if="settings?.blocked_users?.length">
          <UInput
            v-model:model-value="filterInput"
            :disabled="!settings?.blocked_users?.length"
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
          <!--   <UScrollArea class="h-72" /> -->
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
    </UTheme>
  </div>
</template>
