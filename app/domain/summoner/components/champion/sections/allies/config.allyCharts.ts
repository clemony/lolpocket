/* import type { EChartsOption } from "echarts"
import { buildAllyBubbleOptions, buildAllyBubbleSeries } from "."

export interface AllyDataPoint {
  allyPuuid: string
  allyName: string
  allyTag: string
  avgTimestamp?: number
  championId: number
  championName: string
  delta: number
  games: number
  winrate: number
}

interface AllyChartData {
  chartMode: Ref<ChartMode>
  option: Ref<EChartsOption>
}

const magicTypes = ["scatter", "heatmap"] as const

export function buildAllyChart(
  points: AllyDataPoint[],
  colorMap: Map<string, string>
): AllyChartData {
  const chartMode = ref<ChartMode>("bubble")

  const maxChampionDelta = computed(() => {
    return {
      high:
        Math.round(
          Math.ceil(points.reduce((max, p) => Math.max(max, p.delta), 0) / 10)
        ) * 10,
      low:
        Math.round(
          Math.floor(points.reduce((max, p) => Math.min(max, p.delta), 0) / 10)
        ) * 10,
    }
  })

  const bubbleSeries = buildAllyBubbleSeries(points, colorMap)
  const bubbleOptions = buildAllyBubbleOptions(maxChampionDelta.value)

  const option = computed(
    (): EChartsOption => ({
      grid: {
        bottom: 40,
        left: 40,
        right: 250,
        top: 80,
      },
      title: {
        left: 10,
        text: "Ally Delta by Winrate",
        top: 10,
        z: 20,
      },
      series: bubbleSeries,
      dataZoom: [
        {
          end: 100,
          minSpan: 10,
          moveOnMouseWheel: false,
          start: 0,
          type: "inside",
          zoomOnMouseWheel: true,
          xAxisIndex: [0],
        },
        {
          end: 100,
          minSpan: 10,
          moveOnMouseWheel: false,
          start: 0,
          type: "inside",
          zoomOnMouseWheel: true,
          yAxisIndex: [0],
        },
      ],
      legend: {
        width: 165,
        right: 20,
        show: true,
        top: 54,
        textStyle: {
          fontWeight: 550,
          opacity: 0.8,
        },
      },
      toolbox: {
        right: 74,
        top: 0,
        feature: {
          dataView: {
          },
          dataZoom: { show: false },
          restore: {
            show: true,
          },
        },
      },
      tooltip: {
        backgroundColor: "transparent",
        formatter: ({ data }: any) => `
      <ul class="**:text-sm! flex flex-col gap-0 rounded-lg overflow-hidden w-40 max-w-40 bg-neutral/80 backdrop-blur-md text-nc/90 py-2 *:w-full *:px-2 **:not-first:font-medium [&_.stat]:flex [&_.stat]:items-center overflow-hidden [&_.stat]:justify-between [&_.stat]:*:first:font-semibold [&_.stat]:flex-nowrap [&_.stat]:py-0  ">
        <li class="font-bold max-w-full w-full flex"><span class="truncate">${data.allyName}</span><span class="w-fit"> #${data.allyTag}</span></li>
        <li class="flex gap-2 my-px">
        <img src="/img/champion/circle/${data.championId}.webp" alt="${data.championname}" class="size-5" />
        ${data?.championName}</li>
        <li class="stat mt-1"><span>Winrate:</span> <span>${data?.winrate}</span></li>
        <li class="stat"><span>Synergy:</span> ${data?.synergy}</li>
        <li class="stat"><span>Games:</span> ${data?.games}</li>
      </ul>
    `,
        padding: 0,
      },
      ...bubbleOptions,
    })
  )

  return {
    chartMode,
    option,
  }
}
 */
