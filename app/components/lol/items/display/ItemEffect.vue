<script setup lang="ts">
const {
  class: className,
  data,
  type,
  unique,
  layout,
} = defineProps<{
  data: Effect
  type: string
  class?: HTMLAttributes["class"]
  layout?: string
  unique?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    :class="
      cn('w-full gap-x-1 align-middle leading-normal text-pretty', className)
    ">
    <span
      v-if="data.unique"
      :class="cn('tracking-tight italic', unique ? unique : 'text-pre/90!')">
      Unique {{ type }}
      <template v-if="!data.name">:&nbsp;</template>
    </span>

    <span
      v-if="data.name"
      :class="cn('tracking-tight italic', unique ? unique : 'text-pre/90!')">
      -&nbsp;{{ data.name }}:&nbsp;
    </span>

    <span
      v-if="data.effects"
      :class="
        cn('inline whitespace-pre-line *:mr-1 *:inline *:size-4 *:rounded-sm')
      "
      v-html="data.effects" />

    <div
      v-if="data.cooldown"
      id="item-effects"
      class="whitespace-no-wrap mt-2 ml-6 flex w-full items-center gap-1 text-nowrap">
      <img
        class="mt-px size-4"
        src="/img/icons/manaless.webp"
        alt="cooldown-icon" />
      <!-- &nbsp;Cooldown:&nbsp; -->
      <span class="" v-html="data.cooldown" />
      second cooldown
    </div>
  </div>
</template>
