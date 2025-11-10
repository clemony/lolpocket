<script lang="ts" setup>
const {
  class: className,
  player,
  wrapperClass,
} = defineProps<{
  player: Player
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()

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
</script>

<template>
  <div
    v-if="player"
    :class="
      cn(
        `
          flex size-full max-w-66 items-start gap-1.5
          *:rounded-md
        `,
        wrapperClass,
      )
    ">
    <template
      v-for="i in 6"
      :key="i">
      <Item
        v-if="items[i]"
        :id="items[i]"
        v-tippy="ix().itemNameById(items[i])"
        :alt="items[i]"
        class="
          size-10 rounded-lg ring-bc/60 transition-all duration-300
          hover:scale-105 hover:ring
        " />

      <Placeholder
        v-else
        :class="cn('size-10 rounded-lg !bg-b3/60', className)" />
    </template>
  </div>
</template>
