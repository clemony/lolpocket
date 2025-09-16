<script lang="ts" setup>
const props = defineProps<{
  match: MatchData
}>()
const match = computed(() => {
  return props.match
})

const blue = computed(() => {
  return match.value.participants.filter(p => p.teamId == 100)
})

const red = computed<Player[]>(() => {
  return match.value.participants.filter(p => p.teamId == 200)
})

function navigate() {}
</script>

<template>
  <div
    class="grid grid-cols-[repeat(2,100px)] @min-xl/match:*:max-w-36 @min-xl/match:*:w-36 @min-lg/match:*:max-w-24 @min-lg/match:*:w-24 gap-4 overflow-hidden *:gap-y-px *:grid *:grid-rows-5">
    <div class="size-full">
      <div
        v-for="player in blue"
        :key="player.puuid"
        class="flex grow gap-2 overflow-hidden">
        <div
          class="flex gap-2 overflow-hidden"
          @click.stop="navigate()">
          <ChampionIcon
            v-if="player"
            :id="player?.championId"
            v-tippy="{
              content: ix().champNameById(player?.championId),
              placement: 'right',
            }"
            alt="champion-icon"
            class="rounded-tiny size-5.5" />

          <a
            v-tippy="{ content: player.riotIdGameName, placement: 'left' }"
            class="text-xxs tracking-tight h-full align-middle w-full text-nowrap hover:underline decoration-1 font-medium truncate">
            {{ player.riotIdGameName }}
          </a>
        </div>
      </div>
    </div>

    <div class="size-full">
      <div
        v-for="player in red"
        :key="player.puuid"
        class="flex grow gap-2 overflow-hidden">
        <a
          v-tippy="{
            content: `${player.riotIdGameName} 🡭`,
            placement: 'right',
          }"
          class="flex gap-2">
          <ChampionIcon
            v-if="player"
            :id="player?.championId"
            v-tippy="{
              content: ix().champNameById(player?.championId),
              placement: 'left',
            }"
            alt="champion-icon"
            class="rounded-tiny size-5.5" />

          <span
            class="@max-lg/match:hidden @max-lg/match:opacity-0 text-xxs tracking-tight h-full align-middle w-full text-nowrap hover:underline decoration-1 font-medium truncate">
            {{ player.riotIdGameName }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
