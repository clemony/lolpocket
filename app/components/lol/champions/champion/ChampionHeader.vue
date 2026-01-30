<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { champion, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  champion: Champion
}>()
</script>

<template>
  <IconHeader class="gap-6" text-wrapper="gap-px pt-px">
    <template #icon>
      <div class="-ml-2 size-20">
        <ChampionIcon :id="champion.id" class="size-20 rounded-full" />
      </div>
    </template>
    <!-- header name -->
    <template #title>
      <h1 class="text-bc/94 text-[2.8rem] leading-none drop-shadow-sm">
        {{ champion.name }}
      </h1>
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="flex items-center gap-4 px-0.5 capitalize">
        {{ champion.title }}
      </div>
    </template>
  </IconHeader>
</template>
