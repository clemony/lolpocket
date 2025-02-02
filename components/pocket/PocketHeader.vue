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
  <header class="w-full   flex flex-nowrap shrink-0 flex-col mb-4  py-2 justify-end items-start gap-1.5">
    <div class="breadcrumbs text-2 font-medium tracking-tight">
      <ul class="flex items-center ">
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
    <DropdownMenu class="w-full">
      <DropdownMenuTrigger class="group w-full">
        <button class="dropdown-trigger-button group pr-2">
          <h1 class="!text-8 text-start dst tracking-tight !leading-none truncate  overflow-hidden capitalize grow">
            {{ name }}
          </h1>

          <ExpandIndicator />
        </button>
      </DropdownMenuTrigger>

      <LazyDropdownMenuContent align="end" :align-offset="4" :side-offset="-36" class="w-96 !shadow-b3/60 pb-2">
        <PocketDropdownMenu :pocket="pocket" />
      </LazyDropdownMenuContent>
    </DropdownMenu>

    <div v-if="pocket.tags" class=" w-full text-2 italic font-medium">
      <p class="flex gap-2">
        <span v-for="tag in pocket.tags" :key="tag">#{{ tag }}</span>
      </p>
    </div>
  </header>
</template>

<style scoped></style>
