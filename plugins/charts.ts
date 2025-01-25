import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

export default defineNuxtPlugin((nuxtApp) => {
  Chart.register(BarElement, BarController, CategoryScale, LinearScale)

  nuxtApp.vueApp.component('BarChart', {
    extends: Bar,
    props: {
      data: {
        type: Object,
        required: true,
      },
      options: {
        type: Object,
        required: false,
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        }),
      },
    },
  })
})
