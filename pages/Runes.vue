<script setup lang="ts">
const rs = useRuneStore()

definePageMeta({
  name: 'runes-data',
})
const rune = ref(rs.hoveredRune)
</script>

<template>
  <NuxtLayout
    name="header-layout" class="flex gap-10  px-22 flex-col pt-[7vh]">
    <div class="flex py-6 px-11 w-full i-c">
      <h1 class="text-9">
        Runes
      </h1>
    </div>
    <div class="flex size-full justify-start">
      <RunePanels />

      <div class="ml-12">
        <RuneData v-if="rs.hoveredRune" :rune="rune" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style>

</style>
