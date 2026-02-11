<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Tooltip side="bottom" text="Nexus" :side-offset="16">
    <UButton
      :to="{ name: 'nexus' }"
      :class="cn('group/logo anchor', className)"
      color="neutral"
      variant="solid"
      square
      tabindex="0"
      size="md">
      <h5
        class="w-fit font-bold opacity-100 transition-all duration-300 group-hover/logo:scale-x-0 group-hover/logo:opacity-0">
        LP
      </h5>
      <Icon
        class="size-5.5 justify-self-center text-nc opacity-0 transition-all duration-300 group-hover/logo:opacity-100"
        name="nexus" />
    </UButton>
  </Tooltip>
</template>
