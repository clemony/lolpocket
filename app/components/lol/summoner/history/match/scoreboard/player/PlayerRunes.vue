<script lang="ts" setup>
const { class: className, player } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()
const s = computed(() =>
  pathIndex.find(p => p.id === player?.runes?.secondary.path)
)

const keystone = computed(() =>
  runeIndex.find(r => r.id === player.runes.keystone)
)
</script>

<template>
  <div
    :class="
      cn(
        'mx-2 -mt-px flex size-full w-max shrink-0 flex-col place-items-center gap-1',
        className,
      )
    "
  >
    <Keystone
      :id="keystone?.id"
      class="size-7.5 transition-all duration-300 hover:scale-120"
    />

    <Element
      class="relative grid shrink-0 place-items-center transition-all duration-300 hover:scale-120"
      :data-id="s?.name"
      data-type="path"
      size="c-6"
    >
      <img
        v-if="s?.name"
        class="dst h-4.75 w-auto place-self-center"
        :alt="s?.name"
        :src="`/img/paths/${s?.name}.webp`"
      >
    </Element>
  </div>
</template>
