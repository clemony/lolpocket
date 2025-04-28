<script lang="ts" setup>
const us = useUiStore()
const route = useRoute()
</script>

<template>
  <button
    class="rounded-lg-2  gap-2 ml-2 mr-4  w-22  border-b4/80  hover:ring-neutral/50 flex h-9 !bg-b1 flex-nowrap text-nowrap cursor-pointer items-center  px-3 !py-0  hover:!bg-b1  hover:ring-1 group inset-shadow-xs group  border" @click.stop="us.commandOpen = true">
    <icon
      name="search"
      class="size-4 shrink-0 opacity-70 group-hover:opacity-100 dst" />
    <span class=" text-bc/70 text-left mt-px  font-medium tracking-tight  text-2 grow truncate ">
    <!--   {{ route.meta.title || route.name }} -->
    </span>
    <span
      class="!text-3 font-medium  text-bc/60">
      {{ getDeviceKey() }} K
    </span>
  </button>
</template>