<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()
const emit = defineEmits(['download'])

const pocket = computed (() => {
  return props.pocket
})
const ds = useDataStore()
const align = ref('0')

watch(
  () => align.value,
  (newVal) => {
    pocket.value.card.align = newVal
  },
)
</script>

<template>
  <div class="absolute before:z-0 before:absolute before:size-full before:bg-b1/60 before:top-0 before:left-0 z-1  bg-b2/40 backdrop-blur-md flex items-center py-1 top-16 left-0 w-full rounded-none  shadow-none border-b border-b-b3/80 border-x-2 border-x-b3/30  h-14 px-5.25 gap-2">
    <LazyChampionSplashDropdown
      :disabled="!pocket.champions[0]"
      :champion=" pocket.champions[0]"
      :pocket="pocket" />

    <label
      v-tippy="'Background Color'"
      class="mx-2 aspect-square border border-neutral/60 drop-shadow-xs  relative rounded-full grid-place-items-center size-6.5 overflow-hidden hover:border-neutral hover:ring hover:ring-neutral tldr-30 cursor-pointer">
      <input
        v-model="pocket.card.color"
        type="color"
        class="size-16 -top-2 -left-2 cursor-pointer absolute"
        @change="console.log(pocket.card.color)" />
    </label>

    <label
      v-tippy="'Filter'"
      class="swap swap-rotate btn  btn-square group btn-ghost ">
      <input
        v-model="pocket.card.filter"
        type="checkbox"
        class="peer"
        :disabled="!pocket.card.splash" />

      <icon
        name="hugeicons:monocle"
        class="size-5.5 dst swap-off peer-disabled:text-bc/20" />

      <icon
        name="streamline:rainbow"
        class="swap-on dst size-6  peer-disabled:text-bc/20" />

    </label>

    <Popover>
      <PopoverTrigger>
        <button
          v-tippy="'Background Align'"
          class="btn btn-square btn-ghost  ">
          <icon
            name="ph:arrows-out-line-horizontal"
            class="size-5.5  dst shrink-0" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        :side-offset="10"
        side="bottom"
        class=" w-44 PopoverContent   border border-b3">
        <input
          v-model="align"
          type="range"
          min="0"
          max="100"
          class="range range-neutral range-xs" />
      </PopoverContent>
    </Popover>

    <FontSelect
      v-model:model-value="pocket.card.font[0]"
      tip="Title Font"
      :pocket="pocket"
      :model="0"
      @update:model-value="e => pocket.card.font[0] = e" />

    <FontSelect
      v-model:model-value="pocket.card.font[1]"
      tip="Text Font"
      :pocket="pocket"
      :model="1"
      @update:model-value="e => pocket.card.font[1] = e" />

    <button
      v-tippy="'Add Note'"
      class="btn btn-square btn-ghost  ">
      <icon
        name="iconoir:text"
        class="size-5.5 dst " />
    </button>

    <Grow />

    <Separator
      orientation="vertical"
      class="bg-b2 h-5/6 mx-3" />

    <button
      v-tippy="'Share'"
      class="btn btn-square  btn-ghost">
      <icon
        name="share"
        class="size-5.5 dst" />
    </button>

    <button
      v-tippy="'Download Image'"
      class="btn btn-square btn-ghost"
      @click="emit('download')">
      <icon
        name="iconoir:download"
        class="size-5.5  dst " />
    </button>

    <Separator
      orientation="vertical"
      class="bg-b2 h-5/6 mx-3" />

    <button class="btn btn-ghost btn-square control-btn">
      <icon
        name="ph:arrows-in-simple-light"
        class="dst size-5.5" />
    </button>

    <button class="btn btn-ghost btn-square">
      <icon
        name="iconoir:zoom-in"
        class="dst size-5.5" />
    </button>

    <button class="btn btn-ghost btn-square">
      <icon
        name="iconoir:zoom-out"
        class="dst size-5.5" />
    </button>
  </div>
</template>

<style scoped>

</style>