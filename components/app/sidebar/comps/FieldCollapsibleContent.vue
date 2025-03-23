<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
    <CollapsibleContent class="CollapsibleContent  w-full px-0">

  <Field class="" :class="cn('px-5 py-6 rounded-t-none border-t-0 -mt-2', props.class)">
    <slot  />
  </Field>
    </CollapsibleContent>
</template>