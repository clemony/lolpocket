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
const isButtonHovered = ref()
const previousIndex = ref(0)
const totalTranslateY = ref(0)
const transitionName = ref('pocket-move-down')

watch(
  () => route.path, // Watch the value, not the ref itself
  (newRoute) => {
    console.log('💠 - newVal:', newRoute)
    const newIndex = model.value.findIndex(p => p.link === newRoute)
    if (newIndex === -1)
      return
    const oldIndex = previousIndex.value
    const diff = newIndex - oldIndex
    totalTranslateY.value += diff * 30
    transitionName.value = newIndex > previousIndex.value ? 'pocket-move-up' : 'pocket-move-down'
    previousIndex.value = newIndex
  },
)

watch(
  () => totalTranslateY.value,
  (newVal) => {
    if (newVal) {
      emit('update:translate', `translateY(${totalTranslateY.value}%)`)
    }
  },
)

const { arrowup, arrowdown } = useMagicKeys()

watch(arrowup, (v) => {
  if (v) {
    const index = model.value.findIndex(p => p.link === route.path)
    if (index == 0) {
      navigateTo(model.value[3].link)
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
  ss.isSidebarOpen = false
  ss.sidebarDisabled = true
  navigateTo(page.value.link)
}
</script>

<template>
  <li :key="page.name" class="h-18 group ">
    <label :ref="page.buttonRef" v-tippy="page.name" for="pocket-page" class=" !pointer-events-auto group timeline-middle cursor-pointer sidebar-button **:text-nc" @click.prevent="handleClick()">
      <input
        type="radio"
        name="pocket-page"
        :value="page.link"
        class="hidden peer" />
      <div class="size-fit rounded-full bg-b1 pointer-events-none **:pointer-events-none">
        <div class="!size-10 rounded-full shadow-sm bg-neutral/40    transition-all duration-700  bg-b3 group-hover:!bg-neutral/70    z-1 [&_svg]:!text-nc" :class="{ 'drop-shadow-sm  scale-115': route.path == page.link }">

          <div class="grid place-items-center size-full rounded-full relative z-0 !overflow-hidden">

            <Transition :name="transitionName" mode="out-in">
              <div v-if=" route.path == page.link" class="size-10 pointer-events-none bg-neutral z-10 absolute" />
            </Transition>

            <component :is="icon" v-if="match && icon && icon != null" class="size-8 z-20 !text-nc dst" />

            <LittleIcon v-else-if="!match || icon == null" :icon="page.icon" class="size-4.5 z-20 !text-nc dst " />
          </div>
        </div>
      </div>
    </label>
  </li>
</template>

<style scoped>

</style>