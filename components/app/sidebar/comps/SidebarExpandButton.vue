<script lang="ts" setup>
const props = defineProps<{
  expanded: boolean
  side: 'left' | 'right'
}>()
</script>

<template>
  <button v-tippy="(!props.expanded && props.side == 'right') || (props.expanded && props.side == 'left') ? 'Collapse Sidebar' : 'Expand Sidebar'" class="btn btn-ghost btn-square *:absolute relative *:size-5.25  *:opacity-90 *:shrink-0">
    <icon v-if="(!props.expanded && props.side == 'right') || (props.expanded && props.side == 'left')" name="octicon:sidebar-expand-24" />

    <icon v-else name="octicon:sidebar-collapse-24" />
  </button>
</template>