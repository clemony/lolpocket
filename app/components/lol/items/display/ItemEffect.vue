<script setup lang="ts">
const {
  class: className,
  data,
  type,
} = defineProps<{
  data: Effect
  type: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('w w-full gap-x-1 align-middle leading-normal text-pretty', className)
    "
  >
    <span v-if="data.unique" class="tracking-tight text-precision/90! italic">
      Unique {{ type }}
      <template v-if="!data.name">:&nbsp;</template>
    </span>

    <span v-if="data.name" class="tracking-tight text-precision/90! italic">
      -&nbsp;{{ data.name }}:&nbsp;
    </span>

    <span v-if="data.effects" v-html="data.effects" />

    <div
      v-if="data.cooldown"
      class="whitespace-no-wrap mt-2 ml-6 flex w-full items-center gap-1 text-nowrap"
    >
      <img
        class="mt-px size-4"
        src="/img/icons/manaless.webp"
        alt="cooldown-icon"
      >
      <!-- &nbsp;Cooldown:&nbsp; -->
      <span class="" v-html="data.cooldown" />
      second cooldown
    </div>
  </div>
</template>

<style scoped></style>
