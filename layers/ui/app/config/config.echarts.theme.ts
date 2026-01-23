const bc = cssVar('--color-bc')
const b1 = cssVar('--color-b1')
const b2 = cssVar('--color-b2')
const b3 = cssVar('--color-b3')
const n = cssVar('--color-neutral')
const nc = cssVar('--color-nc')

const t2 = cssVar('--text-sm')

export const theme = {
  grid: {
    bottom: 80,
    left: '15%',
    right: '10%',
    show: false,
    top: 65,
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  title: {
    itemGap: 10,
    padding: 5,
    show: true,
    subtextStyle: {
      color: bc,
    },
    textAlign: 'left',
    textStyle: {
      color: bc,
      fontFamily: 'sans-serif',
      fontSize: cssVar('--text-4xl'),
      fontStyle: 'normal',
      fontWeight: 800,
      textShadowBlur: 1,
      textShadowColor: `color-mix(in lch, ${bc} 4%, transparent 96%)`,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
    },
    textVerticalAlign: 'middle',
    z: 2,
  },
  backgroundColor: 'rgba(0, 0, 0, 0)',
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: '#000000',
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  candlestick: {
    itemStyle: {
      borderWidth: 1,
      borderColor: '#eb5454',
      borderColor0: '#47b262',
      color: '#eb5454',
      color0: '#47b262',
    },
  },
  categoryAxis: {
    axisLabel: {
      color: bc,
      show: true,
    },
    axisLine: {
      lineStyle: {
        color: b2,
      },
      show: true,
    },
    axisTick: {
      lineStyle: {
        color: bc,
      },
      show: true,
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(234,237,245,0.5)', 'rgba(255,255,255,0)'],
      },
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: ['#dbdee4'],
      },
      show: false,
    },
  },
  color: [
    cssVar('--color-inspiration'),
    cssVar('--color-sorcery'),
    cssVar('--color-resolve'),
    cssVar('--color-precision'),
    cssVar('--color-domination'),
    cssVar('--color-fighter'),
    cssVar('--color-enchanter'),
    cssVar('--color-mr'),
    cssVar('--color-mp5'),
  ],
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  geo: {
    emphasis: {
      itemStyle: {
        borderWidth: 1,
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
    itemStyle: {
      borderWidth: 0.5,
      areaColor: '#eee',
      borderColor: '#444',
    },
    label: {
      color: bc,
    },
  },
  graph: {
    color: [
      cssVar('--color-inspiration'),
      cssVar('--color-sorcery'),
      cssVar('--color-resolve'),
      cssVar('--color-precision'),
      cssVar('--color-domination'),
      cssVar('--color-fighter'),
      cssVar('--color-enchanter'),
      cssVar('--color-mr'),
      cssVar('--color-mp5'),
    ],
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
    label: {
      color: bc,
    },
    lineStyle: {
      width: 1,
      color: b2,
    },
    smooth: false,
    symbol: 'emptyCircle',
    symbolSize: 4,
  },
  legend: {
    borderWidth: 0,
    align: 'left',
    backgroundColor: b1,
    borderColor: `color-mix(in lch, ${b3} 90%, transparent 10%)`,
    emphasis: {
      color: bc,
    },
    itemGap: 10,
    orient: 'vertical',
    padding: [14, 4],
    selected: {
      color: bc,
    },
    textStyle: {
      color: `color-mix(in lch, ${bc} 80%, transparent 20%)`,
      fontSize: t2,
      fontWeight: 500,
    },
  },
  line: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    smooth: false,
    symbol: 'emptyCircle',
    symbolSize: 4,
  },
  logAxis: {
    axisLabel: {
      color: bc,
      show: true,
    },
    axisLine: {
      lineStyle: {
        color: b3,
      },
      show: false,
    },
    axisTick: {
      lineStyle: {
        color: bc,
      },
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(234,237,245,0.5)', 'rgba(255,255,255,0)'],
      },
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: ['#dbdee4'],
      },
      show: true,
    },
  },
  map: {
    emphasis: {
      itemStyle: {
        borderWidth: 1,
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
    itemStyle: {
      borderWidth: 0.5,
      areaColor: '#eee',
      borderColor: '#444',
    },
    label: {
      color: bc,
    },
  },
  markPoint: {
    emphasis: {
      label: {
        color: '#eee',
      },
    },
    label: {
      color: '#eee',
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  radar: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    smooth: false,
    symbol: 'emptyCircle',
    symbolSize: 4,
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#000000',
    },
  },
  textStyle: {},
  timeAxis: {
    axisLabel: {
      color: bc,
      show: true,
    },
    axisLine: {
      lineStyle: {
        color: b3,
      },
      show: true,
    },
    axisTick: {
      lineStyle: {
        color: bc,
      },
      show: true,
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(234,237,245,0.5)', 'rgba(255,255,255,0)'],
      },
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: ['#dbdee4'],
      },
      show: false,
    },
  },
  timeline: {
    checkpointStyle: {
      borderColor: '#fff',
      color: '#316bf3',
    },
    controlStyle: {
      borderWidth: 1,
      borderColor: '#A4B1D7',
      color: '#A4B1D7',
    },
    emphasis: {
      controlStyle: {
        borderWidth: 1,
        borderColor: '#A4B1D7',
        color: '#A4B1D7',
      },
      itemStyle: {
        color: '#FFF',
      },
      label: {
        color: '#A4B1D7',
      },
    },
    itemStyle: {
      borderWidth: 1,
      color: '#A4B1D7',
    },
    label: {
      color: '#A4B1D7',
    },
    lineStyle: {
      width: 2,
      color: '#DAE1F5',
    },
  },
  toolbox: {
    align: 'left',
    emphasis: {
      iconStyle: {
        borderWidth: 1,
        borderColor: b3,
        opacity: 1,
        padding: 10,
      },
    },
    feature: {
      dataView: {
        title: 'View Data',
        backgroundColor: n,
        buttonColor: nc,
        buttonTextColor: n,
        icon: 'image://data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1em\' height=\'1em\' viewBox=\'0 0 24 24\'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Cpath d=\'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\'/%3E%3Cpath d=\'M14 2v5a1 1 0 0 0 1 1h5M8 18v-1m4 1v-6m4 6v-3\'/%3E%3C/g%3E%3C/svg%3E',
        readOnly: true,
        show: true,
        textareaBorderColor: n,
        textareaColor: n,
        textColor: nc,
      },
      dataZoom: {
        title: 'Zoom',
        type: 'inside',
      },
      magicType: {
        show: false,
      },
      restore: {
        title: 'Reset View',
        icon: 'image://data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1em\' height=\'1em\' viewBox=\'0 0 24 24\'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Cpath d=\'M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8\'/%3E%3Cpath d=\'M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16\'/%3E%3Cpath d=\'M16 16h5v5\'/%3E%3C/g%3E%3C/svg%3E',
        show: true,
      },
      saveAsImage: {
        title: 'Save as Image',
        excludeComponents: ['toolbox'],
        icon: 'image://data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1em\' height=\'1em\' viewBox=\'0 0 24 24\'%3E%3C!-- Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE --%3E%3Cg fill=\'none\'%3E%3Cpath d=\'m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z\'/%3E%3Cpath fill=\'currentColor\' d=\'M20 15a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h14v-4a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v10.243l2.536-2.536a1 1 0 1 1 1.414 1.414l-4.066 4.066a1.25 1.25 0 0 1-1.768 0L7.05 12.121a1 1 0 1 1 1.414-1.414L11 13.243V3a1 1 0 0 1 1-1\'/%3E%3C/g%3E%3C/svg%3E',
        type: 'png',
      },
    },
    iconStyle: {
      borderWidth: 1,
      borderColor: b3,
      opacity: 0.6,
      padding: 10,
    },
    itemGap: 14,
    showTitle: false,
    tooltip: {
      backgroundColor: `color-mix(in lch, ${n} 86%, transparent 14%)`,
      formatter(param) {
        return `<div>${param.title}</div>` // user-defined DOM structure
      },
      padding: [4, 12],
      position: 'top',
      show: true,
    },
  },
  tooltip: {
    axisPointer: {
      crossStyle: {
        width: 1,
        color: '#ccc',
      },
      lineStyle: {
        width: 1,
        color: '#ccc',
      },
    },
    backgroundColor: `color-mix(in lch, ${n} 92%, transparent 8%)`,
    padding: [4, 12],
    textStyle: {
      color: nc,
      fontSize: t2,
      lineHeight: 15,
    },
  },
  valueAxis: {
    nameGap: 20,
    nameTextStyle: {
      color: bc,
      fontSize: t2,
    },
    axisLabel: {
      color: bc,
      fontSize: t2,
      show: true,
    },
    axisLine: {
      lineStyle: {
        width: 1,
        color: `color-mix(in lch, ${b3} 80%, transparent 20%)`,
      },
      show: true,
    },
    axisTick: {
      customValues: '',
      lineStyle: {
        color: `color-mix(in lch, ${bc} 30%, transparent 70%)`,
      },
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(234,237,245,0.5)', 'rgba(255,255,255,0)'],
      },
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: b2,
      },
      show: true,
    },
  },
  visualMap: {
    color: ['#bf616a', '#e2856e', '#ebcb8b'],
  },
  yAxis: {
    nameGap: 20,
    nameTextStyle: {
      align: 'right',
      color: cssVar('--color-bc'),
    },
  },
}

export default theme
