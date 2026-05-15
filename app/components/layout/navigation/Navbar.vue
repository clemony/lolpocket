<script setup lang="ts">
const { color = "base" } = defineProps<{
  color?: "base" | "transparent" | "primary"
}>()
console.log("🥸 - color:", color)
const { toggle } = useApp().settings
</script>

<template>
  <UHeader
    title="LP"
    :toggle="false"
    :ui="{
      root: cn('z-50 translate-3d transform-gpu px-0', {
        ' backdrop-contrast-100 backdrop-saturate-100': color !== 'base',
        'bg-transparent!': color === 'transparent',
        'bg-p1!': color === 'primary'
      }),
      container: 'px-3!',
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
      <UButton icon="i-menu" class="opacity-0" @click="toggle()" />
    </template>
  </UHeader>
</template>
