<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'

  const as = useAccountStore()

  const props = defineProps<{
    class?: HTMLAttributes['class']
    check?: boolean
    group?: string
    checkThis?: boolean
  }>()
</script>
<template>
  <Icon
    v-if="props.check"
    name="teenyicons:left-small-outline"
    :class="cn('ml-auto size-5.5 shrink-0 transition-transform duration-400', { '-rotate-90': props.check == true }, props.class)" />

  <Icon
    v-else
    name="teenyicons:left-small-outline"
    :class="
      cn(
        'ml-auto size-5.5 shrink-0 transition-all duration-400 group-data-[state=open]:-rotate-90 peer-checked:-rotate-90 group-has-checked:-rotate-90 group-has-[.first-one:checked]/a:-rotate-90 group-has-[.second-one:checked]/b:-rotate-90',
        props.class
      )
    " />
</template>
<style scoped></style>
