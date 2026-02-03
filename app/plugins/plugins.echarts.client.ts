// plugins/echarts.client.ts
import { defineNuxtPlugin } from '#app'
import { HeatmapChart, PieChart, ScatterChart } from 'echarts/charts'
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'
import { use } from 'echarts/core'
import { AxisBreak } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

export default defineNuxtPlugin(() => {
  // registerTheme("theme", theme)

  use([
    CanvasRenderer,
    PieChart,
    AxisBreak,
    TitleComponent,
    HeatmapChart,
    VisualMapComponent,
    DataZoomComponent,
    ScatterChart,
    ToolboxComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent,
  ])
})
