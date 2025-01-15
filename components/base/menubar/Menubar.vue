<script setup lang="ts">
  import { MenubarRoot, type MenubarRootEmits, type MenubarRootProps, useForwardPropsEmits } from 'radix-vue';
  import { computed, type HTMLAttributes } from 'vue';

  const props = defineProps<MenubarRootProps & { class?: HTMLAttributes['class'] }>();
  const emits = defineEmits<MenubarRootEmits>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    :class="cn('border-b-b2/90 flex h-16 items-center gap-x-1 border p-1', props.class)">
    <slot />
  </MenubarRoot>
</template>
