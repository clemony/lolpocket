<script lang="ts" setup>
const {
  variant = 'input',
  class: className,

  size = '11',
} = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']

}>()

const keys = useMagicKeys()
const metaK = keys['Meta+K']

watch(metaK, (v) => {
  if (v && !ui().commandOpen) ui().commandOpen = true
})
</script>

<template>
  <Button
    :class="
      cn(
        'bg-b1/60 ring-b1 cursor-text gap-2! overflow-hidden pr-2 transition-all duration-300 hover:ring',
        className,
      )
    "
    @click="ui().commandOpen = true"
  >
    <span class="flex items-center gap-2">
      <icon class="dst size-4.25 opacity-40" name="search" />
      <span class="text-md! mr-3 opacity-60">Search</span>
    </span>
    <Kbd
      v-once
      class="text-bc/60 inline-flex w-min! items-center justify-center gap-0.5! text-sm!"
    >
      <icon class="text-bc/60 size-3.25" :name="getMetaIcon()" />
      K
    </Kbd>
  </Button>
</template>
