<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const ss = useSidebarStore()
const route = useRoute()

const pocket = ref(getPocket(route.params.pocketKey))
const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)

const tabValue = ref('/')

const pages = computed (() => {
  return getPocketLinks(pocket.value)
})

const isLoading = ref(false)
useRuntimeHook('page:loading:start', () => {
  isLoading.value = true
  console.log('💠 - useRuntimeHook - loading:', 'loading')
})

useRuntimeHook('page:loading:end', () => {
  isLoading.value = false
  console.log('💠 - useRuntimeHook - loading:', 'loaded')
})

onMounted (() => {
  tabValue.value = route.path
})
</script>

<template>
  <div class=" grid  size-full bg-b2/40 gap-6 @container/main">
    <div class="size-full  pt-[6.4vh]  overflow-hidden px-14">
      <div class="breadcrumbs text-2 font-medium tracking-tight pl-3.5 mb-8">
        <ul class="flex items-center **:[&_li]:before:!hidden dst">
          <li>
            <NuxtLink to="/pockets">
              <span class="inline-flex items-center gap-2.5 capitalize"> <icon name="formkit:folder" class="size-4 shrink-0" />{{ pocket.location.folder }} Folder </span>
            </NuxtLink>
          </li>
          <li class="before:!opacity-100 before:dst">
            <span class="inline-flex items-center !gap-2.5 capitalize">
              <icon name="teenyicons:folder-outline" class="shrink-0" />
              {{ pocket.name }}
            </span>
          </li>
        </ul>
      </div>
      <!-- before:absolute before:w-full  before:top-14 before:bg-b1 before:border-b3 before:h-[82.4vh] before:border before:border-b3 before:rounded-xl  -->
      <div class=" size-full relative drop-shadow-[1px_2px_2px_#00000010] ">
        <div class="tabs tabs-lift size-full tabs-xl max-h-[82.5vh] drop-shadow-[1px_2px_2px_#00000010] ">
          <div class="tab dst !overflow-visible @max-[750px]/main:w-54:after:min-w-64  pr-6 @min-[751px]/main:after:min-w-40 !border-b-transparent relative items-center justify-start -ml-4" role="tab">
            <div class="absolute h-full @min-[751px]/main:w-80 @max-[750px]/main:w-44 bottom-3.5  flex gap-4 ">
              <LazyPopover>
                <PopoverTrigger class="group  !cursor-pointer  items-start flex aspect-square size-10  rounded-full !pointer-events-auto shadow-sm !drop-shadow-none  bg-gradient-to-br from-neutral/60 to-neutral grid place-items-center">
                  <PocketIcon :image="pocket.icon" class="size-10 pointer-events-none group-hover:opacity-0 group-data-[state=open]:opacity-0 tldr-30" />
                  <icon name="ph:gear-six-fill" class="size-5 text-nc absolute opacity-0  group-hover:opacity-85  transition-all top-2.5 duration-300 group-data-[state=open]:opacity-100" />
                </PopoverTrigger>
                <LazyIconPopover :pocket="pocket" />
              </LazyPopover>
              <div class="pt-2 !leading-none truncate !text-8 capitalize  !opacity-100 tracking-tight text-left !drop-shadow-none  font-semibold !text-bc ">
                {{ route.name.toString() }}
              </div>
            </div>
          </div>
          <div class="tab-content  " />

          <template v-for="tab in pages" :key="tab.name">
            <input
              :id="tab.link"
              v-model="tabValue" name="pocket-tabs" type="radio" :value="tab.link"
              role="tab"
              :aria-label="tab.name"
              class="tab tab-title not-checked:!border-b-transparent   @min-[921px]/main:w-49 -ml-1  @min-[920px]/main:w-32 font-semibold capitalize text-3 text-center " @change="navigateTo(tab.link)" />

            <div class="tab-content  bg-b1 border-b3 p-0 size-full rounded-tl-box  overflow-hidden ">
              <LazyNuxtPage
                :selected-runes="selectedRuneSet"
                :pocket="pocket"
                :transition="{
                }" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
