<script lang="ts" setup>
const { spells } = usePlayerStatsInject()

const best = computed (() => {
  if (!spells.value.best)
    return null
  return Object.entries(spells.value?.best)
})
</script>

<template>
  <div
    v-if="best && best.length"
    class="flex h-28 items-center justify-start">
    <ChampStatLabel
      title="Spells"
      :stat="Object.values(spells.best)[0]" />
    <ChampStatRowWrapper simple>
      <ChampStatObjectWrapper
        v-for="[k, v] in best"
        :key="k"
        simple
        :stat="v">
        <Spell
          :id="parseInt(k)"
          :class="cn('size-15 shrink-0 cursor-default opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0', { 'opacity-100 grayscale-0': v?.games })" />
      </ChampStatObjectWrapper>
    </ChampStatRowWrapper>
  </div>
</template>