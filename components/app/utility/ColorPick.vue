<script setup lang="ts">
import { ColorPicker } from 'vue-accessible-color-picker'

const props = defineProps<{
  defaultColor?: string
}>()
const emit = defineEmits(['update:color'])

function updateColor(eventData) {
  emit('update:color', eventData.colors.hex)
}
</script>

<template>
  <div class="grid items-center gap-4 z-99999">
    <ColorPicker
      :color="props.defaultColor || '#000000'"
      class="w-full [&_.vacp-color-inputs]:!hidden [&_.vacp-copy-button]:!hidden [&_.vacp-color-space]:rounded-lg  [&_.vacp-range-input]:!rounded-full"
      alpha-channel="hide"
      @color-change="updateColor"
    >
      <template #copy-button>
        <div class="w-0"></div>
      </template>
      <template #format-switch-button>
        <div></div>
      </template>
      <template #hue-range-input-label>
        <div></div>
      </template>
    </ColorPicker>
  </div>
</template>

<style>
  @import url('vue-accessible-color-picker/styles');
::-webkit-slider-runnable-track {
  border: none !important;
}

:root {
  --vacp-width-border: 0;
}
</style>
