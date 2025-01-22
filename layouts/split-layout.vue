<script lang="ts" setup>
  import type { HTMLAttributes } from 'vue'
  const props = withDefaults(
    defineProps<{
      title: string
      col1Size?: string
      col2Size?: string
      class?: HTMLAttributes['class']
    }>(),
    {
      col1Size: '25%',
      col2Size: '75%',
    }
  )
</script>

<template>
  <main class="px-4 size-full">
    <LayoutSpacer class="!h-24" />
    <div :class="cn('flex h-full max-h-full gap-10 px-12 ', props.class)">
      <div
        class="col-1 max-h-inherit flex h-[86%] flex-col gap-8 pl-1 pr-10"
        :style="{ width: props.col1Size }">
        <h1 class="!text-9 drop-shadow-text px-2 tracking-tight flex flex-wrap">{{ props.title }}</h1>
        <slot name="1" />
      </div>
      <div
        class="col-2 max-h-inherit flex h-full flex-col justify-start gap-4"
        :style="{ width: props.col2Size }">
        <slot name="2" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
