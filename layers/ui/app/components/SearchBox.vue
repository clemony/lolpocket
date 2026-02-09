<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

const {
  variant = "input",
  class: className,

  size = "11",
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
}>()

const keys = useMagicKeys()
/* const metaK: Record<string, boolean> = keys["Meta+K"]

watch(metaK, (v) => {
  if (v && !ui().commandOpen) ui().commandOpen = true
}) */
</script>

<template>
 <UButton
    :class="
      cn(
        'cursor-text gap-2! overflow-hidden bg-p0/60 pr-2 ring-p0 transition-all duration-300 hover:ring',
        className
      )
    "
    @click="ui().commandOpen = true">
    <span class="flex items-center gap-2">
      <icon class="size-4.25 opacity-40 dst" name="search" />
      <span class="mr-3 text-md! opacity-60">Search</span>
    </span>
    <Kbd
      v-once
      class="inline-flex w-min! items-center justify-center gap-0.5! text-sm! text-pc/60">
      <icon class="size-3.25 text-pc/60" :name="getMetaIcon()" />
      K
    </Kbd>
  </UButton>
</template>
