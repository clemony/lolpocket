<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SidebarInputWrapper

    :class="cn(props.class, 'pr-2 shadow-none')">
    <!--
      <Button
        variant="neutral"
        size="xs">
        <icon
          name="lucide:user-round"
          class="size-4.5 -mx-2" />

        <icon
          name="down-sm"
          class="-ml-2.25 size-4.5 -mr-1.5" />
      </Button> -->
    <input
      class="size-full"
      type="text"
      placeholder="Name  #tag" />
  </sidebarinputwrapper>
</template>