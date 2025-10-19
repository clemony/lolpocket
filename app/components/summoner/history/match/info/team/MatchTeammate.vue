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
        class="rounded-lg size-11 self-center  hover:scale-105 transition-all duration-300 mb-px" />
    </div>

    <div
      class="!grid-rows-1"
      :class="divClass">
      <PlayerSpells
        :player="player"
        class="[&_img]:size-5 [&_img]:rounded-[3px] h-11 gap-0.5   " />
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
        class="font-semibold text-nowrap text-2 truncate flex-nowrap items-end size-full">
        {{ player.riotIdGameName }}
      </h4>

      <p
        class="font-medium text-nowrap text-2 flex self-start items-center truncate opacity-60">
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
          class="*:!h-5.5 size-full  object-center absolute tippy-target  hover:ring hover:scale-110 transition-all duration-300 ring-bc/60 rounded-tiny" />
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
          class="*:h-4.5 size-full object-center absolute  hover:ring hover:scale-120 transition-all duration-300 ring-bc/60 rounded-tiny"
          :class="{
            '!h-4': stats.secondaryPath?.toLowerCase() === 'inspiration',
          }" />
      </div>
    </div>

    <!-- kda -->

    <div
      class=""
      :class="divClass">
      <p class="font-semibold leading-0 items-center text-nowrap flex !text-2 flex-nowrap tracking-wide **:tracking-wide">
        {{ player.kills }}&#8198;/&#8198;<span class="text-red-800">{{ player.deaths }}</span>&#8198;/&#8198;{{ player.assists }}
      </p>

      <Badge
        v-if="stats.kda / 100 === Infinity"
        size="xs"
        class="border-master/40 saturate-180 bg-master/20 text-0 **:leading-0">
        <icon
          name="fa6-solid:infinity"
          class="size-3.5 dst mt-[0.04em]" />
        KDA
      </Badge>

      <p
        v-else
        class="flex leading-0 gap-1 dst text-bc/80 text-nowrap leading-3 truncate font-medium">
        {{ stats.kda / 100 }} KDA
      </p>
    </div>

    <!-- mvp kp -->

    <div :class="cn('relative size-full', divClass)">
      <div class="grid grid-cols-2 items-center w-full ">
        <div class="font-bold tracking-wide">
          {{ player.mvpScore }}
        </div>
        <!-- badge - rank / kp -->

        <Badge
          v-if="
            player.puuid === playerRank.mvp || player.puuid === playerRank.ace
          "
          size="xs"
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
          class="text-1  font-normal absolute right-0 opacity-60 leading-0 ">
          {{ stats.lpScore }}{{ formatNumberPosition(stats.lpScore) }}
        </div>
      </div>
      <p
        class="text-bc/80 w-full leading-4 truncate font-medium tracking-tight !text-2">
        {{ Math.round(player.challenges.killParticipation * 100) }}%
        <span class="**:!text-1  leading-0 ">kp</span>
      </p>
    </div>

    <!-- healing & vision score -->

    <div
      class="!justify-items-end !justify-end text-nowrap"
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
        <span class="size-3 relative grid justify-end">
          <i-lol-hsp
            name="oi:plus"
            class="!text-bc/50 dst !size-3 left-0.25" />
        </span>
      </p>

      <p
        v-tippy="{
          content: `[Vision Score] ${player.wardsPlaced} placed (${player.challenges.controlWardsPlaced} pink)`,
          placement: 'top',
        }"
        :class="cn(pClass)">
        {{ player.visionScore }}
        <i-lol-support class="!size-3 dst text-bc" />
      </p>
    </div>

    <div
      class="!justify-items-end !justify-end text-nowrap"
      :class="divClass">
      <p :class="cn(pClass)">
        {{ player.totalDamageDealtToChampions.toLocaleString() }}
        <span class="size-3 relative grid justify-center">
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
        <span class="size-3 relative grid justify-center">
          <icon
            name="ph:shield-fill"
            class="!text-zinc-400 dst size-3.5 bottom-px" />
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
          class="size-8 rounded-md *:rounded-md hover:ring hover:scale-105 transition-all duration-300 ring-bc/60" />

        <Placeholder
          v-else
          class="size-8 rounded-md shrink-0 bg-b2/80 border-b3 shadow-sm  shadow-black/4" />
      </template>
    </div>

    <!-- gold -->

    <div
      class="!justify-items-end !justify-end text-nowrap"
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
