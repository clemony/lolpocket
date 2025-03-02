<script lang="ts" setup>
const props = defineProps<{
  champion: Champion
  pocket: pocket
}>()

const pocket = ref(props.pocket)

const images = ref([])

const splashFilter = computed(() => {
  const championName = props.champion.apiname
  const regex = new RegExp(`(^|/|_)${championName}(_|\\.|$)`, 'i') // Match whole word

  return images.value.filter(img => regex.test(img))
})

const splashResults = ref([])

watchEffect(() => {
  splashResults.value = splashFilter.value
})

onMounted (async () => {
  const champImages = import.meta.glob('/public/img/champion/centered/*')
  images.value = Object.keys(champImages).map(path => path.replace('/public', ''))
  await images.value
})

// TODO nuxt bg here
</script>

<template>
  <PopoverContent align="start" class="grid grid-cols-4 gap-2 w-fit">
    <PopoverClose as-child>
      <LazyPocketIcon v-for="(splash, i) in splashResults" :key="props.champion.apiname + i" :alt="`${props.champion.apiname}-splash-${i}`" :image="splash" class="size-18 rounded-xl **:rounded-xl" :class="{ 'ring-1 ring-offset-2 ring-offset-b1 ring-neutral': splash == pocket.card.splash }">
        <input v-model="pocket.card.splash" type="radio" class="peer hidden" :value="splash" @change="pocket.champions.default = champion" />
      </LazyPocketIcon>
    </PopoverClose>
  </PopoverContent>
</template>

<style scoped>

</style>