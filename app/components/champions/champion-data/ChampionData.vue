<script lang="ts" setup>
const { championKey } = defineProps<{
  championKey: string
}>()
const champion = ref<Champion>(null)
const loaded = ref(false)

watchEffect(async () => {
  if (!championKey)
    return

  loaded.value = false

  try {
    const module = await import(`data/records/champions/${championKey}.ts`)
    champion.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${championKey}`, err)
    champion.value = null
  }
})

const tabs = ref('abilities')
</script>

<template>
  <div class="relative flex flex-col w-full max-h-full  field-box border-b3/80 bg-b2/40 drop-shadow-sm !rounded-xxl">
    <div
      class="overflow-hidden rounded-t-xxl   h-50 w-full drop-shadow-sm relative inset-shadow-sm bg-b2/30 "
      :class="{ 'shadow-warm': !champion }">
      <ChampionSplash
        v-if="championKey"
        :key="championKey"
        v-model:loaded="loaded"
        :champ-key="championKey"
        bg-position="top"
        :name="champion?.name"
        type="centered"
        class="z-1 size-full  scale-180  "
        @loaded="loaded = true" />

      <header class="absolute bottom-4 *:text-right right-5 *:text-white/86 drop-shadow-sm z-2 *:dst *:text-shadow-sm w-full">
        <Grow />

        <h1 class="text-11  font-bold tracking-tight">
          {{ champion?.name }}
        </h1>

        <p class="text-3 tracking-tight font-medium uppercase ">
          {{ champion?.title }}
        </p>
      </header>
    </div>

    <Tabs
      v-model:model-value="tabs"
      if="champion"
      class="size-full max-h-full overflow-hidden">
      <IndicatorTabsList class="grid-cols-3 w-full !bg-b3 h-10 relative rounded-none">
        <IndicatorTabsTrigger value="abilities">
          Abilities
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="stats">
          Stats
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="bio">
          Bio
        </IndicatorTabsTrigger>

        <TabIndicator />
      </IndicatorTabsList>

      <TabsContent
        value="abilities"
        class="max-h-full  overflow-y-auto">
        <AbilityData
          v-if="champion"
          :abilities="champion.abilities" />
      </TabsContent>

      <TabsContent value="stats">
        <ChampionBio
          v-if="champion"
          :champion="champion" />
      </TabsContent>

      <TabsContent value="bio">
        <ChampionBasicData
          v-if="champion"
          :champion="champion" />
      </TabsContent>
    </Tabs>
  </div>
</template>