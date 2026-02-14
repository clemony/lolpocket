<script lang="ts" setup>
const { card: c } = defineProps<{
  card: Card | null
}>()
const emit = defineEmits([
  "download",
  "update:align",
  "update:color",
  "update:filter",
])
const card = computed<Card | null>(() => c ?? null)
const cardFont0 = computed({
  get: () => card.value?.font?.[0] ?? "",
  set: (value: string) => {
    if (card.value) card.value.font[0] = value
  },
})
const cardFont1 = computed({
  get: () => card.value?.font?.[1] ?? "",
  set: (value: string) => {
    if (card.value) card.value.font[1] = value
  },
})
const align = ref("0")
const color = ref<string>()
const filter = ref<string>()
watch(
  () => align.value,
  (newVal) => {
    // card.align = newVal
    emit("update:align", newVal)
  }
)
</script>

<template>
  <div
    v-if="card"
    class="absolute top-16 left-0 z-1 flex h-14 w-full items-center gap-2 rounded-none border-x-2 border-b border-x-p3/30 border-b-p3/80 bg-p2/40 px-5.25 py-1 shadow-none backdrop-blur-md before:absolute before:top-0 before:left-0 before:z-0 before:size-full before:bg-p0/60">
    <LazyChampionDropdown
      :disabled="!card.champion"
      :champion="card.champion"
      :card />

    <label
      v-tippy="'Background Color'"
      class="grid-place-items-center tldr-30 relative mx-2 aspect-square size-6.5 cursor-pointer overflow-hidden rounded-full border border-neutral/60 drop-shadow-xs hover:border-neutral hover:ring hover:ring-neutral">
      <input
        v-model="color"
        class="absolute -top-2 -left-2 size-16 cursor-pointer"
        type="color"
        @change="emit('update:color', color)" />
    </label>

    <label
      v-tippy="'Filter'"
      class="group btn swap btn-square swap-rotate btn-ghost">
      <input
        v-model="filter"
        class="peer"
        type="checkbox"
        :disabled="!card.splash"
        @change="emit('update:filter', filter)" />

      <icon
        class="swap-off size-5.5 ds-2xs peer-disabled:text-pc/20"
        name="hugeicons:monocle" />

      <icon
        class="swap-on size-6 ds-2xs peer-disabled:text-pc/20"
        name="streamline:rainbow" />
    </label>

    <UPopover>
      <UButton>
        <button v-tippy="'Background Align'" class="btn btn-square btn-ghost">
          <icon
            class="dst size-5.5 shrink-0"
            name="ph:arrows-out-line-horizontal" />
        </button>
      </UButton>

      <PopoverContent
        class="PopoverContent w-44 border border-p3"
        align="start"
        :side-offset="10"
        side="bottom">
        <input
          v-model="align"
          class="range range-neutral range-xs"
          type="range"
          min="0"
          max="100" />
      </PopoverContent>
    </UPopover>

    <!--     <FontSelect
      v-model:model-value="cardFont0"
      tip="Title Font"
      :card
      :model="0"
      @update:model-value="(e: string) => (cardFont0.value = e)" />

    <FontSelect
      v-model:model-value="cardFont1"
      tip="Text Font"
      :card
      :model="1"
      @update:model-value="(e: string) => (cardFont1.value = e)" /> -->

    <button v-tippy="'Add Note'" class="btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="iconoir:text" />
    </button>

    <Grow />

    <Separator class="mx-3 h-5/6 bg-p2" orientation="vertical" />

    <button v-tippy="'Share'" class="btn btn-square btn-ghost">
      <icon class="dst size-5.5" name="share" />
    </button>

    <button
      v-tippy="'Download Image'"
      class="btn btn-square btn-ghost"
      @click="emit('download')">
      <icon class="dst size-5.5" name="iconoir:download" />
    </button>

    <Separator class="mx-3 h-5/6 bg-p2" orientation="vertical" />

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
