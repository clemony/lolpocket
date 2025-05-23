<script setup lang="ts">
const rs = useRuneStore()

definePageMeta({
  name: 'runes',
  title: 'Runes',
  section: 'library',
  icon1: 'lol-rune',
})
const rune = ref(rs.hoveredRune)
</script>

<template>
  <div class="flex gap-10 size-full  px-22 flex-col pt-54">
    <AppTitlebar />
    <div class="flex size-full justify-start">
      <RunePanels />

      <div class="ml-12">
        <RuneData v-if="rs.hoveredRune" :rune="rune" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
