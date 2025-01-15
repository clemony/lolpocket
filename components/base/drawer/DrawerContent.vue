<script setup lang="ts">
  import { computed, watch } from 'vue';
  import { DialogContent } from 'radix-vue';
  import { injectDrawerRootContext } from './src/context';

  const props = defineProps<{
    handleNone?: boolean;
  }>();
  const { open, isOpen, isVisible, snapPointsOffset, drawerRef, onPress, onDrag, onRelease, modal, emitOpenChange, dismissible, keyboardIsOpen, closeDrawer, direction, handleOnly } =
    injectDrawerRootContext();

  const snapPointHeight = computed(() => {
    if (snapPointsOffset.value && snapPointsOffset.value.length > 0) return `${snapPointsOffset.value[0]}px`;

    return '0';
  });

  function handlePointerDownOutside(event: Event) {
    if (!modal.value || event.defaultPrevented) {
      event.preventDefault();
      return;
    }
    if (keyboardIsOpen.value) keyboardIsOpen.value = false;

    event.preventDefault();

    if (dismissible.value) emitOpenChange(false);
    if (!dismissible.value || open.value !== undefined) return;

    closeDrawer();
  }

  function handlePointerDown(event: PointerEvent) {
    if (handleOnly.value) return;

    onPress(event);
  }

  function handleOnDrag(event: PointerEvent) {
    if (handleOnly.value) return;

    onDrag(event);
  }

  watch(
    isOpen,
    (open) => {
      if (open) {
        setTimeout(() => {
          isVisible.value = true;
        }, 1);
      }
    },
    { immediate: true }
  );
</script>

<template>
  <DialogContent
    ref="drawerRef"
    vaul-drawer=""
    :vaul-drawer-direction="direction"
    :vaul-drawer-visible="isVisible ? 'true' : 'false'"
    :style="{ '--snap-point-height': snapPointHeight }"
    @pointerdown="handlePointerDown"
    @pointermove="handleOnDrag"
    @pointerup="onRelease"
    @pointer-down-outside="handlePointerDownOutside"
    @escape-key-down="
      (event) => {
        if (!dismissible) event.preventDefault();
      }
    ">
    <slot />
    <DrawerHandle
      v-if="!props.handleNone"
      class="bg-b2 drawer-handle pointer-events-auto absolute top-1/2 bottom-1/2 left-5 z-10 my-auto h-[100px] w-2 rounded-full" />
  </DialogContent>
</template>

<!--          :class="
                cn(
                    'bg-b1 text-bc fixed z-50 flex flex-col rounded-xl',
                    props.class,
                    {
                        'inset-x-0 bottom-0 mt-24 h-auto overflow-hidden':
                            side == 'bottom',
                    },
                    {
                        'inset-y-0 right-0 bottom-0 w-auto': side == 'right',
                    }
                )
            "

               :class="{
                    '':
                        side === 'right',
                    'mx-auto mt-4 h-2 w-[100px]': side === 'bottom',
                }"
            -->
