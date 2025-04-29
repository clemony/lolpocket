<script lang="ts" setup>

</script>

<template>
  <div class="w-full flex flex-col gap-8">
    <template
      v-for="theme in themes[0]"
      :key="theme.name">
      <ThemeCard :theme="theme" />
    </template>

    <template
      v-for="theme in themes[1]"
      :key="theme.name">
      <ThemeCard :theme="theme" />
    </template>

    <template
      v-for="theme in themes[2]"
      :key="theme.name">
      <ThemeCard :theme="theme" />
    </template>
  </div>
</template>