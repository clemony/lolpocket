<script lang="ts" setup>
const { spells } = usePlayerStatsInject()
</script>

<template>
  <div
    v-if="spells"
    class="flex items-center gap-5">
    <div class="grid h-15 items-end self-end pb-2">
      <span
        v-for="l in statLabels"
        :key="l"
        class="stat-label">
        {{ l }}
      </span>
    </div>
    <Card
      class="flex! w-fit! items-center justify-center gap-5 px-4 pt-3 pb-2.5">
      <ChampionSpellStat
        v-for="[k, v] in Object.entries(spells.single)"

        :key="k"
        :k
        :v>
        <div class="flex flex-col items-center justify-center gap-0.5 leading-none">
          <span class="text-2 font-bold!">
            {{ v?.winrate }}
          </span>
          <span
            v-if="v?.games"
            class="text-0 font-medium">
            {{ v?.games }}
          </span>
          <span
            v-if="v?.games"
            class="text-0 font-medium">
            {{ v?.games }}
          </span>
        </div>
      </ChampionSpellStat>
    </Card>

    <div
      v-for="s in Object.values(spellbook).filter(s => s.id < 30 && s.id !== 13 && !Object.keys(spells).includes(s.id.toString()))"
      :key="s.id"
      :data-id="s.id"
      data-tip="spell"
      class="flex h-36 flex-col items-center justify-start gap-3 pt-3">
      <Spell
        :id="s.id"
        class="mb-10 size-16 cursor-default opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0" />
    </div>
  </div>
</template>