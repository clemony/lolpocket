<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"
const { team } = defineProps<{
  team: Player[]
  match: MatchData
}>()
</script>

<template>
  <div class="grid auto-rows-fr items-center">
    <button
      v-for="player in team"
      :key="player.puuid"
      class="group/player relative inline-flex max-w-34 basis-1/2 cursor-pointer items-center justify-start gap-1 truncate py-px pr-1 align-baseline text-xs font-medium **:pointer-events-none"
      @click.stop="
        navigateTo(`/${match.regionId}/${player.name}_${player.tag}`)
      ">
      <div class="grid size-5 place-items-center rounded-full bg-n2">
        <Icon
          name="i-link"
          class="absolute z-0 size-4 text-nc saturate-90 **:stroke-[10%]!" />
        <HoverAvatar
          as="button"
          :src="`/img/champion/${player?.championId}.webp`"
          size="2xs"
          :ui="{
            root: 'z-1 m-0! shrink-0 translate-0! place-self-center border-0! bg-transparent p-0! transition-opacity duration-200 group-hover/player:opacity-0',
            image: 'drop-shadow-sm',
            icon: 'block!',
          }" />
      </div>
      <span
        class="max-w-full grow truncate text-start font-medium group-hover/player:underline"
        >{{ player.name }} #{{ player.tag }}</span
      >
    </button>
  </div>
</template>
