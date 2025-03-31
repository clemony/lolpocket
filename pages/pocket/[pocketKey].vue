<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const isShow = ref(false)
const quote = ref(null)
onMounted (async () => {
  quote.value = getQuote()
})

const route = useRoute()

const pocket = ref(getPocket(route.params.pocketKey))

const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)
</script>

<template>
  <NuxtLayout name="right-bar-layout">
    <template #page>
      <NuxtLayout
        name="header-layout" class=" grid  z-10 size-full gap-6 @container/main    " :class="{ 'pt-0': route.name == 'items', 'pt-17': route.name == 'card' }">
        <template #crumb>

<ItemCrumbMenu   v-if="route.name == 'items'" :pocket="pocket"  />


          <Motion
            v-if="isShow && route.name == 'champions'" as="p" class="w-fit text-nowrap overflow-x-hidden text-left flex justify-start items-center font-light mb-px  italic text-1"
            :initial="{ opacity: 0, translate: '(0 -5%)' }"
            :animate="{ opacity: 1, translate: '(0 0)' }"
            :transition="{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
              duration: 0.5 }">
            {{ quote }}
          </Motion>

          <RunePanelMenu  v-if="route.name == 'runes'"  :pocket="pocket" />
        </template>

        <LazyNuxtPage
          :selected-runes="selectedRuneSet"
          :pocket="pocket"
          :quote="quote"
          @update:is-show="e => isShow = e" />
      </NuxtLayout>
    </template>
    <PocketRightbar :pocket="pocket" />
  </NuxtLayout>
</template>
