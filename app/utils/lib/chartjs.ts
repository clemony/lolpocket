import {Chart } from 'chart.js'

const styles = getComputedStyle(document.documentElement)
  Chart.defaults.font.family = 'Geist Sans'
Chart.defaults.font.size = 11
Chart.defaults.color =  `${styles.getPropertyValue('--color-bc')}`;

Chart.defaults.backgroundColor = '#9BD0F5';
Chart.defaults.borderColor = `${styles.getPropertyValue('--color-b2')}`;

Chart.defaults.datasets.doughnut.borderRadius = 100
Chart.defaults.datasets.doughnut.borderJoinStyle = 'round'
Chart.defaults.datasets.doughnut.hoverBorderWidth = 1

//Chart.defaults.plugins.tooltip.mode = 'nearest'

export default Chart