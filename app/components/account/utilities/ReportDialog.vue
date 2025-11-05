<script setup lang="ts">
import { extractReadableText } from '#tiptap'
import { reportSchema } from '@schema'
import { toTypedSchema } from '@vee-validate/valibot'
import { parse, value } from 'valibot'
import { useForm } from 'vee-validate'

const { comment } = defineProps<{
  comment: CommentItem
}>()

const { validate, errorBag, errors, handleSubmit, isFieldDirty, resetForm, values } = useForm({
  validationSchema: toTypedSchema(reportSchema),
  initialValues: {
    reporterUid: as().account.puuid,
    comment,
    message: '',
    options: [],
  }
})
watch(() => errors.value, (newVal) => {
  console.log('💠 - watch - ❌😐 newerrors :', newVal)
})
watch(() => values.options, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
const onSubmit = handleSubmit((values) => {
  console.log('🌱 - values:', values)
  if (!comment.content.content.length)
    return console.log('🚫 Error')
  const contentText = extractReadableText(comment.content.content[0])
  console.log('🌱 - onSubmit - contentText:', contentText)

  const payload = {
    ...values,
    comment: {
      id: comment.id,
      authorName: comment.authorName,
      contentText,
      createdAt: comment.createdAt,
    },
  }

  const validated = parse(reportSchema, payload)
  console.log('🌱 - onSubmit - validated:', validated)
  toast({
    title: 'You submitted the following values:',
    description: '',
  })
  return validated
})

const open = shallowRef<boolean>(false)
</script>

<template>
  <Dialog
    v-model:open="open"
    :modal="true"
    @update:open="!open ? resetForm() : null">
    <DialogTrigger class="text-1 cursor-pointer px-1 font-medium opacity-30 hover:underline hover:opacity-100">
      Report
    </DialogTrigger>
    <DialogContent class="h-max max-w-172 px-7 pt-8">
      <DialogHeader>
        <DialogTitle>
          Report Card
        </DialogTitle>
        <DialogDescription class="text-2 text-bc">
          Report offensive, negative, or disruptive content. Please fill out the form to clarify and give additional context.
        </DialogDescription>
      </DialogHeader>

      <form
        class="mt-2 grid auto-rows-max gap-1 "
        @submit="onSubmit">
        <!-- option checkbox items -->
        <template
          v-for="option in reportOptions"
          :key="option.id">
          <CheckboxItemField
            v-if="option?.id !== 'other'"
            :values
            :option />

          <InputOptionField
            v-else
            :values
            :option />
        </template>

        <!-- separator  -->
        <Separator class="  my-4 opacity-70" />
        <TextAreaField
          placeholder="Any comments, context, or messages to clarify the situation?"
          optional />
        <DialogFooter class="flex w-full items-center pr-3">
          <TransitionScalePop
            v-if="errorBag?.options?.length"

            class="text-2 text-shade-domination/8 mr-2 flex items-center gap-2 leading-none">
            <icon
              name="error"
              class="text-shade-domination/8 inline size-4.5 align-bottom font-medium " />
            <span
              v-for="reason, i in errorBag.options"
              :key="i"
              class="">
              {{ reason }}
            </span>
          </TransitionScalePop>
          <Button
            size="9"
            type="submit"
            variant="neutral"
            @click.stop.prevent="validate()">
            Submit Report
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>