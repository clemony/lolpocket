<script setup lang="ts">
  import { Doughnut } from 'vue-chartjs';
  import { externalTooltip } from 'plugins/chartJS/externalTooltip';
  import { Chart, Tooltip, DoughnutController, ArcElement } from 'chart.js';
  import type { HTMLAttributes } from 'vue';

  Chart.register(Tooltip, DoughnutController, ArcElement);

  const props = defineProps<{
    labels: Array<string>;
    datasets: any;
    colors: Array<string>;
    aria: string;
    overlap?: boolean;
    class?: HTMLAttributes['class'];
    type?: string;
    cutout?: string;
  }>();

  const chartData = {
    type: 'doughnut',
    labels: props.labels,
    datasets: props.datasets,
    options: {
      spacing: props.type == 'gauge' ? -4 : 2,
      plugins: {
        tooltip: {
          enabled: false,
          external: externalTooltip,
        },
      },
      elements: {
        arc: {
          borderColor: 'rgba(0,0,0,0)',
          backgroundColor: props.colors,
          hoverOffset: 1,
          roundedCornersFor: props.overlap ? 0 : null,
        },
      },
      cutout: props.cutout ? props.cutout : '80%',
    },
  };
</script>
<template>
  <Doughnut
    :data="chartData"
    :options="chartData.options"
    ref="chart"
    :aria-label="props.aria"
    role="img"
    :class="props.class" />
</template>
<style scoped></style>
