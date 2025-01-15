<script setup lang="ts">
  const ps = usePocketStore();
</script>

<template>
  <div class="border-b2 bg-b1 focus-within:border-b3 relative -mt-1 flex h-10 min-w-[225px] items-center rounded-md border">
    <input
      type="text"
      spellcheck="false"
      v-model="ps.filterText"
      placeholder="Search..."
      class="input input-xs text-3 h-full border-none! bg-transparent pr-5 pl-3 ring-0! ring-offset-0! outline-0! outline-offset-0! [border-image-width:0] focus:ring-0! focus:ring-offset-0! focus:outline-0! focus:outline-offset-0!" />

    <icon
      name="teenyicons:search-outline"
      :class="{ 'opacity-60': ps.filterText == '' }"
      class="absolute top-[7px] right-2.5 size-4 opacity-0 transition-all duration-300" />
    <button
      :class="{ 'opacity-0': ps.filterText == '' }"
      class="btn btn-square btn-ghost btn-xs pointer-events-auto z-30 transition-all duration-300"
      @click="ps.filterText = ''">
      <icon name="teenyicons:x-outline" />
    </button>
  </div>
</template>

<style scoped></style>
