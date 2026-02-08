<script lang="ts" setup>
import { DialogDescription, DialogTitle } from "reka-ui"

const { class: className, pocket } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes["class"]
}>()

function handleDelete() {
  deletePocket(pocket)
  navigateTo("/backpack")
}
</script>

<template>
  <UModal>
    <UButton :class="cn('', className)">
      <slot />
    </UButton>
    <template #content>
      <div class="flex flex-col justify-between pb-8">
        <DialogClose
          class="absolute top-5 right-6 grid size-8 cursor-pointer place-items-center rounded-lg opacity-60 hover:opacity-100 hover:ring hover:ring-p3 focus:ring focus:ring-p3">
          <icon name="x-sm" />
        </DialogClose>

        <DialogTitle class="mt-3 text-xxl">
          Delete Pocket and head back to Backpack?
        </DialogTitle>

        <DialogDescription class="mt-4 leading-7 font-normal">
          You can view your trash from the Backpack's sidebar. Trash can be
          retrieved, but is automatically removed at 30 days old. In the Bin,
          you'll also find a button for immediate dumpster fire.
        </DialogDescription>

        <div class="mt-6 flex w-full grow items-center justify-between">
          <Label
            class="flex cursor-pointer items-center gap-3 text-sm text-pc/60 underline-offset-2 hover:text-pc hover:underline">
            <input
              v-model="as().settings.instant_trash"
              class="peer checkbox checkbox-sm checkbox-neutral"
              type="checkbox" />
            Don't show this again.
          </Label>

          <DialogClose
            class="btn justify-start! pr-9 pl-7 btn-lg btn-neutral"
            @click="handleDelete()">
            <icon name="trash" />
            Send to Trash
          </DialogClose>
        </div>
      </div>
    </template>
  </UModal>
</template>
