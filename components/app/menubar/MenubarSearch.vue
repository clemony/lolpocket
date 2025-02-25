<script setup lang="ts">

</script>

<template>
  <button
    class="rounded-lg  btn btn-outline  border-b3 hover:ring-neutral/50 flex h-11 bg-b1/80  min-w-48 w-48 cursor-pointer items-center  !px-2.5 !py-0  hover:bg-b1 hover:ring-1 group inset-shadow-xxs"
    @click="ts.commandOpen = true"
  >
    <icon
      name="teenyicons:search-outline"
      class="-mt-px mr-1 ml-1 size-4 justify-self-start opacity-95"
    />

    <span class="align-end text-2 mt-px grow text-start font-medium opacity-70">
      Search
    </span>

    <div
      size="sm"
      class="!text-3 btn btn-xs h-7 px-1  border-b3/60  text-bc/50"
    >
      {{ getDeviceKey() }} K
    </div>
  </button>
</template>

<style scoped></style>
