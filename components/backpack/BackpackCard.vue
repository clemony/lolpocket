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
</script>

<template>
  <div :class="cn('size-full  relative border group border-transparent  rounded-xl transition-all shadow-warm duration-300 gap-3 justify-center overflow-hidden **:select-none', props.class)">
    <NuxtLink :to="`/pocket/${pocket.key}`" class="absolute grid inset-0 items-center rounded-xl overflow-hidden">
      <div
        class=" place-self-center size-full  rounded-xl border border-b2 shadow-sm overflow-hidden" :style="{
          backgroundImage: bgImg,
          backgroundSize: bgSize,
          backgroundPositionX: bgX,
          backgroundPositionY: bgY,
        }"
        :class="{ 'grayscale opacity-70': bgImg == 'url(/img/bg/inventory_card.jpg)' }">
        <div class="py-3 px-4 size-full bg-radial-[at_75%_0] from-[#FFFFFF]/2 from-16% via-[#FFFFFF]/88 via-48% to-[#FFFFFF] to-80% inset-shadow grid">
          <BackpackRunes :pocket="pocket" />
          <div class="flex gap-6 self-end w-full">
            <div class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">
              <BackpackChampion :pocket="pocket" />

              <div class="group flex flex-col gap-1 pr-3.5">
                <p>{{ pocket.name }}</p>
                <BackpackRoles :pocket="pocket" />
              </div>
              <BackpackItems :pocket="pocket" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
