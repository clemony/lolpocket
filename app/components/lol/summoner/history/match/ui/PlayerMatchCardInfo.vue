<script lang="ts" setup>
const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <div class="mr-1 flex h-max w-69 shrink-0 flex-col gap-2">
    <div class="flex max-h-15 w-full items-start">
      <!-- champ image -->
      <Champion :id="player?.championId" size="15" />
      <!--  spells -->
      <PlayerSpells class="ml-2 shrink-0" :player="player" />

      <!-- runes -->
      <PlayerRunes :player="player" />

      <!-- grow -->
      <Grow />
      <!--   kda -->
      <PlayerKDA :match :player="player" />
    </div>

    <!-- items -->

    <div
      v-if="player"
      class="player-items flex size-full shrink-0 items-start gap-1">
      <Item
        v-for="(item, i) in player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        :map="match.mapId"
        side="bottom"
        :disabled="!item || item === 0"
        :ui="{
          root: 'size-9 rounded-full',
          image: cn('ring-neutral/60 transition-all duration-300 hover:ring', {
            'pointer-events-none border border-pc/10 bg-blend-screen shadow-xs inset-shadow-none saturate-40 after:absolute after:size-full after:rounded-md after:border':
              !item,
            'bg-dom/16! after:border-dom/20 after:mix-blend-hue': !player.win,
            'opacity-90': !player.win && !item,
            'bg-insp/16! after:border-insp/20': player.win
          })
        }" />

      <Item
        v-if="match.mapId === 11"
        :id="player.items.role"
        :map="match.mapId"
        side="bottom"
        :ui="{
          root: 'ml-2 size-9 rounded-full',
          image: cn('img-active', {
            'no-img': !player.items.role,
            'img-loss': !player.win,
            'opacity-90': !player.win && !player.items.role,
            'img-win': player.win
          })
        }" />
    </div>
  </div>
</template>
