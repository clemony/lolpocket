<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'

  const as = useAccountStore()

  const props = defineProps<{
    class?: HTMLAttributes['class']
    check?: boolean
    group?: string
  }>()
</script>
<template>
  <Icon
    name="teenyicons:left-small-outline"
    :class="
      cn(
        'ml-auto size-5.5 shrink-0 transition-transform duration-200 group-data-[state=open]:-rotate-90 peer-checked:-rotate-90 group-has-checked:-rotate-90 group-has-[.first-one:checked]/a:-rotate-90 group-has-[.second-one:checked]/b:-rotate-90',
        { '-rotate-90': props.check },
        props.class
      )
    " />
</template>
<style scoped></style>
