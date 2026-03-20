<script setup lang="ts">
const sidebarOpen = shallowRef<boolean>(false)
</script>

<template>
  <UHeader
    v-model:open="sidebarOpen"
    mode="slideover"
    title="LP"
    :ui="{
      root: 'z-101',
      content: 'max-h-screen w-120 overflow-hidden',
      title:
        'hover:noise rounded-lg py-1.5 text-2xl font-black! hover:bg-neutral hover:text-nc hover:shadow-sm'
    }">
    <div class="flex items-center gap-4">
      <slot name="center-leading" />
      <LazyAppCommand />
    </div>

    <template #content>
      <LazySidebar />
    </template>
  </UHeader>
</template>
