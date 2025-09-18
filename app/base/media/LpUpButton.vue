<script lang="ts" setup>
const ds = useDataStore()
const ui = useUiStore()
</script>

<template>
  <div class="flex gap-4 w-full h-20 items-center pr-2 overflow-hidden">
    <button class="overflow-hidden btn btn-ghost group/up pr-4 !btn-lg">
      <NuxtLink
        to="/"
        class="w-full pt-px items-center flex justify-start">
        <h4 class="dst select-none !tracking-normal">
          LP
        </h4>

        <span
          class="flex gap-1 pl-3 mt-0.5 items-center translate-y-3 opacity-0 pointer-events-none group-hover/up:translate-y-0 group-hover/up:opacity-100 transition-[translate_opacity] dr-30 ease-in-out expand-hide">
          up
          <icon
            name="arrow-up"
            class="size-5" />
        </span>
      </NuxtLink>
    </button>
  </div>
</template>
