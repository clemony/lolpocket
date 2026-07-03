<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"
const { team } = defineProps<{
  team: Player[]
  match: MatchData
}>()
</script>

<template>
  <div class="grid w-full auto-rows-fr items-center">
    <button
      v-for="player in team"
      :key="player.puuid"
      class="group/p relative inline-flex w-full cursor-pointer items-center justify-start gap-1 truncate py-px pr-1 align-baseline text-xs font-medium **:pointer-events-none"
      @click.stop="
        navigateTo(`/${match.regionId}/${player.name}_${player.tag}`)
      ">
      <div class="grid size-5 shrink-0 place-items-center rounded-full bg-n2">
        <Icon
          name="i-link"
          class="absolute z-0 size-4 text-nc saturate-90 **:stroke-[10%]!" />

        <div
          class="absolute grid aspect-square size-5 shrink-0 place-items-center place-self-center transition-opacity duration-200 ease-spring group-hover/p:opacity-0!">
          <HoverAvatar
            as="button"
            :src="`/img/champion/${player?.championId}.webp`"
            size="2xs"
            :ui="{
              root: 'size-full! shrink-0 border-0!',
              image: 'drop-shadow-sm',
              icon: 'block!',
            }" />
        </div>
      </div>
      <span
        class="pointer-events-none max-w-full grow truncate text-start font-medium group-hover/p:underline"
        >{{ player.name }} #{{ player.tag }}</span
      >
    </button>
  </div>
</template>
