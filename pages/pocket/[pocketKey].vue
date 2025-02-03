<script setup lang="ts">
const route = useRoute()
const pocket = ref(getPocket(route.params.pocketKey))

const Champions = defineAsyncComponent(() => import('components/pocket/Champions.vue'))
const Items = defineAsyncComponent(() => import('components/pocket/Items.vue'))
const Runes = defineAsyncComponent(() => import('components/pocket/Runes.vue'))
const Complete = defineAsyncComponent(() => import('components/pocket/Complete.vue'))

const pocketComponents = [
  {
    ref: Champions,
    icon: '',
    tip: 'Select Champions',
  },
  {
    ref: Items,
    icon: 'mdi:sword',
    tip: 'Choose Items',
  },
  {
    ref: Runes,
    icon: '',
    tip: 'Configure Runes',
  },
  {
    ref: Complete,
    icon: 'stash:infinity-solid',
    tip: 'Complete Build',
  },
]

const component = shallowRef(Champions)

const prevPage = ref()
const pocketPage = ref(route.name)
const prevIndex = ref(0)
const index = ref()

watchEffect(() => {
  prevIndex.value = index.value
  const i = 1
  index.value = i
  prevPage.value = pocketPage.value
  console.log('💠 - watchEffect - prevPage.value:', prevPage.value)
  console.log('💠 - watchEffect - i:', i)
})

onMounted (async () => {
  const oi = 1
  await oi
  prevIndex.value = oi
  prevPage.value = route.name
})

const classObject = computed (() => {
  return ''
})
</script>

<template>
  <main class="h-screen w-full grid grid-cols-[400px_auto]">
    <div class="flex">
      <PocketBar :pocket="pocket">
        <ul class="timeline timeline-vertical">
          <li v-for="(comp, i) in pocketComponents" :key="i" v-tippy="comp.tip" class="h-20 group">
            <hr v-if="i != 0" />
            <label class="timeline-middle size-8 rounded-full  bg-b3/80 shadow-sm  [&_svg]:!text-nc z-0">
              <div class="grid place-items-center size-full rounded-full relative  !overflow-hidden">

                <div class="size-8 translate-y-100 scale-y-0 bg-neutral z-0 transition-all absolute  duration-2000 " :class="{ '!translate-y-0 !scale-y-100': component == comp.ref }" />

                <input v-model="component" type="radio" name="pocket-page" :value="comp.ref" class="hidden peer" />

                <i-no-champ v-if="comp.ref == Champions" class="fill-nc dst !size-7  z-20  text-nc" />
                <i-rune-icon v-else-if="comp.ref == Runes" class="fill-nc size-6 dst  z-20 " />
                <icon v-else :name="comp.icon" class="size-5.5 z-20 text-nc dst" />
              </div>
            </label>
            <hr v-if="i != 3" />
          </li>
        </ul>
      </PocketBar>

      <PocketNav :pocket="pocket" />
    </div>
    <transition-slide class="w-full min-w-full max-w-full">
      <component :is="component" :pocket="pocket" />
    </transition-slide>
  </main>
</template>

<style>
</style>
