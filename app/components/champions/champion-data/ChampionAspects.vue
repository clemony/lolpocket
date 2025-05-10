<script setup lang="ts">
import { Chart, Filler, LineElement, PointElement, RadarController, RadialLinearScale, Tooltip } from 'chart.js'
import { Radar } from 'vue-chartjs'

const cs = useChampStore()
//TODO delete
Chart.register(Tooltip, RadarController, RadialLinearScale, LineElement, PointElement, Filler)

</script>

<template>
  <!-- Pass data and options separately -->

</template>

<style scoped></style>
