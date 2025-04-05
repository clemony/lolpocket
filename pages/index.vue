<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { vScroll } from '@vueuse/components'
import { useScroll } from '@vueuse/core'

const emit = defineEmits(['update:open'])

definePageMeta({
  header: 'custom',
})

const us = useUiStore()
const shadow = ref(false)

function onScroll(state: UseScrollReturn) {
  // console.log(state) // {x, y, isScrolling, arrivedState, directions}
  state.y.value > 0 ? (shadow.value = true) : (shadow.value = false)
}

const etc = ref(false)
const steps = ref(null)

const { top } = useElementBounding(steps)
const stepTop = ref(top)

const el = ref<HTMLElement | null>(null)

const { x, y, isScrolling, arrivedState, directions } = useScroll(el)

const direction = ref('')
watch(
  () => directions.bottom,
  (newVal) => {
    if (newVal) {
      direction.value = 'right'
    }
  },
)

watch(
  () => directions.top,
  (newVal) => {
    if (newVal) {
      direction.value = 'left'
    }
  },
)

onMounted(() => {
  emit('update:open', false)
})

onBeforeMount(() => {
  if (us.sidebarExpanded) {
    us.triggerSidebar = true
  }
})
</script>

<template>
  <NuxtLayout
    ref="el"
    name="header-layout"
    class="relative *:pt-[0vh] size-full overflow-y-scroll !border-none outline-hidden">
    <Hero />
    <div
      v-scroll="onScroll"
      class="absolute inset-0 top-full z-10 w-full">
      <div
        ref="steps"
        class="size-full relative">
        <HomeSteps
          ref="steps"
          :shadow="shadow" />

        <HomeEtc :element="el" />
        <UserReviews />
        <SiteMap />
        <HomeFooter />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
