<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const us = useUiStore()

const route = useRoute()

const pocket = ref(getPocket(route.params.pocketKey))

const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)
</script>

<template>
  <NuxtLayout name="right-bar-layout">
    <template #page>
      <NuxtLayout
        name="header-layout" class=" grid  z-10 size-full gap-6 @container/main    " :class="{ 'pt-0': route.name == 'items', 'pt-17': route.name == 'card' }">
        <template #header>
        </template>
        <template #crumb>
          <PocketItemFilter v-if="route.name == 'items'" :pocket="pocket" />
        </template>

        <LazyNuxtPage
          :selected-runes="selectedRuneSet"
          :pocket="pocket"
          :transition="{
          }" />
      </NuxtLayout>
    </template>
    <PocketRightbar :pocket="pocket" />
  </NuxtLayout>
</template>
