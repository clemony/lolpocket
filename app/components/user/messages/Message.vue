<script setup lang="ts">
import type { InboxMessage } from '#shared/schema'

defineOptions({
  inheritAttrs: false,
})

const { message } = defineProps<{
  message: InboxMessage
}>()
</script>

<template>
  <div>
    <LazyDialogContentPop
      class="
        grid h-160 w-220 grid-rows-[28px_80px_1fr] gap-1 bg-b1/86 p-0
        backdrop-blur-lg
      "
      :auto-focus="false"
      @open-auto-focus.stop.prevent
      @close-auto-focus.stop.prevent>
      <DialogHeader
        class="
          flex size-full flex-row items-center justify-between gap-4
          object-contain px-3 tracking-normal
        ">
        <DialogTitle class="items-center pl-2 text-2! font-semibold text-bc/50">
          Message Received!
        </DialogTitle>
        <DialogDescription class=""></DialogDescription>

        <DialogClose
          as="button"
          class="btn btn-square btn-ghost btn-sm">
          <icon name="x-sm" />
        </DialogClose>
      </DialogHeader>
      <form class="flex w-full flex-col gap-4 px-6 pt-1 pb-6">
        <label
          class="
            grid grid-cols-[60px_1fr] items-center gap-2
            **:text-3 **:font-normal
          ">
          <span>Subject:</span>
          <span class="btn input h-11 w-full bg-b1/40 backdrop-blur-lg">
            <input
              type="text"
              :value="message.title"
              readonly />
          </span>
        </label>
        <label
          class="
            grid grid-cols-[60px_1fr] items-center gap-2
            **:text-3
          ">
          <span>From:</span>
          <span class="btn input h-11 w-full bg-b1/40 backdrop-blur-lg">
            <span
              class="
                size-7.5 shrink-0 rounded-full bg-neutral shadow-sm
                drop-shadow-xs
              ">
              <hicon
                :name="message.from.icon"
                class="text-nc"
                :icon-scale="0.65" />
            </span>
            <input
              type="text"
              :value="`${message.from.name} (${message.from.id})`"
              readonly />
          </span>
        </label>
      </form>
      <article class="size-full p-4 pt-6">
        <textarea
          :value="message.content"
          readonly
          class="
            btn textarea size-full bg-b1/40 text-start text-3 backdrop-blur-lg
          " />
      </article>
    </LazyDialogContentPop>
  </div>
</template>
