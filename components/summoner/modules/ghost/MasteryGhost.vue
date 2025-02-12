<script lang="ts" setup>
</script>

<template>
  <ModuleGhostTemplate title="Champion Mastery">
    <div class="grid grid-cols-3 p-i-c">
      <div v-for="index in 3" :key="index" class="flex flex-col gap-6 items-center">
        <div class="size-18 rounded-full grid p-i-c  drop-shadow-sm bg-neutral/30 relative ring ring-neutral/40 ring-offset-4 ring-offset-b1">
          <i-no-champ class="text-nc" />
          <div class="bg-b1 rounded-full grid p-i-c size-7 overflow-hidden top-14 absolute scale-x-110 border border-neutral/20 dst">
            <i-mastery-0 class="size-8 absolute opacity-40 top-0.25 scale-y-105" />
          </div>
        </div>
        <Empty class="h-3 w-16" />
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>