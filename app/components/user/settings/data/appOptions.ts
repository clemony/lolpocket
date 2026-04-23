export const appOptions = [
  {
    legend: "trash",
    icon: "i-lucide-trash",
    class: "scale-110",
    type: "items",
    items: {
      fast_trash_pocket: {
        icon: "i-ui-fast-trash",
        ui: { trailingIcon: "scale-110  -translate-x-px **:stroke-[0.5]!" },
        label: "Instant delete pockets",
        description: "Skip the confirmation dialog when deleting a pocket.",
        id: "fast_trash_pocket",
        defaultValue: false
      },
      fast_trash_message: {
        icon: "i-ri-mail-send-line",
        label: "Instant delete messages",
        ui: { trailingIcon: "scale-99" },
        description: "Skip the confirmation dialog when deleting a message.",
        id: "fast_trash_message",
        defaultValue: false
      }
    }
  }
]
