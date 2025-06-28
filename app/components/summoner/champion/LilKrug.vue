<script lang="ts" setup>

</script>

<template>
  <div class="px-4 grid shrink-0 w-full grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr]  items-center gap-5">
    <Placeholder
      class="  rounded-full  size-17 place-items-center grid">
      <!--          <i-no-champ class="size-8 opacity-40" /> -->
      <icon name="fluent-emoji-high-contrast:rock" class="text-bc/70 size-5.5" />
    </Placeholder>

    <div class="flex  flex-col dst  justify-center font-medium">
      <p>Krug</p>

      <p>0 Games </p>
    </div>

    <div class="flex  grow  text-2 flex-col items-end justify-center px-3">
      <p class=" items-center dst font-medium text-nowrap">
      </p>

      <p class=" dst font-medium items-center text-nowrap">
      </p>
    </div>

    <DonutSkeleton class="size-18 dst " label="0%">
    </DonutSkeleton>
  </div>
</template>