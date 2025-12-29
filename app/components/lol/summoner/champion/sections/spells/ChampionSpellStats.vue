<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const spellRef = useTemplateRef('spellRef')

const { isActive, progressBetween } = useScrollSection(
  'spells',
  spellRef
)

const { spells } = usePlayerStatsInject()

const allSpells = computed <OrderedStatEntry[]>(() => {
  const singles = spells.value.single
  const map = singles.map(s => s[0])
  const all = Object.values(spellbook).filter(s => (s.id < 30 && s.id !== 13 && !map.includes(s.id.toString())) || s.id === 2201 || s.id === 32)
  return singles.concat(all.map((s) => {
    return [s.id.toString(), { games: null, pickrate: null, winrate: null, }] as OrderedStatEntry
  }))
})
</script>

<template>
  <div
    v-if="spells"
    id="spells"
    ref="spellRef"
    :class="cn('flex h-34 items-center', className)">
    <StatSingleLabels :title="['All', 'Spells']" />
    <ChampStatRowWrapper>
      <ChampStatObjectWrapper
        v-for="[k, v] in allSpells"
        :key="k"
        :stat="v">
        <Spell
          :id="parseInt(k)"
          :class="cn('size-15 shrink-0 cursor-default opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0', { 'opacity-100 grayscale-0': v?.games })" />
      </ChampStatObjectWrapper>
    </ChampStatRowWrapper>
  </div>
</template>