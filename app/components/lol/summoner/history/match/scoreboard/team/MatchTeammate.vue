<script lang="ts" setup>
const { match, player } = defineProps<{
  player: Player
  match: MatchDataCurrentPlayer
}>()

const stats = computed(() => {
  if (!player)
    return null

  const id = player?.runes?.keystone

  return {
    keystone: runeIndex.find(r => r.id === id),
    cs: player.farming.minionsKilled.value + player.farming.neutralMinionsKilled.value,
    kda: Math.round(((player.stats.kills.total + player.stats.assists) / player.stats.deaths) * 100),
    secondaryPath: pathIndex.find(p => p.id === player?.runes?.secondary.path)
      ?.name,
  }
})

const divClass
  = '**:not-[h4]:tracking-tight **:not-[h4]:font-semibold **:text-1 grid items-center grid-rows-2 justify-start justify-items-start h-full py-2 shrink-0 max-h-16.5'

const pClass
  = 'leading-0 rounded-tiny w-full flex gap-2 py-px  text-end items-center justify-end font-semibold tracking-tight text-nowrap truncate hover:underline'
</script>

<template>
  <div
    v-if="player"
    :class="
      cn('z-1 flex h-16.5 max-h-16.5 w-full items-center justify-between gap-1 overflow-hidden pr-2 pl-2 *:shrink-0',
      )
    ">
    <div
      class="w-[33px] grid-rows-1!"
      :class="divClass">
      <ChampionIcon
        :id="player?.championId"
        v-tippy="{
          theme: 'neutral',
          content: champNameById(player?.championId),
          placement: 'top',
        }"
        alt="champion-icon"
        class="
          mb-px size-11 self-center rounded-lg transition-all duration-300
          hover:scale-105
        " />
    </div>

    <div
      class="w-[18px] grid-rows-1!"
      :class="divClass">
      <PlayerSpells
        :player="player"
        class="h-11 gap-0.5 [&_img]:size-5 [&_img]:rounded-[3px]" />
    </div>   <!-- runes -->
    <div
      :class="
        cn('mb-px -ml-1 flex! w-[18px] shrink-0 flex-col items-center justify-center gap-0.5 self-center overflow-visible py-1',
        )
      ">
      <Button
        variant="neutral"
        size="c-5"
        data-tip="rune"
        class="aspect-square shrink-0 overflow-hidden p-0! transition-all duration-300 hover:scale-110"
        :data-id="player?.runes?.keystone">
        <img
          :src="`/img/runes/${stats.keystone?.id}.webp`"
          :alt="stats?.keystone?.id?.toString()"
          class="
               absolute h-5.5 w-auto object-center
              dst
            " />
      </Button>

      <Button
        variant="neutral"
        size="c-5"
        data-tip="rune"
        :data-id="stats?.secondaryPath"
        class="p-0!">
        <img
          :alt="stats?.secondaryPath"
          :src="`/img/paths/${stats?.secondaryPath}.webp`"
          class="
            absolute size-full h-4 w-auto
          "
          :class="{
            'h-3.5! w-auto': stats.secondaryPath?.toLowerCase() === 'inspiration',
          }" />
      </Button>
    </div>
    <!-- name and tag -->

    <div
      class="w-[100px] grow py-3!"
      :class="divClass">
      <h4
        v-tippy="{
          theme: 'neutral',
          content: player.riotIdGameName,
          placement: 'top',
        }"
        class="
          size-full flex-nowrap items-end truncate text-2 font-semibold
          text-nowrap
        ">
        {{ player.riotIdGameName }}
      </h4>

      <div
        class="flex w-[100px] items-center justify-between gap-2 self-start text-2 font-medium text-nowrap opacity-60">
        <span class="grow">#{{ player.riotIdTagline }}</span>

        <!-- badge - rank / kp -->
        <div class="flex items-center gap-2">
          <span class="text-0!">
            {{ player.mvpScore.toFixed(1) }}
          </span>
          <MvpBadge
            :match
            :player />
        </div>
      </div>
    </div>

    <!-- kda -->

    <div
      class="w-[73px]"
      :class="divClass">
      <p
        class="
        inline flex-nowrap align-middle text-0! leading-0 font-semibold
          tracking-wide text-nowrap **:tracking-wide
        ">
        {{ player.stats.kills.total }}&#8198;/&#8198;<span class="text-red-800">{{
          player.stats.deaths
        }}</span>&#8198;/&#8198;{{ player.stats.assists }}
        <span class="text-0!">
          &nbsp;({{ Math.round(player.stats.kp * 100) }}%)
        </span>
      </p>

      <Badge
        v-if="stats.kda / 100 === Infinity"
        size="5"
        class="
           w-fit gap-1 border-master/40 bg-master/20 text-0! saturate-180 **:leading-0
        ">
        <Icon
          name="fa6-solid:infinity"
          class="mt-[0.04em] size-3.5 dst" />
        KDA
      </Badge>

      <p
        v-else
        class="
          flex gap-1 truncate text-0! leading-3 font-medium text-nowrap text-bc/80 dst
        ">
        {{ (stats.kda / 100).toFixed(2) }} KDA
      </p>
    </div>

    <!-- mvp kp -->

    <!--     <div :class="cn('relative w-[47px]', divClass)">
      <div class="flex w-full items-center gap-3">
        <div class="font-bold tracking-wide">
           <span class="font-normal! **:text-1!">lpx</span>
        </div>
      </div>
    </div> -->

    <!-- healing & vision score -->

    <div
      class="w-[54px] justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
          theme: 'neutral line',
          content: 'Effective Healing & Shielding',
          placement: 'top',
        }"
        :class="cn('inline! text-0!', pClass, { 'text-bc/30': player.utility.effectiveHealingAndShielding.value === 0 })">
        {{
          player.utility.effectiveHealingAndShielding.value
            === 0 ? '—   ' : Math.round(
            player.utility.effectiveHealingAndShielding.value,
          ).toLocaleString()
        }}
        <Icon
          name="lp:health"
          class="ml-0.5 inline size-3 -translate-y-px opacity-40" />
      </p>

      <p
        v-tippy="{
          content: `Vision Score - ${player.vision.wardsPlaced.value} Wards placed / ${player.vision.controlWardsPlaced.value} Control wards placed`,
          placement: 'top',
          theme: 'neutral line',
        }"
        :class="cn('inline text-0!', pClass)">
        {{ player.vision.visionScore.value }}
        <Icon
          name="lp:support"
          class="inline size-3! -translate-y-px opacity-60" />
      </p>
    </div>

    <div
      class="w-[58px] justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
          theme: 'neutral line',
          content: 'Total Damage Dealt to Champions',
          placement: 'top',
        }"
        :class="cn('inline gap-1! text-0!', pClass)">
        {{ player.offense.totalDamage.value.toLocaleString() }}
        <icon
          name="el:fire"
          class="mr-0.25 ml-0.5 inline size-3 opacity-50" />
      </p>

      <p
        v-tippy="{
          theme: 'neutral line',
          content: 'Total Damage Taken',
          placement: 'top',
        }"
        :class="cn('inline! gap-1! text-0!', pClass)">
        {{ Math.round(player.defense.totalDamageTaken.value).toLocaleString() }}
        <icon
          name="ph:shield-fill"
          class="ml-0.5 inline size-3.5 -translate-y-px opacity-40" />
      </p>
    </div>

    <div
      :class="cn('ml-2 w-[174px] grid-cols-7! grid-rows-1! gap-1! justify-self-end', divClass)">
      <Item
        v-for="item in player.items"
        :id="item"
        :key="item"
        v-tippy="{ content: ix().itemNameById(item),
                   placement: 'bottom',
                   theme: 'neutral' }"
        :alt="item"
        class="
          size-7.5 rounded-md ring-bc/60 transition-all duration-300 *:rounded-md
          hover:scale-105 hover:ring
        " />
    </div>

    <!-- gold -->

    <div
      class="w-[44px] justify-end! justify-items-end! py-2 text-nowrap **:text-0!"
      :class="divClass">
      <p
        v-tippy="{
          theme: 'neutral',
          content: `${player.farming.minionsKilled.value.toLocaleString()} minions`,
          placement: 'top',
        }"
        class="hover:underline">
        {{ stats.cs }} CS
      </p>

      <p class="hover:underline">
        {{ player.farming.goldEarned.value.toLocaleString() }} G
      </p>
    </div>
  </div>
</template>
