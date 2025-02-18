<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const route = useRoute()
const pocket = ref(getPocket(route.params.pocketKey))

const ss = useSidebarStore()

const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)

const component = shallowRef(pocketComponents[0].compRef)

/* const hoverStates = computed(() =>
  pocketComponents.map(el => ({
    ref: el.ref,
    buttonRef: el.buttonRef,
    title: el.title,
    isLinkHovered: el.linkRef ? useElementHover(computed(() => el.linkRef.value)) : ref(false),
    isButtonHovered: el.buttonRef ? useElementHover(computed(() => el.buttonRef.value)) : ref(false),
  })),
) */

/* const hovered = computed(() => {
  return hoverStates.value.find(el => el.isLinkHovered.value) || null
})

const isButtonHovered = computed(() => {
  const hovered = hoverStates.value.find(el => el.isButtonHovered.value)
  return hovered ? hovered.title : null
}) */

const isButtonHovered = ref()
const previousIndex = ref(0)

const totalTranslateY = ref(0)

const transitionName = ref('pocket-move-down')

watch(
  () => component.value, // Watch the value, not the ref itself
  (newComp) => {
    console.log('💠 - newVal:', newComp)
    const newIndex = pocketComponents.findIndex(c => c.compRef === newComp)
    if (newIndex === -1)
      return
    const oldIndex = previousIndex.value
    const diff = newIndex - oldIndex
    totalTranslateY.value += diff * 30
    transitionName.value = newIndex > previousIndex.value ? 'pocket-move-up' : 'pocket-move-down'
    previousIndex.value = newIndex
  },
)

const translateY = computed(() => {
  return `translateY(${totalTranslateY.value}%) `
})
</script>

<template>
  <main class="h-screen w-full grid grid-cols-[66px_auto] ">
    <div class="h-screen w-full relative">
      <PocketBar :pocket="pocket" @update:component="(e) => component = e">
        <ul class="timeline timeline-vertical justify-center items-center relative self-center w-fit py-0 px-2 rounded-full bg-b2 border-b3 shadow-sm ">
          <div class="absolute  w-1  bg-b3/30 h-4/5 overflow-hidden justify-center">
            <div class="size-full  duration-1000 transition-all " :style="{ transform: translateY }">
              <div
                class="size-5 bg-neutral shadow-[0px_0px_30px_5px_var(--color-bc)]"
              >
              </div>
            </div>
          </div>
          <li v-for="comp in pocketComponents" :key="comp.title" class="h-18 group ">
            <label :ref="comp.buttonRef" for="pocket-page" class=" !pointer-events-auto timeline-middle cursor-pointer" @click="component = comp.compRef">
              <input
                type="radio"
                name="pocket-page"
                :value="comp.compRef"
                class="hidden peer"
                @change="component = comp.compRef; console.log('change:', component)"
              />
              <div class="size-fit rounded-full bg-b1 pointer-events-none">
                <div class="!size-10 rounded-full shadow-sm   transition-all duration-700  bg-b3 group-hover:bg-neutral/40    z-1 [&_svg]:!text-nc" :class="{ 'bg-neutral/40': isButtonHovered == comp.buttonRef, 'drop-shadow-sm  scale-115': component == comp.compRef }">

                  <div class="grid place-items-center size-full rounded-full relative z-0 !overflow-hidden">

                    <Transition :name="transitionName" mode="out-in">
                      <div v-if="component == comp.compRef" class="size-10 pointer-events-none bg-neutral z-10 absolute" />
                    </Transition>

                    <i-no-champ v-if="comp == pocketComponents[0]" class="fill-nc dst !size-7  z-20  text-nc" />
                    <i-rune-icon v-else-if="comp == pocketComponents[2]" class="fill-nc size-6 dst  z-20 " />
                    <icon v-else :name="comp.icon" class="size-5.5 z-20 text-nc dst" :class="{ '!size-5': comp == pocketComponents[1] }" />
                  </div>
                </div>
              </div>
            </label>
          </li>
        </ul>
      </PocketBar>
    </div>

    <transition-slide class="w-full min-w-full max-w-full ">
      <component :is="component" :key="component.title" :selected-runes="selectedRuneSet" :pocket="pocket" />
    </transition-slide>
  </main>
</template>

<style>

</style>
