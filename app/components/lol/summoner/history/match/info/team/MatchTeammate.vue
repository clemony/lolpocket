<script lang="ts" setup>
import { pathIndex } from '~~/shared/indexes'

const { player, playerRank } = defineProps<{
  player: Player
  playerRank: any
}>()

const stats = computed(() => {
  if (!player)
    return null

  const id = player?.perks?.keystone

  const list = [
    player.item0,
    player.item1,
    player.item2,
    player.item3,
    player.item4,
    player.item5,
  ]
  return {
    keystone: ix().runes.find(r => r.id === id),
    cs: player.totalMinionsKilled + player.neutralMinionsKilled,
    items: Object.values(list),
    kda: Math.round(((player.kills + player.assists) / player.deaths) * 100),
    lpScore: playerRank.list.findIndex(p => p.puuid === player.puuid) + 1,
    secondaryPath: pathIndex.find(p => p.id === player?.perks?.secondary)
      ?.name,
  }
})

const divClass
  = '**:not-[h4]:tracking-tight **:not-[h4]:font-semibold **:text-2 grid items-center grid-rows-2 justify-start justify-items-start h-full py-2 shrink-0 max-h-16.5'

const pClass
  = 'leading-0 rounded-tiny w-full flex gap-2 py-px  text-end items-center justify-end font-semibold tracking-tight text-nowrap truncate hover:underline'

