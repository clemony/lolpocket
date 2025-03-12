<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})
</script>

<template>
  <div tabindex="0" class="collapse !items-center rounded-none    ">
    <label v-tippy="'Background Color'" class="items-center ml-2 !shadow-none  !inset-shadow-none !aspect-square !size-14 !btn !btn-ghost !p-0 collapse-title" :style="{ '--depth': 0, '--noise': 0 }" :data-theme="pocket.card.color">
      <div class="size-7.5 rounded-full   bg-b1 shadow-outline-4 border border-b3 drop-shadow-xs" />
    </label>

    <div class="collapse-content !rounded-none bg-b2 !shadow-none  flex items-center rounded-2xl flex-col w-18 backdrop-blur-md bg-b2/90 ">
      <label v-for="theme in themes[0]" :key="theme.name" class="btn btn-square btn-ghost btn-lg relative " :data-theme="theme.name">
        <input v-model="pocket.card.color" type="radio" class="peer hidden" :value="theme.name" />
        <div class="size-8 rounded-full bg-b1 shadow-outline-4 border border-b3 drop-shadow-xs" />
      </label>
    </div>
  </div>
</template>