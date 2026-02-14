export default {
  slots: {
    root: "relative overflow-auto",
    base: "min-w-full",
    caption: "sr-only",
    thead: "relative",
    tbody:
      "isolate [&>tr]:data-[selectable=true]:hover:bg-p2/50 [&>tr]:data-[selectable=true]:focus-visible:outline-pc/60",
    tfoot: "relative",
    tr: "data-[selected=true]:bg-p2/50",
    th: "px-4 py-3.5 text-sm text-pc text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    td: "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    separator: "absolute z-1 left-0 w-full h-px bg-p2",
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
        th: "sticky bg-p0/75 z-1",
        td: "sticky bg-p0/75 z-1",
      },
    },
    sticky: {
      true: {
        thead: "sticky top-0 inset-x-0 bg-p0/75 backdrop-blur z-1",
        tfoot: "sticky bottom-0 inset-x-0 bg-p0/75 backdrop-blur z-1",
      },
      header: {
        thead: "sticky top-0 inset-x-0 bg-p0/75 backdrop-blur z-1",
      },
      footer: {
        tfoot: "sticky bottom-0 inset-x-0 bg-p0/75 backdrop-blur z-1",
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
}
