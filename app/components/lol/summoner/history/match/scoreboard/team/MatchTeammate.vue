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
    cs: player.farming.minionsKilled + player.farming.neutralMinionsKilled,
    secondaryPath: pathIndex.find(p => p.id === player?.runes?.secondary.path)
      ?.name,
  }
})

const divClass
  = '**:not-[h4]:tracking-tight **:not-[h4]:font-semibold **:text-1 grid items-center grid-rows-2 justify-start justify-items-start h-full py-2 shrink-0 max-h-16.5'

const pClass
  = 'leading-0 rounded-tiny w-full gap-1  py-px  inline-flex text-end items-center justify-end font-semibold tracking-tight text-nowrap hover:underline'
</script>

<template>
  <div
    v-if="player"
    :class="
      cn('z-1 flex h-16.5 max-h-16.5 w-full items-center justify-between gap-1 overflow-hidden border-b3/50 px-2 *:shrink-0 not-first:pt-1 not-last:border-b not-last:pb-1',

      )
    ">
    <!-- champion -->
    <div
      class="w-11 grid-rows-1!"
      :class="divClass">
      <ChampionIcon
        :id="player?.championId"
        :data-id="player?.championId"
        data-tip="champion"
        alt="champion-icon"
        class="
          mb-px size-11 self-center rounded-lg transition-all duration-300
          hover:scale-105
        " />
    </div>

    <!-- spells -->
    <div
      class="w-[18px] grid-rows-1!"
      :class="divClass">
      <PlayerSpells
        :player="player"
        class="h-11 gap-0.5 [&_img]:size-5 [&_img]:rounded-[3px]" />
    </div>

    <!-- runes -->
    <div
      :class="
        cn('mb-px -ml-1 flex! w-[18px] shrink-0 flex-col items-center justify-center gap-0.5 self-center overflow-visible py-1',
        )
      ">
      <!-- keystone -->
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

      <!-- path -->
      <Button
        variant="neutral"
        size="c-5"
        data-tip="path"
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

    <div :class="cn('flex w-36 grow flex-col py-2.5 pr-3')">
      <h4
        :title="player.riotIdGameName"
        class="
          w-full grow flex-nowrap truncate text-2 font-semibold
          text-nowrap
        ">
        {{ player.riotIdGameName }}
      </h4>

      <div
        class="flex w-full grow items-center justify-between gap-2 text-2 font-medium text-nowrap">
        <span class="grow opacity-50">#{{ player.riotIdTagline }}</span>

        <!-- badge - rank / kp -->
        <div class="flex grow items-center justify-end gap-2">
          <span class="grow text-end! text-1 opacity-50">
            {{ player.stats.mvpScore.toFixed(1) }}
          </span>
          <MvpBadge
            :match
            :player />
        </div>
      </div>
    </div>

    <!-- kda -->

    <div
      class="w-24"
      :class="divClass">
      <p
        class="
        inline flex-nowrap align-middle text-1! leading-0 font-semibold
          tracking-wide text-nowrap **:tracking-wide
        ">
        {{ player.stats.kills.value }}&#8198;/&#8198;<span class="text-red-800">{{
          player.stats.deaths
        }}</span>&#8198;/&#8198;{{ player.stats.assists }}
        <span class="text-1!">
          &nbsp;({{ Math.round(player.stats.kp * 100) }}%)
        </span>
      </p>

      <Badge
        v-if="player.stats.kda / 100 === Infinity"
        size="5"
        class="
           w-fit gap-1 border-master/40 bg-master/20 text-1! saturate-180 **:leading-0
        ">
        <Icon
          name="fa6-solid:infinity"
          class="mt-[0.04em] size-3.5 dst" />
        KDA
      </Badge>

      <p
        v-else
        class="
          flex gap-1 truncate text-1! leading-3 font-medium text-nowrap text-bc/80 dst
        ">
        {{ player.stats.kda.toFixed(2) }} KDA
      </p>
    </div>

    <!-- healing & vision score -->

    <div
      class="w-20 justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p
        data-tip="Effective Healing & Shielding"

        :class="cn('inline! text-1!', pClass, { 'text-bc/30': player.utility.effectiveHealingAndShielding === 0 })">
        {{
          player.utility.effectiveHealingAndShielding
            === 0 ? '—   ' : Math.round(
            player.utility.effectiveHealingAndShielding,
          ).toLocaleString()
        }}
        <Icon
          name="lp:health"
          class="ml-0.5 inline size-3 -translate-y-px opacity-40" />
      </p>

      <p
        data-class="text-start"
        :data-tip="`Vision Score - ${player.vision.visionScore}
        ${player.vision.wardsPlaced} wards placed
        ${player.vision.controlWardsPlaced} control wards placed
        ${player.vision.wardsKilled} wards destroyed`"
        :class="cn('inline text-1!', pClass)">
        {{ player.vision.visionScore }}
        <Icon
          name="lp:support"
          class="inline size-3! -translate-y-px opacity-60" />
      </p>
    </div>

    <div
      class="w-22 justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p
        data-tip="Total Damage Dealt to Champions"

        :class="cn('inline gap-1!', pClass)">
        {{ player.offense.totalDamage.toLocaleString() }}
        <icon
          name="el:fire"
          class="mr-0.25 ml-0.5 inline size-3 opacity-50" />
      </p>

      <p
        data-tip="Total Damage Taken"

        :class="cn('inline! gap-1!', pClass)">
        {{ Math.round(player.defense.totalDamageTaken).toLocaleString() }}
        <icon
          name="ph:shield-fill"
          class="ml-0.5 inline size-3.5 -translate-y-px opacity-40" />
      </p>
    </div>

    <!-- items -->
    <div
      :class="cn('ml-3 grid w-58 grid-cols-7! grid-rows-1! items-center gap-1! self-center')">
      <Item
        v-for="item in player.items"
        :id="item"
        :key="item"
        :data-id="item"
        data-tip="item"
        :alt="item"
        :class="cn('size-7.5 rounded-md! bg-b3/60 ring-bc/60 transition-all duration-300 **:rounded-md!', { 'hover:scale-105 hover:ring': item, 'pointer-events-none border border-b3': !item })" />
    </div>

    <!-- gold -->

    <div
      class="w-16 justify-end! justify-items-end! py-2 text-nowrap **:text-1!"
      :class="divClass">
      <p>
        {{ stats.cs }} CS
      </p>

      <p class="tracking-tight">
        {{ player.farming.goldEarned.toLocaleString() }} G
      </p>
    </div>
  </div>
</template>
