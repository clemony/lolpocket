<script lang="ts" setup>

const props = defineProps<{
  title?: string
  slide?: boolean
  expand?: boolean
    class?: HTMLAttributes['class']
}>()

</script>

<template>
  <transition-slide v-if="props.slide" group :class="cn('field-box', {'!mt-0': !props.title}, props.class)">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot name="title" />
    </div>
    <slot />
  </transition-slide>


  <transition-expand v-else-if="props.expand" group  :class="cn('field-box', {'!mt-0': !props.title}, props.class)">
    <div class="field-legend capitalize text-bc !overflow-visible">
      {{ props.title }}
      <slot name="title" />
    </div>
    <slot />
  </transition-expand>
</template>