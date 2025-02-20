<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const emit = defineEmits(['update:component'])

const ss = useSidebarStore()
</script>

<template>
  <div class="grid grid-rows-[70px_auto_170px] sheet size-full **:font-medium px-6">
    <div class="-mt-2">
      <button class=" cursor-pointer justify-start btn btn-ghost btn-lg w-full !text-3 text-left">
        Edit Pocket
      </button>
    </div>

    <div class="  flex grow flex-col gap-2.5 w-full h-full ">
      <button v-for="page in getPocketLinks(props.pocket)" :key="page.name" :ref="page.link" class=" btn btn-ghost btn-lg w-full text-left justify-start !text-3  cursor-pointer  flex items-center group" @click="navigateTo(`/pocket/${pocket.key}/${page.link}`)">
        {{ page.name }}
      </button>
    </div>

    <PocketUtilityMenu :pocket="pocket" />
  </div>
</template>

<style scoped>

</style>