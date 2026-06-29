<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"
import { asAvatarSize } from "~/types/typeAssert"

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <div
    class="relative flex size-max shrink-0 flex-col justify-center pr-4 pl-6">
    <!-- champ image -->
    <div class="">
      <HoverAvatar
        :tooltip="{
          text: `${champNameById(player?.championId)} icon`,
          content: { side: 'top' },
          arrow: true,
          followCursor: false,
        }"
        :alt="`${champNameById(player?.championId)} icon`"
        :src="`/img/champion/${player?.championId}.webp`"
        :ui="{
          root: 'after;border! after;border-b-2! after;border-p3 after;border-b-p4 after;inset-ring! after;inset-ring-pc after;size-full after;absolute after;z-1 after;inset-0 relative z-0 size-19 shrink-0 shadow-sm drop-shadow-sm',
          image: 'size-full',
        }" />
    </div>

    <!-- runes -->
    <PlayerRunes class="absolute left-0 z-2 -translate-x-13" :player />
  </div>

  <div class="relative flex flex-col items-center gap-2">
    <div class="flex w-full items-center justify-between">
      <div class="flex flex-col">
        <KDA
          class="text-start text-lg leading-none font-bold"
          :stats="player.stats" />
        <PlayerCardStats :match :player />
      </div>
      <div class="flex items-center gap-1 self-end">
        <HoverIcon
          v-if="match.mapId === 11"
          :id="player.items.role"
          type="item"
          :map="match.mapId"
          size="md"
          :ui="{
            root: 'rounded-full',
          }"
          @click.stop />

        <HoverIcon
          v-if="match.mapId === 11"
          :id="player.items?.trinket"
          type="item"
          :map="match.mapId"
          size="md"
          :ui="{
            root: 'rounded-full',
          }"
          @click.stop />
      </div>
    </div>
    <div v-if="player" class="player-items flex shrink-0 items-center gap-1.5">
      <HoverIcon
        v-for="(item, i) in player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        type="item"
        :map="match.mapId"
        size="xl"
        :ui="{
          root: 'rounded-full',
        }"
        :disabled="!item || item === 0"
        @click.stop />
    </div>
    <!--  spells -->
    <PlayerSpells
      :player
      class="gap-1.5 self-start"
      size="xs"
      :ui="{
        root: cn(''),
      }" />
  </div>
</template>
