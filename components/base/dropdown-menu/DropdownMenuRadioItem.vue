<script setup lang="ts">
  import { DropdownMenuItemIndicator, DropdownMenuRadioItem, type DropdownMenuRadioItemEmits, type DropdownMenuRadioItemProps, useForwardPropsEmits } from 'radix-vue';
  import { computed, type HTMLAttributes } from 'vue';

  const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>();

  const emits = defineEmits<DropdownMenuRadioItemEmits>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'text-2 focus:bg-b2/60 focus:text-bc relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class
      )
    ">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <icon
          name="teenyicons:circle-outline"
          class="h-2 w-2 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
