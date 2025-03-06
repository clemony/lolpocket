<script setup lang="ts">
definePageMeta({
  name: 'themes',
  path: '/settings/themes',
})
</script>

<template>
  <div class="pt-[5vh] overflow-y-auto pr-21 pb-24  w-full h-full flex px-2 flex-col gap-34 ">
    <div class="w-full">
      <h3 class="px-2 font-normal font-mono tracking-wide opacity-70 pb-11 dst">
        Time
      </h3>
      <div class="flex  gap-12 flex-wrap ">
        <template
          v-for="theme in themes[0]"
          :key="theme.name">
          <ThemeCard :theme="theme" />
        </template>
      </div>
    </div>

    <div class="w-full">
      <h3 class="px-2 font-normal  font-mono  opacity-60   pb-11 dst">
        Weather
      </h3>
      <div class="flex gap-12 flex-wrap ">
        <template
          v-for="theme in themes[1]"
          :key="theme.name">
          <ThemeCard :theme="theme" />
        </template>
      </div>
    </div>

    <div class="w-full">
      <h3 class="px-2 font-normal  font-mono  opacity-60  pb-11 dst">
        Season
      </h3>
      <div class="flex gap-12 flex-wrap ">
        <template
          v-for="theme in themes[2]"
          :key="theme.name">
          <ThemeCard :theme="theme" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
