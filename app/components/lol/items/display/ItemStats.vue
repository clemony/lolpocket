<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"

const {
  class: className,
  stats,
  layout,
} = defineProps<{
  stats: Record<string, number>
  class?: HTMLAttributes["class"]
  layout?: string
}>()
</script>

<template>
  <ul :class="cn('grid w-full items-center gap-y-1', className)">
    <li
      v-for="[k, v] in Object.entries(stats)"
      :key="k"
      :class="
        cn('inline-flex gap-1 text-xs leading-4.5 text-wrap', {
          'text-sm': layout === 'command',
        })
      "
      :data-color="k">
      <span class="font-medium">{{ v ?? "" }}</span>
      <Icon
        v-if="statIndex[k]?.unit === '%'"
        name="i-lucide-percent"
        class="-ml-1 inline size-3.5 self-center align-baseline" />
      <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>
      <span class="font-medium">
        {{
          ["HSP", "APEN", "MPEN"].includes(statIndex[k]?.key ?? "")
            ? statIndex[k]?.abbr
            : statIndex[k]?.name
        }}
      </span>

      <!--       <span class="relative h-px w-4 place-items-center *:absolute">
        <Icon
          :name="`stat:${k}`"
          class="size-3.5! self-center" />
      </span> -->
    </li>
  </ul>
</template>
