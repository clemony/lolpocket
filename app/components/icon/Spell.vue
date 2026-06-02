<script lang="ts" setup>
import { spellIndex } from "~~/shared/constants/misc/spell-index"

const {
  id,
  side = "top",
  class: className,
  loadingType
} = defineProps<{
  class?: HTMLAttributes["class"]
  id: number | undefined
  loadingType?: LoadingStyle
  side?: Side
}>()

const loaded = ref(false)
const pinned = shallowRef<boolean>(false)
</script>

<template>
  <Tooltip
    interactive
    :side
    arrow
    :avatar="id ? `/img/spell/${id}.webp` : undefined"
    :label="id ? spellIndex[id]?.name : ''"
    trailing-icon="i-right-click"
    :ui="{
      content: cn('h-fit! max-h-80! w-full max-w-80', {
        'rounded-xl  px-1': pinned
      })
    }"
    @pinned="pinned = true"
    @unpinned="pinned = false">
    <UAvatar
      v-if="id"
      role="button"
      :class="
        cn(
          {
            'rounded-lg shadow-sm shadow-black/30 drop-shadow-sm': loaded
          },
          className
        )
      "
      :loading-type
      icon="i-ui-none"
      :alt="spellIndex[id]?.name || 'spell icon'"
      :src="`/img/spell/${id}.webp`"
      @load="loaded = true" />
    <template v-if="pinned" #content>
      <LazySpellTooltip v-if="id" :id />
    </template>
  </Tooltip>
</template>
