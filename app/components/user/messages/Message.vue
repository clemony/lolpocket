<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const { message } = defineProps<{
  message: InboxMessage
}>()
</script>

<template>
  <div>
    <UModal
      class="grid h-160 w-220 grid-rows-[28px_80px_1fr] gap-1 bg-p0/86 p-0 backdrop-blur-lg"
      :auto-focus="false"
      @open-auto-focus.stop.prevent
      @close-auto-focus.stop.prevent>
      <DialogHeader
        class="flex size-full flex-row items-center justify-between gap-4 object-contain px-3 tracking-normal">
        <DialogTitle
          class="items-center pl-2 text-sm! font-semibold text-pc/50">
          Message Received!
        </DialogTitle>
        <DialogDescription class="" />

        <DialogClose class="btn btn-square btn-ghost btn-sm" as="button">
          <icon name="x-sm" />
        </DialogClose>
      </DialogHeader>
      <form class="flex w-full flex-col gap-4 px-6 pt-1 pb-6">
        <label
          class="grid grid-cols-[60px_1fr] items-center gap-2 **:text-md **:font-normal">
          <span>Subject:</span>
          <span class="btn input h-11 w-full bg-p0/40 backdrop-blur-lg">
            <input type="text" :value="message.title" readonly />
          </span>
        </label>
        <label class="**:text-mdd grid grid-cols-[60px_1fr] items-center gap-2">
          <span>From:</span>
          <span class="btn input h-11 w-full bg-p0/40 backdrop-blur-lg">
            <span
              class="size-7.5 shrink-0 rounded-full bg-neutral shadow-sm drop-shadow-xs">
              <Icon
                class="text-nc"
                :name="message.from.icon"
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
        <UTextarea
          class="text-mdd btn textarea size-full bg-p0/40 text-start backdrop-blur-lg"
          :value="message.content"
          readonly />
      </article>
    </UModal>
  </div>
</template>
