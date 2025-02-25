<script lang="ts" setup>
const route = useRoute()
const ss = useSidebarStore()
const as = useAccountStore()

definePageMeta({
  title: 'board',
  name: 'board',
})

const tabs = ref('menu')
</script>

<template>
  <NuxtLayout name="full-nav" class="pt-0" :default-size="22">
    <div class="h-[88.5vh] overflow-hidden  px-6 ">
      <transition-slide :offset="[-16, 0]" class="size-full">
        <LazySidebarUser v-if="tabs == 'menu'" />
      </transition-slide>
      <LazyModuleDrawer v-model:tabs="tabs" />
      <LazySummonerNotes v-model:tabs="tabs" />
    </div>
    <div class="tabs tabs-box tabs-bottom mx-auto tabs-lg bg-b2 *:!text-3 !pr-0 w-[92%]  pl-3">
      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Menu" value="menu" />

      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Modules" value="modules" @click="navigateTo('/summoner')" />

      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Notes" value="notes" />
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>