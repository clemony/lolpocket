<script setup lang="ts">

</script>

<template>
  <button
    class="rounded-lg  btn btn-outline  border-b3 hover:ring-neutral/50 flex h-10 bg-b1/80  min-w-48 w-48 cursor-pointer items-center  !px-2 !py-0  mb-1 hover:bg-b1 hover:ring-1 group"
    @click="ts.commandOpen = true"
  >
    <icon
      name="teenyicons:search-outline"
      class="-mt-px mr-1 ml-1 size-4 justify-self-start opacity-95"
    />

    <span class="align-end text-2 mt-px grow text-start font-medium opacity-70">
      Search
    </span>

    <Badge
      size="sm"
      class="!text-3 border-b3 text-bc/60 rounded-md border shadow-xs"
    >
      {{ useDeviceKey() }} K
    </Badge>
  </button>
</template>

<style scoped></style>
