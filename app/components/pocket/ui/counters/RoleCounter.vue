<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)

const rolesLength = computed (() => {
  const a = pocket.value.roles.filter(r => r != null)
  return a.length ?? 0
})
</script>

<template>
  <span v-tippy="`${rolesLength ? rolesLength : 'no'} selected roles`" class="flex gap-3 items-center">
    <span class="dst font-mono text-1 opacity-60">{{ rolesLength }}</span>
  </span>
</template>