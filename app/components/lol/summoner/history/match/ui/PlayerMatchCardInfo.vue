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
      <ChampionIcon
        :id="player?.championId"
        class="size-15   hover:scale-105"
      />
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
      class="player-items flex size-full shrink-0 items-start gap-1"
    >
      <Item
        v-for="(item, i) in player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        :map="match.mapId"
        placement="bottom"
        :class="
          cn('img-active size-9', {
            'no-img': !item,
            'img-loss': !player.win,
            'opacity-90': !player.win && !item,
            'img-win': player.win,
          })
        "
      />

      <Item
        v-if="match.mapId === 11"
        :id="player.items.role"
        :map="match.mapId"
        placement="bottom"
        :class="
          cn('img-active rounded-full size-9 ml-2', {
            'no-img': !player.items.role,
            'img-loss': !player.win,
            'opacity-90': !player.win && !player.items.role,
            'img-win': player.win,
          })
        "
      />
    </div>
  </div>
</template>
