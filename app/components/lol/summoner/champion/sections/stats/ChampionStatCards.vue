<script lang="ts" setup>
const { items, stats } = storeToRefs(s_champion())
const route = useRoute()

const champKey = computed(() => String(route.params?.champion_key))
</script>

<template>
  <div class="flex w-full grow items-center gap-10 pr-6 pl-2">
    <RadialChampionStatCard
      v-if="stats?.winrate"
      :value="stats?.winrate"
      title="Winrate"
    />

    <div class="grid size-full max-w-64 min-w-46 grid-rows-2 overflow-hidden">
      <!-- KDA -->
      <SimpleChampionStatCard
        title="KDA"
        :subtitle="`Average ratio of ${stats?.kda} ${stats?.kda > 3 ? '' : ''}`"
        :icon="['lol:melee', 'size-6.5']"
      >
        <span class="flex flex-nowrap items-center">
          {{ stats?.kills.average }}
          <Icons class="size-7" name="slash" />
          {{ stats?.deaths.average }}
          <Icons class="size-7" name="slash" />
          {{ stats?.assists.average }}
        </span>
      </SimpleChampionStatCard>

      <!-- DAMAGE -->
      <SimpleChampionStatCard
        title="Damage Dealt"
        :subtitle="`${stats?.damagePercentage.average}% of team's damage`"
        :icon="['lol:scoreboard-sword', 'size-7.5 -translate-y-0.5']"
      >
        <span class="flex flex-nowrap items-center">
          {{ stats?.totalDamage.average.toLocaleString() }}
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
        :subtitle="`Heal ${stats?.totalAllyHealing.average.toLocaleString()} / Shield ${stats?.totalAllyShielding.average.toLocaleString()}`"
        :icon="['stat:healAndShieldPower', 'size-6.5 ']"
      >
        <span class="flex flex-nowrap items-center">
          {{
            (
              stats?.totalAllyHealing.average
              + stats?.totalAllyShielding.average
            ).toLocaleString()
          }}
        </span>
      </SimpleChampionStatCard>

      <!-- VISION SCORE -->
      <SimpleChampionStatCard
        v-if="stats?.role.mostPlayed === 'support'"
        title="Vision Score"
        :subtitle="`Average of ${stats?.visionScorePerMin} / min`"
        :icon="['role:support', 'size-9 -translate-y-1 translate-x-0.25']"
      >
        <span class="flex flex-nowrap items-center">
          {{ stats?.visionScore.average }}
        </span>
      </SimpleChampionStatCard>
      <!-- MINIONS -->
      <SimpleChampionStatCard
        v-if="stats?.role.mostPlayed !== 'support'"
        title="Total Minions Farmed"
        :subtitle="`Average of ${stats?.csPerMin} / min`"
        :icon="['lol:minion', 'size-7 ']"
      >
        <span class="flex flex-nowrap items-center">
          {{
            Math.round(
              (stats?.minionsKilled.average
                + stats?.neutralMinionsKilled.average)
                * 10,
            ) / 10
          }}
        </span>
      </SimpleChampionStatCard>

      <!-- damage taken -->
      <SimpleChampionStatCard
        v-if="champKeyToRole[champKey] === 'Tank'"
        title="Damage Taken"
        :subtitle="`${stats?.damageTakenPercentage.average}% of team's damage soaked`"
        :icon="['lol:armor', 'size-7 ']"
      >
        <span class="flex flex-nowrap items-center">
          {{ stats?.totalDamageTaken.average }}
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
        :icon="['ability:revive', 'size-6.5 ']"
      >
        <span class="flex flex-nowrap items-center">
          {{ stats?.allySaves.average }}
        </span>
      </SimpleChampionStatCard>
    </div>

    <RadialChampionStatCard
      v-if="stats?.kp"
      :value="stats?.kp.average"
      title="Participation"
    />

    <!--       <RoleDonut
        v-if="stats?.role"
        :roles="stats?.role"
        cutout="90%" /> -->
  </div>
</template>
