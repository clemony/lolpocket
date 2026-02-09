<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { spells } = storeToRefs(s_champion())

const allSpells = computed<OrderedStatEntry[]>(() => {
  const singles = spells.value?.single ?? []
  const map = singles.map((s) => s[0])
  const all = Object.values(spells.value ?? {}).filter((s) => {
    if (!s || typeof (s as any).id !== "number") return false
    return (
      ((s as any).id < 30 &&
        (s as any).id !== 13 &&
        !map.includes((s as any).id.toString())) ||
      (s as any).id === 2201 ||
      (s as any).id === 32
    )
  }) as StatDetail[]
  return singles.concat(
    all.map((s) => {
      return [
        (s as any).id.toString(),
        { games: 0, pickrate: 0, winrate: 0 },
      ] as OrderedStatEntry
    })
  )
})
</script>

<template>
  <UPageSection title="Summoner Spells" :class="cn('', className)">
    <ChampStatRow v-if="spells">
      <ChampStatLabel separator :title="['All', 'Spells']" />
      <ChampStatRowWrapper>
        <ChampStatObjectWrapper v-for="[k, v] in allSpells" :key="k" :stat="v">
          <Spell
            :id="parseInt(k)"
            :class="
              cn(
                'size-15 shrink-0 cursor-default opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0',
                { 'opacity-100 grayscale-0': v?.games }
              )
            " />
        </ChampStatObjectWrapper>
      </ChampStatRowWrapper>
    </ChampStatRow>
  </UPageSection>
</template>
