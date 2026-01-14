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
             size-header rounded-lg shadow-sm inset-shadow-xs drop-shadow-sm
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
      <PlayerKDA
        :match
        :player="match.player" />
    </div>

    <!-- items -->

    <div
      v-if="match.player"
      class="flex size-full shrink-0 items-start gap-1">
      <Item
        v-for="item, i in match.player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        size="sq-9"
        tip="bottom"
        :class="cn('img-active', {
          'no-img': !item,
          'img-loss': !match.player.win,
          'opacity-90': !match.player.win && !item,
          'img-win': match.player.win })" />

      <Item
        v-if="match.mapId === 11"
        :id="match.player.items.role"
        size="c-9"
        tip="bottom"
        :class="cn('img-active ml-2', {
          'no-img': !match.player.items.role,
          'img-loss': !match.player.win,
          'opacity-90': !match.player.win && !match.player.items.role,
          'img-win': match.player.win })" />
    </div>
  </div>
</template>

<style scoped>
@reference '@css/tailwind.css';

.img-active {
  @apply ring-bc/60 transition-all duration-300  hover:scale-105 hover:ring;
}
.no-img {
  @apply border bg-blend-screen  pointer-events-none inset-shadow-none border-bc/10 shadow-xs saturate-40  after:size-full after:rounded-md after:border after:absolute;
}

.img-loss {
  @apply bg-domination/16! after:border-domination/20 after:mix-blend-hue;
}

.img-win {
  @apply bg-inspiration/16! after:border-inspiration/20;
}
</style>