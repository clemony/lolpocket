<script lang="ts" setup>
import { getMetaIcon } from '~/utils/config/handleDevice'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
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
    variant="input"
    :class="
      cn(
        `
          cursor-text gap-2! border border-b3 bg-b1/60 pr-2 ring-b1
          transition-all duration-300
          hover:ring
        `,
        className,
      )
    "
    @click="ui().commandOpen = true">
    <span class="flex items-center gap-2">
      <icon
        name="search"
        class="size-4.25 opacity-40 dst" />
      <span class="mr-3 text-3! opacity-60"> Search </span>
    </span>
    <Kbd
      v-once
      class="
        inline-flex w-min! items-center justify-center gap-0.5! text-2!
        text-bc/60
      ">
      <icon
        :name="getMetaIcon()"
        class="size-3.25 text-bc/60" />
      K
    </Kbd>
  </Button>
</template>
