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
      cn('mx-2 -mt-px flex size-full w-max shrink-0 flex-col place-items-center gap-1',
         className,
      )
    ">
    <div
      :data-id="keystone?.id"
      data-tip="rune"
      class="tippy relative grid size-7.5 shrink-0 place-items-center transition-all duration-300 hover:scale-120">
      <img
        v-if="keystone"
        :alt="keystone?.name"
        :src="`/img/runes/${player.runes?.keystone}.webp`"
        class="
          absolute h-8.5 shrink-0! object-cover drop-shadow-sm
        " />
    </div>

    <Element
      size="c-6"
      class="relative grid shrink-0 place-items-center transition-all duration-300 hover:scale-120">
      <img
        v-if="s?.name"
        v-tippy="{ content: s?.name,
                   placement: 'right',
                   theme: 'neutral line' }"
        :alt="s?.name"
        :src="`/img/paths/${s?.name}.webp`"
        class="ml-px h-4.75 w-auto place-self-center dst"
        :class="{ 'h-4.25!': s?.name === 'Inspiration', '-translate-x-px': ['Inspiration', 'Precision'].includes(s?.name) }" />
    </Element>
  </div>
</template>
