<script lang="ts" setup>
import { pathIndex } from '#shared/appdata/index/path-index'

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
  = '**:not-[h4]:tracking-tight **:not-[h4]:font-semibold **:text-2 grid items-center grid-rows-2 justify-start justify-items-start h-full py-2  max-h-16.5'

const pClass
  = 'leading-0 rounded-tiny flex gap-2 py-px  text-end items-center justify-end font-semibold tracking-tight text-nowrap truncate hover:underline'

const runeClass
  = 'btn btn-neutral size-5 p-0 grid place-items-center shadow-sm drop-shadow-sm !bg-black/90 btn-square rounded-[4px]'
</script>

<template>
  <div
    v-if="player"
    :class="
      cn(
        'grid z-1 grid-flow-col gap-1  items-center overflow-hidden justify-between grow size-full *:size-full max-h-16.5 h-16.5 pl-2 pr-2 ',
        'grid-cols-[33px_18px_1.25fr_18px_1fr_1fr_1fr_1.1fr_3fr_0.9fr]',
      )
    ">
    <div
      class="!grid-rows-1"
      :class="divClass">
      <ChampionIcon
        :id="player?.championId"
        v-tippy="{
          content: ix().champNameById(player?.championId),
          placement: 'top',
        }"
        alt="champion-icon"
        class="mb-px size-11 self-center  rounded-lg transition-all duration-300 hover:scale-105" />
    </div>

    <div
      class="!grid-rows-1"
      :class="divClass">
      <PlayerSpells
        :player="player"
        class="h-11 gap-0.5 [&_img]:size-5 [&_img]:rounded-[3px]   " />
    </div>
    <!-- name and tag -->

    <div
      class="!py-3"
      :class="divClass">
      <h4
        v-tippy="{
          content: player.riotIdGameName,
          placement: 'top',
        }"
        class="text-2 size-full flex-nowrap items-end truncate font-semibold text-nowrap">
        {{ player.riotIdGameName }}
      </h4>

      <p
        class="text-2 flex items-center self-start truncate font-medium text-nowrap opacity-60">
        <span>#{{ player.riotIdTagline }}</span>
      </p>
    </div>

    <!-- runes -->
    <div
      :class="
        cn(
          '!flex flex-col h-16 self-center py-2 justify-center items-center gap-0.5',
        )
      ">
      <div
        v-tippy="{
          content: ix().runeNameById(player?.perks?.keystone).toString(),
          placement: 'left',
        }"
        :class="runeClass">
        <Img
          :img="`/img/runes/${stats.keystone?.path}/${stats.keystone?.id}.webp`"
          :alt="stats?.keystone?.id?.toString()"
          class="tippy-target ring-bc/60  rounded-tiny absolute size-full  object-center transition-all duration-300 *:!h-5.5 hover:scale-110 hover:ring" />
      </div>
      <div
        v-tippy="{
          content: stats.secondaryPath,
          placement: 'left',
        }"
        :class="runeClass">
        <Img
          :alt="stats.secondaryPath"
          :img="`/img/paths/${stats.secondaryPath}.webp`"
          class="ring-bc/60 rounded-tiny absolute size-full  object-center transition-all duration-300 *:h-4.5 hover:scale-120 hover:ring"
          :class="{
            '!h-4': stats.secondaryPath?.toLowerCase() === 'inspiration',
          }" />
      </div>
    </div>

    <!-- kda -->

    <div
      class=""
      :class="divClass">
      <p class="!text-2 flex flex-nowrap items-center leading-0 font-semibold tracking-wide text-nowrap **:tracking-wide">
        {{ player.kills }}&#8198;/&#8198;<span class="text-red-800">{{ player.deaths }}</span>&#8198;/&#8198;{{ player.assists }}
      </p>

      <Badge
        v-if="stats.kda / 100 === Infinity"
        size="8"
        class="border-master/40 bg-master/20 text-0 saturate-180 **:leading-0">
        <icon
          name="fa6-solid:infinity"
          class="dst mt-[0.04em] size-3.5" />
        KDA
      </Badge>

      <p
        v-else
        class="dst text-bc/80 flex gap-1 truncate leading-0 leading-3 font-medium text-nowrap">
        {{ stats.kda / 100 }} KDA
      </p>
    </div>

    <!-- mvp kp -->

    <div :class="cn('relative size-full', divClass)">
      <div class="grid w-full grid-cols-2 items-center ">
        <div class="font-bold tracking-wide">
          {{ player.mvpScore }}
        </div>
        <!-- badge - rank / kp -->

        <Badge
          v-if="
            player.puuid === playerRank.mvp || player.puuid === playerRank.ace
          "
          size="8"
          :class="
            cn('!px-1 gap-1 absolute right-0 font-bold text-white tracking-wide !text-0 **:leading-0', {
              'border-gold/40 bg-precision ':
                player.puuid === playerRank.mvp,
              'bg-fighter/70 border-fighter':
                player.puuid === playerRank.ace,
            })
          ">
          {{ player.puuid === playerRank.mvp ? "MVP" : "ACE" }}
        </Badge>

        <div
          v-else
          class="text-1  absolute right-0 leading-0 font-normal opacity-60 ">
          {{ stats.lpScore }}{{ formatNumberPosition(stats.lpScore) }}
        </div>
      </div>
      <p
        class="text-bc/80 !text-2 w-full truncate leading-4 font-medium tracking-tight">
        {{ Math.round(player.challenges.killParticipation * 100) }}%
        <span class="**:!text-1  leading-0 ">kp</span>
      </p>
    </div>

    <!-- healing & vision score -->

    <div
      class="!justify-end !justify-items-end text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
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
          <i-lol-hsp
            name="oi:plus"
            class="!text-bc/50 dst left-0.25 !size-3" />
        </span>
      </p>

      <p
        v-tippy="{
          content: `[Vision Score] ${player.wardsPlaced} placed (${player.challenges.controlWardsPlaced} pink)`,
          placement: 'top',
        }"
        :class="cn(pClass)">
        {{ player.visionScore }}
        <i-lol-support class="dst text-bc !size-3" />
      </p>
    </div>

    <div
      class="!justify-end !justify-items-end text-nowrap"
      :class="divClass">
      <p :class="cn(pClass)">
        {{ player.totalDamageDealtToChampions.toLocaleString() }}
        <span class="relative grid size-3 justify-center">
          <icon
            name="el:fire"
            :class="cn(' dst absolute size-3')" />
        </span>
      </p>

      <p
        v-tippy="{
          content: 'Total Damage Taken',
          placement: 'top',
        }"
        :class="cn(pClass)">
        {{ Math.round(player.totalDamageTaken).toLocaleString() }}
        <span class="relative grid size-3 justify-center">
          <icon
            name="ph:shield-fill"
            class="dst bottom-px size-3.5 !text-zinc-400" />
        </span>
      </p>
    </div>

    <div
      :class="
        cn('!grid-cols-6  pl-3 justify-self-end  !grid-rows-1', divClass)
      ">
      <template
        v-for="i in 6"
        :key="i">
        <Item
          v-if="stats?.items[i]"
          :id="stats?.items[i]"
          v-tippy="{
            content: ix().itemNameById(stats.items[i]),
            placement: 'bottom',
            theme: 'base',
          }"
          class="ring-bc/60 size-8 rounded-md transition-all duration-300 *:rounded-md hover:scale-105 hover:ring" />

        <Placeholder
          v-else
          class="bg-b2/80 border-b3 size-8 shrink-0 rounded-md shadow-sm  shadow-black/4" />
      </template>
    </div>

    <!-- gold -->

    <div
      class="!justify-end !justify-items-end text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
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
