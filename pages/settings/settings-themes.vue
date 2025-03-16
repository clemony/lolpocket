<script setup lang="ts">
definePageMeta({
  name: 'themes',
  path: '/settings/themes',
})
</script>

<template>
  <div class="size-full overflow-auto ">
  <div class="items-center px-8 pb-20 min-w-70 mx-auto max-w-250  flex flex-col gap-34 ">
    <div class="w-full">
      <p class="px-2 font-normal font-mono tracking-wide opacity-70 pb-11 dst">
        Time
      </p>
      <div class="flex  gap-12 flex-wrap ">
        <template
          v-for="theme in themes[0]"
          :key="theme.name">
          <ThemeCard :theme="theme" />
        </template>
      </div>
    </div>

    <div class="w-full">
      <p class="px-2 font-normal  font-mono  opacity-60   pb-11 dst">
        Weather
      </p>
      <div class="flex gap-12 flex-wrap ">
        <template
          v-for="theme in themes[1]"
          :key="theme.name">
          <ThemeCard :theme="theme" />
        </template>
      </div>
    </div>

    <div class="w-full">
      <p class="px-2 font-normal  font-mono  opacity-60  pb-11 dst">
        Season
      </p>
      <div class="flex gap-12 flex-wrap ">
        <template
          v-for="theme in themes[2]"
          :key="theme.name">
          <ThemeCard :theme="theme" />
        </template>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
