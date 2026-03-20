export function sendErrorToast(msg?: string) {
  const toast = useToast()
  toast.add({
    color: 'dom',
    title: 'Error!',
    description:
      'Hang on, we\'re herding the greebles. If this continues, let us know.',
    icon: 'x',
  })
}
