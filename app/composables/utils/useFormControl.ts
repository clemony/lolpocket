import type { MaybeElementRef } from '@vueuse/core'
import { unrefElement } from '@vueuse/core'
import { computed, toValue } from 'vue'

export function useFormControl(el: MaybeElementRef) {
  return computed(() =>
    toValue(el) ? Boolean(unrefElement(el)?.closest('form')) : true
  )
}
