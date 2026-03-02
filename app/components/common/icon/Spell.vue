<script lang="ts" setup>
import { spells } from "#shared/constants/misc/spells"

const {
  id,
  side = "top",
  class: className,
  loadingType,
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
    :avatar="id ? `/img/spells/${id}.webp` : undefined"
    :label="id ? spells[id]?.name : ''"
    trailing-icon="i-right-click"
    :ui="{
      content: cn('h-fit! max-h-80! w-full max-w-80', {
        'rounded-xl  px-1': pinned,
      }),
    }"
    @pinned="pinned = true"
    @unpinned="pinned = false">
    <UAvatar
      v-if="id"
      role="button"
      :class="
        cn(
          {
            'size-14 rounded-lg shadow-sm shadow-black/30 drop-shadow-sm':
              loaded,
          },
          className,
        )
      "
      :loading-type
      icon="i-ui-none"
      :alt="spells[id]?.name || 'spell icon'"
      :src="`/img/spells/${id}.webp`"
      @load="loaded = true" />
    <template v-if="pinned" #content>
      <LazySpellTooltip v-if="id" :id />
    </template>
  </Tooltip>
</template>
