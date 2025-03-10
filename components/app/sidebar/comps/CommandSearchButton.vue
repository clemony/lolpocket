<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <button
    v-tippy="!us.sidebarExpanded ? `Search ${getDeviceKey()} K` : null"
    class=" btn absolute !h-12 !w-9  border-b3 hover:ring-neutral/50 flex !bg-b1  cursor-pointer items-center  btn-square opacity-0 h-0 !py-0  hover:!bg-b1  hover:ring-1 group inset-shadow-xs group animate-out slide-out-to-top-10 fade-out-100 delay-100 " :class="{ 'opacity-100 animate-in slide-down-from-top-10 delay-100 fade-in-100  top-18 left-4.25': !us.sidebarExpanded }"
    :style="{ '--noise': 0.01 }" @click.stop="us.commandOpen = true ">
    <icon
      name="teenyicons:search-outline"
      class="-mt-px  size-3.5 opacity-80 group-hover:opacity-100" />
  </button>
</template>