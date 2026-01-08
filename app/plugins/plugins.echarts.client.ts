// plugins/echarts.client.ts
import { defineNuxtPlugin } from "#app"
import { HeatmapChart, ScatterChart } from "echarts/charts"
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components"
import { init, registerTheme, use } from "echarts/core"
import { AxisBreak } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"
import theme from "~/assets/config/config.echarts.theme"

export default defineNuxtPlugin(() => {
  registerTheme("theme", theme)

  use([
    CanvasRenderer,
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
