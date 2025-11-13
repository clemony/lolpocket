import { toast } from "~/base/notification/toast/use-toast"
//@todo links and variants
export function sendErrorToast(msg?: string) {
  toast({
    title: "Error!",
    color: "error",
    icon: "info",
    description:
      "Hang on, we're herding the greebles. If this continues, let us know.",
  })
}
