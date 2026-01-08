const bc = cssVar("--color-bc")
const b1 = cssVar("--color-b1")
const b2 = cssVar("--color-b2")
const b3 = cssVar("--color-b3")
const n = cssVar("--color-neutral")
const nc = cssVar("--color-nc")

const t2 = cssVar("--text-2")

export const theme = {
  color: [
    cssVar("--color-inspiration"),
    cssVar("--color-sorcery"),
    cssVar("--color-resolve"),
    cssVar("--color-precision"),
    cssVar("--color-domination"),
    cssVar("--color-fighter"),
    cssVar("--color-enchanter"),
    cssVar("--color-mr"),
    cssVar("--color-mp5"),
  ],
  backgroundColor: "rgba(0, 0, 0, 0)",
  textStyle: {},
  title: {
    show: true,
    textStyle: {
      color: bc,
      fontStyle: "normal",
      fontWeight: 800,
      fontFamily: "sans-serif",
      fontSize: cssVar("--text-8"),
      textShadowColor: `color-mix(in lch, ${bc} 4%, transparent 96%)`,
      textShadowBlur: 1,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
    },
    z: 2,
    padding: 5,
    itemGap: 10,
    textAlign: "left",
    textVerticalAlign: "middle",
    subtextStyle: {
      color: bc,
    },
  },
  line: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 4,
    symbol: "emptyCircle",
    smooth: false,
  },
  radar: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 4,
    symbol: "emptyCircle",
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: "#000000",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
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
  candlestick: {
    itemStyle: {
      color: "#eb5454",
      color0: "#47b262",
      borderColor: "#eb5454",
      borderColor0: "#47b262",
      borderWidth: 1,
    },
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#000000",
    },
    lineStyle: {
      width: 1,
      color: b2,
    },
    symbolSize: 4,
    symbol: "emptyCircle",
    smooth: false,
    color: [
      cssVar("--color-inspiration"),
      cssVar("--color-sorcery"),
      cssVar("--color-resolve"),
      cssVar("--color-precision"),
      cssVar("--color-domination"),
      cssVar("--color-fighter"),
      cssVar("--color-enchanter"),
      cssVar("--color-mr"),
      cssVar("--color-mp5"),
    ],
    label: {
      color: bc,
    },
  },
  map: {
    itemStyle: {
      areaColor: "#eee",
      borderColor: "#444",
      borderWidth: 0.5,
    },
    label: {
      color: bc,
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(255,215,0,0.8)",
        borderColor: "#444",
        borderWidth: 1,
      },
      label: {
        color: "rgb(100,0,0)",
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: "#eee",
      borderColor: "#444",
      borderWidth: 0.5,
    },
    label: {
      color: bc,
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(255,215,0,0.8)",
        borderColor: "#444",
        borderWidth: 1,
      },
      label: {
        color: "rgb(100,0,0)",
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: b2,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: bc,
      },
    },
    axisLabel: {
      show: true,
      color: bc,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#dbdee4"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
  },
  valueAxis: {
    nameGap: 20,
    nameTextStyle: {
      color: bc,
      fontSize: t2,
    },
    axisLine: {
      lineStyle: {
        width: 1,
        color: `color-mix(in lch, ${b3} 80%, transparent 20%)`,
      },
      show: true,
    },
    axisTick: {
      show: false,
      customValues: "",
      lineStyle: {
        color: `color-mix(in lch, ${bc} 30%, transparent 70%)`,
      },
    },
    axisLabel: {
      show: true,
      color: bc,
      fontSize: t2,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: b2,
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: b3,
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: bc,
      },
    },
    axisLabel: {
      show: true,
      color: bc,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#dbdee4"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: b3,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: bc,
      },
    },
    axisLabel: {
      show: true,
      color: bc,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#dbdee4"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"],
      },
    },
  },
  toolbox: {
    feature: {
      dataView: {
        backgroundColor: n,
        title: "View Data",
        icon: "image://data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/%3E%3Cpath d='M14 2v5a1 1 0 0 0 1 1h5M8 18v-1m4 1v-6m4 6v-3'/%3E%3C/g%3E%3C/svg%3E",
        readOnly: true,
        show: true,
        textareaBorderColor: n,
        textareaColor: n,
        textColor: nc,
        buttonColor: nc,
        buttonTextColor: n,
      },
      dataZoom: {
        type: "inside",
        title: "Zoom",
      },
      restore: {
        show: true,
        title: "Reset View",
        icon: "image://data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8'/%3E%3Cpath d='M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16'/%3E%3Cpath d='M16 16h5v5'/%3E%3C/g%3E%3C/svg%3E",
      },
      magicType: {
        show: false,
      },
      saveAsImage: {
        excludeComponents: ["toolbox"],
        title: "Save as Image",
        icon: "image://data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE --%3E%3Cg fill='none'%3E%3Cpath d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='currentColor' d='M20 15a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h14v-4a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v10.243l2.536-2.536a1 1 0 1 1 1.414 1.414l-4.066 4.066a1.25 1.25 0 0 1-1.768 0L7.05 12.121a1 1 0 1 1 1.414-1.414L11 13.243V3a1 1 0 0 1 1-1'/%3E%3C/g%3E%3C/svg%3E",
        type: "png",
      },
    },
    iconStyle: {
      opacity: 0.6,
      borderColor: b3,
      borderWidth: 1,
      padding: 10,
    },
    itemGap: 14,
    align: "left",
    emphasis: {
      iconStyle: {
        opacity: 1,
        borderColor: b3,
        borderWidth: 1,
        padding: 10,
      },
    },
    showTitle: false,
    tooltip: {
      show: true,
      backgroundColor: `color-mix(in lch, ${n} 86%, transparent 14%)`,
      padding: [4, 12],
      position: "top",
      formatter: function (param) {
        return "<div>" + param.title + "</div>" // user-defined DOM structure
      },
    },
  },
  legend: {
    backgroundColor: b1,
    textStyle: {
      color: `color-mix(in lch, ${bc} 80%, transparent 20%)`,
      fontSize: t2,
      fontWeight: 500,
    },
    emphasis: {
      color: bc,
    },
    selected: {
      color: bc,
    },
    borderWidth: 0,
    align: "left",
    borderColor: `color-mix(in lch, ${b3} 90%, transparent 10%)`,
    itemGap: 10,
    padding: [14, 4],
    orient: "vertical",
  },
  tooltip: {
    backgroundColor: `color-mix(in lch, ${n} 92%, transparent 8%)`,
    padding: [4, 12],
    textStyle: {
      color: nc,
      fontSize: t2,
      lineHeight: 15,
    },
    axisPointer: {
      lineStyle: {
        color: "#ccc",
        width: 1,
      },
      crossStyle: {
        color: "#ccc",
        width: 1,
      },
    },
  },
  yAxis: {
    nameGap: 20,
    nameTextStyle: {
      align: "right",
      color: cssVar("--color-bc"),
    },
  },
  timeline: {
    lineStyle: {
      color: "#DAE1F5",
      width: 2,
    },
    itemStyle: {
      color: "#A4B1D7",
      borderWidth: 1,
    },
    controlStyle: {
      color: "#A4B1D7",
      borderColor: "#A4B1D7",
      borderWidth: 1,
    },
    checkpointStyle: {
      color: "#316bf3",
      borderColor: "#fff",
    },
    label: {
      color: "#A4B1D7",
    },
    emphasis: {
      itemStyle: {
        color: "#FFF",
      },
      controlStyle: {
        color: "#A4B1D7",
        borderColor: "#A4B1D7",
        borderWidth: 1,
      },
      label: {
        color: "#A4B1D7",
      },
    },
  },
  visualMap: {
    color: ["#bf616a", "#e2856e", "#ebcb8b"],
  },
  markPoint: {
    label: {
      color: "#eee",
    },
    emphasis: {
      label: {
        color: "#eee",
      },
    },
  },
  grid: {
    left: "15%",
    right: "10%",
    top: 65,
    bottom: 80,
    show: false,
  },
}

export default theme
