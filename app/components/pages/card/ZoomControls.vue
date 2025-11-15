<script lang="ts" setup>
const emit = defineEmits([
  // "pandown", "panup", "zoomdown", "zoomup", "home",
  'buttondown',
  'buttonup',
])

// function onButtonDown(event: PointerEvent, button: string) {
//     // emit("pandown", button);
//     emit("buttondown", {
//         key: button,
//     });
// }

// function onButtonUp(event: PointerEvent, button: string) {
//     emit("buttonup", {
//         key: button,
//     });
// }

function onButtonDown(event: PointerEvent, button: string) {
  emit('buttondown', {
    key: button,
  })
}

function onButtonUp(event: PointerEvent, button: string) {
  emit('buttonup', {
    key: button,
  })
}
</script>

<template>
  <div>
    <button
      class="btn"
      @pointerdown="(ev) => onButtonDown(ev, 'home')">
      hi
    </button>
  </div>
</template>
