import { Chart } from 'chart.js'


const styles = getComputedStyle(document.documentElement)
// Chart.defaults.font.family = 'Geist Sans'
Chart.defaults.font.size = 11
Chart.defaults.color = styles.getPropertyValue('--color-neutral')
Chart.defaults.font.family = styles.getPropertyValue('--font-sans')
Chart.defaults.font.weight = 400
// Chart.defaults.font.size = 16

Chart.defaults.borderColor = `${styles.getPropertyValue('--color-b2')}`

Chart.defaults.datasets.doughnut.borderRadius = 100
Chart.defaults.datasets.doughnut.borderJoinStyle = 'round'
Chart.defaults.datasets.doughnut.hoverBorderWidth = 1

Chart.defaults.scale.grid.color = getColorFromVariable('--color-b3')
    
Chart.defaults.borderColor = `${styles.getPropertyValue('--color-b2')}`
// Chart.defaults.plugins.tooltip.mode = 'nearest'
export default Chart

export const chartOptions = {
    backgroundColor: getColorFromVariable('--color-neutral'),
    color: getColorFromVariable('--color-neutral'),
font: {
    size: 12,
    color: getColorFromVariable('--color-bc'),
    weight: 400
},
borderColor: getColorFromVariable('--color-b2'),
scale:{
    grid:{
        color: getColorFromVariable('--color-b3')
    }
}
}