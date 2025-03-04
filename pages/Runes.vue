<script setup lang="ts">
const ts = useTempStore()

definePageMeta({
  name: 'runes-data',
})

</script>

<template>
  <div class="flex gap-10  px-22 flex-col pt-[7vh]">
    <div class="flex py-6 px-11 w-full i-c">
      <h1 class="text-9">
        Runes
      </h1>
    </div>
    <div class="flex size-full justify-start">
      <RunePanels />

      <div class="ml-12">
        <RuneData v-if="rs.hoveredRune" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
