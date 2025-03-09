<script lang="ts" setup>
const us = useUiStore()
</script>

<template>

    <button
        class=" btn absolute  border-b3 hover:ring-neutral/50 flex !bg-b1  cursor-pointer items-center  btn-square opacity-0 h-0 !py-0  hover:!bg-b1  hover:ring-1 group inset-shadow-xs group animate-out slide-out-to-top-10 fade-out-100 delay-100 tldr-20"  :class="{'opacity-100 animate-in slide-down-from-top-10 delay-100 fade-in-100  h-9 top-16': !us.sidebarExpanded }"
        :style="{ '--noise': 0 }" @click.stop="us.commandOpen = true  ">
        <icon
          name="teenyicons:search-outline"
          class="-mt-px  size-3.5 opacity-80 group-hover:opacity-100" />

      </button>
</template>