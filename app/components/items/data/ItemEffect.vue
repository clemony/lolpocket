<script setup lang="ts">
const { data, type } = defineProps<{
  data: Effect
  type: string
}>()
</script>

<template>
  <div
    class="w-full    text-pretty leading-normal  gap-x-1 align-middle first:mt-2 not-first:mt-3">
    <span
      v-if="data.unique"
      class=" italic  !text-precision/90 tracking-tight">Unique {{ type }}</span>

    <span
      v-if="data.name"
      class="italic !text-precision/90 tracking-tight"> -&nbsp;{{ data.name }}</span>

    <span
      v-if="data.unique || data.name"
      class=" !text-precision/90">
      :&nbsp;
    </span>

    <span
      v-if="data.effects"
      class=""
      v-html="data.effects" />

    <div
      v-if="data.cooldown"
      class="w-full mt-2 ml-6 flex gap-1 items-center ws-no-wrap text-nowrap">
      <Img
        img="/img/icons/manaless.webp"
        alt="cooldown-icon"
        class="size-4 mt-px" />
      <!-- &nbsp;Cooldown:&nbsp; -->
      <span
        class=""
        v-html="data.cooldown" />second cooldown
    </div>
  </div>
</template>

<style scoped></style>
