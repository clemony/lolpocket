<script setup lang="ts">
const { settings } = safeObject(inject<UiController>("sidebar"))

function toggleSettings() {
  if (!settings) return
  settings.toggle()
}
</script>

<template>
  <UHeader
    mode="slideover"
    title="LP"
    :toggle="false"
    :ui="{
      root: 'z-50 translate-3d transform-gpu',
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
      <UButton icon="i-menu" @click="toggleSettings" />
    </template>
  </UHeader>
</template>
