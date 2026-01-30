<script lang="ts" setup>
const { card: c } = defineProps<{
  card: Card
}>()
const emit = defineEmits([
  'download',
  'update:align',
  'update:color',
  'update:filter',
])
const card = computed(() => c)
const align = ref('0')
const color = ref<string>()
const filter = ref<string>()
watch(
  () => align.value,
  (newVal) => {
    // card.align = newVal
    emit('update:align', newVal)
  }
)
</script>

<template>
  <div
    class="border-x-b3/30 border-b-b3/80 bg-b2/40 before:bg-b1/60 absolute top-16 left-0 z-1 flex h-14 w-full items-center gap-2 rounded-none border-x-2 border-b px-5.25 py-1 shadow-none backdrop-blur-md before:absolute before:top-0 before:left-0 before:z-0 before:size-full"
  >
    <LazyChampionDropdown
      :disabled="!card.champion"
      :champion="card.champion"
      :card
    />

    <label
      v-tippy="'Background Color'"
      class="grid-place-items-center tldr-30 border-neutral/60 hover:border-neutral hover:ring-neutral relative mx-2 aspect-square size-6.5 cursor-pointer overflow-hidden rounded-full border drop-shadow-xs hover:ring"
    >
      <input
        v-model="color"
        class="absolute -top-2 -left-2 size-16 cursor-pointer"
        type="color"
        @change="emit('update:color', color)"
      >
    </label>

    <label
      v-tippy="'Filter'"
      class="group btn swap btn-square swap-rotate btn-ghost"
    >
      <input
        v-model="filter"
        class="peer"
        type="checkbox"
        :disabled="!card.splash"
        @change="emit('update:filter', filter)"
      >

      <icon
        class="swap-off dst peer-disabled:text-bc/20 size-5.5"
        name="hugeicons:monocle"
      />

      <icon
        class="swap-on dst peer-disabled:text-bc/20 size-6"
        name="streamline:rainbow"
      />
    </label>

    <Popover>
      <PopoverTrigger>
        <button v-tippy="'Background Align'" class="btn btn-square btn-ghost">
          <icon
            class="dst size-5.5 shrink-0"
            name="ph:arrows-out-line-horizontal"
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        class="PopoverContent border-b3 w-44 border"
        align="start"
        :side-offset="10"
        side="bottom"
      >
        <input
          v-model="align"
          class="range range-neutral range-xs"
          type="range"
          min="0"
          max="100"
        >
      </PopoverContent>
    </Popover>

    <FontSelect
      v-model:model-value="card.font[0]"
      tip="Title Font"
      :card
      :model="0"
      @update:model-value="(e) => (card.font[0] = e)"
    />

    <FontSelect
      v-model:model-value="card.font[1]"
      tip="Text Font"
      :card
      :model="1"
      @update:model-value="(e) => (card.font[1] = e)"
    />

    <button v-tippy="'Add Note'" class="btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="iconoir:text" />
    </button>

    <Grow />

    <Separator class="bg-b2 mx-3 h-5/6" orientation="vertical" />

    <button v-tippy="'Share'" class="btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="share" />
    </button>

    <button
      v-tippy="'Download Image'"
      class="btn btn-square btn-ghost"
      @click="emit('download')"
    >
      <icon class="dst size-5.5" name="iconoir:download" />
    </button>

    <Separator class="bg-b2 mx-3 h-5/6" orientation="vertical" />

    <button class="control-btn btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="ph:arrows-in-simple-light" />
    </button>

    <button class="btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="iconoir:zoom-in" />
    </button>

    <button class="btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="iconoir:zoom-out" />
    </button>
  </div>
</template>

<style scoped></style>
