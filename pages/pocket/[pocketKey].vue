<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const route = useRoute()
const pocket = ref(getPocket(route.params.pocketKey))

const selectedRuneSet = ref(pocket.value.runes.sets[0])

const component = shallowRef(pocketComponents[0].compRef)
watch(
  () => selectedRuneSet.value,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        component.value != pocketComponents[2].compRef ? component.value = pocketComponents[2].compRef : ''
      })
    }
  },
)

const isOpen = ref(false)

const hovered = ref()

const previousIndex = ref(0);

const totalTranslateY = ref(0)

const transitionName = ref("pocket-move-down"); // Default direction

watch(component, (newComp) => {
  const newIndex = pocketComponents.findIndex(c => c.compRef === newComp);
  if (newIndex === -1) return; // Safety check
  const oldIndex = previousIndex.value;
    const diff = newIndex - oldIndex;
  totalTranslateY.value += diff * 30;

  transitionName.value = newIndex > previousIndex.value ? "pocket-move-up" : "pocket-move-down";

  previousIndex.value = newIndex
});


const translateY = computed(() => {
  return `translateY(${totalTranslateY.value}%) `
})


</script>

<template>
  <main class="h-screen w-full grid grid-cols-[50px_320px_auto] ">     <PocketBar :pocket="pocket" @update:open="(e) => isOpen = e" @update:hovered="(e) => hovered = e" @update:component="(e) => component = e">
        <ul class="timeline timeline-vertical justify-center items-center relative !w-full ">
          <div class="absolute  w-1  bg-b2 h-4/5 overflow-hidden justify-center">
            <div class="size-full  duration-1000 transition-all " :style="{ transform: translateY }">
              <div
                class="size-5 bg-neutral shadow-[0px_0px_30px_5px_var(--color-bc)]"
              >
              </div>
            </div>
          </div>

          <li v-for="comp in pocketComponents" :ref="comp.btnRef" :key="comp.title" class="h-18 group   cursor-pointer pointer-events-auto ">
            <label class=" timeline-middle cursor-pointer"  @click.stop>

              <div class="size-fit rounded-full bg-b1 pointer-events-none">
                <div class="!size-10 rounded-full shadow-sm   transition-all duration-700  bg-b3 group-hover:bg-neutral/40    z-1 [&_svg]:!text-nc" :class="{ 'bg-neutral/40': hovered.title == comp.title && hovered.hovered == true, 'drop-shadow-sm  scale-115': component == comp.compRef }">

                  <div class="grid place-items-center size-full rounded-full relative z-0 !overflow-hidden">

            <Transition :name="transitionName" mode="out-in">
  <div v-if="component == comp.compRef" class="size-10 pointer-events-none bg-neutral z-10 absolute"/>
</Transition>

                    <input v-model="component" type="radio" name="pocket-page" :value="comp.compRef" class="hidden peer" />

                    <i-no-champ v-if="comp.compRef == pocketComponents[0].compRef" class="fill-nc dst !size-7  z-20  text-nc" />
                    <i-rune-icon v-else-if="comp.compRef == pocketComponents[2].compRef" class="fill-nc size-6 dst  z-20 " />
                    <icon v-else :name="comp.icon" class="size-5.5 z-20 text-nc dst" :class="{ '!size-5': comp.compRef == pocketComponents[1].compRef }" />
                  </div>
                </div>
              </div>
            </label>
          </li>
        </ul>
      </PocketBar>

 

      <PocketNav
        :pocket="pocket"
        @update:selected="(e) => selectedRuneSet = e"
      />
  
    <transition-slide class="w-full min-w-full max-w-full">
      <component :is="component" :selected-runes="selectedRuneSet" :pocket="pocket" />
    </transition-slide>
  </main>
</template>

<style>

</style>
