<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <button
    class="justify-self-end  btn gap-2 mx-3  btn-n1 !bg-n1/88 border-b3 hover:ring-n1/50 flex h-8.5 !bg-b1  cursor-pointer items-center btn-xs px-3 rounded-xl btn-sm !py-0 inset-shadow-black  hover:ring-1 group inset-shadow-xs group   " @click.stop="us.commandOpen = true">
    <icon
      name="search-bold"
      class="-mt-px  size-4 group-hover:opacity-100 text-nc " />

    <span
      class="!text-3 font-light text-nc ">
      {{ getDeviceKey() }} K
    </span>
  </button>
</template>