<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <button
    v-if="us.sidebarExpanded"
    class="justify-self-end  btn gap-2 absolute right-5   border-b3 hover:ring-neutral/50 flex h-9 !bg-b1  cursor-pointer items-center  px-3 !py-0  hover:!bg-b1  hover:ring-1 group inset-shadow-xs group  expand-hide " @click.stop="us.commandOpen = true">
    <icon
      name="teenyicons:search-outline"
      class="-mt-px  size-3.5 opacity-80 group-hover:opacity-100" />

    <span
      class="!text-3   text-bc/50">
      {{ getDeviceKey() }} K
    </span>
  </button>
</template>