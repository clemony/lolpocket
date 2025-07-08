<script lang="ts" setup>
const props = defineProps<{
  champion: Champion
  pocket: Pocket
  alignOffset?: number
  sideOffset?: number
}>()

const pocket = ref(props.pocket)

const images = ref([])

const splashFilter = computed(() => {
  const championName = props.champion.id
  const regex = new RegExp(`(^|/|_)${championName}(_|\\.|$)`, 'i') // Match whole word

  return images.value.filter(img => regex.test(img))
})

const splashResults = ref([])

watchEffect(() => {
  splashResults.value = splashFilter.value
})

onMounted (async () => {
  const champImages = import.meta.glob('/public/img/champion-centered/*')
  images.value = Object.keys(champImages).map(path => path.replace('/public', ''))
  await images.value
})

// TODO nuxt bg here
</script>

<template>
  <PopoverContent align="start" :align-offset="props.alignOffset" :side-offset="props.sideOffset" class="grid grid-cols-4 gap-2 w-fit">
    <PopoverClose as-child>
      <!--       <LazyPocketIcon v-for="(splash, i) in splashResults" :key="props.champion.id + i" :alt="`${props.champion.id}-splash-${i}`" :image="splash" class="size-18 rounded-xl **:rounded-xl" :class="{ 'ring-1 ring-offset-2 ring-offset-b1 ring-n1': splash == pocket.card.splash }">
        <input v-model="pocket.card.splash" type="radio" class="peer hidden" :value="splash" @change="pocket.champions.default = champion" />
      </LazyPocketIcon> -->
    </PopoverClose>
  </PopoverContent>
</template>

<style scoped>

</style>