<script lang="ts" setup>

</script>

<template>
  <ModuleGhostTemplate title="Challenges Overview">
    <div class="grid gap-5 pt-1 ">
      <div class="flex i-c gap-5 w-full">
        <div class="flex-col flex gap-2">
          <div class="flex gap-3">
            <i-challenges-icon-points class="size-5.5 dst opacity-50" />
            <p class="text-2 f-sb f-tt opacity-70">
              TOTAL LEVEL
            </p>
          </div>
          <progress class="progress w-52 dst opacity-30" value="66" max="100"></progress>
        </div>

        <div class="size-9 drop-shadow-sm rounded-full bg-b3 border-neutral/40 inset-shadow-sm border -mt-0.5  ring-1 ring-offset-2 ring-offset-b2 ring-neutral/30 opacity-70">
          <img src="/img/challenges/crystal_none.webp" class="h-12  w-auto object-cover grayscale -mt-0.5 opacity-30 brightness-40" />
        </div>
      </div>

      <div class="flex i-c gap-5 w-full">
        <div class="flex-col flex gap-2">
          <div class="flex gap-3">
            <i-challenges-icon_category_veterancy class="size-5.5 dst opacity-50" />
            <p class="text-2 f-sb f-tt opacity-70">
              VETERANCY
            </p>
          </div>
          <progress class="progress w-52 dst opacity-30" value="66" max="100"></progress>
        </div>

        <div class="size-9 drop-shadow-sm rounded-full bg-b3 border-neutral/40 inset-shadow-sm border -mt-0.5  ring-1 ring-offset-2 ring-offset-b2 ring-neutral/30 opacity-70">
          <img src="/img/challenges/crystal_none.webp" class="h-12  w-auto object-cover grayscale -mt-0.5 opacity-30 brightness-40" />
        </div>
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>