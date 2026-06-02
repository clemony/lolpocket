<script lang="ts" setup>
const { title } = defineProps<{
  title: string
}>()

const fontClass =
  "h-max w-full overflow-hidden   pb-1 font-serif text-6xl leading-9 font-medium text-wrap text-nc"
</script>

<template>
  <div
    class="absolute bottom-4 left-4 flex w-5/6 translate-y-0 flex-col items-start justify-end gap-1 overflow-hidden transition-all ease-spring-soft not-group-hover/post:duration-300 group-hover/post:-translate-y-full group-hover/post:opacity-0 group-hover/post:duration-15">
    <Grow />
    <Icon name="i-mingcute-quote-left-fill" class="size-7 text-nc" />
    <h2 :class="cn('line-clamp-3 grow justify-self-end', fontClass)">
      {{ title }}
    </h2>
  </div>
  <div
    class="absolute top-4 size-full shrink-0 translate-y-full flex-col justify-start gap-1 overflow-hidden px-4 opacity-0 transition-all ease-spring-soft not-group-hover/post:duration-15 group-hover/post:translate-y-0 group-hover/post:opacity-100 group-hover/post:duration-300">
    <Icon name="i-mingcute-quote-left-fill" class="mb-1 ml-4 size-7 text-nc" />

    <h2 :class="cn('line-clamp-6 px-4', fontClass)">
      {{ title }}
      <Icon
        name="i-mingcute-quote-right-fill"
        class="inline size-7 justify-end self-end text-end align-icon text-nc" />
    </h2>
  </div>
</template>
