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
      class="bg-b1/86 grid h-160 w-220 grid-rows-[28px_80px_1fr] gap-1 p-0 backdrop-blur-lg"
      :auto-focus="false"
      @open-auto-focus.stop.prevent
      @close-auto-focus.stop.prevent
    >
      <DialogHeader
        class="flex size-full flex-row items-center justify-between gap-4 object-contain px-3 tracking-normal"
      >
        <DialogTitle
          class="text-bc/50 items-center pl-2 text-sm! font-semibold"
        >
          Message Received!
        </DialogTitle>
        <DialogDescription class="" />

        <DialogClose class="btn btn-square btn-ghost btn-sm" as="button">
          <icon name="x-sm" />
        </DialogClose>
      </DialogHeader>
      <form class="flex w-full flex-col gap-4 px-6 pt-1 pb-6">
        <label
          class="**:text-md grid grid-cols-[60px_1fr] items-center gap-2 **:font-normal"
        >
          <span>Subject:</span>
          <span class="btn input bg-b1/40 h-11 w-full backdrop-blur-lg">
            <input type="text" :value="message.title" readonly>
          </span>
        </label>
        <label class="**:text-mdd grid grid-cols-[60px_1fr] items-center gap-2">
          <span>From:</span>
          <span class="btn input bg-b1/40 h-11 w-full backdrop-blur-lg">
            <span
              class="bg-neutral size-7.5 shrink-0 rounded-full shadow-sm drop-shadow-xs"
            >
              <Icon
                class="text-nc"
                :name="message.from.icon"
                :icon-scale="0.65"
              />
            </span>
            <input
              type="text"
              :value="`${message.from.name} (${message.from.id})`"
              readonly
            >
          </span>
        </label>
      </form>
      <article class="size-full p-4 pt-6">
        <textarea
          class="text-mdd btn textarea bg-b1/40 size-full text-start backdrop-blur-lg"
          :value="message.content"
          readonly
        />
      </article>
    </LazyDialogContentPop>
  </div>
</template>
