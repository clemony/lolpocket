<script setup lang="ts">
import { Tippy, useTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const menuRef = ref(null)
const targetRef = ref(null)
const menuX = ref(0)
const menuY = ref(0)
const isVisible = ref(false)

// Initialize Tippy
const { setProps, show, hide } = useTippy(targetRef, {
  content: menuRef,
  placement: 'right-start',
  trigger: 'manual',
  theme: 'light',
  interactive: true,
  arrow: false,
  offset: [0, 0],
})

async function handleContextMenu(event) {
  event.preventDefault()

  // Store the exact mouse position
  menuX.value = event.clientX
  menuY.value = event.clientY
  isVisible.value = true

  await nextTick() // Wait for DOM updates

  // Ensure both X and Y positions update
  targetRef.value.style.left = `${menuX.value}px`
  targetRef.value.style.top = `${menuY.value}px`

  // Force Tippy to reposition after setting new coordinates
  setProps({
    getReferenceClientRect: () => ({
      width: 0,
      height: 0,
      top: menuY.value,
      bottom: menuY.value,
      left: menuX.value,
      right: menuX.value,
    }),
  })

  show()
}

// Hide menu on click outside
function handleClickOutside() {
  isVisible.value = false
  hide()
}

// Attach and remove event listeners
onMounted(() => {
  window.addEventListener('contextmenu', handleContextMenu)
  window.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('contextmenu', handleContextMenu)
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <!-- Hidden reference element -->
  <div ref="targetRef" class="hidden-target absolute pointer-events-none h-px w-full"></div>

  <!-- Context menu -->
  <teleport to="body">
    <div v-show="isVisible" ref="menuRef" content-tag="div" content-class="min-w-64 h-32">
      <div>
        <span>Context menu</span>
        <hr />
        <button class="block">
          Button 1
        </button>
        <button class="block">
          Button 2
        </button>
        <button class="block">
          Button 3
        </button>
      </div>
    </div>
  </teleport>
</template>

<style>
/* Context menu styling */
.context-menu {
  background: white;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.block {
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 4px;
  text-align: left;
}
</style>