<script lang="ts" setup>
import { useSidebar } from 'base/sidebar/sidebar-index'
import { motion } from 'motion-v'

const { class: className, collapsible } = defineProps<{
  class?: HTMLAttributes['class']
  collapsible?: 'icon' | 'offcanvas' | 'none'
}>()

const sidebar = ref(null)

const { open } = useSidebar()

const { isOutside } = useMouseInElement(sidebar)
watch(() => isOutside.value, (newVal) => {
  if (as().settings.lockSidebar)
    return

  if (newVal) {
    open.value = !newVal
  }
  else {
    open.value = true
  }
})

const variants = {
  offCanvasCollapsed: {
    width: '1px',
  },
  offCanvasOpen: {
    width: 'var(--sidebar-width)',
  },
}
</script>

<template>
  <motion.div
    ref="sidebar"
    :initial="collapsible == 'offcanvas' ? 'offCanvasCollapsed' : null"
    :variants="variants"
    :animate="collapsible == 'offcanvas' && isOutside ? 'offCanvasCollapsed' : collapsible == 'offcanvas' && !isOutside ? 'offCanvasOpen' : null"
    :class="cn('', { 'max-w-[var(--sidebar-width)] w-[var(--sidebar-width)]': open }, className)">
    <Sidebar
      side="left"
      variant="sidebar"
      class="[&>[data-sidebar=sidebar]]:flex-row relative  max-w-[var(--sidebar-width)] w-[var(--sidebar-width)] h-screen"
      :collapsible>
      <slot :open />
    </Sidebar>
  </motion.div>
</template>