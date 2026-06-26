<script lang="ts" setup>
const { match, player } = defineProps<{
  match: MatchData
  player: Player
}>()
</script>

<template>
  <!--  <div class="mr-1 flex h-max w-69 shrink-0 flex-col gap-2">
    <div class="flex max-h-15 w-full items-start">
      <!~~ champ image ~~>
      <HoverIcon
        :id="player?.championId"
        type="champion"
        :ui="{ root: 'size-15' }" />
      <!~~  spells ~~>
      <PlayerSpells class="ml-2 shrink-0" :player="player" />

      <!~~ runes ~~>
      <PlayerRunes :player="player" />

      <!~~ grow ~~>
      <Grow />
      <!~~   kda ~~>
      <PlayerKDA :match :player="player" />
    </div>

    <!~~ items ~~>

    <div
      v-if="player"
      class="player-items flex size-full shrink-0 items-center gap-1">
      <HoverIcon
        v-for="(item, i) in player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        type="item"
        :map="match.mapId"
        size="lg"
        :disabled="!item || item === 0"
        @click.stop />

      <HoverIcon
        v-if="match.mapId === 11"
        :id="player.items.role"
        type="item"
        :map="match.mapId"
        size="lg"
        :ui="{
          root: 'ml-2 rounded-full',
        }"
        @click.stop />
    </div>
  </div>-->
  <div class="mr-1 flex h-max w-69 shrink-0 gap-2">
    <!-- items -->
    <!-- grow -->
    <Grow />
    <!--   kda -->
    <PlayerKDA :match :player />

    <div
      v-if="player"
      class="player-items flex size-full shrink-0 items-center gap-1">
      <HoverIcon
        v-for="(item, i) in player.items.slots"
        :id="item"
        :key="`${item}${i}`"
        type="item"
        :map="match.mapId"
        size="lg"
        :disabled="!item || item === 0"
        @click.stop />

      <HoverIcon
        v-if="match.mapId === 11"
        :id="player.items.role"
        type="item"
        :map="match.mapId"
        size="lg"
        :ui="{
          root: 'ml-2 rounded-full',
        }"
        @click.stop />
    </div>
  </div>
</template>
