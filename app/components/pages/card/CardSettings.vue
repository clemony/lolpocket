<script lang="ts" setup>
import type { Card } from "~~/shared/schema";

const { card: c } = defineProps<{
  card: Card;
}>();
const emit = defineEmits([
  "download",
  "update:align",
  "update:color",
  "update:filter",
]);
const card = computed(() => c);
const align = ref("0");
const color = ref<string>();
const filter = ref<string>();
watch(
  () => align.value,
  (newVal) => {
    // card.align = newVal
    emit("update:align", newVal);
  },
);
</script>

<template>
  <div
    class="absolute top-16 left-0 z-1 flex h-14 w-full items-center gap-2 rounded-none border-x-2 border-b border-x-b3/30 border-b-b3/80 bg-b2/40 px-5.25 py-1 shadow-none backdrop-blur-md before:absolute before:top-0 before:left-0 before:z-0 before:size-full before:bg-b1/60"
  >
    <LazyChampionDropdown
      :disabled="!card.champion"
      :champion="card.champion"
      :card
    />

    <label
      v-tippy="'Background Color'"
      class="grid-place-items-center tldr-30 relative mx-2 aspect-square size-6.5 cursor-pointer overflow-hidden rounded-full border border-neutral/60 drop-shadow-xs hover:border-neutral hover:ring hover:ring-neutral"
    >
      <input
        v-model="color"
        type="color"
        class="absolute -top-2 -left-2 size-16 cursor-pointer"
        @change="emit('update:color', color)"
      />
    </label>

    <label
      v-tippy="'Filter'"
      class="group btn swap btn-square swap-rotate btn-ghost"
    >
      <input
        v-model="filter"
        type="checkbox"
        class="peer"
        :disabled="!card.splash"
        @change="emit('update:filter', filter)"
      />

      <icon
        name="hugeicons:monocle"
        class="swap-off size-5.5 dst peer-disabled:text-bc/20"
      />

      <icon
        name="streamline:rainbow"
        class="swap-on size-6 dst peer-disabled:text-bc/20"
      />
    </label>

    <Popover>
      <PopoverTrigger>
        <button v-tippy="'Background Align'" class="btn btn-square btn-ghost">
          <icon
            name="ph:arrows-out-line-horizontal"
            class="size-5.5 shrink-0 dst"
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        :side-offset="10"
        side="bottom"
        class="PopoverContent w-44 border border-b3"
      >
        <input
          v-model="align"
          type="range"
          min="0"
          max="100"
          class="range range-neutral range-xs"
        />
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
      <icon name="iconoir:text" class="size-5.5 dst" />
    </button>

    <Grow />

    <Separator orientation="vertical" class="mx-3 h-5/6 bg-b2" />

    <button v-tippy="'Share'" class="btn btn-square btn-ghost">
      <icon name="share" class="size-5.5 dst" />
    </button>

    <button
      v-tippy="'Download Image'"
      class="btn btn-square btn-ghost"
      @click="emit('download')"
    >
      <icon name="iconoir:download" class="size-5.5 dst" />
    </button>

    <Separator orientation="vertical" class="mx-3 h-5/6 bg-b2" />

    <button class="control-btn btn btn-square btn-ghost">
      <icon name="ph:arrows-in-simple-light" class="size-5.5 dst" />
    </button>

    <button class="btn btn-square btn-ghost">
      <icon name="iconoir:zoom-in" class="size-5.5 dst" />
    </button>

    <button class="btn btn-square btn-ghost">
      <icon name="iconoir:zoom-out" class="size-5.5 dst" />
    </button>
  </div>
</template>

<style scoped></style>
