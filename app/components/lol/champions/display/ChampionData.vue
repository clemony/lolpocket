<script lang="ts" setup>
const { championKey } = defineProps<{
  championKey: string
}>()
const champion = ref<Champion>(null)

const tabs = ref('abilities')
</script>

<template>
  <div
    class="field-box border-b3/80 bg-b2/40 !rounded-xxl relative flex max-h-full w-full flex-col drop-shadow-sm">
    <div
      class="rounded-t-xxl bg-b2/30 relative h-50 w-full overflow-hidden inset-shadow-sm drop-shadow-sm"
      :class="{ 'shadow-warm': !champion }">
      <Champion
        v-if="championKey"
        :key="championKey"
        :champ-key="championKey"
        :img="ix().getSplash(championKey, 'centered')"
        class="z-1 size-full scale-180" />

      <header
        class="*:dst *:text-shadow-sm absolute right-5 bottom-4 z-2 w-full drop-shadow-sm *:text-right *:text-white/86">
        <Grow />

        <h1 class="text-11 font-bold tracking-tight">
          {{ champion?.name }}
        </h1>

        <p class="text-3 font-medium tracking-tight uppercase">
          {{ champion?.title }}
        </p>
      </header>
    </div>

    <Tabs
      v-model:model-value="tabs"
      if="champion"
      class="size-full max-h-full overflow-hidden">
      <TabsList
        base="indicator"
        class="!bg-b3 relative h-10 w-full grid-cols-3 rounded-none">
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

      <TabsContent
        value="abilities"
        class="max-h-full overflow-y-auto">
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
