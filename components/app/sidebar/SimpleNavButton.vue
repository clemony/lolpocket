<script lang="ts" setup>
const props = defineProps<{
  modelValue: any[]
  page: any
}>()

const emit = defineEmits(['update:translate'])
const route = useRoute()
const ss = useSidebarStore()
const page = ref(props.page)

const model = ref(props.modelValue)
const previousIndex = ref(0)
const totalTranslateY = ref(0)
const transitionName = ref('pocket-move-down')

const transitionTranslateY = useTransition(totalTranslateY, {
  duration: 300, // Adjust duration for smoothness
  transition: [0.07, 1.38, 0.81, 1.26], // Easing function
})

watch(
  () => route.path,
  (newRoute) => {
    console.log('💠 - newVal:', newRoute)
    const newIndex = model.value.findIndex(p => p.link === newRoute)
    if (newIndex === -1)
      return

    const oldIndex = previousIndex.value
    const diff = newIndex - oldIndex

    totalTranslateY.value += diff * 29

    transitionName.value = newIndex > previousIndex.value ? 'pocket-move-up' : 'pocket-move-down'
    previousIndex.value = newIndex
  },
)

// Emit the smoothly transitioning value
watch(
  () => transitionTranslateY.value,
  (newVal) => {
    emit('update:translate', `translateY(${newVal}%)`)
  },
)

const { arrowup, arrowdown } = useMagicKeys()

watch(arrowup, (v) => {
  if (v) {
    const index = model.value.findIndex(p => p.link === route.path)
    if (index == 0) {
      navigateTo(model.value[3].link)
      // totalTranslateY.value = 120
    }
    else {
      navigateTo(model.value[index - 1].link)
    }
  }
})

watch(arrowdown, (v) => {
  if (v) {
    const index = model.value.findIndex(p => p.link === route.path)
    if (index == 3) {
      // totalTranslateY.value = 0
      navigateTo(model.value[0].link)
    }
    else {
      navigateTo(model.value[index + 1].link)
    }
  }
})

const regex = /^i-/

const match = computed (() => {
  return page.value.icon.match(regex)
})
const icon = computed (() => {
  return match.value ? page.value.icon : null
})

function handleClick() {
  navigateTo(page.value.link)
}
</script>

<template>
  <li :key="page.name" class="h-18 group flex items-center">
    <label :ref="page.buttonRef" v-tippy="page.name" for="pocket-page" class=" !pointer-events-auto group e cursor-pointer transition-all duration-500  **:text-nc capitalize" :class="{ 'font-semibold': route.path == page.link }" @click.prevent="handleClick()">
      <input
        type="radio"
        name="pocket-page"
        :value="page.link"
        class="hidden peer" />

      {{ page.name }}
    </label>
  </li>
</template>

<style scoped>

</style>