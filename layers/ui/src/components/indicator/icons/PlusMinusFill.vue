<script lang="ts" setup>
const { class: className, open } = defineProps<{
  class?: HTMLAttributes['class']
  open?: boolean
}>()
</script>

<template>
  <div
    :data-open="open"
    :class="cn('group/plus grid size-3.5 place-items-center *:absolute data-[open=true]:*:first:opacity-0 data-[open=true]:*:last:opacity-100', className)">
    <icon
      name="add"
      :class="
        cn('size-3 opacity-100 transition-all duration-200 **:stroke-[3.6]',
        )
      " />

    <icon
      name="minus"
      :class="
        cn('size-3 opacity-0 transition-all duration-200 **:stroke-[3.6]',
        )
      " />
  </div>
</template>
