<script lang="ts" setup>
const {
  player,
  class: className,
  wrapperClass,
} = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()

const ds = useDataStore()
const items = computed(() => {
  const list = [
    player.item0,
    player.item1,
    player.item2,
    player.item3,
    player.item4,
    player.item5,
  ]

  return Object.values(list)
})

const ix = useIndexStore()
</script>

<template>
  <div
    v-if="player"
    :class="
      cn(
        'flex gap-1.5 size-full max-w-66   items-start *:rounded-md ',
        wrapperClass,
      )
    ">
    <template
      v-for="i in 6"
      :key="i">
      <Item
        v-if="items[i]"
        :id="items[i]"
        v-tippy="ix.itemNameById(items[i])"
        :alt="items[i]"
        class="size-10 rounded-lg" />

      <Placeholder
        v-else
        :class="cn('size-10 !bg-b3/60 rounded-lg', className)" />
    </template>
  </div>
</template>
