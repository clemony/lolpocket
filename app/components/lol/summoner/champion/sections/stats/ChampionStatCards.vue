<script lang="ts" setup>
import { champKeyToRole } from "#shared/constants/champions/champKeyToRole"

const { items, stats } = storeToRefs(sChampion())
const route = useRoute()

const champKey = computed(() => String(route.params?.champion_key))
const statsSafe = computed(() => {
  const v = stats.value
  return {
    winrate: v?.winrate ?? 0,
    kda: v?.kda ?? 0,
    killsAvg: v?.kills?.average ?? 0,
    deathsAvg: v?.deaths?.average ?? 0,
    assistsAvg: v?.assists?.average ?? 0,
    damagePct: v?.damagePercentage?.average ?? 0,
    totalDamageAvg: v?.totalDamage?.average ?? 0,
    totalAllyHealingAvg: v?.totalAllyHealing?.average ?? 0,
    totalAllyShieldingAvg: v?.totalAllyShielding?.average ?? 0,
    visionScoreAvg: v?.visionScore?.average ?? 0,
    visionScorePerMin: v?.visionScorePerMin ?? 0,
    csPerMin: v?.csPerMin ?? 0,
    minionsKilledAvg: v?.minionsKilled?.average ?? 0,
    neutralMinionsKilledAvg: v?.neutralMinionsKilled?.average ?? 0,
    damageTakenPct: v?.damageTakenPercentage?.average ?? 0,
    totalDamageTakenAvg: v?.totalDamageTaken?.average ?? 0,
    allySavesAvg: v?.allySaves?.average ?? 0,
    roleMostPlayed: v?.role?.mostPlayed,
  }
})
</script>

<template>
  <div class="flex w-full grow items-center gap-10 pr-6 pl-2">
    <RadialChampionStatCard
      v-if="statsSafe.winrate"
      :value="statsSafe.winrate"
      title="Winrate" />

    <div class="grid size-full max-w-64 min-w-46 grid-rows-2 overflow-hidden">
      <!-- KDA -->
      <SimpleChampionStatCard
        title="KDA"
        :subtitle="`Average ratio of ${statsSafe.kda} ${statsSafe.kda > 3 ? '' : ''}`"
        :icon="['lol:melee', 'size-6.5']">
        <span class="flex flex-nowrap items-center">
          {{ statsSafe.killsAvg }}
          <Icons class="size-7" name="slash" />
          {{ statsSafe.deathsAvg }}
          <Icons class="size-7" name="slash" />
          {{ statsSafe.assistsAvg }}
        </span>
      </SimpleChampionStatCard>

      <!-- DAMAGE -->
      <SimpleChampionStatCard
        title="Damage Dealt"
        :subtitle="`${statsSafe.damagePct}% of team's damage`"
        :icon="['lol:scoreboard-sword', 'size-7.5 -translate-y-0.5']">
        <span class="flex flex-nowrap items-center">
          {{ statsSafe.totalDamageAvg.toLocaleString() }}
        </span>
      </SimpleChampionStatCard>
    </div>

    <div class="grid size-full max-w-64 min-w-46 grid-rows-2 overflow-hidden">
      <!-- HEALING AND SHIELDING -->
      <SimpleChampionStatCard
        v-if="champKeyToRole[champKey] === 'Enchanter'"
        data-type="Effective Ally Healing & Shielding"
        data-placement="right"
        data-theme="neutral mini-tip line"
        title="Healing & Shielding"
        :subtitle="`Heal ${statsSafe.totalAllyHealingAvg.toLocaleString()} / Shield ${statsSafe.totalAllyShieldingAvg.toLocaleString()}`"
        :icon="['stat:healAndShieldPower', 'size-6.5 ']">
        <span class="flex flex-nowrap items-center">
          {{
            (
              statsSafe.totalAllyHealingAvg + statsSafe.totalAllyShieldingAvg
            ).toLocaleString()
          }}
        </span>
      </SimpleChampionStatCard>

      <!-- VISION SCORE -->
      <SimpleChampionStatCard
        v-if="statsSafe.roleMostPlayed === 'support'"
        title="Vision Score"
        :subtitle="`Average of ${statsSafe.visionScorePerMin} / min`"
        :icon="['role:support', 'size-9 -translate-y-1 translate-x-0.25']">
        <span class="flex flex-nowrap items-center">
          {{ statsSafe.visionScoreAvg }}
        </span>
      </SimpleChampionStatCard>
      <!-- MINIONS -->
      <SimpleChampionStatCard
        v-if="statsSafe.roleMostPlayed !== 'support'"
        title="Total Minions Farmed"
        :subtitle="`Average of ${statsSafe.csPerMin} / min`"
        :icon="['lol:minion', 'size-7 ']">
        <span class="flex flex-nowrap items-center">
          {{
            Math.round(
              (statsSafe.minionsKilledAvg + statsSafe.neutralMinionsKilledAvg) *
                10
            ) / 10
          }}
        </span>
      </SimpleChampionStatCard>

      <!-- damage taken -->
      <SimpleChampionStatCard
        v-if="champKeyToRole[champKey] === 'Tank'"
        title="Damage Taken"
        :subtitle="`${statsSafe.damageTakenPct}% of team's damage soaked`"
        :icon="['lol:armor', 'size-7 ']">
        <span class="flex flex-nowrap items-center">
          {{ statsSafe.totalDamageTakenAvg }}
        </span>
      </SimpleChampionStatCard>
    </div>

    <div class="grid size-full max-w-64 min-w-46 grid-rows-2 overflow-hidden">
      <!-- SAVED ALLIES -->
      <SimpleChampionStatCard
        v-if="champKeyToRole[champKey] === 'Enchanter'"
        data-type="Heals or shields that saved an ally from the brink of death"
        title="Lives Saved"
        subtitle="Perfect heals & shields."
        :icon="['ability:revive', 'size-6.5 ']">
        <span class="flex flex-nowrap items-center">
          {{ statsSafe.allySavesAvg }}
        </span>
      </SimpleChampionStatCard>
    </div>

    <RadialChampionStatCard
      v-if="stats?.kp"
      :value="stats?.kp.average"
      title="Participation" />

    <!--       <RoleDonut
        v-if="stats?.role"
        :roles="stats?.role"
        cutout="90%" /> -->
  </div>
</template>
