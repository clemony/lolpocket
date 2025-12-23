<script setup lang="ts">
import { shardColor } from '~~/shared/constants/runes/shard-color'
import { shardObject } from '~~/shared/records/shards'

const {
  id,
  class: className,
  iconClass,
  label
} = defineProps<{
  id?: number | null
  label?: boolean
  iconClass?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
}>()

const shard = computed(() =>
  shardObject.flatMap(o => o.shards).find(s => s.id === id),
)
</script>

<template>
  <Label
    variant="base"
    hover="ghost"
    :style="{ '--shard-color': shardColor[id] }"
    :class="
      cn('group/shard relative grid shrink-0 place-items-center rounded-full border border-b2 shadow-black/5 drop-shadow-sm drop-shadow-black/5',
         {
           'grayscale has-checked:grayscale-0 hover:!bg-b1 hover:grayscale-0 ring-[var(--shard-color)]/80 has-checked:border-[var(--shard-color)]/80 has-checked:ring bg-b1 hover:ring size-14 shadow-sm cursor-pointer  ':
             label,
         },
         className,
      )
    ">
    <slot />
    <!--    <Icon
      v-if="id"
      :name="`shard:${shard?.id}`"
      :alt="`shard-${shard?.name}`"
      :class="
        cn('absolute shrink-0 text-[var(--shard-color)] dst group-hover/shard:brightness-100! peer-not-checked:opacity-50 peer-not-checked:brightness-0',
           {
             '!size-5': ![5011, 5010, 5007].includes(id),
             '!size-4.5': [5011, 5010, 5007].includes(id),
           }, iconClass,
        )
      " /> -->
    <Img
      :src="`/img/shards/${shard?.id}.webp`"
      alt="icon"
      class="size-6 shrink-0" />
  </Label>
</template>
