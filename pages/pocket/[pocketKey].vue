<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const isShow = ref(false)
const quote = ref(null)
onMounted (async () => {
  quote.value = formattedQuote()
})
/* const props = defineProps<{
pocket: pocket
}>() */
const route = useRoute()
definePageMeta({
  props: true,
  section: 'pocket',
})
const pocket = ref(getPocket(route.params.pocketKey))

const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)
</script>

<template>
  <div class="flex size-full    " >
<!--     <AppTitlebar>
      <ItemCrumbMenu v-if="route.name == 'items'" :pocket="pocket" />

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

      <RunePanelMenu v-if="route.name == 'runes'" :pocket="pocket" />
    </AppTitlebar> -->

    <PocketSidebar  />
    <LazyNuxtPage
      :selected-runes="selectedRuneSet"
      :pocket="pocket"
      :pocket-name="pocket.name"
      :quote="quote"
      @update:is-show="e => isShow = e" />
  </div>
</template>
