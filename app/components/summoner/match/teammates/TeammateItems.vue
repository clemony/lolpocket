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
  <div class="" :class="cn('gap-1.5 py-1 mx-2 flex w-56 max-w-56 grow size-full  items-center ', wrapperClass)">
    <template v-for="i in 6" :key="i">
      <LazyPopoverItem v-if="items[i]" :id="items[i]" class="size-8.5 rounded-md *:rounded-md hover:ring-offset-1 " />

      <Placeholder v-else class="" :class="cn('size-9 !bg-b3/60 rounded-md', className)" />
    </template>
  </div>
</template>