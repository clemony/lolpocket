<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { vScroll } from '@vueuse/components'

const emit = defineEmits(['update:open'])

const as = useAccountStore()

const HomeSteps = defineAsyncComponent(() => import('components/home/HomeSteps.vue'))
const HomeEtc = defineAsyncComponent(() => import('components/home/HomeEtc.vue'))

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
</script>

<template>
  <div
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

        <HomeEtc />

        <SiteMap />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
