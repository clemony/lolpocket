<script lang="ts" setup>
const props = defineProps<{
  player: any
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()

const ds = useDataStore()
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
  <div class="" :class="cn('gap-1 py-1 flex w-54 max-w-50 grow size-full  items-start *:rounded-md ', props.wrapperClass)">
    <template v-for="item in items" :key="item">
      <div v-if="item" v-tippy="getItemName(item)" class="" :class="cn('rounded-lg inset-shadow-rounded shadow-sm size-8 ', props.class)">
        <div class="size-8  overflow-hidden rounded-lg">
          <img v-if="item" :src="`/img/item/${item}.webp`" />
          <Placeholder v-else />
        </div>
      </div>

      <Placeholder v-else class="" :class="cn('size-8 bg-b3/50 rounded-lg', props.class)" />
    </template>
  </div>
</template>