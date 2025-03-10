<script lang="ts" setup>
import type { GridApi } from 'ag-grid-community'

definePageMeta({
  title: 'All',
  // header: 'custom',
  background: 'b2',

})

const route = useRoute()

const pageValue = ref('/')

const us = useUiStore()

onMounted (() => {
  pageValue.value = route.path
})
</script>

<template>
  <NuxtLayout
    name="header-layout" class="flex w-full h-full gap-6 pl-14 pr-4 *:pt-[6.5vh] z-10" :class="{ 'pl-4': !us.sidebarExpanded }">
    <div class="tabs relative justify-end  tabs-lift w-full h-full tabs-xl max-h-[89vh] h-[89vh] min-h-[89vh] drop-shadow-[1px_2px_2px_#00000010] group/tab">
      <div class="tab-content" />

      <template v-for="page in defaultFolders" :key="page.name">
        <input
          :id="page.link"
          v-model="pageValue" name="pocket-tabs" type="radio" :value="page.link"
          role="tab"
          :aria-label="page.name"
          class="tab tab-title not-checked:!border-b-transparent   w-49 -ml-1  font-semibold capitalize text-3 text-center " :class="{ 'group-last/tab:[--tab-corner-position:bottom-left]': route.path == '/pockets/archive' }" @click="navigateTo(page.link)" />

        <div class="tab-content    bg-b1 border-b3 p-0 size-full rounded-tl-box  overflow-hidden " :class="{ 'rounded-tr-none': route.path == `/pockets/archive` }">
          <LazyNuxtPage />
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
