<script setup lang="ts">
  import { DialogClose, DialogContent, type DialogContentEmits, type DialogContentProps, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'radix-vue';
  import { computed, type HTMLAttributes } from 'vue';
  import { type SheetVariants, sheetVariants } from './shindex';

  interface SheetContentProps extends DialogContentProps {
    class?: HTMLAttributes['class'];
    side?: SheetVariants['side'];
  }

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<SheetContentProps>();

  const emits = defineEmits<DialogContentEmits>();

  const delegatedProps = computed(() => {
    const { class: _, side, ...delegated } = props;

    return delegated;
  });

  const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }">
      <slot />

      <DialogClose
        class="ring-b3 focus:ring-b2 data-[state=open]:bg-b3 absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-1 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
        <icon
          name="teenyicons:x-outline"
          class="text-bc/60 h-4 w-4" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
