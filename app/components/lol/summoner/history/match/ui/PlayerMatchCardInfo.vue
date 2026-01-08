<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()
</script>

<template>
  <div class="mr-1 flex h-max w-69 shrink-0 flex-col gap-2">
    <div class="flex w-full items-start">
      <!-- champ image -->
      <ChampionIcon
        :id="match.player?.championId"
        :data-id="match?.player?.championId"
        data-tip="champion"
        :alt="`${champNameById(match.player?.championId)}-icon`"
        class="
             size-15 rounded-lg shadow-sm inset-shadow-xs drop-shadow-sm
              transition-all duration-300 hover:scale-105
            " />
      <!--  spells -->
      <PlayerSpells
        :player="match.player"
        class="ml-2 shrink-0" />

      <!-- runes -->
      <PlayerRunes
        :player="match.player" />

      <!-- grow -->
      <Grow />
      <!--   kda -->
      <KDA
        :match
        :player="match.player" />
    </div>

    <!-- items -->

    <div
      v-if="match.player"
      class="flex h-full w-full shrink-0 items-start gap-1 *:rounded-md">
      <Item
        v-for="item, i in match.player.items"
        :id="item"
        :key="`${item}${i}`"
        :data-id="item"
        data-placement="bottom"
        data-tip="item"
        loading-style="none"
        :alt="item"
        :class="cn('size-9 shrink-0 rounded-md! ring-bc/60 transition-all duration-300 **:rounded-md! hover:scale-105 hover:ring', {
          'border bg-blend-screen  pointer-events-none inset-shadow-none border-bc/10 shadow-xs saturate-40  after:size-full after:rounded-md after:border after:absolute': !item,
          'bg-domination/16! after:border-domination/20 after:mix-blend-hue': !match.player.win,
          ' opacity-90 ': !match.player.win && !item,
          'bg-inspiration/16! after:border-inspiration/20': match.player.win })" />
    </div>
  </div>
</template>