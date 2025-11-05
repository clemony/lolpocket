<script setup lang="ts">
const { class: className, kbd } = defineProps<{
  class?: HTMLAttributes['class']
  kbd?: boolean
}>()

const emit = defineEmits(['update:search'])

const query = ref('')
</script>

<template>
  <Combobox
    position="popper">
    <ComboboxAnchor as-child>
      <ComboboxTrigger
        class="input"
        :class="
          cn(
            'flex size-full focus-within:ring-offset-1 items-center focus-within:ring-offset-b2 focus-within:!border-transparent focus:!border-transparent relative w-full items-center py-0 has-[&_input]:placeholder-shown:*:last:opacity-0 group',
            className,
          )
        ">
        <slot />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <LazySearchContent
      class="w-[var(--reka-combobox-trigger-width)]"
      :query />
  </Combobox>
</template>