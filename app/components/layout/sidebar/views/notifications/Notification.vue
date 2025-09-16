<script setup lang="ts">
import { getInboxTemplate } from '#shared/appdata/messaging/inbox-templates'

const { item } = defineProps<{ item: InboxItem }>()

const emit = defineEmits(['clear-notification'])

const template = computed(() => getInboxTemplate(item))

const hasAction = computed(() => !!template.value.action)
</script>

<template>
  <div
    v-if="template"
    class="w-full first:pt-5 border border-transparent items-center shrink-0 min-h-14 pr-8 py-0.5 items-start **:items-start gap-4 overflow-hidden group/item chat chat-end">
    <span
      class="chat-header w-full items-center text-start pl-11 flex gap-2 font-medium text-nowrap opacity-50 justify-between">
      <span class="flex items-center gap-2">
        <b v-if="template.badge?.text">{{ template.badge?.text }}</b>
        <span
          v-if="template.badge?.icon"
          class="h-px w-2 grid place-items-center relative">
          <icon
            :name="template.badge?.icon?.name"
            :class="cn('absolute', template.badge?.icon?.class)" />
        </span>
      </span>
      {{ formatTimeAgo(item.date, "letter") }}
    </span>

    <div
      :class="
        cn(
          'chat-bubble relative w-full gap-2 py-3  flex flex-col',
          template.badge?.class,
        )
      ">
      <button
        class="grid absolute opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 btn btn-circle !bg-b4 shadow-sm inset-shadow-xs drop-shadow-xs !border-b4 hover:bg-neutral hover:btn-neutral shrink-0 size-6 btn-xs -right-2 -top-3 place-items-center z-2 hover:**:stroke-[2.5] cursor-pointer"
        @click.stop="emit('clear-notification')">
        <icon
          name="x"
          class="shrink-0 size-2.5 stroke-[2] text-white" />
      </button>

      <div class="flex items-center w-full gap-2">
        <div class="grow text-start w-full inline">
          <span
            class="[&_b]:tracking-tight [&_b]:dst font-medium text-bc/90 inline leading-snug"
            v-html="template.title" />
        </div>
      </div>
    </div>

    <NuxtLink
      v-if="template.action.type == 'navigate'"
      class="chat-footer group-hover/item:opacity-50 hover:opacity-100 opacity-0 items-center p-0 flex gap-1 flex-nowrap !font-medium leading-none cursor-pointer hover:underline transition-opacity duration-200"
      :to="template.action.function">
      <icon
        :name="template.action.icon.name"
        :class="cn('shrink-0 dst', template.action.icon.class)" />
      <span
        class="leading-none"
        v-html="template.action.text" />
    </NuxtLink>
  </div>
</template>
