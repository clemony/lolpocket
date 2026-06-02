<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    name: string
    wrapperClass?: HTMLAttributes["class"]
    color?: string
  }>(),
  {}
)
</script>

<template>
  <span
    :class="
      cn(
        'anchor relative grid size-4.5 place-items-center p-0! *:absolute',
        props.wrapperClass
      )
    ">
    <Icon :color :name="props.name" :class="cn('', props.class)" />
  </span>
</template>
