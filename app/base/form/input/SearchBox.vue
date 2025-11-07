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
    :class="cn('bg-b1/60 border-b3 border cursor-text  !gap-2 transition-all duration-300 ring-b1 pr-2  hover:ring', className)"
    @click="ui().commandOpen = true">
    <span class="flex items-center gap-2">
      <icon
        name="search"
        class="size-4.25 opacity-40 dst" />
      <span class="mr-3 !text-3 opacity-60">
        Search
      </span>
    </span>
    <Kbd
      v-once
      class="">
      <icon
        :name="getMetaIcon()"
        class="size-3.25 text-bc/60" />
      K
    </Kbd>
  </Button>
</template>
