<script lang="ts" setup>
import { PopoverTrigger } from 'reka-ui'

const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => props.pocket)

function handleDelete() {
  deletePocket(pocket.value)
  navigateTo('/backpack')
}
</script>

<template>
  <div class="flex gap-2 px-3">
    <Popover>
      <PopoverTrigger v-tippy="'Delete'" class="btn btn-square data-[state=open]:bg-b3">
        <icon name="trash" class="size-5 dst" />
      </PopoverTrigger>
      <LazyCustomPopoverContent class="!w-40 h-30 !items-center py-6.5 flex flex-col justify-between">
        <CustomPopoverArrow />
        <p class="font-medium">
          You sure?
        </p>
        <button class="btn btn-sm text-2" @click="handleDelete()">
          It's trash.
        </button>
      </LazyCustomPopoverContent>
    </Popover>
    <Grow />
    <button v-tippy="'Export Set to League'" class="btn btn-square  ">
      <icon name="ph:upload-simple" class="size-5 dst " />
    </button>
    <label v-tippy="pocket.location.pinned == true ? 'Unpin' : 'Pin'" class="btn btn-square  relative grid place-items-center group/pin *:tldr-20 has-checked:btn-neutral">
      <input v-model="pocket.location.pinned" type="checkbox" class="peer hidden" />
      <icon name="pin" class="size-5 dst absolute group-hover/pin:opacity-0 peer-checked:opacity-0" />
      <icon name="pin-solid" class="opacity-0 size-5 dst absolute group-hover/pin:not-checked:opacity-100 group-hover/pin:not-checked:textbc/50 peer-checked:opacity-100 peer-checked:text-nc" />
      <icon name="iconoir:pin-slash-solid" class="opacity-0 size-5 dst absolute group-hover/pin:peer-checked:opacity-100 peer-checked:text-nc" />
    </label>
  </div>
</template>