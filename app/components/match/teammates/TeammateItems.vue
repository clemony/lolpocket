<script lang="ts" setup>
const { player, class: className, wrapperClass } = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()

const ds = useDataStore()
const items = computed (() => {
  const p = player
  const list = [player.item0, player.item1, player.item2, player.item3, player.item4, player.item5]

  return Object.values(list)
})

const ix = useIndexStore()
</script>

<template>
  <div class="" :class="cn('gap-1 py-1 flex w-54 max-w-50 grow size-full  items-start *:rounded-md ', wrapperClass)">
    <template v-for="item in items" :key="item">
      <div v-if="item" v-tippy="ix.itemNameById(item)" class="" :class="cn('rounded-lg inset-shadow-rounded shadow-sm size-8 ', className)">
        <div class="size-8  overflow-hidden rounded-lg">
          <img v-if="item" :src="`/img/item/${item}.webp`" />

          <Placeholder v-else />
        </div>
      </div>

      <Placeholder v-else class="" :class="cn('size-8 bg-b3/50 rounded-lg', className)" />
    </template>
  </div>
</template>