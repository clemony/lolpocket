<script lang="ts" setup>
import type { BadgeProps, ButtonProps } from "@nuxt/ui"

const props = withDefaults(defineProps<ButtonProps & {}>(), {
  variant: "ghost",
  size: "sm",
  square: true
})

const emit = defineEmits(["update:open"])

const { inbox } = storeToRefs(user())
const unread = computed(() => {
  const unread = inbox.value?.messages.filter((m) => !m.read).length
  return {
    messages: unread ?? 0,
    notifications: inbox.value?.notifications?.length ?? 0
  }
})

const buttonProps: ButtonProps & { tabindex?: string } = {
  size: "sm",
  tabindex: "-1",
  variant: "ghost",
  ui: {
    base: "max-h-7.5",
    label: "text-2xs group-hover/btn:underline text-n4 group-hover/btn:text-pc"
  }
}

const badge: BadgeProps = {
  size: "md",
  variant: "solid",
  ui: {
    base: "pl-0 pr-6 py-0 gap-2.5",
    label: "text-sm!",
    leadingIcon: "scale-110"
  }
}

const { account } = safeObject(storeToRefs(user()))
</script>

<template>
  <UButton
    tabindex="-1"
    size="sm"
    :ui="{ base: 'translate-x-1 gap-1.5 px-3!' }"
    variant="ghost"
    color="tertiary"
    @click="emit('update:open', 'inbox')">
    <UBadge
      v-bind="badge"
      icon="i-lucide-mail"
      color="base"
      variant="ghost"
      :label="unread.messages ? unread.messages.toString() : '0'">
      <template #chip>
        <LazyPing :color="account?.color ?? 'insp'" />
      </template>
    </UBadge>

    <UBadge
      icon="i-ui-notification"
      v-bind="badge"
      color="base"
      :ui="{ ...badge?.ui, leadingIcon: '**:stroke-[1.1]' }"
      variant="ghost"
      :label="unread.notifications ? unread.notifications.toString() : '0'">
      <template #chip>
        <LazyPing :color="account?.color ?? 'insp'" />
      </template>
    </UBadge>
  </UButton>
</template>
