<script lang="ts" setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dim">
        Dim
      </option>
      <option value="dark">
        Dark
      </option>
    </select>
  </div>
</template>
