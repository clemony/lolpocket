<script setup lang="ts">
const rs = useRuneStore()

definePageMeta({
  name: 'runes-data',
  title: 'Runes'

})
const rune = ref(rs.hoveredRune)
</script>

<template>
  <NuxtLayout
    name="header-layout" class="flex gap-10  px-22 flex-col pt-54">
 
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
