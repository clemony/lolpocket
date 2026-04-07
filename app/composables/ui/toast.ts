import type { ButtonProps, ToastProps } from "@nuxt/ui"

export const getToast = (message: string, props?: ToastProps) => {
  const toast = useToast()

  return toast.add({
    ...props,
    title: message,
    orientation: props?.orientation ?? "horizontal",
    color: (props?.color as ToastProps["color"]) ?? "neutral",
    close:
      typeof props?.close === "object"
        ? {
            ...props?.close,
            color: props?.close?.color ?? "neutral"
          }
        : false
  })
}
