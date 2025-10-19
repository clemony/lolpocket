import { FieldContextKey } from 'vee-validate'
import { computed, inject } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

export function useFormField() {
  const fieldContext = inject(FieldContextKey)
  const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY)

  if (!fieldContext)
    throw new Error('useFormField should be used within <FormField>')

  const { name, errorMessage: error, meta } = fieldContext
  const id = fieldItemContext

  const fieldState = {
    valid: computed(() => meta.valid),
    error,
    isDirty: computed(() => meta.dirty),
    isTouched: computed(() => meta.touched),
  }

  return {
    id,
    name,
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
