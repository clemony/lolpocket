<script lang="ts" setup>
const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <div class="relative flex flex-col items-center gap-1.5">
    <!-- champ image -->
    <HoverAvatar
      :text="`${champNameById(player?.championId)} icon`"
      :alt="`${champNameById(player?.championId)} icon`"
      :src="`/img/champion/${player?.championId}.webp`"
      :ui="{ root: 'size-20', image: 'drop-shadow-sm' }" />
    <!--  spells -->
    <PlayerSpells
      class="absolute top-0 left-0 size-20"
      :player
      size="sm"
      :ui="{
        root: 'odd:absolute odd:left-0 even:absolute even:right-0',
      }" />

    <!-- runes -->
    <PlayerRunes class="absolute right-0" :player />
  </div>
</template>
