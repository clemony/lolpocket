<script lang="ts" setup>
const {
  class: className,
  imgClass,
  player,
} = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
  imgClass?: HTMLAttributes['class'][]
}>()
</script>

<template>
  <div
    class=""
    :class="cn('flex w-fit shrink-0 items-center gap-1', className)"
  >
    <button
      v-for="spell in player?.spells"
      :key="spell"
      :data-id="spell"
      data-type="spell"
    >
      <img
        :alt="String(spell)"
        :src="`/img/spells/${spell}.webp`"
        :class="cn('shadow-sm drop-shadow-sm', imgClass)"
      >
    </button>
  </div>
</template>
