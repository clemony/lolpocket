import type { EChartsOption } from "echarts"

export function buildAllyBubbleOptions(
  breaks: Record<string, number>
): EChartsOption {
  return {
    xAxis: {
      name: "Winrate",
      nameGap: 30,
      nameLocation: "center",
      axisLabel: {
        alignMinLabel: "left",
      },
      axisTick: {
        show: true,
      },
      max: 100,
      min: 0,
      splitLine: {
        show: false,
      },
      type: "value",
    },
    yAxis: {
      name: "Delta",
      nameGap: 20,
      nameTextStyle: {
        align: "right",
      },
      breaks: [
        {
          start: breaks.high,
          end: 100,
        },
        {
          start: breaks.low,
          end: -100,
        },
      ],

      breakArea: {
        show: true,
        itemStyle: {
          color: cssVar("--color-b3"),
          borderColor: cssVar("--color-b3"),
        },
        zigzagAmplitude: 0,
        zigzagMinSpan: 4,
        zigzagMaxSpan: 20,
        zigzagZ: 0,
        expandOnClick: true,
      },
      axisLabel: {
        // showMinLabel: false
      },
      axisTick: {
        show: true,
      },
      max: 100,
      min: -100,
      splitLine: {
        showMaxLine: false,
      },
      type: "value",
    },
  }
}
