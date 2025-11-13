<script lang="ts" setup>
const {
  championName,
  class: className,
  matches,
  summoner,
} = defineProps<{
  class?: HTMLAttributes["class"];
  summoner?: Summoner;
  championName: string;
  matches: MatchData[];
}>();
/* const { matches } = useSummoner(as().account?.puuid) */

const timeline = computed(() => {
  if (!summoner) return null;

  return useChampionWinrateTimeline(summoner.puuid, matches, championName);
});
watch(
  () => timeline.value,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal);
  },
);

const data = computed(() => {
  if (!timeline.value) return;

  return {
    datasets: [
      {
        data: timeline?.value?.map((p) => p.winrate),
      },
      {
        data: timeline?.value?.map((p) => p.games),
      },
    ],
    labels: timeline?.value?.map((p) => p.span),
  };
});

const options = {
  layout: {
    padding: {
      bottom: 0,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const val = context.raw;
          return context.datasetIndex === 0
            ? `${val.toFixed(2)}% winrate`
            : `${val} games`;
        },
      },
    },
  },
  scales: {
    y: {
      grid: {
        display: true,
      },
      title: {
        display: true,
        text: "Winrate (%)",
      },
      border: {
        display: true,
      },
      max: 100,
      min: 0,
      position: "left",
      ticks: {
        display: true,
      },
      type: "linear",
    },
    y1: {
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Games Played",
      },
      position: "right",
      type: "linear",
    },
  },
};

const range = computed(() => {
  const spans = timeline.value.map((p) => p.span);
  if (!spans.length) return "";
  return `Weeks ${spans[0]} - ${spans[spans.length - 1]}`;
});
</script>

<template>
  <div
    class="stats relative h-54 w-full rounded-box border border-b3 bg-b1 px-5 shadow-warm-soft"
  >
    <div class="pointer-events-none absolute top-6 left-6 z-0 text-bc">
      <div class="stat-desc mb-1 text-1 font-medium">
        {{ range }}
      </div>

      <div class="text-5font-semibold dst"></div>

      <div class="stat-desc text-3"></div>
    </div>

    <LineChart :data="data" :options="options" />
  </div>
</template>
