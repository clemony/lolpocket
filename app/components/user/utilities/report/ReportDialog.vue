<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/valibot'
import { parse } from 'valibot'
import { useForm } from 'vee-validate'
import { reportOptions } from './reportOptions'

const { button, comment } = defineProps<{
  comment: CommentData
  button?: boolean
}>()

const {
  validate,
  errorBag,
  errors,
  handleSubmit,
  isFieldDirty,
  resetForm,
  values,
} = useForm({
  validationSchema: toTypedSchema(reportSchema),
  initialValues: {
    reporterUid: as().account.puuid,
    comment,
    message: '',
    options: [],
  },
})

const onSubmit = handleSubmit((values) => {
  console.log('🌱 - values:', values)
  if (!comment.content.content.length) return console.log('🚫 Error')
  const content_text = extractReadableText(comment.content.content[0])
  console.log('🌱 - onSubmit - contentText:', content_text)

  const payload = {
    ...values,
    comment: {
      id: comment.id,
      uuid: comment.uuid,
      content_text,
      created: comment.created,
    },
  }

  const validated = parse(reportSchema, payload)
  const toast = useToast()
  toast.add({
    title: 'You submitted the following values:',
    description: '',
  })
  return validated
})

defineExpose({})
</script>

<template>
  <Dialog
    v-model:open="ts().reportOpen"
    :modal="true"
    @update:open="!ts().reportOpen ? resetForm() : null"
  >
    <slot v-if="button" :report="ts().report()">
      <DialogTrigger as-child>
        <button class="text-xs  hover:underline ">
          Report
        </button>
      </DialogTrigger>
    </slot>
    <LazyDialogContent class="h-max max-w-172 px-7 pt-8">
      <DialogHeader>
        <DialogTitle>Report Card</DialogTitle>
        <DialogDescription class="text-bc text-sm">
          Report offensive, negative, or disruptive content. Please fill out the
          form to clarify and give additional context.
        </DialogDescription>
      </DialogHeader>

      <form class="mt-2 grid auto-rows-max gap-1" @submit="onSubmit">
        <!-- option checkbox items -->
        <template v-for="option in reportOptions" :key="option.id">
          <CheckboxItemField v-if="option?.id !== 'other'" :values :option />

          <InputOptionField v-else :values :option />
        </template>

        <!-- separator  -->
        <Separator class="my-4 opacity-70" />
        <TextAreaField
          placeholder="Any comments, context, or messages to clarify the situation?"
          optional
        />
        <DialogFooter class="flex w-full items-center">
          <TransitionScalePop
            v-if="errorBag?.options?.length"
            class="text-shade-domination/8 mr-2 flex items-center gap-2 text-sm leading-none"
          >
            <icon
              class="text-shade-domination/8 inline size-4.5 align-bottom font-medium"
              name="error"
            />
            <span v-for="(reason, i) in errorBag.options" :key="i" class="">
              {{ reason }}
            </span>
          </TransitionScalePop>
          <Button
            size="sm"
            type="submit"
            color="neutral"
            @click.stop.prevent="validate()"
          >
            Submit Report
          </Button>
        </DialogFooter>
      </form>
    </LazyDialogContent>
  </Dialog>
</template>
