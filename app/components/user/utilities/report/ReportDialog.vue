<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { parse } from "valibot"
import type { ReportOption } from "./reportOptions"
import { reportOptions } from "./reportOptions"

const { button, comment } = defineProps<{
  comment: CommentData
  button?: boolean
}>()

const emit = defineEmits<{ close: [boolean] }>()

const form = useTemplateRef<HTMLFormElement>("form")

const state = reactive({
  reporterUid: user().account?.puuid ?? "",
  options: [] as string[],
  message: "",
  // keep comment shape aligned to reportSchema so UForm can validate
  comment: {
    author_id: comment.uuid,
    comment_id: comment.id,
    reporter_id: user().account?.puuid ?? "",
    content_text: undefined as string | undefined,
    created: comment.created,
  },
})

const options = computed<ReportOption[]>(() => reportOptions.filter(Boolean))

const formErrors = computed(
  () =>
    (form.value?.errors?.value ?? []) as { path?: string; message?: string }[],
)

async function onSubmit(event: FormSubmitEvent<ReportSchema>) {
  if (!comment.content.content.length) return console.log("🚫 Error")

  const content_text = extractReadableText(comment.content)

  const payload = {
    ...event.data,
    comment: {
      ...event.data.comment,
      content_text,
    },
  }

  parse(reportSchema, payload)

  const toast = useToast()
  toast.add({
    title: "You submitted the following values:",
    description: "",
  })
}
</script>

<template>
  <LazyUModal
    v-model:open="threads().reportOpen"
    :close="{ onClick: () => emit('close', false) }"
    title="Report Card"
    description="Report offensive, negative, or disruptive content. Please fill out the form to clarify and give additional context."
    :modal="true"
    @update:open="!threads().reportOpen ? form?.clear() : null">
    <slot v-if="button" :report="threads().report()">
      <UButton as-child>
        <button class="text-xs hover:underline">Report</button>
      </UButton>
    </slot>

    <template #content>
      <div class="h-max max-w-172 px-7 pt-8">
        <UForm
          ref="form"
          :state="state"
          :schema="reportSchema"
          class="mt-2 grid auto-rows-max gap-1"
          @submit="onSubmit">
          <!--           <UFormField name="options">

        <UCheckboxGroup  v-model="state.options" :items="options"

<template #description>
        <UInput
          ref="inputRef"
          class="grow"
          v-model:model-value="message"
          placeholder="Please describe briefly..." >
          <template #trailing>
            <LazyInputClear type="button" @clear-input="" />
          </template>
        </UInput>
</template>
          </UCheckboxGroup>
          </UFormField>
 -->
          <UFormField v-slot="{ error }" name="message">
            <UInputOptionField
              v-model="state.options"
              v-model:message="state.message"
              :option="options.find((option) => option.id === 'other')!"
              :error="typeof error === 'string' ? error : undefined" />
          </UFormField>

          <Separator class="my-4 opacity-70" />

          <UFormField label="Message" hint="optional">
            optional
            <UTextarea
              placeholder="Any comments, context, or messages to clarify the situation?"
              optional />
          </UFormField>
          <div class="flex w-full items-center">
            <div
              v-if="formErrors.find((e) => e.path === 'options')"
              v-auto-animate
              class="text-shade-domination/8 mr-2 flex items-center gap-2 text-sm leading-none">
              <icon
                class="text-shade-domination/8 inline size-4.5 align-bottom font-medium"
                name="error" />
              <span
                v-for="(reason, i) in formErrors.filter(
                  (e) => e.path === 'options',
                )"
                :key="i">
                {{ reason.message }}
              </span>
            </div>

            <UButton size="sm" type="submit" color="neutral">
              Submit Report
            </UButton>
          </div>
        </UForm>
      </div>
    </template>
  </LazyUModal>
</template>
