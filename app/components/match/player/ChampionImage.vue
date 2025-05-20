<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: number
    player?: any
  }>(),
  {
    size: 17,
  },
)

const ds = useDataStore()
const player = computed (() => props.player)
const champ = computedAsync (() => {
  if (!player.value || !player.value.championId)
    return
  return { name: props.player.championName, id: props.player.championId}
})
</script>

<template>
  <div class="shadow-sm drop-shadow-sm rounded-lg size-fit">
    <div v-if="champ && champ.name" v-tippy="{ content: champ.name, placement: 'top' }" class="overflow-hidden rounded-lg " :class="`size-${props.size}`">
      <ChampionIcon :id="champ.id" :alt="champ.name"
        class=" scale-116 rounded-lg" :class="`size-${props.size}`" />
    </div>
  </div>
</template>