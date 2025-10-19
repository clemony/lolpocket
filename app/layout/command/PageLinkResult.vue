<script lang="ts" setup>
const {
  class: className,
  link,
  page,
} = defineProps<{
  page: PageRecord
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
    <a
      class="btn-ghost-dark group"
      :class="cn('', className)"
      @click="navigate()">
      <slot />

      <span class="group-hover:underline grow ml-2">
        {{ page.altName ?? page.name }}
      </span>

      <Badge
        class="capitalize justify-self-end opacity-40 text-1 group-hover:opacity-80 mr-1">
        {{ page.meta?.section ?? "" }}
      </Badge>

      <icon
        name="link"
        class="size-3.5 justify-self-end opacity-0 group-hover:opacity-100 tldr-20 -ml-1" />
    </a>
  </li>
</template>
