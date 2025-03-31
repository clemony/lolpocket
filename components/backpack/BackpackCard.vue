<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  class?: HTMLAttributes['class']
}>()

const pocket = computed (() => {
  return props.pocket
})

const bgImg = computed (() => {
  return pocket.value.icon && pocket.value.icon == '/img/champion/centered/1.webp' ? 'url(/img/bg/inventory_card.jpg)' : pocket.value.icon ? `url(${pocket.value.icon})` : `url(/img/champion/centered/${pocket.value.champions.default.apiname}_0.jpg)`
})

const bgSize = computed (() => {
  return bgImg.value == 'url(/img/bg/inventory_card.jpg)' ? '100%' : '250%'
})

const bgX = computed (() => {
  return bgImg.value == 'url(/img/bg/inventory_card.jpg)' ? '10%' : '40%'
})
const bgY = computed (() => {
  return bgImg.value == 'url(/img/bg/inventory_card.jpg)' ? '100%' : '21%'
})

const menuOpen = ref(false)

const toggleMenu = useToggle(menuOpen)
const transition = {
  type: 'ease-in-out',
  duration: 0.4,
  delay: 0.1,
}

const bgVariant = {
  open:{
    opacity:[0, 0.5, 1],
      transition: {
      duration:0.7,
      delay: 0.1,
        type: 'ease-in-out'
  }
  },
  closed:{
opacity:[1,0.5, 0],
      transition: {
      duration:0.7,
      delay: 0,
        type: 'ease-in-out'
      }
  }

}
</script>

<template>
  <AnimatePresence
    multiple
    as="div" :class="cn('size-full hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-pretty relative border group border-transparent  rounded-xl transition-all shadow-warm duration-300 gap-3 overflow-hidden **:select-none', props.class)">
    <AnimatePresence
      as="div"
      class=" place-self-center size-full    rounded-xl border border-b2 shadow-sm overflow-hidden after:bg-radial-[at_75%_0] after:size-full after:absolute after:top-0 after:left-0 after:from-[#FFFFFF]/2  after:from-16%  after:via-[#FFFFFF]/88  after:via-48%  after:to-[#FFFFFF]  after:to-80% after:z-0" :style="{
        backgroundImage: bgImg,
        backgroundSize: bgSize,
        backgroundPositionX: bgX,
        backgroundPositionY: bgY,
      }"
      :class="{ 'grayscale opacity-70': bgImg == 'url(/img/bg/inventory_card.jpg)' }">
      <Motion
        v-if="!menuOpen"
        key="card-wrapper" as-child
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="transition">
        <NuxtLink :to="`/pocket/${pocket.key}`" :disabled="menuOpen" class="absolute grid z-1 inset-0 items-center rounded-xl overflow-hidden size-full">
          <AnimatePresence multiple as="div" class="py-3 px-4 size-full   inset-shadow grid relative">
            <Motion
              v-if="!menuOpen"
              key="runes" as-child
              :animate="{ opacity: 1 }"
              :exit="{ opacity: 0 }"
              :transition="transition">
              <BackpackRunes :pocket="pocket" />
            </Motion>
            <div class="flex gap-6 self-end w-full">
              <AnimatePresence as="div" multiple class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">
                <Motion
                  v-if="!menuOpen"
                  key="champ"
                  as-child
                  :animate="{ opacity: 1 }"
                  :exit="{ opacity: 0 }"
                  :transition="transition">
                  <BackpackChampion :pocket="pocket" />
                </Motion>
                <Motion
                  v-if="!menuOpen"
                  key="name"
                  as="div"
                  :animate="{ opacity: 1 }"
                  :exit="{ opacity: 0 }"
                  :transition="transition" class="group flex flex-col gap-1 pr-4">
                  <p class="grow">
                    {{ pocket.name }}
                  </p>

                  <BackpackRoles :pocket="pocket" />
                </Motion>

                <AnimatePresence
                  as="div"
                  class="h-14">
                  <Motion
                    v-if="!menuOpen"
                    key="items"
                    as-child
                    :animate="{ opacity: 1 }"
                    :exit="{ opacity: 0 }"
                    :transition="transition">
                    <BackpackItems :pocket="pocket" />
                  </Motion>
                </AnimatePresence>
              </AnimatePresence>
            </div>
          </AnimatePresence>
        </NuxtLink>
      </Motion>
    </AnimatePresence><!--
      <Motion
      v-if="menuOpen"
       as="div"
       class="size-full !bg-[#FFFFFF] z-1 absolute top-0 right-0 "
       :variants="bgVariant"
      animate="open"
      exit="closed">
      </Motion> -->
      <BackpackMenuOverlay :menu-open="menuOpen"  />
    <BackpackMenu
      v-if="menuOpen" :pocket="pocket" :menu-open="menuOpen" />
    <BackpackMenuButton :pocket="pocket" @update:menu="e => menuOpen = e" />
  </AnimatePresence>
</template>
