<script lang="ts" setup>
  const props = defineProps<{
    title: string
  }>()
</script>

<template>
  <main class="px-4">
    <LayoutSpacer class="!h-30" />
    <div class="flex h-full max-h-full gap-10 px-12">
      <div class="max-h-inherit flex h-[86%] w-1/4 flex-col gap-8 pl-1 pr-10">
        <h1 class="!text-9 drop-shadow-text px-2 tracking-tight">{{ props.title }}</h1>
        <slot name="1" />
      </div>
      <div class="max-h-inherit flex h-full w-3/4 flex-col justify-start gap-4">
        <slot name="2" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
