<script setup lang="ts">
import { motion } from 'motion-v'
import { getInboxTemplate } from '~/data/messaging/inbox-templates'
import { itemVariants } from './inbox-variants'

const { item } = defineProps<{
  item: InboxItem
}>()

const emit = defineEmits(['clear-notification'])

const temp = computed (() => getInboxTemplate(item))

function formatTime(t) {
  return useTimeAgo(t)
}
</script>

<template>
  <motion.div
    :variants="itemVariants"
    :class="cn('w-full first:pt-5 hover:dst flex hover:bg-b2/40 border border-transparent items-center shrink-0 min-h-14  px-3 py-3.75  items-start **:items-start gap-4 overflow-hidden not-last:border-b border-b-b2 group/item')">
    <div
      v-if="temp.badge"
      class="badge flex bg-linear-to-br  items-center text-nowrap flex nowrap gap-1 rounded-lg mt-0.75 pt-0.5 border-0"
      :class="temp.badge.class">
      <icon
        v-if="temp.badge.icon"
        :name="temp.badge.icon.name"
        :class="cn('-ml-1 shrink-0 text-white/80', temp.badge.icon.class)" />
      <span
        v-if="temp.badge.text"
        class="text-1    align-bottom font-medium text-white/90">
        {{ temp.badge.text }}
      </span>
    </div>
    <div class="flex items-center w-full gap-2 ">
      <div class=" grow text-start w-full inline ">
        <span
          class=" [&_b]:tracking-tight   [&_b]:dst  font-medium text-bc/90 inline leading-snug"
          v-html="temp.title" />
      </div>

      <div class="relative">
        <span class="text-2 ml-2 font-medium text-nowrap opacity-50 group-hover/item:opacity-0 transition-opacity duration-200">
          {{ formatTime(item.time).value.toString().replace('minutes', 'min') }}
        </span>

        <NavHyperlink
          v-if="temp.action.type == 'navigate'"
          class="size-full justify-end group-hover/item:opacity-50 hover:opacity-100 opacity-0 items-center !text-1 !font-medium inline text-balanced  cursor-pointer !leading-snug  transition-opacity duration-200 absolute right-0 top-0"
          @click="navigateTo(temp.action.function)">
          <icon
            :name="temp.action.icon.name"
            :class="cn('inline shrink-0 dst', temp.action.icon.class)" />
          <span
            class=""
            v-html="temp.action.text" />
        </NavHyperlink>
      </div>

      <button
        class="size-9 grid  place-items-center   opacity-40 hover:opacity-100 hover:**:stroke-[1.5] cursor-pointer "
        @click.stop="emit('clear-notification')">
        <icon
          name="x-sm"
          class="shrink-0" />
      </button>
    </div>
  </motion.div>
</template>