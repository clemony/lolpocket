export default {
  root: {
    class: [
      "text-xs tracking-wider",
      // Space
      "m-0 p-1.5",

      // Shape,
      "border-none ",

      // Color
      "text-base-content",

      "cmp ",
    ],
  },
  wrapper: {
    class: ["overflow-auto m-0"],
  },
  container: {
    class: [
      // Spacing
      "m-0 p-0",

      // Misc
      "list-none overflow-auto",
    ],
  },
  node: {
    class: ["focus:outline-none align-middle items-center relative my-2 w-full bg-base-100 code", "node"],
  },
  nodeContent: ({ context, props }) => ({
    class: [
      // Flex and Alignment
      "inline-flex items-center rounded-btn align-middle relative h-8 pl-2 w-full",

      // Spacing

      // Colors
      context.selected ? "bg-base-300 text-base-content" : "bg-base-100 text-base-content hover:bg-base-200 hover:text-base-content",

      // States
      {
        "hover:bg-base-200 hover:text-base-content": (props.selectionMode == "single" || props.selectionMode == "multiple") && !context.selected,
      },

      // Transition
      "transition-shadow duration-200",

      {
        "cursor-pointer select-none": props.selectionMode == "single" || props.selectionMode == "multiple",
      },

      "cmp",
    ],
  }),
  nodeToggleButton: ({ context }) => ({
    class: [
      // Flex and Alignment
      "label inline-flex place-items-center h-full w-6 order-4 justify-self-end",

      // Shape
      "border-0 outline-none outline-offset-0 ring-0",

      // Size

      // Colors
      "bg-transparent",
      {
        "text-base-content": !context.selected,
        "text-base-content": context.selected,

        invisible: context.leaf,
        hidden: context.leaf,
      },

      // States
      "hover:text-base-content",
      "focus:outline-none focus:outline-offset-0 focus:ring-0",

      // Transition
      "transition duration-200",

      // Misc
      "cursor-pointer select-none",
    ],
  }),

  nodeToggleIcon: ({ context }) => ({
    class: [
      "ph--caret-up",
      {
        "rotate-180 rotate-180-ccw": context.expanded,
        "rotate-0 rotate-180-ccw reverse": !context.expanded,
      },

      "rotate-0",
    ],
  }),

  nodeIcon: ({ context }) => ({
    class: [
      // Space
      "size-5 overflow-hidden order-1 mr-4",

      // Color
      {
        "text-base-content": !context.selected,
        "text-base-content": context.selected,
        "pl-0": context.leaf,
      },

      "cmp nodeicon",
    ],
  }),
  nodeLabel: ({ context }) => ({
    class: [
      "label order-2 align-middle content-center items-center relative flex flex-grow h-8",

      {
        "text-foreground": !context.selected,
        "text-background": context.selected,
      },
    ],
  }),
  nodeChildren: {
    class: [
      "label list-none z-10 border-l border-l-base-200 ml-4 *:border-none *:ml-1",
      //last:mb-3
    ],
  },
  loadingIcon: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin"],
  },
};
