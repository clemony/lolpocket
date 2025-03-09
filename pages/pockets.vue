<script lang="ts" setup>
import type { GridApi } from 'ag-grid-community'

definePageMeta({
  title: 'All',
  //header: 'custom',
  background: 'b2',

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
  <div class="flex w-full h-full bg-b2/40 gap-6 pl-2 pr-8">
    <div class="tabs relative justify-end  tabs-lift w-full h-full tabs-xl max-h-[86vh] drop-shadow-[1px_2px_2px_#00000010] ">

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
</template>

<style scoped>

</style>
