<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const route = useRoute()
</script>

<template>
  <div :class="cn('flex items-center z-5 pt-5.5 pb-2 px-4 w-full relative ', props.class)">
    <h3 v-if="route.meta.section != 'pocket'" class="z-6 grow capitalize dst pointer-events-none">
      {{ us.settingsOpen ? 'Settings' : us.sidebarMenuOpen ? 'Navigation' : route.meta.title || route.name }}
    </h3>

    <slot />
  </div>
</template>