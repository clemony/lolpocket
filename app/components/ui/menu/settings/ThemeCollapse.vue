<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})
</script>

<template>
  <Popover class="">
    <PopoverTrigger v-tippy="'Background Color'" class="btn-square btn btn-ghost "  :data-theme="pocket.card.color">
      <div class="size-6 rounded-full   bg-b1 shadow-outline-4 border border-b3 drop-shadow-xs" />
    </PopoverTrigger>

    <PopoverContent :side-offset="6" class="grid grid-cols-3 place-items-center rounded-2xl backdrop-blur-md ">
      <label v-for="theme in themes[0].concat(themes[1]).concat(themes[2])" :key="theme.name" class="btn btn-square btn-ghost btn-lg relative " :data-theme="theme.name">
        <input v-model="pocket.card.color" type="radio" class="peer hidden" :value="theme.name" />
        <div class="size-8 rounded-full bg-b1 shadow-outline-4 border border-b3 drop-shadow-xs" />
      </label>
    </PopoverContent>
  </Popover>
</template>