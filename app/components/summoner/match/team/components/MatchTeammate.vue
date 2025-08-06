<script lang="ts" setup>
import { pathIndex } from 'data/index/path-index'

const { player } = defineProps<{
  player: Player
}>()

const ix = useIndexStore()

const dmgArray = [
  {
    icon: 'el:fire',
    class: 'text-purple-600/90 size-3',
    value: player.magicDamageDealtToChampions,
  },
  {
    icon: 'bow',
    class: ' text-yellow-600  bottom-px',
    value: player.physicalDamageDealtToChampions,
  },
  {
    icon: 'mdi:sword',
    class: 'text-grandmaster',
    value: player.trueDamageDealtToChampions,
  },
]

const stats = computed(() => {
  if (!player)
    return null

  const id = player?.perks?.keystone
  const dmg = dmgArray.reduce((max, current) =>
    current.value > max.value ? current : max,
  )
  const list = [
    player.item0,
    player.item1,
    player.item2,
    player.item3,
    player.item4,
    player.item5,
  ]
  return {
    kda: Math.round(((player.kills + player.assists) / player.deaths) * 100),
    keystone: ix.runes.find(r => r.id == id),
    secondaryPath: pathIndex.find(p => p.id == player?.perks?.secondary)
      ?.name,
    cs:
      player.totalMinionsKilled
      + player.neutralMinionsKilled
      + player.totalEnemyJungleMinionsKilled
      + player.totalAllyJungleMinionsKilled,
    dmgIcon: dmg.icon,
    dmgIconClass: dmg.class,
    items: Object.values(list),
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
    class="grid z-1 grid-flow-col gap-3 grid-cols-[28px_22px_1.5fr_22px_1.1fr_repeat(2,1fr)_1.1fr_1.5fr_1fr] items-center overflow-hidden justify-between grow size-full max-h-16.5 h-16.5 pl-3 pr-4">
    <div
      class="!grid-rows-1"
      :class="divClass">
      <ChampionIcon
        :id="player?.championId"
        v-tippy="{
          content: player?.championName,
          placement: 'top',
        }"
        :alt="player?.championName"
        class="rounded-lg size-11 self-center hover-ring mb-px" />
    </div>

    <div
      class="!grid-rows-1"
      :class="divClass">
      <PlayerSpells
        :player="player"
        class="[&_img]:size-5 [&_img]:rounded-[3px] h-11 gap-0.5" />
    </div>
    <!-- name and tag -->

    <div
      class="!-ml-3 !py-3"
      :class="divClass">
      <h4
        v-tippy="{
          content: player.riotIdGameName,
          placement: 'top',
        }"
        class="font-bold text-nowrap text-2 truncate flex-nowrap items-end size-full">
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
          '!flex flex-col h-16 -ml-2 self-center py-2 justify-center items-center gap-0.5',
        )
      ">
      <p
        v-tippy="{
          content: ix.runeNameById(player?.perks?.keystone).toString(),
          placement: 'left',
        }"
        :class="runeClass">
        <Img
          :img="`/img/runes/${stats.keystone?.path}/${stats.keystone?.key}.webp`"
          :alt="stats.keystone.key"
          class="!h-5.5 w-auto object-center absolute tippy-target hover-ring rounded-tiny" />
      </p>
      <p
        v-tippy="{
          content: stats.secondaryPath,
          placement: 'left',
        }"
        :class="runeClass">
        <Img
          :alt="stats.secondaryPath"
          :img="`/img/runes/${stats.secondaryPath}.webp`"
          class="h-4.5 w-auto object-center absolute hover-ring rounded-tiny"
          :class="{
            '!h-4': stats.secondaryPath?.toLowerCase() == 'inspiration',
          }" />
      </p>
    </div>

    <!-- kda -->

    <div
      class="-ml-3"
      :class="divClass">
      <h4 class="font-bold leading-0 items-center text-nowrap flex flex-nowrap">
        {{ player.kills }}
        <icon
          name="slash"
          class="-mx-px dst size-3" />
        {{ player.deaths }}
        <icon
          name="slash"
          class="-mx-px dst size-3" />
        {{ player.assists }}
      </h4>

      <Badge
        v-if="stats.kda / 100 == Infinity"
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

    <div :class="divClass">
      <Badge
        size="xs"
        class="border-gold/40 bg-precision/90 gap-1 **:leading-0">
        <span class="font-bold text-white tracking-wide text-0">MVP</span>
      </Badge>
      <p
        class="text-bc/80 leading-4 truncate font-medium tracking-tight !text-2">
        {{ Math.round(player.challenges.killParticipation * 100) }}% KP
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
        class="leading-0 flex gap-1 text-end items-center font-medium text-nowrap truncate hover:underline">
        {{
          Math.round(
            player.challenges.effectiveHealAndShielding ?? 0,
          ).toLocaleString()
        }}
        <span class="size-3 relative grid justify-end">
          <icon
            name="oi:plus"
            class="text-cyan-600/50 dst size-3 left-0.25" />
        </span>
      </p>

      <p
        v-tippy="{
          content: `[Vision Score] ${player.wardsPlaced} placed (${player.challenges.controlWardsPlaced} pink)`,
          placement: 'top',
        }"
        class="font-semibold text-nowrap w-full justify-end text-end flex gap-1 flex-nowrap items-center">
        {{ player.visionScore }}
        <i-roles-support class="size-3 dst text-bc" />
      </p>
    </div>

    <div
      class="!justify-items-end !justify-end text-nowrap"
      :class="divClass">
      <p
        v-tippy="{
          content: `[Total Champion Dmg Dealt]
         Physical: ${player.physicalDamageDealtToChampions.toLocaleString()} -
         Magic: ${player.magicDamageDealtToChampions.toLocaleString()}
         True: ${player.trueDamageDealtToChampions.toLocaleString()}`,
          placement: 'top',
        }"
        :class="cn(pClass)">
        {{ player.totalDamageDealtToChampions.toLocaleString() }}
        <span class="size-3 relative grid justify-center">
          <icon
            :name="stats.dmgIcon"
            :class="cn(' dst absolute size-3.25', stats.dmgIconClass)" />
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

    <div :class="cn('!grid-cols-6 w-59 !grid-rows-1', divClass)">
      <Item
        v-for="i in 6"
        :id="stats.items[i] ?? null"
        :key="i"
        v-tippy="{ content: ix.itemNameById(stats.items[i]), placement: 'top' }"
        class="size-9 rounded-md *:rounded-md hover-ring" />
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

      <p
        v-tippy="{
          content: `${player.goldSpent.toLocaleString()}g Spent`,
          placement: 'top',
        }"
        class="hover:underline">
        {{ player.goldEarned.toLocaleString() }} G
      </p>
    </div>
  </div>
</template>
