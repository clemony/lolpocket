<script lang="ts" setup>
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="absolute top-28 flex translate-y-0 flex-col justify-end gap-1 overflow-hidden px-4 transition-all duration-200 ease-spring-soft group-hover/post:-translate-y-full group-hover/post:opacity-0">
    <Grow />
    <Icon name="i-mingcute-quote-left-fill" class="size-7 text-nc" />
    <h2
      class="line-clamp-3 size-full overflow-hidden border-transparent pb-1 font-serif text-6xl leading-9 font-semibold text-wrap text-nc">
      {{ title }}
    </h2>
  </div>
  <div
    class="absolute top-4 size-full shrink-0 translate-y-full flex-col justify-start gap-1 overflow-hidden px-4 opacity-0 transition-all duration-200 ease-spring-soft group-hover/post:translate-y-0 group-hover/post:opacity-100">
    <Icon name="i-mingcute-quote-left-fill" class="mb-1 ml-4 size-7 text-nc" />
    <h2
      class="line-clamp-6 px-4 font-serif text-6xl leading-8.5 font-semibold text-wrap text-nc">
      {{ title }}
    </h2>
  </div>
</template>
