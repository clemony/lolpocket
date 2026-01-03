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
    textStyle: {
      color: cssVar("--color-bc"),
    },
    subtextStyle: {
      color: cssVar("--color-bc"),
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
      color: cssVar("--color-b3"),
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
      color: cssVar("--color-bc"),
    },
  },
  map: {
    itemStyle: {
      areaColor: "#eee",
      borderColor: "#444",
      borderWidth: 0.5,
    },
    label: {
      color: cssVar("--color-bc"),
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
      color: cssVar("--color-bc"),
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
        color: cssVar("--color-b3"),
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: cssVar("--color-bc"),
      },
    },
    axisLabel: {
      show: true,
      color: cssVar("--color-bc"),
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
    axisLine: {
      show: false,
      lineStyle: {
        color: cssVar("--color-b3"),
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: cssVar("--color-bc"),
      },
    },
    axisLabel: {
      show: true,
      color: cssVar("--color-bc"),
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
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: cssVar("--color-b3"),
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: cssVar("--color-bc"),
      },
    },
    axisLabel: {
      show: true,
      color: cssVar("--color-bc"),
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
        color: cssVar("--color-b3"),
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: cssVar("--color-bc"),
      },
    },
    axisLabel: {
      show: true,
      color: cssVar("--color-bc"),
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
    iconStyle: {
      borderColor: cssVar("--color-b3"),
    },
    emphasis: {
      iconStyle: {
        borderColor: "#666",
      },
    },
  },
  legend: {
    textStyle: {
      color: cssVar("--color-bc"),
    },
    left: "center",
    right: "auto",
    top: "auto",
    bottom: 15,
  },
  tooltip: {
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
  },
}

export default theme