const runeClass
  = 'rounded-full *:rounded-full bg-b1 size-5 p-0 grid place-items-center drop-shadow-sm  '
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
          content: ix().champNameById(player?.championId),
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
        class="h-11 gap-0.5 [&_img]:size-4 [&_img]:rounded-[3px]" />
    </div>
    <!-- name and tag -->

    <div
      class="max-w-[60px] grow py-3!"
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

      <p
        class="
          flex items-center self-start truncate text-2 font-medium text-nowrap
          opacity-60
        ">
        <span>#{{ player.riotIdTagline }}</span>
      </p>
    </div>

    <!-- runes -->
    <div
      :class="
        cn('flex! h-16 w-[18px] flex-col items-center justify-center gap-0.5 self-center py-2',
        )
      ">
      <div
        v-tippy="{
          theme: 'neutral',
          content: ix().runeNameById(player?.perks?.keystone).toString(),
          placement: 'left',
        }"
        :class="runeClass">
        <Img
          :img="`/img/runes/${stats.keystone?.id}.webp`"
          :alt="stats?.keystone?.id?.toString()"
          class="
            tippy-target absolute h-5.5! w-auto rounded-tiny object-center
            ring-bc/60 dst transition-all duration-300 hover:scale-110
            hover:ring
          " />
      </div>
      <div
        v-tippy="{
          theme: 'neutral',
          content: stats.secondaryPath,
          placement: 'left',
        }"
        :class="runeClass">
        <Img
          :alt="stats.secondaryPath"
          :img="`/img/paths/${stats.secondaryPath}.webp`"
          class="
            absolute size-full h-4.25 w-auto rounded-tiny object-center
            ring-bc/60 dst transition-all duration-300 hover:scale-120
            hover:ring
          "
          :class="{
            'h-4! w-auto': stats.secondaryPath?.toLowerCase() === 'inspiration',
          }" />
      </div>
    </div>

    <!-- kda -->

    <div
      class="w-[50px]"
      :class="divClass">
      <p
        class="
          flex flex-nowrap items-center text-2! leading-0 font-semibold
          tracking-wide text-nowrap **:tracking-wide
        ">
        {{ player.kills }}&#8198;/&#8198;<span class="text-red-800">{{
          player.deaths
        }}</span>&#8198;/&#8198;{{ player.assists }}
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
          flex gap-1 truncate leading-3 font-medium text-nowrap text-bc/80 dst
        ">
        {{ stats.kda / 100 }} KDA
      </p>
    </div>

    <!-- mvp kp -->

    <div :class="cn('relative w-[44px]', divClass)">
      <div class="flex w-full items-center gap-2">
        <div class="font-bold tracking-wide">
          {{ player.mvpScore }}
        </div>
        <!-- badge - rank / kp -->

        <Badge
          v-if="
            player.puuid === playerRank.mvp || player.puuid === playerRank.ace
          "
          size="5"
          :class="
            cn('-mt-px gap-1 px-1! text-0! font-bold tracking-wide text-white shadow-xs **:leading-0',
               {
                 'border-gold/40 bg-precision ': player.puuid === playerRank.mvp,
                 'bg-fighter/70 border-fighter': player.puuid === playerRank.ace,
               },
            )
          ">
          {{ player.puuid === playerRank.mvp ? "MVP" : "ACE" }}
        </Badge>

        <Badge
          v-else
          size="5"
          class="-mt-px px-1 text-1! leading-0 font-normal shadow-xs">
          {{ stats.lpScore }}{{ formatNumberPosition(stats.lpScore) }}
        </Badge>
      </div>
      <p
        class="
          w-full truncate text-2! leading-4 font-medium tracking-tight
          text-bc/80
        ">
        {{ Math.round(player.challenges.killParticipation * 100) }}%
        <span
          class="leading-0 **:text-1!">kp</span>
      </p>
    </div>

    <!-- healing & vision score -->

    <div
      class="w-[60px] justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
          theme: 'neutral',
          content: 'Effective Healing & Shielding',
          placement: 'top',
        }"
        :class="cn(pClass)">
        {{
          Math.round(
            player.challenges.effectiveHealAndShielding ?? 0,
          ).toLocaleString()
        }}
        <span class="relative grid size-3 justify-end">
          <Icon
            name="lp:hsp"
            class="left-0.25 size-3! text-bc/60! dst" />
        </span>
      </p>

      <p
        v-tippy="{
          content: `[Vision Score] ${player.wardsPlaced} placed (${player.challenges.controlWardsPlaced} pink)`,
          placement: 'top',
          theme: 'neutral',
        }"
        :class="cn(pClass)">
        {{ player.visionScore }}
        <Icon
          name="lp:support"
          class="size-3! text-bc dst" />
      </p>
    </div>

    <div
      class="w-[60px] justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p :class="cn(pClass)">
        {{ player.totalDamageDealtToChampions.toLocaleString() }}
        <span class="relative grid size-3 justify-center">
          <icon
            name="el:fire"
            :class="cn('absolute size-3 dst')" />
        </span>
      </p>

      <p
        v-tippy="{
          theme: 'neutral',
          content: 'Total Damage Taken',
          placement: 'top',
        }"
        :class="cn(pClass)">
        {{ Math.round(player.totalDamageTaken).toLocaleString() }}
        <span class="relative grid size-3 justify-center">
          <icon
            name="ph:shield-fill"
            class="bottom-px size-3.5 text-zinc-400! dst" />
        </span>
      </p>
    </div>

    <div
      :class="cn('w-[170px] grid-cols-6! grid-rows-1! justify-self-end pl-3', divClass)">
      <template
        v-for="i in 6"
        :key="i">
        <Item
          v-if="stats?.items[i]"
          :id="stats?.items[i]"
          v-tippy="{
            theme: 'neutral',
            content: ix().itemNameById(stats.items[i]),
            placement: 'bottom',
          }"
          class="
            size-8 rounded-md ring-bc/60 transition-all duration-300
            *:rounded-md hover:scale-105 hover:ring
          " />

        <Placeholder
          v-else
          class="
            size-8 shrink-0 rounded-md border-b3 bg-b2/80 shadow-sm
            shadow-black/4
          " />
      </template>
    </div>

    <!-- gold -->

    <div
      class="w-[50px] justify-end! justify-items-end! text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
          theme: 'neutral',
          content: `${player.totalMinionsKilled.toLocaleString()} minions`,
          placement: 'top',
        }"
        class="hover:underline">
        {{ stats.cs }} CS
      </p>

      <p class="hover:underline">
        {{ player.goldEarned.toLocaleString() }} G
      </p>
    </div>
  </div>
</template>
