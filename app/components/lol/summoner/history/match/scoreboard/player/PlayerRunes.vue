<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
const s = computed (() => pathIndex.find(p => p.id === player?.runes?.secondary.path))

const keystone = computed (() => runeIndex.find(r => r.id === player.runes.keystone))
</script>

<template>
  <div
    :class="
      cn('-mt-px -mr-1 ml-1 flex size-full max-w-8 min-w-8 flex-col place-items-center gap-0.5 **:[&_img]:shrink-0',
         className,
      )
    ">
    <img
      v-if="keystone"
      v-tippy="{ content: keystone?.name,
                 placement: 'right',
                 theme: 'neutral' }"
      :alt="keystone?.name"
      :src="`/img/runes/${player.runes?.keystone}.webp`"
      class="
        h-8 w-auto shrink-0! drop-shadow-sm transition-all duration-300
        hover:scale-120
      " />

    <img
      v-if="s?.name"
      v-tippy="{ content: s?.name,
                 placement: 'right',
                 theme: 'neutral' }"
      :alt="s?.name"
      :src="`/img/paths/${s?.name}.webp`"
      class="ml-px h-5 w-auto dst transition-all duration-300 hover:scale-120"
      :class="{ 'h-4.5!': s?.name === 'Inspiration' }" />
  </div>
</template>
