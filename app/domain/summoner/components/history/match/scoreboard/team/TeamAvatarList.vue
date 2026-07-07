<script lang="ts" setup>
const { team, match } = defineProps<{
  team: Player[]
  match: MatchData
}>()

function navigate(player: Player) {
  navigateTo(`/${match.regionId}/${player.name}_${player.tag}`)
}
</script>

<template>
  <div class="grid w-full auto-rows-fr items-center">
    <button
      v-for="player in team"
      :key="player.puuid"
      class="group/p relative inline-flex w-full cursor-pointer items-center justify-start gap-1 truncate py-px pr-1 align-baseline text-xs font-medium **:pointer-events-none"
      @click.stop.prevent="navigate(player)">
      <HoverAvatar
        as="button"
        :src="`/img/champion/${player?.championId}.webp`"
        size="2xs"
        :ui="{
          root: 'size-full! shrink-0 border-0!',
          image: 'drop-shadow-sm',
          icon: 'block!',
        }" />

      <span
        class="pointer-events-none max-w-full grow truncate text-start font-medium tabular-nums group-hover/p:underline"
        >{{ player.name }} #{{ player.tag }}</span
      >
    </button>
  </div>
</template>
