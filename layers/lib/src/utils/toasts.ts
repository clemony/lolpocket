export function sendErrorToast(msg?: string) {
  const toast = useToast()
  toast.add({
    title: "Error!",
    color: "domination",
    description:
      "Hang on, we're herding the greebles. If this continues, let us know.",
    icon: "x",
  })
}
