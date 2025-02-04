<script lang="ts" setup>
const props = defineProps<{
  folder: Folder
}>()
</script>

<template>
  <div class="collapse menu group">
    <input type="checkbox" :name="folder.name" class="parent-check !py-0 !min-h-11 peer/check h-11" :disabled="!folder.items.length" :checked="folder.name == 'All'" />
    <div class="group-has-disabled:opacity-40 collapse-title overflow-auto font-semibold !min-h-11 flex gap-4 flex-nowrap text-nowrap text-3 items-center !py-0 h-11 peer-hover/check:bg-b2/40 btn btn-ghost justify-start pr-6">
      <icon name="right-sm" class="group-has-[input.parent-check:checked]:rotate-90 size-5.5 transition-all duration-300" />

      <icon :name="folder.icon" class="size-4.5 overflow-auto  " />
      <span class="grow text-left">{{ props.folder.name }}</span>

      <span v-if="folder.items.length" class="badge badge-neutral text-2 badge-sm py-2.75">{{ folder.items.length }}</span>
    </div>
    <div class="collapse-content ml-3">
      <ul class="border-l border-l-b3 pl-4 flex flex-col pt-3">
        <li v-for="item in folder.items" :key="item.name" class="">
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