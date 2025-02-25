<script lang="ts" setup>
import { pathDescriptions } from 'shared/data/runes/pathDescriptions'

const props = defineProps<{
  runeSet?: RuneSet
  pocket?: pocket
}>()

const ds = useDataStore()

const pocket = ref(props.pocket)
const runeSet = ref<RuneSet>(pocket.value.runes.sets[0])

const runePaths = ref(ds.paths)
const selectedPrimary = ref(props.runeSet.primary.path || 'Resolve')

const secondaryPaths = computed(() => {
  return runePaths.value.filter(path => path.name != selectedPrimary.value)
})

const selectedSecondary = ref(props.runeSet.secondary.path || 'Inspiration')

watch(
  () => selectedSecondary.value,
  (newVal) => {
    if (newVal) {
      resetSecondaryPath(runeSet.value)
      runeSet.value.secondary.path = newVal
    }
  },
)

watch(
  () => props.runeSet,
  (newVal) => {
    runeSet.value = newVal
    selectedPrimary.value = newVal.primary.path ?? 'Resolve'
    selectedSecondary.value = newVal.secondary.path ?? 'Inspiration'
  },
)

watch(
  () => selectedPrimary.value,
  (newVal) => {
    if (newVal){
      resetPrimaryPath(runeSet.value)
    if (newVal == selectedSecondary.value) {
      const index = runePaths.value.findIndex(path => path.name == selectedPrimary.value)

      resetSecondaryPath(runeSet.value)
      selectedSecondary.value = runePaths.value[index == 4 ? 0 : index + 1].name
      runeSet.value.secondary.path = selectedSecondary.value

    }
    runeSet.value.primary.path = selectedPrimary.value
  }
  },
)

const tabListClass = ' h-18 w-120 justify-start gap-5  overflow-hidden rounded-xl py-3  z-20 absolute flex items-center '

const a = computed(() => {
  return pathDescriptions.find(path => path.name == selectedPrimary.value)
})

const b = computed(() => {
  return pathDescriptions.find(path => path.name == selectedSecondary.value)
})

onMounted (async () => {
  if (props.runeSet) {
    runeSet.value = props.runeSet ? props.runeSet : props.pocket.runes.sets[0]
    const a = computed (() => {
      return props.runeSet.primary != null && props.runeSet.primary.path != null ? props.runeSet.primary.path : 'Resolve'
    })
    selectedPrimary.value = a.value
    selectedSecondary.value == props.runeSet.secondary.path ? props.runeSet.secondary.path : 'Inspiration'
  }
})


</script>

<template>
  <div class="flex gap-18 px-12 pt-[9vh]">
    <div
      class="flex flex-col **:select-none"
      :data-path="selectedPrimary"
    >

    <div class="ml-10 flex flex-col gap-2 ">
        <div :key="selectedPrimary">
          <div class="flex items-center gap-8 leading-none">
            <h1 class="tracking-tight text-9 dst  font-serif font-bold transition-all duration-300">
              {{ selectedPrimary }}
            </h1>
          </div>
        </div>

      <div class=" relative h-18  rounded-xl">
        <div
          class="absolute z-0 size-full rounded-xl"
          :class="selectedPrimary.toLowerCase()"
          :data-path="selectedPrimary"
        />


        <div :class="tabListClass">
  
            <label
            v-for="path in runePaths"
            :key="path.name"
              v-tippy="path.name.replace(/^([a-z])/, '\U$1')"
              class="grid border border-transparent aspect-square size-14 place-items-center rounded-full"
              :class="{
                'bg-b1 shadow-warm-2 drop-shadow-xs border-b2 inset-shadow-xs  p-0 duration-500': path.name == selectedPrimary,              'hidden': path.name == 'empty',
              }"
            >
              <input
                v-model="selectedPrimary"
                type="radio"
                :value="path.name"
                class="hidden"
                name="selected-primary"
              />
              <img
                :src="`/img/runes/${path.name}.webp`"
                :alt="`${path.name} icon`"
                class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 dst shrink-0"
                :class="{
                  'brightness-100 grayscale-0': path.name == selectedPrimary,
                }"
              />
            </label>
       
      </div>
    
      </div>


</div>

      <PocketRuneSelect
        path-set="p"
        :rune-set="runeSet"
        :pocket="pocket"
        :model-value="selectedPrimary"
      />

  
    </div>

    <div class="flex flex-col ">
    <div class="ml-10 flex flex-col gap-2 ">
        <div :key="selectedSecondary">
          <div class="flex items-center gap-8 leading-none ">
            <h1 class="tracking-tight  text-9 dst font-serif font-bold  transition-all duration-300">
              {{ selectedSecondary }}
            </h1>
          </div>
        </div>

      <div class=" relative h-18 w-120 rounded-xl">
        <div
          class="absolute z-0 size-full rounded-xl"
          :class="selectedSecondary.toLowerCase()"
          :data-path="selectedSecondary"
        />

 
          <div :class="tabListClass">
    
            <label
            v-for="path in secondaryPaths"
            :key="path.name"
              class="grid border border-transparent aspect-square size-14 place-items-center rounded-full"
                :class="{
                'bg-b1 shadow-warm-2 drop-shadow-xs border-b2 inset-shadow-xs  p-0 duration-500': path.name == selectedSecondary,              'hidden': path.name == 'empty',
              }"
            >
              <input
                v-model="selectedSecondary"
                type="radio"
                :value="path.name"
                class="hidden"
                name="selected-secondary"
              />
              <img
                :src="`/img/runes/${path.name}.webp`"
                :alt="`${path.name} icon`"
                class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 dst"
                :class="{
                  'brightness-100 grayscale-0': path.name == selectedSecondary,
                }"
              />
            </label>
     
        </div>
      
      </div>


    </div>
      <PocketRuneSelect
        path-set="s"
        :rune-set="runeSet"
        :pocket="pocket"
        :model-value="selectedSecondary"
      />

      <div class="mt-6 -ml-8">
      <RuneShards :pocket="pocket" :rune-set="runeSet" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
