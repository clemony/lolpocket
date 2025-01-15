<script setup lang="ts">
  function filter() {}
</script>

<template>
  <div class="flex w-full justify-between gap-8 px-5 pt-6">
    <!--         <button
            :disabled="
                ts.sortItemsAZ == 0 &&
                ts.sortPrice == 0 &&
                !ts.statFilters.length &&
                !ts.catFilters.length
            "
            class="text-mini absolute right-0 my-2 -ml-2 flex h-7 w-fit content-center items-center justify-start gap-3 justify-self-center rounded-btn p-0.5 px-3 font-bold hover:bg-b2 disabled:opacity-40 disabled:hover:bg-transparent"
            @click="filter()">
            <icon name="qlementine-icons:eraser-16" class="size-5 opacity-80" />
            Clear
        </button> -->

    <StatFilters class="w-2/3" />
    <TierFilters class="w-1/3" />
  </div>
</template>

<style scoped></style>
