import { defineUiTheme } from "./defineUiTheme"

export const drawerTheme = defineUiTheme({
  slots: {
    overlay: "fixed inset-0 bg-elevated/75",
    content: "fixed flex bg-default ring ring-default focus:outline-none",
    handle: ["shrink-0 bg-accented!"],
    container: "flex w-full flex-col gap-4 overflow-y-auto p-4",
    header: "",
    title: "font-semibold text-highlighted",
    description: "mt-1 text-sm text-muted",
    body: "flex-1",
    footer: "flex flex-col gap-1.5",
  },
  variants: {
    direction: {
      top: {
        content: "mb-24 flex-col-reverse",
        handle: "mb-4",
      },
      right: {
        content: "flex-row",
        handle: "ml-4!",
      },
      bottom: {
        content: "mt-24 flex-col",
        handle: "mt-4",
      },
      left: {
        content: "flex-row-reverse",
        handle: "mr-4!",
      },
    },
    inset: {
      true: {
        content:
          "overflow-hidden rounded-lg [--initial-transform:calc(100%+1.5rem)] after:hidden",
      },
    },
    snapPoints: {
      true: "",
    },
  },
  compoundVariants: [
    {
      direction: ["top", "bottom"],
      class: {
        content: "h-auto max-h-[96%]",
        handle: "mx-auto h-1.5! w-12!",
      },
    },
    {
      direction: ["top", "bottom"],
      snapPoints: true,
      class: {
        content: "h-full",
      },
    },
    {
      direction: ["right", "left"],
      class: {
        content: "w-auto max-w-[calc(100%-2rem)]",
        handle: "my-auto h-12! w-1.5!",
      },
    },
    {
      direction: ["right", "left"],
      snapPoints: true,
      class: {
        content: "w-full",
      },
    },
    {
      direction: "top",
      inset: true,
      class: {
        content: "inset-x-4 top-4",
      },
    },
    {
      direction: "top",
      inset: false,
      class: {
        content: "inset-x-0 top-0 rounded-b-lg",
      },
    },
    {
      direction: "bottom",
      inset: true,
      class: {
        content: "inset-x-4 bottom-4",
      },
    },
    {
      direction: "bottom",
      inset: false,
      class: {
        content: "inset-x-0 bottom-0 rounded-t-lg",
      },
    },
    {
      direction: "left",
      inset: true,
      class: {
        content: "inset-y-4 left-4",
      },
    },
    {
      direction: "left",
      inset: false,
      class: {
        content: "inset-y-0 left-0 rounded-r-lg",
      },
    },
    {
      direction: "right",
      inset: true,
      class: {
        content: "inset-y-4 right-4",
      },
    },
    {
      direction: "right",
      inset: false,
      class: {
        content: "inset-y-0 right-0 rounded-l-lg",
      },
    },
  ],
})

export default drawerTheme
