<script setup lang="ts">
import { shardObject } from '#shared/appdata/records/shards'

const {
  id,
  class: className,
  label,
} = defineProps<{
  id?: number | null
  label?: boolean
  class?: HTMLAttributes['class']
}>()

const shard = computed(() =>
  shardObject.flatMap(o => o.shards).find(s => s.id === id)
)
</script>

<template>
  <Label
    variant="base"
    hover="ghost"
    :style="{ '--shard-color': shard?.color }"
    :title="shard?.description"
    :class="
      cn(
        'grid rounded-full relative  group/shard shrink-0 place-items-center shadow-black/5 drop-shadow-black/5 drop-shadow-sm border border-b2',
        {
          'grayscale has-checked:grayscale-0 hover:!bg-b1 hover:grayscale-0 ring-[var(--shard-color)]/80 has-checked:border-[var(--shard-color)]/80 has-checked:ring bg-b1 hover:ring size-14 shadow-sm cursor-pointer  ':
            label,
        },
        className,
      )
    ">
    <slot />
    <component
      :is="`i-lol-${shard?.id}`"
      v-if="id"
      :alt="`shard-${shard?.name}`"
      :class="
        cn(
          'shrink-0 absolute peer-not-checked:brightness-0 group-hover/shard:!brightness-100 peer-not-checked:opacity-50  text-[var(--shard-color)]  dst',
          {
            '!size-5': ![5011, 5010, 5007].includes(id),
            '!size-4.5': [5011, 5010, 5007].includes(id),
          },
        )
      " />
  </Label>
</template>
