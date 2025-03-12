<script lang="ts" setup>
const props = defineProps<{
  player: any
}>()

const player = ref(props.player)
const items = computed (() => {
  const p = player.value
  const list = [p.item0, p.item1, p.item2, p.item3, p.item4, p.item5]

  return Object.values(list)
})

onMounted (async () => {
  await props.player

  nextTick(() => {
    player.value = props.player
  })
})
</script>

<template>
  <div class="flex gap-1.5 *:rounded-md">
    <template v-for="item in items" :key="item">
      <div class="rounded-lg inset-shadow-rounded shadow-sm  size-14">
        <div class="size-14 overflow-hidden rounded-lg">
          <img v-if="item" :src="`/img/item/${item}.webp`" />
          <Placeholder v-else />
        </div>
      </div>
    </template>
  </div>
</template>