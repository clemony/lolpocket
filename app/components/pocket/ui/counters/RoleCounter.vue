<script lang="ts" setup>
import type { Pocket } from '#shared/schema'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)

const rolesLength = computed(() => {
  const a = pocket.value.roles.filter(r => r !== null)
  return a.length ?? 0
})
</script>

<template>
  <span
    v-tippy="`${rolesLength ? rolesLength : 'no'} selected roles`"
    class="flex items-center gap-3">
    <span class="font-mono text-1 opacity-60 dst">{{ rolesLength }}</span>
  </span>
</template>
