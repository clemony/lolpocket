<script setup lang="ts">
const props = defineProps<{
  champion: Champion
  stat: any
  lvl: number
}>()

const stat = ref(props.stat)
const lvl = ref(props.lvl[0])
const champion = ref(props.champion)

watch(
  () => lvl.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
const champStats = Object.entries(champion.value.stats)

/* const base = computed(() => {
  if (!stat.value.stats[0].id || stat.value.stats[0].id == undefined) {
    return
  }
  const a = champStats.find(key => key[0] == stat.value.stats[0].id)
  return a[1] as number
})

const perLvl = computed(() => {
  if (!stat.value.stats[1].id || stat.value.stats[1].id == undefined) {
    return
  }
  const a = champStats.find(key => key[0] == stat.value.stats[1].id)

  return a ? (a[1] as number) : null
})

if (stat.value.name == 'Attack Speed') {
  const asRatio = computed(() => {
    const a = champStats.find(key => key[0] == stat.value.stats.value[2].id)
    return a ? (a[1] as number) : null
  })
} */
/* const statVal = computed(() => {
  return base.value + growth(lvl.value) * perLvl.value
})

const statMin = computed(() => {
  return base.value + growth(1) * perLvl.value
})

const statMax = computed(() => {
  return base.value + growth(18) * perLvl.value
}) */

onMounted(async () => {
  await props.stat
  stat.value = props.stat
})
</script>

<template>
  <div class="stat-title !text-3 text-bc mb-0.5 font-semibold opacity-60">
    {{ stat.name }}
  </div>

  <!--   <progress
    class="progress progress-neutral"
    :value="statVal"
    :max="statMax"
  ></progress> -->

  <div class="flex items-center gap-3">
    <div class="stat-value text-8 drop-shadow-text">
      <div class="stat-value text-8 drop-shadow-text">
        {{}}
      </div>
    </div>

    <div class="stat-desc text-3 text-bc mt-0.75 h-full items-start font-semibold tracking-tight opacity-60">
      lil

      <span v-if="stat.name == 'Attack Speed'"></span>
    </div>
  </div>

  <img
    :src="stat.img"
    class="stat-img drop-shadow-xs: invert-light size-6.5 justify-self-end opacity-80" />
</template>

<style scoped></style>
