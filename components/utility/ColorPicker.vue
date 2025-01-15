<script setup lang="ts">
  import { ColorPicker } from 'vue-accessible-color-picker';

  const ps = usePocketStore();
  const props = defineProps<{
    pocket?: {
      bgColor: string;
      iconColor: string;
    };
    bgColor?: string;
    iconColor?: string;
    pocketKey?: string;
  }>();

  console.log(props.pocket);

  const emit = defineEmits(['update:bgColor', 'update:iconColor']);
  const pocket = computed(() => {
    if (props.pocketKey) {
      return props.pocket;
    }
  });

  // Initialize color with the prop value

  const bgColor = ref('#000');
  const iconColor = ref('#FFF');
  const colorType = ref('background');
  const color = computed(() => {
    if (props.iconColor) {
      return iconColor.value;
    } else {
      return bgColor.value;
    }
  });

  const getBgColor = computed(() => {
    if (props.pocket) {
      return props.pocket.bgColor;
    } else {
      return props.bgColor;
    }
  });
  const getIconColor = computed(() => {
    if (props.pocket) {
      return props.pocket.iconColor;
    } else {
      return props.iconColor;
    }
  });

  function updateColor(eventData) {
    if (props.bgColor) {
      bgColor.value = eventData.cssColor;
      emit('update:bgColor', bgColor.value);
    } else if (props.iconColor) {
      iconColor.value = eventData.cssColor;
      emit('update:iconColor', iconColor.value);
    }
  }
  onMounted(async () => {
    await nextTick();
    if (props.pocket) {
      bgColor.value = props.pocket.bgColor;
    }
    if (props.pocket) {
      iconColor.value = props.pocket.iconColor;
    }
  });
</script>

<template>
  <div class="grid items-center gap-4">
    <ColorPicker
      :color="color"
      class="w-full"
      @color-change="updateColor"
      alpha-channel="hide">
      <template #hue-range-input-label>
        <span class="visually-hidden"></span>
      </template>

      <template #copy-button></template>
    </ColorPicker>
  </div>
</template>

<style>
  @import url('vue-accessible-color-picker/styles');
  /* beautify ignore:start */
  label {
    color: var(--ac);
  }
  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    white-space: nowrap;
  }
  :root {
    --vacp-width-border: 1px;
    --vacp-color-border: transparent;
    --vacp-color-background: transparent;
    --vacp-color-focus: transparent;
  }

  .vacp-color-space {
    --vacp-thumb-size: 4px !important;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-warm);

    :state(webkit-slider-thumb) {
      padding-top: 10px;
    }
  }

  label.vacp-range-input-label {
    border-radius: 100%;
  }
  .vacp-color-inputs,
  .vacp-range-copy-button {
    display: none;

    &:hover {
      background-color: transparent;
    }
  }

  #color-picker-hue-slider,
  #color-picker-alpha-slider {
    --vacp-width-border: 0px;
    width: 100%;
    height: 0.75rem;
    overflow: hidden;
    border-radius: 10%;
    background-color: transparent;
    box-shadow: var(--shadow-warm);
  }

  .vacp-copy-button {
    display: none;
    width: 0;
    height: 0;
  }
</style>
