<script lang="ts" setup>
const { class: className, hover = 'input', size = '11', variant = 'input' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
}>()

const keys = useMagicKeys()
const metaK = keys['Meta+K']

watch(metaK, (v) => {
  if (v && !ui().commandOpen)
    ui().commandOpen = true
})
</script>

<template>
  <Button
    :variant
    :size
    :hover
    :class="
      cn('bg-b1/60 ring-b1 cursor-text gap-2! overflow-hidden pr-2 transition-all duration-300 hover:ring',
         className,
      )
    "
    @click="ui().commandOpen = true">
    <span class="flex items-center gap-2">
      <icon
        name="search"
        class="dst size-4.25 opacity-40" />
      <span class="text-md! mr-3 opacity-60"> Search </span>
    </span>
    <Kbd
      v-once
      class="
        text-bc/60 inline-flex w-min! items-center justify-center gap-0.5!
        text-sm!
      ">
      <icon
        :name="getMetaIcon()"
        class="text-bc/60 size-3.25" />
      K
    </Kbd>
  </Button>
</template>
