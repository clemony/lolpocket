<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <button
    class="justify-self-end  btn gap-2 mr-3  btn-neutral !bg-neutral/88 border-b3 hover:ring-neutral/50 flex h-9 !bg-b1  cursor-pointer items-center btn-xs px-3.5 rounded-full !py-0 inset-shadow-black  hover:ring-1 group inset-shadow-xs group  expand-hide " @click.stop="us.commandOpen = true">
    <icon
      name="search-bold"
      class="-mt-px  size-4 group-hover:opacity-100 text-nc " />

    <span
      class="!text-3 font-light text-nc ">
      {{ getDeviceKey() }} K
    </span>
  </button>
</template>