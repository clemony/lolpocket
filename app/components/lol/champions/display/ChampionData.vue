<script lang="ts" setup>
const { championKey } = defineProps<{
  championKey: string
}>()
const champion = ref<Champion>(null)

const tabs = ref('abilities')
</script>

<template>
  <div
    class="field-box rounded-xxl! border-b3/80 bg-b2/40 relative flex max-h-full w-full flex-col drop-shadow-sm"
  >
    <div
      class="rounded-t-xxl bg-b2/30 relative h-50 w-full overflow-hidden inset-shadow-sm drop-shadow-sm"
      :class="{ 'shadow-warm': !champion }"
    >
      <Champion
        v-if="championKey"
        :key="championKey"
        class="z-1 size-full scale-180"
        :champ-key="championKey"
        :src="getSplash(championKey, 'centered')"
      />

      <header
        class="*:dst absolute right-5 bottom-4 z-2 w-full drop-shadow-sm *:text-right *:text-white/86 *:text-shadow-sm"
      >
        <Grow />

        <h1 class="text-xs font-bold tracking-tight">
          {{ champion?.name }}
        </h1>

        <p class="text-md font-medium tracking-tight uppercase">
          {{ champion?.title }}
        </p>
      </header>
    </div>

    <Tabs
      v-model:model-value="tabs"
      class="size-full max-h-full overflow-hidden"
      if="champion"
    >
      <TabsList class="bg-b3! relative h-10 w-full grid-cols-3 rounded-none">
        <TabsTrigger value="abilities">
          Abilities
        </TabsTrigger>

        <TabsTrigger value="stats">
          Stats
        </TabsTrigger>

        <TabsTrigger value="bio">
          Bio
        </TabsTrigger>

        <TabIndicator />
      </TabsList>

      <TabsContent class="max-h-full overflow-y-auto" value="abilities">
        <AbilityData v-if="champion" :abilities="champion.abilities" />
      </TabsContent>

      <TabsContent value="stats">
        <ChampionBio v-if="champion" :champion="champion" />
      </TabsContent>

      <TabsContent value="bio">
        <ChampionBasicData v-if="champion" :champion="champion" />
      </TabsContent>
    </Tabs>
  </div>
</template>
