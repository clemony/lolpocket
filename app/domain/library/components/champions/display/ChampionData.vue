<script lang="ts" setup>
import { getSplash } from "~/domain/utils/img"

const { championKey } = defineProps<{
  championKey: string
}>()
const champion = ref<Champion | null>(null)

const tabs = ref("abilities")
</script>

<template>
  <div
    class="field-box rounded-xxl! relative flex max-h-full w-full flex-col border-p3/80 bg-p2/40 drop-shadow-sm">
    <div
      class="rounded-t-xxl relative h-50 w-full overflow-hidden bg-p2/30 inset-shadow-sm drop-shadow-sm"
      :class="{ 'shadow-warm': !champion }">
      <Champion
        v-if="championKey"
        :key="championKey"
        class="z-1 size-full scale-180"
        :champ-key="championKey"
        :src="getSplash(championKey, 'centered')" />

      <header
        class="absolute right-5 bottom-4 z-2 w-full drop-shadow-sm *:text-right *:text-white/86 *:ds-2xs *:text-shadow-sm">
        <Grow />

        <h1 class="text-xs font-bold tracking-tight">
          {{ champion?.name }}
        </h1>

        <p class="text-md font-medium tracking-tight uppercase">
          {{ champion?.title }}
        </p>
      </header>
    </div>

    <UTabs
      v-model:model-value="tabs"
      :items="['abilities', 'stats', 'bio'].map((t) => ({ value: t, slot: t }))"
      class="size-full max-h-full overflow-hidden"
      label-key="value"
      if="champion">
      <template #abilities>
        <AbilityData v-if="champion" :abilities="champion.abilities" />
      </template>

      <template #stats>
        <ChampionBio v-if="champion" :champion="champion" />
      </template>

      <template #bio>
        <ChampionBasicData v-if="champion" :champion="champion" />
      </template>
    </UTabs>
  </div>
</template>
