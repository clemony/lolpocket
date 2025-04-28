<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <button
    v-if="us.sidebarExpanded"
    class="justify-self-end  btn gap-2  btn-neutral !bg-neutral/88 border-b3 hover:ring-neutral/50 flex h-8 !bg-b1  cursor-pointer items-center btn-xs px-2.5 rounded-lg !py-0 inset-shadow-black  hover:ring-1 group inset-shadow-xs group  expand-hide " @click.stop="us.commandOpen = true">
    <icon
      name="search-bold"
      class="-mt-px  size-3.5 group-hover:opacity-100 text-nc/90 " />

    <span
      class="!text-3 text-nc/80 ">
      {{ getDeviceKey() }} K
    </span>
  </button>
</template>