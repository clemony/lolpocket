<script setup lang="ts">
import { pathDescriptions } from 'shared/data/runes/pathDescriptions'

const ds = useDataStore()

const runePaths = ref(ds.paths)
console.log('💠 - runePaths:', runePaths)

const selectedPrimary = ref('Resolve')
// console.log('💠 - selectedPrimary:', selectedPrimary)

const secondaryPaths = computed(() => {
  return runePaths.value.filter(path => path.name != selectedPrimary.value)
})

watch(
  () => selectedPrimary.value,
  (newVal) => {
    if (newVal == selectedSecondary.value) {
      const index = runePaths.value.findIndex(path => path.name == selectedPrimary.value)

      selectedSecondary.value = runePaths.value[index == 4 ? 0 : index + 1].name
    }
  },
)

const selectedSecondary = ref('Inspiration')

const tabListClass = 'bg-b1/45  shadow-smooth h-18 w-120 justify-evenly gap-5  overflow-hidden rounded-xl border border-b1/20 py-3  z-20 absolute flex items-center '

const a = computed(() => {
  return pathDescriptions.find(path => path.name == selectedPrimary.value)
})

const b = computed(() => {
  return pathDescriptions.find(path => path.name == selectedSecondary.value)
})
</script>

<template>
  <main>
    <Header class="flex">
      <h1>Runes</h1>

      <div class="ml-6 flex gap-2 pt-px">
        <icon
          name="ph:mouse-right-click-fill"
          class="mt-px size-4.5"
        />
        rune to open details in sidebar.
      </div>
    </Header>
    <LayoutSpacer class="h-46" />
    <div class="flex gap-16 px-12">
      <div
        class="flex flex-col gap-8"
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
              <span class="pt-0.5 lowercase">{{ a.tag }}</span>
            </div>
            <p class="text-4 mt-2.5 font-serif">
              {{ a.description }}.
            </p>
          </div>
        </Transition>
        <div class="shadow-smooth relative h-18 w-120 rounded-xl">
          <div
            class="gradient absolute z-0 size-full rounded-xl"
            :data-path="selectedPrimary"
          />

          <div :class="tabListClass">
            <label
              v-for="(path, index) in runePaths"
              :key="path.name"
              class="grid aspect-square size-14 place-items-center rounded-full"
              :class="{
                'bg-b1/70 shadow-sm shadow-black/5 backdrop-blur-sm duration-500': path.name == selectedPrimary,
              }"
            >
              <input
                v-model="selectedPrimary"
                type="radio"
                :value="path.name"
                class="hidden"
                name="selected-primary"
              />
              <LoadImg
                :url="`/img/runes/${path.name}.webp`"
                :alt="`${path.name} icon`"
                class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
                :class="{
                  'brightness-100 grayscale-0': path.name == selectedPrimary,
                }"
              />
            </label>
          </div>
        </div>

        <RuneSelect v-model:model-value="selectedPrimary" />
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
              <span class="pt-0.5 lowercase">{{ b.tag }}</span>
            </div>
            <p class="text-4 mt-2.5 font-serif">
              {{ b.description }}.
            </p>
          </div>
        </Transition>
        <div class="shadow-smooth relative h-18 w-120 rounded-xl">
          <div
            class="gradient absolute z-0 size-full rounded-xl"
            :data-path="selectedSecondary"
          />

          <div :class="tabListClass">
            <label
              v-for="(path, index) in secondaryPaths"
              :key="path.name"
              class="grid aspect-square size-14 place-items-center rounded-full"
              :class="{
                'bg-b1/70 shadow-sm shadow-black/5 backdrop-blur-sm duration-500': path.name == selectedSecondary,
              }"
            >
              <input
                v-model="selectedSecondary"
                type="radio"
                :value="path.name"
                class="hidden"
                name="selected-secondary"
              />
              <LoadImg
                :url="`/img/runes/${path.name}.webp`"
                :alt="`${path.name} icon`"
                class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 [&_img]:drop-shadow-sm"
                :class="{
                  'brightness-100 grayscale-0': path.name == selectedSecondary,
                }"
              />
            </label>
          </div>
        </div>
        <RuneSelect
          v-model:model-value="selectedSecondary"
          :path-set="2"
        />
      </div>
    </div>
  </main>
</template>

<style>
  .gradient {
  background: linear-gradient(
    137deg,
    rgba(231, 207, 120, 0.7) 0%,
    rgba(220, 124, 124, 0.7) 20%,
    rgba(178, 164, 221, 0.7) 40%,
    rgba(175, 212, 150, 0.7) 60%,
    rgba(165, 226, 229, 0.7) 80%
  );
  background-size: 550%;
}

/* .border-gradient {
    border-image: linear-gradient(
            to right,
            var(--b1),
            rgba(0, 0, 0, 0),
            var(--b1)
        )
        2;
}
 */

.empty {
  background: linear-gradient(
    137deg,
    rgba(190, 190, 190, 1) 0%,
    rgba(193, 193, 193, 0.8) 10%,
    rgba(233, 233, 233, 1) 75%,
    rgba(252, 252, 252, 0) 90%
  );
}

[data-path=''],
[data-path='Precision'],
[data-path='Domination'],
[data-path='Sorcery'],
[data-path='Resolve'],
[data-path='Inspiration'] {
  transition: all 0.5s ease-in-out;
}

[data-path='Precision'] {
  background-position: 0%;
}

[data-path='Domination'] {
  background-position: 20%;
}

[data-path='Sorcery'] {
  background-position: 42%;
}

[data-path='Resolve'] {
  background-position: 83%;
}

[data-path='Inspiration'] {
  background-position: 100%;
}
</style>
