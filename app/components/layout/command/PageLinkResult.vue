<script lang="ts" setup>
const {
  class: className,
  link,
} = defineProps<{
  class?: HTMLAttributes['class']
  link?: string
}>()

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}

function navigate() {
  navigateTo(link)
  ui().commandOpen = false
}
</script>

<template>
  <li
    :variants="variants"
    initial="hidden"
    animate="visible"
    exit="hidden">
    <button
      class="btn-ghost-dark group"
      :class="cn('', className)"
      @focus="navigate()"
      @click="navigate()">
      <slot />

      <icon
        name="link"
        class="
          tldr-20 -ml-1 size-3.5 justify-self-end opacity-0
          group-hover:opacity-100
        " />
    </button>
  </li>
</template>
