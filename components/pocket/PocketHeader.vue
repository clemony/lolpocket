<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
}>()

const ts = useTempStore()

const pocket = ref(props.pocket)

/* const folder = computedAsync(() => {
  return pocket.value.folder
})
 */
const name = computedAsync(() => {
  return pocket.value.name
})

function handleDrawer() {
  ts.selectedPocket = pocket
  console.log('💠 - handleDrawer - pocket:', pocket)

  useDrawerToggle('editPocket')
}
</script>

<template>
  <header class="w-full !h-[var(--page-header-height)]  flex flex-nowrap shrink-0 flex-col  gap-2 py-2 justify-end items-start">
    <div class="breadcrumbs text-2 pl-0.25">
      <ul class="flex items-center ml-0.5">
        <li>
          <a>
            <span class="inline-flex items-center gap-2.5"> <icon name="formkit:folder" />Pocket Folders </span></a>
        </li>
        <li>
          <span class="inline-flex items-center !gap-2.5 capitalize">
            <icon name="teenyicons:folder-outline" />
            All
          </span>
        </li>
      </ul>
    </div>

    <Label variant="ghost" size="lg" class="group flex items-center gap-3 justify-start pl-0.5 pr-2 h-14 w-full cursor-pointer select-none">
      <input
        id="edit-pocket-drawer"
        v-model="ts.editPocketTrigger"
        type="checkbox"
        class="drawer-toggle"
      />
      <!--  <PocketIcon
        :pocket="props.pocket"
        class="size-7.25 rounded-full overflow-hidden -ml-1" /> -->
      <h1 class="!text-8 text-start drop-shadow-text w-full tracking-tight truncate  overflow-hidden">
        {{ name }}
      </h1>

      <icon name="gear" class="size-4.5 opacity-60 group-hover:opacity-100" />
    </Label>
  </header>
</template>

<style scoped></style>
