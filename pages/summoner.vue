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
  <NuxtLayout name="summoner-nav" class="pt-0">
    <div class="tabs tabs-lift tabs-bottom tabs-lg h-[90%] size-full *:!text-3 !pr-0 pt-5.5  pl-3" :class="{ '!rounded-bl-box': tabs != 'menu' }">
      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Menu" value="menu" />

      <div  class="tab-content bg-b1 overflow-hidden border-b3 p-6 size-full min-h-full">
        <transition-slide :offset="[-16, 0]" class="size-full">
          <LazySidebarUser v-if="tabs == 'menu'" />
        </transition-slide>
      </div>

      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Modules" value="modules" @click="navigateTo('/summoner')" />

      <LazyModuleDrawer v-model:tabs="tabs" />

      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Notes" value="notes" />

      <LazySummonerNotes v-model:tabs="tabs" />

      <input v-model="tabs" type="radio" name="my_tabs_4" class="tab" aria-label="Draggy" value="draggy" />

      <div class="tab-content size-full min-h-full bg b1 rounded-bl-box border-b3 p-6">
        <transition-slide :offset="[-16, 0]" class="size-full">
          <div v-if="tabs == 'draggy'" class="size-full">
            Tab content 3
          </div>
        </transition-slide>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>