<script lang="ts" setup>
const { class: className, mastery } = defineProps<{
  class?: HTMLAttributes['class']
  mastery?: PlayerChampionMastery
}>()

const summaryRef = useTemplateRef('summaryRef')
const { isActive, progressBetween } = useScrollSection(
  'summary',
  summaryRef
)

const { items, stats, summoner } = usePlayerStatsInject()

const route = useRoute()

const champKey = computed (() => String(route.params?.champion_key))

const progress = computed(() => {
  if (mastery.pointsUntilLevel <= 0) {
    return 100
  }
  else {
    return Math.round(mastery.pointsSinceLevel / (mastery.pointsSinceLevel + mastery.pointsUntilLevel) * 100)
  }
})
</script>

<template>
  <div
    id="summary"
    ref="summaryRef"
    :class="cn('grid w-full max-w-full gap-6 overflow-hidden', className)">
    <div class="flex w-full grow items-center gap-10 pr-6 pl-2">
      <div class="size-full max-w-64 min-w-46 overflow-hidden">
        <!-- KDA -->
        <SimpleChampionStatCard
          title="KDA"
          class="flex h-28 items-center border-b border-b3/80"
          :subtitle="`Average ratio of ${stats?.kda} ${stats?.kda > 3 ? '' : ''}`"
          :icon="['lol:melee', 'size-4 opacity-50']">
          <span class="flex flex-nowrap items-center">
            {{ stats?.kills.average }}
            <Icons
              name="slash"
              class="size-7" />
            {{ stats?.deaths.average }}
            <Icons
              name="slash"
              class="size-7" />
            {{ stats?.assists.average }}
          </span>
        </SimpleChampionStatCard>

        <!-- DAMAGE -->
        <SimpleChampionStatCard
          title="Damage Dealt"
          class="flex h-28 items-center border-b border-b3/80"
          :subtitle="`${stats?.damagePercentage.average}% of team's damage`"
          :icon="['lol:scoreboard-sword', 'size-4.75 opacity-50 ']">
          <span class="flex flex-nowrap items-center">
            {{ stats?.totalDamage.average.toLocaleString() }}
          </span>
        </SimpleChampionStatCard>
      </div>
      <div class="size-full max-w-64 min-w-46 overflow-hidden">
        <!-- HEALING AND SHIELDING -->
        <SimpleChampionStatCard
          v-if="champKeyToRole[champKey] === 'Enchanter'"
          title="Ally Healing & Shielding"
          class="flex h-28 items-center border-b border-b3/80"
          :subtitle="`Heal ${stats?.totalAllyHealing.average.toLocaleString()} / Shield ${stats?.totalAllyShielding.average.toLocaleString()}`"
          :icon="['stat:healAndShieldPower', 'size-3.25 opacity-50 ']">
          <span class="flex flex-nowrap items-center">
            {{ (stats?.totalAllyHealing.average + stats?.totalAllyShielding.average).toLocaleString() }}
          </span>
        </SimpleChampionStatCard>

        <!-- MINIONS -->
        <SimpleChampionStatCard
          title="Total Minions Farmed"
          class="flex h-28 items-center border-b border-b3/80"
          :subtitle="`Average of ${stats?.csPerMin} / min`"
          :icon="['lol:minion', 'size-3.75 opacity-50 **:stroke-[3]']">
          <span class="flex flex-nowrap items-center">
            {{ Math.round((stats?.minionsKilled.average + stats?.neutralMinionsKilled.average) * 10) / 10 }}
          </span>
        </SimpleChampionStatCard>
      </div>

      <div class="grow"></div>
      <div class="flex items-center gap-20">
        <RadialChampionStatCard
          v-if="stats?.winrate"
          :value="stats?.winrate"
          title="Winrate" />

        <RadialChampionStatCard
          v-if="stats?.kp"
          :value="stats?.kp.average"
          title="Participation" />
      </div>

      <!--       <RoleDonut
        v-if="stats?.role"
        :roles="stats?.role"
        cutout="90%" /> -->
    </div>

    <!-- RUNES -->
    <ChampionRuneSet />

    <!-- SPELLS AND SKILLS -->
    <div class="grid w-full grid-cols-[0.7fr_1fr_1fr] items-center gap-10">
      <BestChampionSpellSet />
      <ChampionSkillPriority />

      <div
        v-if="items?.starting"
        class="flex h-28 shrink!"
        simple
        :data="items?.starting?.items">
        <ChampStatLabel
          :title="['Starting', 'Items']"
          :stat="items?.starting" />
        <div
          v-if="items?.starting"
          class="flex size-full items-center gap-4 border-b border-b-b3/80 px-3 pt-3 pb-2.5">
          <Item
            v-for="item in items?.starting?.items"
            :id="item"
            :key="item"
            class="size-15" />
        </div>
        <NoItemData v-else />
      </div>
    </div>
    <!-- ITEMS -->

    <div class="grid h-28 grid-cols-[1fr_repeat(3,0.6fr)] items-center gap-10">
      <ChampionItemRow
        v-if="items?.best?.core"
        class="h-full shrink!"
        simple
        :data="items?.best?.core?.items">
        <ChampStatLabel
          title="Core"
          :stat="items?.best?.core" />
      </ChampionItemRow>

      <template
        v-for="slot, i in items?.best?.slots"
        :key="i">
        <div
          v-if="slot"
          class="flex h-full min-w-52 grow items-center">
          <ChampStatLabel
            :title="`Slot ${Number(i) + 4}`"
            :stat="slot[1]" />
          <div
            v-if="slot[0]"
            class="flex h-full grow items-center border-b border-b3/80 px-3">
            <Item
              :id="slot[0]"
              class="size-15" />
          </div>
          <NoItemData v-else />
        </div>
      </template>
    </div>
  </div>
</template>