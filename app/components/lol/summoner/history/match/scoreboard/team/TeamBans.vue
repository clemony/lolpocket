<script lang="ts" setup>
const { class: className, team } = defineProps<{
  class?: HTMLAttributes['class']
  team: MatchTeam
}>()
</script>

<template>
  <div class="flex h-full w-fit translate-y-px items-center justify-end gap-4">
    <Icon
      class="mr-1 size-4 translate-y-px opacity-50 **:stroke-3"
      name="x" />
  </div>
</template>
