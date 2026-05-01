<script setup lang="ts">
const { toggle } = useApp().settings
</script>

<template>
  <UHeader
    title="LP"
    :toggle="false"
    :ui="{
      root: 'z-50 translate-3d transform-gpu px-0',
      container: 'px-0',
      title: 'hidden'
    }">
    <template #left>
      <LpLogo :ui="{ base: 'min-w-10!' }" />
    </template>
    <div class="flex items-center gap-4">
      <slot name="center-leading" />
      <LazyAppCommand />
    </div>

    <template #right>
      <UButton icon="i-menu" @click="toggle()" />
    </template>
  </UHeader>
</template>
