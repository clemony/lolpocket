<script lang="ts" setup>
const ts = useTempStore()
</script>

<template>
  <div class="size-full flex justify-center relative">
    <div class="flex flex-col gap-4 items-center absolute top-[29%] justify-center z-40">
      <icon name="fluent:emoji-sad-slight-24-regular" class="size-8 shrink-0 dst" />
      <p class="flex gap-2 font-medium !text-3 mb-3">
        Your trash is empty!<br />Looks like all your ideas were great.
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>