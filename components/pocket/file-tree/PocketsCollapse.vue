<script lang="ts" setup>
const props = defineProps<{
  folder: Folder
}>()

const folder = ref(props.folder)
console.log("💠 - folder:", folder.value)
const ps = usePocketStore()

const folderPockets = computed (() => {
return ps.pockets.filter((p)=> p.location.folder.toLowerCase() == props.folder.key.toLowerCase())
})
console.log("💠 - folderPockets - ps.pockets:", ps.pockets)
console.log("💠 - folderPockets - folderPockets:", folderPockets.value)
</script>

<template>
  <div class="collapse menu group">
    <input type="checkbox" :name="folder.name" class="collapse-input parent-check !py-0 !min-h-11 peer/check h-11" :disabled="!folderPockets.length" :checked="folder.name == 'All'" />
    <div class="group-has-disabled:opacity-40 collapse-title overflow-auto font-semibold !min-h-11 flex gap-4 flex-nowrap text-nowrap text-3 items-center !py-0 h-11 peer-hover/check:bg-b2/40 btn btn-ghost justify-start pr-6">
      <icon name="right-sm" class="group-has-[input.parent-check:checked]:rotate-90 size-5.5 transition-all duration-300" />

      <icon :name="folder.icon" class="size-4.5 overflow-auto  " />
      <span class="grow text-left">{{ props.folder.name }}</span>

      <span v-if="folderPockets && folderPockets.length" class="badge badge-neutral text-2 badge-sm py-2.75">{{ folderPockets.length }}</span>
    </div>
    <div class="collapse-content ml-3">
      <ul class="border-l border-l-b3 pl-4 flex flex-col pt-3">
        <li v-for="item in folderPockets" :key="item.name" class="">
          <NuxtLink :to="`/pocket/${item.key}`" class="!text-3 btn gap-5 flex-nowrap h-12 flex flex-row justify-start btn-ghost btn-lg w-full font-normal items-center justify-items-start text-nowrap">
            <PocketIcon :image="item.icon" class="size-10" />

            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>