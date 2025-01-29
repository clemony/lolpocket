<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { vScroll } from '@vueuse/components'

const emit = defineEmits(['update:open'])

const as = useAccountStore()

onMounted(() => {
  emit('update:open', false)
})

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
</script>

<template>
  <div
    ref="el"
    v-scroll="onScroll"
    class="relative size-full overflow-y-scroll !border-none outline-hidden"
  >
    <Hero />
    <div class="absolute inset-0 top-full z-10 w-full">
      <div
        ref="steps"
        class="size-full"
      >
        <HomeSteps
          ref="steps"
          :shadow="shadow"
        />

        <HomeEtc :direction="direction" :is-scrolling="isScrolling" />
        <UserReviews />
        <SiteMap />
        <HomeFooter />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
