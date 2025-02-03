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

    <h1 class="!text-8 text-start dst tracking-tight !leading-none truncate  overflow-hidden capitalize grow">
      {{ name }}
    </h1>

    <div v-if="pocket.tags" class=" w-full text-2 italic font-medium">
      <p class="flex gap-2">
        <span v-for="tag in pocket.tags" :key="tag">#{{ tag }}</span>
      </p>
    </div>
  </header>
</template>

<style scoped></style>
