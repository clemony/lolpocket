<script lang="ts" setup>
import type { GridApi } from 'ag-grid-community'

definePageMeta({
  title: 'All',
})

const route = useRoute()

const pageValue = ref('/')

const icon = computed (() => {
  const a = defaultFolders.find(r => r.link == route.path)
  return a.icon
})

function getIcon() {

}
onMounted (() => {
  pageValue.value = route.path
})
</script>

<template>
  <div class="flex  size-full bg-b2/40 gap-6">
    <div class=" pt-[7.4vh] size-full px-14">
      <div class="pl-4 mb-1 dst">
        Pocket Folder
      </div>
      <div class="tabs relative  tabs-lift size-full tabs-xl max-h-[82.5vh] drop-shadow-[1px_2px_2px_#00000010] ">
        <div class="tab dst !overflow-visible  pr-6 after:min-w-80 !border-b-transparent items-start justify-start " role="tab">
          <div class="absolute pt-2   w-80 top-0 flex gap-4  justify-start flex items-center ">
            <LittleIcon :icon="icon" class="size-6 dst" />
            <div class="!leading-none truncate !text-8 capitalize  !opacity-100  tracking-tight  font-semibold !text-bc">
              {{ route.meta.title.toString() }}
            </div>
          </div>
        </div>
        <div class="tab-content  " />

        <template v-for="page in defaultFolders" :key="page.name">
          <input
            :id="page.link"
            v-model="pageValue" name="pocket-tabs" type="radio" :value="page.link"
            role="tab"
            :aria-label="page.name"
            class="tab tab-title not-checked:!border-b-transparent   w-49 -ml-1  font-semibold capitalize text-3 text-center " @click="navigateTo(page.link)" />

          <div class="tab-content  bg-b1 border-b3 p-0 size-full rounded-tl-box  overflow-hidden ">
            <LazyNuxtPage />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
