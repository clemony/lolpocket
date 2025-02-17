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
    runeSet.value.primary.path = selectedPrimary.value
    runeSet.value.primary.runes[0] = createDefaultRune()
    if (newVal == selectedSecondary.value) {
      const index = runePaths.value.findIndex(path => path.name == selectedPrimary.value)

      selectedSecondary.value = runePaths.value[index == 4 ? 0 : index + 1].name
      runeSet.value.secondary.path = selectedSecondary.value
    }
  },
)

const tabListClass = 'bg-b1/45  shadow-smooth h-18 w-120 justify-evenly gap-5  overflow-hidden rounded-xl border border-b1/20 py-3  z-20 absolute flex items-center '

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

const runeWatcher = []

function handleRunes(slot, rune) {
  runeSet.value.secondary.runes[slot] = rune
  const index = runeWatcher.findIndex(slotNum => slotNum == slot)

  if (index > -1) {
    runeWatcher.splice(index, 1)
    runeWatcher.push(slot)
  }
  else {
    runeWatcher.push(slot)
  }
  // push()
  if (runeWatcher.length > 2) {
    runeSet.value.secondary.runes[runeWatcher[0]] = null
    runeWatcher.splice(0, 1)
  }
  console.log('💠 - runeWatcher:', runeWatcher)
}
</script>

<template>
  <div class="flex gap-18 px-12">
    <div
      class="flex flex-col gap-8 **:select-none"
      :data-path="selectedPrimary"
    >
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in"
      >
        <div :key="selectedPrimary">
          <div class="flex items-center gap-8 leading-none">
            <h1 class="tracking-tight transition-all duration-300">
              {{ selectedPrimary }}
            </h1>
          </div>
        </div>
      </Transition>
      <div class="shadow-smooth relative h-18 w-120 rounded-xl">
        <div
          class="absolute z-0 size-full rounded-xl"
          :class="selectedPrimary.toLowerCase()"
          :data-path="selectedPrimary"
        />

        <div :class="tabListClass">
          <template
            v-for="path in runePaths"
            :key="path.name"
          >
            <label
              v-if="path.name != 'empty'"
              v-tippy="path.name.replace(/^([a-z])/, '\U$1')"
              class="grid aspect-square size-14 place-items-center rounded-full"
              :class="{
                'bg-b1/80 shadow-sm shadow-black/5 backdrop-blur-md duration-500': path.name == selectedPrimary,
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
                class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
                :class="{
                  'brightness-100 grayscale-0': path.name == selectedPrimary,
                }"
              />
            </label>
          </template>
        </div>
      </div>

      <PocketRuneSelect
        path-set="p"
        :rune-set="runeSet"
        :pocket="pocket"
        :model-value="selectedPrimary"
      />

      <div class="flex gap-10 w-full">
      <button
        v-tippy="'New Set'"
        class="grid p-i-c h-38 btn btn-ghost grow !rounded-xl "
      >
        <icon name="add" class="size-7 dst" />
      </button>

          <button
        v-tippy="'New Set'"
        class="grid p-i-c h-38 btn grow btn-ghost  !rounded-xl "
      >
        <icon name="trash" class="size-7 dst" />
      </button>
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in"
      >
        <div :key="selectedSecondary">
          <div class="flex items-center gap-8 leading-none">
            <h1 class="tracking-tight transition-all duration-300">
              {{ selectedSecondary }}
            </h1>
          </div>
        </div>
      </Transition>
      <div class="shadow-smooth relative h-18 w-120 rounded-xl">
        <div
          class="absolute z-0 size-full rounded-xl"
          :class="selectedSecondary.toLowerCase()"
          :data-path="selectedSecondary"
        />

        <div :class="tabListClass">
          <template
            v-for="path in secondaryPaths"
            :key="path.name"
          >
            <label
              v-if="path.name != 'empty'"
              :key="path.name"
              class="grid aspect-square size-14 place-items-center rounded-full"
              :class="{
                'bg-b1/80 shadow-sm shadow-black/5 backdrop-blur-md duration-500': path.name == selectedSecondary,
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
                class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
                :class="{
                  'brightness-100 grayscale-0': path.name == selectedSecondary,
                }"
              />
            </label>
          </template>
        </div>
      </div>
      <PocketRuneSelect
        path-set="s"
        :rune-set="runeSet"
        :pocket="pocket"
        :model-value="selectedSecondary"
        @update:runes="handleRunes($event.rune, $event.index)"
      />

      <RuneShards :pocket="pocket" :rune-set="runeSet" />
    </div>
  </div>
</template>

<style>

</style>
