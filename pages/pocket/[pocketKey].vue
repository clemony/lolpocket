<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const us = useUiStore()
const route = useRoute()

definePageMeta({
  background: 'b2',
})

const pocket = ref(getPocket(route.params.pocketKey))
const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)

const tabValue = ref('/')

const pages = computed (() => {
  return getPocketLinks(pocket.value)
})

const isLoading = ref(false)
useRuntimeHook('page:loading:start', () => {
  isLoading.value = true
})

useRuntimeHook('page:loading:end', () => {
  isLoading.value = false
})

onMounted (() => {
  tabValue.value = route.path
})
</script>

<template>
  <NuxtLayout
    name="header-layout" class=" grid *:pt-[6.5vh] z-10 size-full gap-6 @container/main    pl-14 pr-4" :class="{ 'pl-4': !us.sidebarExpanded }">
    <template #header-icon>
      <LazyPopover>
        <PopoverTrigger class="group  !cursor-pointer  items-start flex aspect-square size-10  rounded-full !pointer-events-auto shadow-sm !drop-shadow-none  bg-gradient-to-br from-neutral/60 to-neutral grid place-items-center">
          <PocketIcon :image="pocket.icon" class="size-10 pointer-events-none group-hover:opacity-0 group-data-[state=open]:opacity-0 tldr-30" />
          <icon name="ph:gear-six-fill" class="size-5 text-nc absolute opacity-0  group-hover:opacity-85  transition-all top-2.5 duration-300 group-data-[state=open]:opacity-100" />
        </PopoverTrigger>
        <LazyIconPopover :pocket="pocket" />
      </LazyPopover>
    </template>

    <div class=" size-full relative drop-shadow-[1px_2px_2px_#00000010] ">
      <div class="tabs tabs-lift size-full tabs-xl max-h-[89vh] drop-shadow-[1px_2px_2px_#00000010] justify-end group/tab">
        <div class="tab dst !border-b-transparent grow justify-start " role="tab">
        </div>
        <div class="tab-content  " />

        <template v-for="tab in pages" :key="tab.name">
          <input
            :id="tab.link"
            v-model="tabValue" name="pocket-tabs" type="radio" :value="tab.link"
            role="tab"
            :aria-label="tab.name"
            class="tab tab-title not-checked:!border-b-transparent  w-49 -ml-1   font-semibold capitalize text-3 text-center " :class="{ 'group-last/tab:[--tab-corner-position:bottom-left]': tabValue == `/pocket/${pocket.key}/complete` }" @change="navigateTo(tab.link)" />

          <div class="tab-content  bg-b1 border-b3 p-0 size-full rounded-tl-box  overflow-hidden " :class="{ 'rounded-tr-none': tabValue == `/pocket/${pocket.key}/complete` }">
            <LazyNuxtPage
              :selected-runes="selectedRuneSet"
              :pocket="pocket"
              :transition="{
              }" />
          </div>
        </template>
      </div>
    </div>
  </NuxtLayout>
</template>
