<script setup lang="ts">
const { class: className, kbd } = defineProps<{
  class?: HTMLAttributes['class']
  kbd?: boolean
}>()

const emit = defineEmits(['update:search'])

const query = ref('')
</script>

<template>
  <Combobox position="popper">
    <ComboboxAnchor as-child>
      <ComboboxTrigger
        class="input"
        :class="
          cn('group focus-within:ring-offset-b2 relative flex size-full w-full items-center py-0 focus-within:border-transparent! focus-within:ring-offset-1 focus:border-transparent! has-[&_input]:placeholder-shown:*:last:opacity-0',
             className,
          )
        ">
        <slot />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <LazySearchContent
      class="w-(--reka-combobox-trigger-width)"
      :query />
  </Combobox>
</template>
