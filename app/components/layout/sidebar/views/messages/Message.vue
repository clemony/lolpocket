<script setup lang="ts">
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
      class="grid grid-rows-[28px_80px_1fr] p-0 h-160 w-220 gap-1 bg-b1/86 backdrop-blur-lg"
      :auto-focus="false"
      @open-auto-focui.stop.prevent
      @close-auto-focui.stop.prevent>
      <DialogHeader
        class="gap-4 object-contain size-full tracking-normal flex-row flex items-center px-3 justify-between">
        <DialogTitle class="!text-xs text-bc/50 items-center pl-2 font-semibold">
          Message Received!
        </DialogTitle>
        <DialogDescription class=""></DialogDescription>

        <DialogClose
          as="button"
          class="btn btn-ghost btn-sm btn-square">
          <icon name="x-sm" />
        </DialogClose>
      </DialogHeader>
      <form class="px-6 pt-1 pb-6 flex flex-col gap-4 w-full">
        <label
          class="**:text-sm items-center **:font-normal grid grid-cols-[60px_1fr] gap-2">
          <span>Subject:</span>
          <span class="input h-11 w-full bg-b1/40 backdrop-blur-lg btn">
            <input
              type="text"
              :value="message.title"
              readonly />
          </span>
        </label>
        <label class="**:text-sm items-center grid grid-cols-[60px_1fr] gap-2">
          <span>From:</span>
          <span class="input h-11 w-full bg-b1/40 backdrop-blur-lg btn">
            <span
              class="rounded-full size-7.5 shadow-sm drop-shadow-xs shrink-0 bg-neutral">
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
          class="textarea size-full text-sm text-start bg-b1/40 backdrop-blur-lg btn" />
      </article>
    </LazyDialogContentPop>
  </div>
</template>
