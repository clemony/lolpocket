<script setup lang="ts">
const { data, type } = defineProps<{
  data: Effect
  type: string
}>()
</script>

<template>
  <div class="w-full gap-x-1 align-middle leading-normal text-pretty">
    <span
      v-if="data.unique"
      class="tracking-tight text-precision/90! italic">Unique {{ type }}</span>

    <span
      v-if="data.name"
      class="tracking-tight text-precision/90! italic">
      -&nbsp;{{ data.name }}</span>

    <span
      v-if="data.unique || data.name"
      class="text-precision/90!">
      :&nbsp;
    </span>

    <span
      v-if="data.effects"
      class=""
      v-html="data.effects" />

    <div
      v-if="data.cooldown"
      class="ws-no-wrap mt-2 ml-6 flex w-full items-center gap-1 text-nowrap">
      <img
        src="/img/icons/manaless.webp"
        alt="cooldown-icon"
        class="mt-px size-4" />
      <!-- &nbsp;Cooldown:&nbsp; -->
      <span
        class=""
        v-html="data.cooldown" />second cooldown
    </div>
  </div>
</template>

<style scoped></style>
