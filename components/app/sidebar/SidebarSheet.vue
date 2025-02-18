<script lang="ts" setup>
import { vMouseInElement } from '@vueuse/components'

const emit = defineEmits(['update:hovered', 'update:open', 'update:component'])

const ss = useSidebarStore()
const sheet = ref(null)

function onMouseInSheet({ isOutside }) {
  ss.isOutsideSheet = isOutside
}
</script>

<template>
  <BasicSheet side="left" class="!left-22 transition-all duration-500 min-w-107 !w-full max-w-90">
    <div
      ref="sheet"
      v-mouse-in-element="onMouseInSheet"
      class=" *:w-full h-full pt-5.5 pl-2 pb-8 pr-8"
    >
      <slot />
    </div>
  </BasicSheet>
</template>

<style scoped>

</style>