<script lang="ts" setup>
const { class: className, mastery } = defineProps<{
  class?: HTMLAttributes["class"]
  mastery?: ChampionMastery
}>()

const { items } = storeToRefs(s_champion())

const route = useRoute()

const champKey = computed(() => String(route.params?.champion_key))

const progress = computed(() => {
  if ((mastery?.pointsUntilLevel ?? 0) <= 0) {
    return 100
  } else {
    return Math.round(
      ((mastery?.pointsSinceLevel ?? 0) /
        ((mastery?.pointsSinceLevel ?? 0) + (mastery?.pointsUntilLevel ?? 0))) *
        100
    )
  }
})
</script>

<template>
  <UPageSection
    title="Summary"
    :class="cn('grid w-full max-w-full gap-6 overflow-hidden', className)">
    <!-- RUNES -->
    <ChampionRuneSet />

    <!-- SPELLS AND SKILLS -->
    <div
      class="grid w-full grid-cols-[0.7fr_1fr_1fr] items-center justify-start gap-10">
      <BestChampionSpellSet />
      <ChampionSkillPriority />

      <!--       <ChampStatRow
        v-if="items?.starting"
        simple
        :data="items?.starting?.items"
      >
        <ChampStatLabel
          :title="['Starting', 'Items']"
          :stat="items?.starting"
        />
        <ChampStatRowWrapper v-if="items?.starting">
          <Item
            v-for="item in items?.starting?.items"
            :id="item"
            :key="item"
            class="size-15"
          />
        </ChampStatRowWrapper>
        <NoItemData v-else />
      </ChampStatRow> -->
    </div>
    <!-- ITEMS -->

    <div class="grid grid-cols-[1fr_repeat(3,0.6fr)] items-center gap-10">
      <ChampionItemRow
        v-if="items?.best?.core"
        simple
        :data="items?.best?.core?.items">
        <ChampStatLabel title="Core" :stat="items?.best?.core" />
      </ChampionItemRow>

      <ChampStatRow
        v-for="(slot, i) in items?.best?.slots"
        :key="i"
        class="grow"
        simple>
        <ChampStatLabel :title="`Slot ${Number(i) + 4}`" :stat="slot[1]" />
        <ChampStatRowWrapper v-if="slot[0]" class="justify-center">
          <Item :id="slot[0]" class="size-15" />
        </ChampStatRowWrapper>
        <NoItemData v-else />
      </ChampStatRow>
    </div>
  </UPageSection>
</template>
