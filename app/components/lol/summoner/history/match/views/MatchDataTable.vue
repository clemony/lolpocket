<script lang="ts" setup>
import { matchDataStats } from "~~/shared/data/match-data-stats";

const { match, player } = defineProps<{
  match: any;
  player: Player;
}>();

const gameOutcome = computed(() => {
  return {
    player: player.win ? "Ally" : "Enemy",
    win: match.teams[0].win === true ? "Blue Team Win" : "Red Team Win",
  };
});
const gameEnd = computed(() => {
  return match.teams[0].gameEndedInSurrender === true
    ? "Enemy Surrender"
    : null;
});

const players = computed(() => match.participants as Player[]);
</script>

<template>
  <div
    class="group/head grid h-18 w-full grid-flow-row grid-cols-[2.3fr_repeat(10,1fr)] gap-1 px-2 py-1"
  >
    <div class="size-full items-center pl-2">
      <div class="text-1 font-semibold text-bc/60 uppercase">
        {{ gameOutcome.player }}
      </div>
      <p
        :class="
          cn('font-medium dst', {
            'text-inspiration': match.teams[0].win !== true,
            'text-domination': match.teams[0].win !== true,
          })
        "
      >
        {{ gameOutcome.win }}
      </p>
      {{ gameEnd ?? "" }}
    </div>

    <div
      v-for="p in match.participants"
      :key="p.pId"
      :class="
        cn('z-0 grid size-full place-items-center rounded-xl', {
          'bg-inspiration/30': p.teamId === 100,
          'bg-domination/30': p.teamId === 200,
        })
      "
    >
      <div
        class="grid aspect-square size-13 shrink-0 place-items-center overflow-hidden rounded-lg"
      >
        <ChampionIcon
          :id="p.championId"
          :alt="p.championName"
          class="size-full! rounded-lg"
        />
      </div>
    </div>
  </div>

  <div class="relative h-171 w-full overflow-auto">
    <div
      class="z-auto mt-2 grid h-max grid-flow-row auto-rows-max grid-cols-[2fr_repeat(10,1fr)] pr-4 pb-3 pl-2 **:text-1"
    >
      <template v-for="group in matchDataStats" :key="group">
        <div
          class="sticky! top-0 left-0 col-span-full mt-2 -mr-4 mb-3 -ml-2 grid items-center bg-b2 px-2 py-1 font-semibold text-nowrap capitalize italic"
        >
          {{ group.name }}
        </div>

        <template v-for="stat in group.stats" :key="stat.name">
          <div
            class="col-start-1 truncate pl-2 font-medium tracking-tight whitespace-nowrap capitalize"
          >
            {{ stat.name }}
          </div>

          <div
            v-for="p in players"
            :key="p.puuid"
            :class="
              cn(
                `
                  py-1 text-end text-1! font-medium tracking-tight
                  *:text-1!
                `,
                {
                  'text-bc/15 **:text-bc/15': p[stat.id] === 0,
                },
              )
            "
          >
            {{
              computed(() => {
                const a = p[stat.id] ?? p.challenges[stat.id];

                const b = a && a.toString().length > 6 ? a : 0;

                let c = b ? b.toFixed(2) : a;
                c =
                  stat.id === "effectiveHealAndShielding" ||
                  stat.id === "bountyGold" ||
                  stat.id === "goldPerMinute"
                    ? Math.round(c)
                    : c;

                // units

                c =
                  ["damageTakenOnTeamPercentage", "killParticipation"].includes(
                    stat.id,
                  ) && c
                    ? `${Math.round(c * 100)}%`
                    : c;
                c = stat.id === "timeCCingOthers" ? `${c}s` : c;

                c = c ? c.toLocaleString() : c;
                return c;
              })
            }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
