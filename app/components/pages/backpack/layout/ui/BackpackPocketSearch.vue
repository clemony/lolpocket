<script lang="ts" setup>
const { collapsed } = defineProps<{
  collapsed: boolean
}>()
</script>

<template>
  <LazyUPopover v-if="collapsed" :content="{ side: 'right' }">
    <template #default="{ open }">
      <UButton
        :variant="open ? 'solid' : 'outline'"
        :color="open ? 'neutral' : 'primary'"
        :active="open"
        icon="i-search"
        square />
    </template>
    <template #content>
      <LazyBackpackSearchInput
        :size="asInputSize('md')"
        :autofocus="true"
        :ui="{
          base: 'shadow-none ring-0 inset-shadow-none inset-ring-0 drop-shadow-none'
        }" />
    </template>
  </LazyUPopover>
  <LazyBackpackSearchInput v-else :size="asInputSize('lg')" />
</template>
