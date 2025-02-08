<script lang="ts" setup>
const ts = useTempStore()
</script>

<template>
  <div class="size-full flex justify-center relative">
    <div class="flex flex-col gap-4 items-center absolute top-[29%] justify-center z-40">
      <icon name="fluent:emoji-sad-slight-24-regular" class="size-8 shrink-0 dst" />
      <p class="flex gap-2 font-medium !text-3 mb-3">
        With no pockets,<br />you can't hold stuff.
      </p>
      <button
        v-tippy="{ content: 'Create Pocket', side: 'bottom' }"
        class="btn !pointer-events-auto btn-neutral rounded-md  flex btn-md  hover:text-nc hover:!bg-neutral/80 focus:text-nc active:text-nc !text-4 hover:text-nc"

        @click="ts.pocketSheetTrigger = true"
      >
        Here's a button.
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>