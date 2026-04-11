export function sendErrorToast(msg?: string) {
  const toast = useToast()
  toast.add({
    color: "neutral",
    orientation: "horizontal",
    title: "Error!",
    description:
      "Hang on, we're herding the greebles. If this continues, let us know.",
    icon: "i-ban"
  })
}
