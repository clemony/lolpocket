<script setup lang="ts">
import type { ButtonProps, UserProps } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"

defineOptions({
  inheritAttrs: false
})

const { message } = defineProps<{
  message: InboxMessage
}>()

const emit = defineEmits<{ close: [boolean] }>()
const open = defineModel<boolean>("open", { default: false })
const detailsOpen = shallowRef<boolean>(false)

function onOpenChange(value: boolean) {
  if (!value) emit("close", false)
}

const to = computed<UserProps>(() => ({
  name: message.to.username
    ? `${message.to.username} (@${message.to.name})`
    : message.to.name || message.to.username || undefined,
  avatar: {
    src: isNumber(message.to.icon)
      ? getSummonerIcon(message.to.icon ?? undefined)
      : message.to.icon || undefined,
    size: "xs"
  }
}))

const from = computed<UserProps>(() => ({
  name: message.from.username
    ? `${message.from.username} (@${message.from.name})`
    : message.from.name || message.from.username || undefined,
  avatar: {
    src: isNumber(message.from.icon)
      ? getSummonerIcon(message.from.icon ?? undefined)
      : message.from.icon || undefined,
    size: "xs"
  }
}))

const btn: ButtonProps = {
  variant: "ghost",
  color: "neutral",
  ui: {
    base: "inset-ring inset-ring-p3 shadow-xs on:hover:bg-neutral",
    leadingIcon: "text-pc "
  }
}

const date = computed(
  () => `${useDateFormat(message.created_at, "M/D/YYYY h:mma").value}`
)
</script>

<template>
  <UModal
    v-model:open="open"
    :aria-label="message?.title"
    :aria-descrbedby="`received from ${String(message?.from?.name ?? message.from?.username ?? '')}`"
    :ui="{
      header: 'w-full shrink-0 overflow-hidden p-0!',
      content: 'min-w-190 shrink-0 -translate-y-[30vh]'
    }"
    @update:open="onOpenChange">
    <template #header>
      <UCollapsible
        v-model:open="detailsOpen"
        :ui="{
          root: 'w-full shrink-0 overflow-hidden',
          content: 'bg-p1 px-0'
        }">
        <div class="flex items-center gap-2 px-3.5">
          <label
            for="toggle-details"
            class="flex grow cursor-pointer items-center justify-between py-3">
            <UUser
              variant="link"
              size="xl"
              :avatar="to.avatar"
              :name="message?.title"
              :description="from.name"
              :ui="{
                name: 'text-xl font-semibold',
                description: 'font-normal'
              }">
              <template
                v-if="message.from.name && message.from.username"
                #description>
                {{ message.from.username }}
                <span class="italic">(@{{ message.from.name }})</span>
              </template>
            </UUser>

            <UButton
              v-bind="btn"
              id="toggle-details"
              :active="detailsOpen"
              active-variant="solid"
              active-color="primary"
              :icon="detailsOpen ? 'i-minus' : 'i-add'"
              @click.stop />
          </label>
          <UButton v-bind="btn" icon="i-x" @click="emit('close', false)" />
        </div>
        <template #content>
          <USeparator color="tertiary" />
          <div class="flex w-full flex-col gap-0 px-6 py-4">
            <UTheme
              :ui="{
                formField: {
                  root: 'gap-3',
                  labelWrapper: 'w-12',
                  container: 'grow'
                },
                input: {
                  root: 'w-full grow',
                  base: 'pl-10'
                }
              }">
              <UFormField orientation="horizontal" label="To:">
                <UInput
                  variant="none"
                  :avatar="to.avatar"
                  readonly
                  :value="to.name" />
              </UFormField>
              <UFormField orientation="horizontal" label="From:">
                <UInput
                  variant="none"
                  :avatar="from.avatar"
                  readonly
                  :value="from.name" />
              </UFormField>

              <UFormField orientation="horizontal" label="Date:">
                <UInput
                  variant="none"
                  :ui="{
                    trailing: 'left-10',
                    leadingIcon: 'translate-x-1'
                  }"
                  readonly
                  icon="i-calendar">
                  <template #trailing>
                    <span class="text-sm">{{ date }}</span>
                    <span class="text-xs italic opacity-50"
                      >&nbsp;({{ useTimeAgo(message.created_at).value }})</span
                    >
                  </template>
                </UInput>
              </UFormField>
            </UTheme>
          </div>
        </template>
      </UCollapsible>
    </template>
    <template #body>
      <UEditor :model-value="message.content" :editable="false" />
    </template>
  </UModal>
</template>
