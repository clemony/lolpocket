<script lang="ts" setup>
const ss = useSidebarStore()
</script>

<template>
  <div class="grid grid-rows-[70px_auto_170px] sheet size-full **:font-medium px-6">
    <div class="mt-2">
      <button class=" cursor-pointer justify-start btn btn-ghost btn-lg w-full !text-3 text-left">
        Create a Pocket
      </button>
    </div>

    <div class="  flex grow flex-col gap-2.5 w-full h-full mt-5">
      <button v-for="page in defaultFolders" :key="page.name" :ref="page.link" class=" btn btn-ghost btn-lg w-full text-left justify-start !text-3  cursor-pointer  flex items-center group" @click="navigateTo(page.link)">
        {{ page.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>