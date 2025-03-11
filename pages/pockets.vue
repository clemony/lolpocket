<script lang="ts" setup>
definePageMeta({
  title: 'All',
  background: 'b2',

})

const route = useRoute()

const pageValue = ref('/')

onMounted (() => {
  pageValue.value = route.path
})
</script>

<template>
  <NuxtLayout
    name="header-layout" class="px-4">
    <!--   delete button -->
    <template #crumb>
      <button v-if="route.path == '/pockets/trash'" class="btn  bg-domination  text-white text-2 font-medium">
        <icon name="nimbus:fire" class="size-5 text-white" />
        <span class="pt-px">Delete All</span>
      </button>
    </template>

    <!-- fake -->
    <div class="tabs relative justify-end  tabs-lift w-full h-[86vh] tabs-xl drop-shadow-[1px_2px_2px_#00000010] group/tab">
      <div class="tab-content" />

      <!-- real  -->

      <template v-for="page in defaultFolders" :key="page.name">
        <input
          :id="page.link"
          v-model="pageValue" name="pocket-tabs" type="radio" :value="page.link"
          role="tab"
          :aria-label="page.name"
          class="tab tab-title not-checked:!border-b-transparent   w-49 -ml-1  font-semibold capitalize text-3 text-center " :class="{ 'group-last/tab:[--tab-corner-position:bottom-left]': route.path == '/pockets/archive' }" @click="navigateTo(page.link)" />

        <div class="tab-content pockets-grid    bg-b1 border-b3 p-0 size-full rounded-tl-box  overflow-hidden " :class="{ 'rounded-tr-none': route.path == `/pockets/archive` }">
          <LazyNuxtPage />
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
