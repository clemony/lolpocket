//
const bc = cssVar("--color-pc")
const p0 = cssVar("--color-p0")
const p2 = cssVar("--color-p2")
const p3 = cssVar("--color-p3")
const n = cssVar("--color-neutral")
const nc = cssVar("--color-nc")

const t2 = cssVar("--text-sm")

export const theme = {
  color: [
    cssVar("--color-insp"),
    cssVar("--color-sorc"),
    cssVar("--color-res"),
    cssVar("--color-pre"),
    cssVar("--color-domination"),
    cssVar("--color-fighter"),
    cssVar("--color-enchanter"),
    cssVar("--color-mr"),
    cssVar("--color-mp5"),
  ],
  grid: {
    bottom: 80,
    left: "15%",
    right: "10%",
    show: false,
    top: 65,
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  title: {
    itemGap: 10,
    padding: 5,
    show: true,
    textAlign: "left",
    textVerticalAlign: "middle",
    z: 2,
    subtextStyle: {
      color: bc,
    },
    textStyle: {
      color: bc,
      fontFamily: "sans-serif",
      fontSize: cssVar("--text-4xl"),
      fontStyle: "normal",
      fontWeight: 800,
      textShadowBlur: 1,
      textShadowColor: `color-mix(in lch, ${bc} 4%, transparent 96%)`,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
    },
  },
  backgroundColor: "rgba(0, 0, 0, 0)",
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: "#000000",
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  candlestick: {
    itemStyle: {
      borderWidth: 1,
      color: "#eb5454",
      color0: "#47p262",
      borderColor: "#eb5454",
      borderColor0: "#47p262",
    },
  },
  categoryAxis: {
    axisLabel: {
      color: bc,
      show: true,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: p2,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: bc,
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#dbdee4"],
      },
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  geo: {
    emphasis: {
      itemStyle: {
        borderWidth: 1,
        areaColor: "rgba(255,215,0,0.8)",
        borderColor: "#444",
      },
      label: {
        color: "rgb(100,0,0)",
      },
    },
    itemStyle: {
      borderWidth: 0.5,
      areaColor: "#eee",
      borderColor: "#444",
    },
    label: {
      color: bc,
    },
  },
  graph: {
    color: [
      cssVar("--color-insp"),
      cssVar("--color-sorc"),
      cssVar("--color-res"),
      cssVar("--color-pre"),
      cssVar("--color-domination"),
      cssVar("--color-fighter"),
      cssVar("--color-enchanter"),
      cssVar("--color-mr"),
      cssVar("--color-mp5"),
    ],
    smooth: false,
    symbol: "emptyCircle",
    symbolSize: 4,
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
    label: {
      color: bc,
    },
    lineStyle: {
      color: p2,
      width: 1,
    },
  },
  legend: {
    borderWidth: 0,
    align: "left",
    backgroundColor: p0,
    borderColor: `color-mix(in lch, ${p3} 90%, transparent 10%)`,
    itemGap: 10,
    orient: "vertical",
    emphasis: {
      color: bc,
    },
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
    smooth: false,
    symbol: "emptyCircle",
    symbolSize: 4,
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
  },
  logAxis: {
    axisLabel: {
      color: bc,
      show: true,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: p3,
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: bc,
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#dbdee4"],
      },
    },
  },
  map: {
    emphasis: {
      itemStyle: {
        borderWidth: 1,
        areaColor: "rgba(255,215,0,0.8)",
        borderColor: "#444",
      },
      label: {
        color: "rgb(100,0,0)",
      },
    },
    itemStyle: {
      borderWidth: 0.5,
      areaColor: "#eee",
      borderColor: "#444",
    },
    label: {
      color: bc,
    },
  },
  markPoint: {
    emphasis: {
      label: {
        color: "#eee",
      },
    },
    label: {
      color: "#eee",
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  radar: {
    smooth: false,
    symbol: "emptyCircle",
    symbolSize: 4,
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  textStyle: {},
  timeAxis: {
    axisLabel: {
      color: bc,
      show: true,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: p3,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: bc,
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#dbdee4"],
      },
    },
  },
  timeline: {
    checkpointStyle: {
      color: "#316bf3",
      borderColor: "#fff",
    },
    controlStyle: {
      borderWidth: 1,
      color: "#A4B1D7",
      borderColor: "#A4B1D7",
    },
    emphasis: {
      controlStyle: {
        borderWidth: 1,
        color: "#A4B1D7",
        borderColor: "#A4B1D7",
      },
      itemStyle: {
        color: "#FFF",
      },
      label: {
        color: "#A4B1D7",
      },
    },
    itemStyle: {
      borderWidth: 1,
      color: "#A4B1D7",
    },
    label: {
      color: "#A4B1D7",
    },
    lineStyle: {
      color: "#DAE1F5",
      width: 2,
    },
  },
  toolbox: {
    align: "left",
    itemGap: 14,
    showTitle: false,
    emphasis: {
      iconStyle: {
        borderWidth: 1,
        borderColor: p3,
        opacity: 1,
        padding: 10,
      },
    },
    feature: {
      dataView: {
        title: "View Data",
        backgroundColor: n,
        buttonColor: nc,
        buttonTextColor: n,
        icon: "image://data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/%3E%3Cpath d='M14 2v5a1 1 0 0 0 1 1h5M8 18v-1m4 1v-6m4 6v-3'/%3E%3C/g%3E%3C/svg%3E",
        readOnly: true,
        show: true,
        textareaBorderColor: n,
        textareaColor: n,
        textColor: nc,
      },
      dataZoom: {
        title: "Zoom",
        type: "inside",
      },
      magicType: {
        show: false,
      },
      restore: {
        title: "Reset View",
        icon: "image://data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8'/%3E%3Cpath d='M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16'/%3E%3Cpath d='M16 16h5v5'/%3E%3C/g%3E%3C/svg%3E",
        show: true,
      },
      saveAsImage: {
        title: "Save as Image",
        icon: "image://data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE --%3E%3Cg fill='none'%3E%3Cpath d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='currentColor' d='M20 15a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h14v-4a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v10.243l2.536-2.536a1 1 0 1 1 1.414 1.414l-4.066 4.066a1.25 1.25 0 0 1-1.768 0L7.05 12.121a1 1 0 1 1 1.414-1.414L11 13.243V3a1 1 0 0 1 1-1'/%3E%3C/g%3E%3C/svg%3E",
        type: "png",
        excludeComponents: ["toolbox"],
      },
    },
    iconStyle: {
      borderWidth: 1,
      borderColor: p3,
      opacity: 0.6,
      padding: 10,
    },
    tooltip: {
      backgroundColor: `color-mix(in lch, ${n} 86%, transparent 14%)`,
      formatter(param: any) {
        return `<div>${param.title}</div>` // user-defined DOM structure
      },
      position: "top",
      show: true,
      padding: [4, 12],
    },
  },
  tooltip: {
    backgroundColor: `color-mix(in lch, ${n} 92%, transparent 8%)`,
    axisPointer: {
      crossStyle: {
        color: "#ccc",
        width: 1,
      },
      lineStyle: {
        color: "#ccc",
        width: 1,
      },
    },
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
      show: true,
      lineStyle: {
        color: `color-mix(in lch, ${p3} 80%, transparent 20%)`,
        width: 1,
      },
    },
    axisTick: {
      customValues: "",
      show: false,
      lineStyle: {
        color: `color-mix(in lch, ${bc} 30%, transparent 70%)`,
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: p2,
      },
    },
  },
  visualMap: {
    color: ["#bf616a", "#e2856e", "#ebcb8b"],
  },
  yAxis: {
    nameGap: 20,
    nameTextStyle: {
      color: cssVar("--color-pc"),
      align: "right",
    },
  },
}

export default theme
