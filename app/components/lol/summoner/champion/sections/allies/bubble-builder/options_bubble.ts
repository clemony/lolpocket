import type { EChartsOption } from 'echarts'

export function buildAllyBubbleOptions(
  breaks: Record<string, number>
): EChartsOption {
  return {
    xAxis: {
      name: 'Winrate',
      nameGap: 30,
      nameLocation: 'center',
      axisLabel: {
        alignMinLabel: 'left',
      },
      axisTick: {
        show: true,
      },
      max: 100,
      min: 0,
      splitLine: {
        show: false,
      },
      type: 'value',
    },
    yAxis: {
      name: 'Delta',
      nameGap: 20,
      nameTextStyle: {
        align: 'right',
      },
      breaks: [
        {
          end: 100,
          start: breaks.high,
        },
        {
          end: -100,
          start: breaks.low,
        },
      ],

      axisLabel: {
        // showMinLabel: false
      },
      axisTick: {
        show: true,
      },
      breakArea: {
        expandOnClick: true,
        itemStyle: {
          borderColor: cssVar('--color-b3'),
          color: cssVar('--color-b3'),
        },
        show: true,
        zigzagAmplitude: 0,
        zigzagMaxSpan: 20,
        zigzagMinSpan: 4,
        zigzagZ: 0,
      },
      max: 100,
      min: -100,
      splitLine: {
        showMaxLine: false,
      },
      type: 'value',
    },
  }
}
