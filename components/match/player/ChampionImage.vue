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
  const a = ds.champions.find(c => c.key == player.value.championId.toString())
  return a
})
</script>

<template>
  <div class="shadow-sm drop-shadow-sm rounded-lg size-fit">
    <div v-if="champ && champ.name" v-tippy="{ content: champ.name, placement: 'top' }" class="overflow-hidden rounded-lg " :class="`size-${props.size}`">
      <img
        v-if="champ && champ.id"
        :src="`/img/champion/${champ.id}.webp`"
        class=" scale-116 rounded-lg" :class="`size-${props.size}`" />
    </div>
  </div>
</template>