<script setup lang="ts">
const sidebarOpen = shallowRef<boolean>(false)
</script>

<template>
  <UHeader
    v-model:open="sidebarOpen"
    mode="slideover"
    title="LP"
    :toggle="{ ui: { leadingIcon: 'text-pc' } }"
    :ui="{
      root: 'z-101 translate-3d transform-gpu',
      content: 'max-h-screen w-120',
      title: 'hidden'
    }">
    <template #left>
      <LpLogo :ui="{ base: 'min-w-10!' }" />
    </template>
    <div class="flex items-center gap-4">
      <slot name="center-leading" />
      <LazyAppCommand />
    </div>

    <template #content>
      <LazySidebar />
    </template>
  </UHeader>
</template>
