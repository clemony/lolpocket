<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
          <li class=" " :class="cn('group/cli has-[input:checked]:!order-1 btn btn-ghost text-start text-3 gap-3 font-medium', props.class)">
            <slot  />
          </li>
</template>