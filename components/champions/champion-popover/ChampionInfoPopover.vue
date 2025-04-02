<script lang="ts" setup>
const props = defineProps<{
  champion: Champion
}>()

const emit = defineEmits(['close'])
const champion = computed(() => props.champion)
const json = ref(null)
const data = computedAsync (() => {
  if (!json.value)
    return null
  return Object.values(json.value)
})
onMounted(async () => {
  if (!champion.value?.id)
    return

  try {
    const module = await import(`~/data/champion/${champion.value.id}.json`)
    json.value = module.default // Access the actual JSON data
  }
  catch (error) {
    console.error('Error loading champion JSON:', error)
  }
})
</script>

<template>
  <MotionDialogContent :delay="0" no-overlay class=" backdrop-blur-lg bg-b1/85 !max-w-280 w-280 h-230 z-1000 py-13 pl-12 pr-14 flex" @interact-outside="emit('close')">
    <div>
      <div class="relative">
        <ChampionSplash bg-size="280%" :champion="champion" class="h-104 w-74 shadow-sm drop-shadow-sm" />

        <DialogHeader class="absolute bottom-4 *:text-right right-5 *:text-light/80 drop-shadow-sm *:dst">
          <DialogTitle class="text-11  font-bold tracking-tight">
            {{ champion.name }}
          </DialogTitle>
          <DialogDescription class="text-3 tracking-tight font-medium uppercase ">
            {{ champion.title }}
          </DialogDescription>
        </DialogHeader>
      </div>
    </div>
    <div class="w-full">
      <ChampionAbilities v-if="data" :data="data" :champion="champion" />
    </div>
  </MotionDialogContent>
</template>