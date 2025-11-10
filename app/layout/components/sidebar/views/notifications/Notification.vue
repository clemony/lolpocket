<script setup lang="ts">
import type { InboxItem } from '~~/shared/schema'
import { getInboxTemplate } from '~~/shared/schema/generate/inbox-templates'

const { item } = defineProps<{ item: InboxItem }>()

const emit = defineEmits(['clear-notification'])

const template = computed(() => getInboxTemplate(item))

const hasAction = computed(() => !!template.value.action)
</script>

<template>
  <div
    v-if="template"
    class="group/item chat chat-end min-h-14 w-full shrink-0 items-start gap-4 overflow-hidden border border-transparent py-0.5 pr-8 **:items-start first:pt-5">
    <span
      class="chat-header flex w-full items-center justify-between gap-2 pl-11 text-start font-medium text-nowrap opacity-50">
      <span class="flex items-center gap-2">
        <b v-if="template.badge?.text">{{ template.badge?.text }}</b>
        <span
          v-if="template.badge?.icon"
          class="relative grid h-px w-2 place-items-center">
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
        class="btn btn-circle !bg-b4 !border-b4 hover:bg-neutral hover:btn-neutral btn-xs absolute -top-3 -right-2 z-2 grid size-6 shrink-0 cursor-pointer place-items-center opacity-0 inset-shadow-xs shadow-sm drop-shadow-xs transition-opacity duration-200 group-hover/item:opacity-100 hover:**:stroke-[2.5]"
        @click.stop="emit('clear-notification')">
        <icon
          name="x"
          class="size-2.5 shrink-0 stroke-[2] text-white" />
      </button>

      <div class="flex w-full items-center gap-2">
        <div class="inline w-full grow text-start">
          <span
            class="[&_b]:dst text-bc/90 inline leading-snug font-medium [&_b]:tracking-tight"
            v-html="template.title" />
        </div>
      </div>
    </div>

    <NuxtLink
      v-if="template.action.type === 'navigate'"
      class="chat-footer flex cursor-pointer flex-nowrap items-center gap-1 p-0 leading-none !font-medium opacity-0 transition-opacity duration-200 group-hover/item:opacity-50 hover:underline hover:opacity-100"
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
