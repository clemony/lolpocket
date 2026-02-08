import type { EChartsOption } from 'echarts'

export function buildAllyBubbleOptions(
  breaks: Record<string, number>
): EChartsOption {
  return {
    xAxis: {
      name: 'Winrate',
      nameGap: 30,
      nameLocation: 'center',
      max: 100,
      min: 0,
      type: 'value',
      axisLabel: {
        alignMinLabel: 'left',
      },
      axisTick: {
        show: true,
      },
      splitLine: {
        show: false,
      },
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

      max: 100,
      min: -100,
      type: 'value',
      axisLabel: {
        // showMinLabel: false
      },
      axisTick: {
        show: true,
      },
      breakArea: {
        expandOnClick: true,
        show: true,
        zigzagAmplitude: 0,
        zigzagMaxSpan: 20,
        zigzagMinSpan: 4,
        zigzagZ: 0,
        itemStyle: {
          color: cssVar('--color-p3'),
          borderColor: cssVar('--color-p3'),
        },
      },
      splitLine: {
        showMaxLine: false,
      },
    },
  }
}
