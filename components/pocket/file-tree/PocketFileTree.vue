<script lang="ts" setup>
const folderMain = ref()

watch(
  () => folderMain.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <ul
    v-for="folder in defaultFolders()" :key="folder.key"
    class="menu h-inherit !w-full mx-0 z-0 px-0 **:text-3 **:[&_svg]:shrink-0"
  >
    <li class="flex gap-3 !w-full">
      <details
        open
        @toggle="folderMain = $event.newState"
      >
        <summary class="capitalize flex gap-3 overflow-auto w-full after:hidden items-center hover:bg-b2/60 pr-2">
          <icon
            :name="folder.icon"
            class="size-4 shrink-0"
          />
          <span class="w-full truncate"> {{ folder.name }}</span>
          <PlusMinusExpand :check="folderMain == 'open' ? true : false" />
        </summary>
        <ul>
          <SubTree :folder="folder" />
        </ul>
      </details>
    </li>
  </ul>
</template>

<style scoped></style>
