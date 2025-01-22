<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = withDefaults(
    defineProps<{
      class?: HTMLAttributes['class'];
      size?: any;
      variant?: any;
      noArrow?: boolean;
      style?: any;
      contentClass?: HTMLAttributes['class'];
      dark?: boolean;
    }>(),
    {
      size: 'sm',
      variant: 'ghost',
    }
  );
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        :class="
          cn(
            'text-3 focus:ring-b2! data-[state=open]:ring-b3/40! flex h-full w-full flex-nowrap items-center rounded-lg border-0! px-3 ring-0! focus:border-0! focus:ring-1! focus:outline-0! data-[state=open]:ring-1! data-[state=open]:shadow-xs',
            props.class
          )
        "
        :variant="props.variant"
        :size="props.size"
        :style="props.style">
        <slot />

        <icon
          v-if="!props.noArrow"
          name="teenyicons:caret-vertical-small-outline"
          class="w-4 shrink-0 justify-end opacity-60" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      :class="
        cn('w-radix-dropdown-menu-trigger *:w-full *:justify-start [&_svg]:size-4.5', props.contentClass, {
          'border-ac/30 bg-neutral/60 text-bc ring-neutral [border-style:outset] ring-1 backdrop-brightness-110': props.dark,
        })
      "
      :style="props.style">
      <slot name="menu" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
