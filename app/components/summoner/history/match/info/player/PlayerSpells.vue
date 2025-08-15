<script lang="ts" setup>
const { player, class: className } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
}>()

const ix = useIndexStore()

const spells = computed(() => {
  return {
    sum1: ix.spellNameById(player.summoner1Id),
    sum2: ix.spellNameById(player.summoner2Id),
  }
})
</script>

<template>
  <div
    class=""
    :class="cn('flex items-center gap-1 flex-col shrink-0', className)">
    <img
      v-tippy="{ content: spells.sum1.toString(), placement: 'right' }"
      :src="`/img/spells/${spells.sum1}.webp`"
      class="size-8 drop-shadow-sm shadow-sm rounded-md hover-ring" />

    <img
      v-tippy="{ content: spells.sum2.toString(), placement: 'right' }"
      :src="`/img/spells/${spells.sum2}.webp`"
      class="size-8 shadow-sm rounded-md drop-shadow-sm hover-ring" />
  </div>
</template>
