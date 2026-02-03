<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    name: string
    wrapperClass?: HTMLAttributes['class']
    size?: ElementVariants['size']
    variant?: ElementVariants['variant']
    base?: ElementVariants['base']
    color?: string
  }>(),
  {
    base: 'btn',
    size: 'sq-4',
  }
)
</script>

<template>
  <Element
    :class="
      cn(
        'p-0! size-4.5 grid place-items-center *:absolute relative',
        props.wrapperClass,
      )
    "
  >
    <Icon :color :name="props.name" :class="cn('', props.class)" />
  </Element>
</template>
