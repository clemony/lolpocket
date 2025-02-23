<script lang="ts" setup>
</script>

<template>
  <ModuleGhostTemplate title="Champion Mastery">
    <div class="grid grid-cols-2 p-i-c mt-1">

      <div  class="flex flex-col gap-6 itemsend">
            <Empty class="h-3 w-20" />     <Empty class="h-3 w-16" />
        <Empty class="h-4 w-26" />
      </div>

      <div  class="flex flex-col gap-6 items-center -mt-4">
        <div class="size-18 rounded-full grid p-i-c  drop-shadow-sm bg-neutral/30 relative ring ring-neutral/40 ring-offset-4 ring-offset-b1">
          <i-no-champ class="text-nc" />
          <div class="bg-b1 rounded-full grid p-i-c size-7 overflow-hidden top-14 absolute scale-x-110 border border-neutral/20 dst">
            <i-mastery-0 class="size-8 absolute opacity-40 top-0.25 scale-y-105" />
          </div>
        </div>
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>