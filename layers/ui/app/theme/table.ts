import { defineUiTheme } from "./defineUiTheme"

export const tableTheme = defineUiTheme({
  slots: {
    root: "relative overflow-auto",
    base: "min-w-full",
    caption: "sr-only",
    thead: "relative",
    tbody:
      "isolate [&>tr]:data-[selectable=true]:hover:bg-p2/50 [&>tr]:data-[selectable=true]:focus-visible:outline-pc/60",
    tfoot: "relative",
    tr: "data-[selected=true]:bg-p2/50",
    th: "px-4 py-3.5 text-left text-sm font-semibold text-pc rtl:text-right [&:has([role=checkbox])]:pe-0",
    td: "p-4 text-sm whitespace-nowrap text-muted [&:has([role=checkbox])]:pe-0",
    separator: "absolute left-0 z-1 h-px w-full bg-p2",
    empty: "py-6 text-center text-sm text-muted",
    loading: "py-6 text-center",
  },
  variants: {
    virtualize: {
      false: {
        base: "overflow-clip",
        tbody: "divide-y divide-p2",
      },
    },
    pinned: {
      true: {
        th: "sticky z-1 bg-p0/75",
        td: "sticky z-1 bg-p0/75",
      },
    },
    sticky: {
      true: {
        thead: "sticky inset-x-0 top-0 z-1 bg-p0/75 backdrop-blur-sm",
        tfoot: "sticky inset-x-0 bottom-0 z-1 bg-p0/75 backdrop-blur-sm",
      },
      header: {
        thead: "sticky inset-x-0 top-0 z-1 bg-p0/75 backdrop-blur-sm",
      },
      footer: {
        tfoot: "sticky inset-x-0 bottom-0 z-1 bg-p0/75 backdrop-blur-sm",
      },
    },
    loading: {
      true: {
        thead: "after:absolute after:z-1 after:h-px",
      },
    },
    loadingAnimation: {
      carousel: "",
      "carousel-inverse": "",
      swing: "",
      elastic: "",
    },
  },
  compoundVariants: [
    {
      loading: true,
      loadingColor: "neutral",
      class: {
        thead: "after:bg-inverted",
      },
    },
    {
      loading: true,
      loadingAnimation: "carousel",
      class: {
        thead:
          "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]",
      },
    },
    {
      loading: true,
      loadingAnimation: "carousel-inverse",
      class: {
        thead:
          "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]",
      },
    },
    {
      loading: true,
      loadingAnimation: "swing",
      class: {
        thead: "after:animate-[swing_2s_ease-in-out_infinite]",
      },
    },
    {
      loading: true,
      loadingAnimation: "elastic",
      class: {
        thead: "after:animate-[elastic_2s_ease-in-out_infinite]",
      },
    },
  ],
  defaultVariants: {
    loadingColor: "pc/60",
    loadingAnimation: "carousel",
  },
})

export default tableTheme
