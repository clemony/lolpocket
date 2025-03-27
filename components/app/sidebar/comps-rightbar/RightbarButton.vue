<script lang="ts" setup>
const props = defineProps<{
  field?: boolean
  class?: HTMLAttributes['class']
}>()

const us = useUiStore()
</script>

<template>
  <button :class="cn('btn btn-lg capitalize btn-ghost cursor-pointer w-full pl-2 pr-3 group/state  gap-4 justify-start hover:text-bc font-medium text-3 items-center [&_svg]:shrink-0', { '!size-12 !justify-center !gap-0 ': !us.rightbarExpanded, 'group-data-[state=open]/state:bg-b2 group-data-[state=open]/state:border-b3 group-data-[state=open]/state:border-x group-data-[state=open]/state:border-t group-data-[state=open]/state:rounded-b-none group-data-[state=open]/state:border-b-0': props.field }, props.class)">
    <slot />
  </button>
</template>