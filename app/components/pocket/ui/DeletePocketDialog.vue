<script lang="ts" setup>
import { DialogDescription, DialogTitle } from 'reka-ui'

const { pocket, class: className } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

function handleDelete() {
  deletePocket(pocket)
  navigateTo('/backpack')
}

const as = useAccountStore()
</script>

<template>
  <Dialog>
    <DialogTrigger :class="cn('', className)">
      <slot>
      </slot>
    </DialogTrigger>

    <MotionDialogContent class=" pb-8 flex flex-col justify-between">
      <DialogClose class="absolute right-6 top-5 opacity-60 rounded-lg size-8 grid place-items-center cursor-pointer hover:ring hover:ring-b3 focus:ring-b3 focus:ring hover:opacity-100">
        <icon name="x-sm" />
      </DialogClose>

      <DialogTitle class="text-6 mt-3">
        Delete Pocket and head back to Backpack?
      </DialogTitle>

      <DialogDescription class="font-normal leading-7 mt-4">
        You can view your trash from the Backpack's sidebar. Trash can be retrieved, but is automatically removed at 30 days old. In the Bin, you'll also find a button for immediate dumpster fire.
      </DialogDescription>

      <div class="mt-6 w-full grow justify-between flex items-center">
        <Label class="gap-3 cursor-pointer text-bc/60 hover:text-bc items-center text-2 underline-offset-2 hover:underline flex">
          <input v-model="as.userNoShowDeletePocketConfirm" type="checkbox" class="peer checkbox checkbox-neutral checkbox-sm" />
          Don't show this again.
        </Label>

        <DialogClose class="btn btn-neutral btn-lg pl-7 pr-9 !justify-start" @click="handleDelete()">
          <icon name="trash" />
          Send to Trash
        </DialogClose>
      </div>
    </MotionDialogContent>
  </Dialog>
</template>