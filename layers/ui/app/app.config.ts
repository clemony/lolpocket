
export default defineAppConfig({

   ui: {
    colors: {
      b1: "var(--color-b1)",
      b2: "var(--color-b2)",
      b3: "var(--color-primary-200)",
      bc: "var(--color-bc)",
      domination: "var(--color-domination-500)",
      inspiration: "var(--color-inspiration-300)",
      nc: "var(--color-primary-300)",
      neutral: "var(--color-primary-950)",
      precision: "var(--color-precision-300)",
      primary: "var(--color-primary-50)",
      resolve: "var(--color-resolve-400)",
      sorcery: "var(--color-sorcery-500)",
    },
    popover: {
      slots: {
        content: `
         bg-default/90 shadow-lg  backdrop-blur-md rounded-lg shadow-lg
          ring ring-neutral/40 focus:outline-none pointer-events-auto
        `,
      },
    },
    tooltip: {
      slots: {
        arrow: "fill-neutral/90 scale-y-140 scale-x-180",
        content: `
          flex items-center ring-neutral h-max max-h-80 max-w-104 border-tint-neutral/30 inset-shadow-white/10 bg-neutral/86 text-nc gap-1 backdrop-blur-sm p-0 shadow-sm rounded-lg ring cursor-default select-none pointer-events-auto
          `,
      },
    },
 /*    variants: {
      variants: { ...variantVariants },
    }, */
  },


})

