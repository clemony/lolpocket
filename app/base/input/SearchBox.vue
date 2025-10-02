<script lang="ts" setup>
import { getMetaIcon } from '~/utils/config/handleDevice'

const keys = useMagicKeys()
const metaK = keys['Meta+K']

watch(metaK, (v) => {
  if (v && !ui().commandOpen)
    ui().commandOpen = true
})
</script>

<template>
  <Button
    variant="default"
    class="bg-b1/60 border-b3 border cursor-text  !gap-2 transition-all duration-300 ring-b1 pr-2  hover:ring"
    @click="ui().commandOpen = true">
    <icon
      name="search"
      class="size-4.25 opacity-40 dst" />
    <span class="mr-3 !text-3 opacity-60">
      Search
    </span>
    <span
      v-once
      class="badge rounded-md badge-ghost gap-1 border border-b4/50 bg-b2/64 px-1.5 !text-[0.91rem] text-bc/60">
      <icon
        :name="getMetaIcon()"
        class="size-3.25 text-bc/60" />
      K
    </span>
  </Button>
</template>
