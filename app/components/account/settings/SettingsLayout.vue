<script setup lang="ts">
const { title, description } = defineProps<{
  title?: string
  description?: string
}>()
const route = useRoute()
</script>

<template>
  <article class="w-full space-y-8">
    <header>
      <h3 class="text-7 font-semibold dst capitalize">
        {{ title || route.meta?.title || route.name }}
      </h3>
      <p
        v-if=" route.meta?.description"
        class="text-3 leading-8 opacity-60">
        {{ description || route.meta?.description }}
      </p>
      <Separator class="my-4" />
    </header>
    <slot />
  </article>
</template>