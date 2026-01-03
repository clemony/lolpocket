// plugins/echarts.client.ts
import { defineNuxtPlugin } from "#app"
import { ScatterChart } from "echarts/charts"
import {
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components"
import { init, registerTheme, use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import theme from "./config.echarts.theme"

export default defineNuxtPlugin(() => {
  registerTheme("theme", theme)

  use([
    CanvasRenderer,
    ScatterChart,
    ToolboxComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent,
  ])
})
