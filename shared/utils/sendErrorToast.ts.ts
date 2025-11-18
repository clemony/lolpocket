import { toast } from '~/composables/utils/useToast'
// @todo links and variants
export function sendErrorToast(msg?: string) {
  toast({
    title: 'Error!',
    color: 'error',
    description:
      'Hang on, we\'re herding the greebles. If this continues, let us know.',
    icon: 'x',
  })
}
