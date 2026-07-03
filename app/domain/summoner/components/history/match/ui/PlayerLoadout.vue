<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"
import { asAvatarSize } from "~/types/typeAssert"

const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <!-- champ image -->
  <div>
    <div
      class="group/avatar-set relative grid size-max min-w-[100px] place-items-center">
      <HoverIcon
        :id="player?.championId"
        type="champion"
        :tooltip="{
          followCursor: false,
          arrow: true,

          content: {
            side: 'top',
            sideOffset: 6,
          },
        }"
        :ui="{
          root: 'z-0 size-19 transition-transform duration-400 ease-spring group-hover/avatar-set:scale-108',
          image:
            'relative z-0 size-full shrink-0 shadow-sm shadow-black/4 drop-shadow-sm',
        }" />
      <!-- runes -->
      <PlayerRunes class="absolute -top-1 left-0.5 z-2" :player />
    </div>
  </div>
  <div class="relative flex flex-col gap-2">
    <div class="flex w-full items-center justify-between">
      <div class="flex flex-col">
        <KDA
          class="text-start text-lg leading-none font-bold"
          :stats="player.stats" />
        <div class="flex gap-1">
          <PlayerCardStats :match :player />
          <!--  spells -->
          <!--        <PlayerSpells :player class="translate-y-0.5 gap-0.5" size="3xs" />-->
        </div>
      </div>
      <div class="flex items-center gap-1 self-end">
        <HoverIcon
          v-if="match.mapId === 11"
          :id="player.items?.role"
          type="item"
          :tooltip="{
            followCursor: false,
            arrow: true,

            content: {
              side: 'top',
              sideOffset: 6,
            },
          }"
          :map="match.mapId"
          size="md"
          @click.stop />

        <HoverIcon
          v-if="match.mapId === 11"
          :id="player.items?.trinket"
          type="item"
          :tooltip="{
            followCursor: false,
            arrow: true,

            content: {
              side: 'top',
              sideOffset: 6,
            },
          }"
          :map="match.mapId"
          size="md"
          @click.stop />
      </div>
    </div>
    <div v-if="player" class="player-items flex shrink-0 items-center gap-1.5">
      <HoverIcon
        v-for="(item, i) in player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        :tooltip="{
          followCursor: false,
          arrow: true,

          content: {
            side: 'bottom',
            sideOffset: 6,
          },
        }"
        type="item"
        :map="match.mapId"
        size="xl"
        :disabled="!item || item === 0"
        @click.stop />
    </div>
  </div>
</template>
