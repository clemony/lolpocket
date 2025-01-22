<script lang="ts" setup>
  const ps = usePocketStore()

  const folderMain = ref()

  const folderSub = ref()

  watch(
    () => folderMain.value,
    (newVal) => {
      console.log('💠 - newVal:', newVal)
    }
  )
</script>

<template>
  <ul
    v-for="folder in defaultFolders()"
    class="menu !w-full mx-0 z-0 pr-0 **:text-3 **:[&_svg]:shrink-0">
    <li class="flex gap-3 !w-full">
      <details
        open
        @toggle="folderMain = $event.newState">
        <summary class="capitalize flex gap-3 overflow-auto w-full after:hidden items-center hover:bg-b2/60 pr-2">
          <icon
            :name="folder.icon"
            class="size-4 shrink-0" />
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
