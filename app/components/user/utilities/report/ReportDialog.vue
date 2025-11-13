<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/valibot";
import { useToggle } from "@vueuse/core";
import { extractReadableText } from "tiptap";
import { parse } from "valibot";
import { useForm } from "vee-validate";
import { toast } from "~/base/notification/toast/use-toast";
import { reportOptions } from "./reportOptions";

const { button, comment } = defineProps<{
  comment: CommentData;
  button?: boolean;
}>();

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
    message: "",
    options: [],
  },
});
watch(
  () => errors.value,
  (newVal) => {
    console.log("💠 - watch - ❌😐 newerrors :", newVal);
  },
);
watch(
  () => values.options,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal);
  },
);
const onSubmit = handleSubmit((values) => {
  console.log("🌱 - values:", values);
  if (!comment.content.content.length) return console.log("🚫 Error");
  const content_text = extractReadableText(comment.content.content[0]);
  console.log("🌱 - onSubmit - contentText:", content_text);

  const payload = {
    ...values,
    comment: {
      author_id: comment.author_id,
      id: comment.id,
      content_text,
      created: comment.created,
    },
  };

  const validated = parse(reportSchema, payload);
  console.log("🌱 - onSubmit - validated:", validated);
  toast({
    title: "You submitted the following values:",
    description: "",
  });
  return validated;
});

const open = shallowRef<boolean>(false);

const toggleOpen = useToggle(open);
defineExpose({
  report: () => toggleOpen(),
});
</script>

<template>
  <Dialog
    v-model:open="open"
    :modal="true"
    @update:open="!open ? resetForm() : null"
  >
    <slot v-if="button" :report="toggleOpen()">
      <DialogTrigger as-child>
        <Button size="auto" variant="link" class="text-1"> Report </Button>
      </DialogTrigger>
    </slot>
    <LazyDialogContent class="h-max max-w-172 px-7 pt-8">
      <DialogHeader>
        <DialogTitle> Report Card </DialogTitle>
        <DialogDescription class="text-2 text-bc">
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
            class="mr-2 flex items-center gap-2 text-2 leading-none text-shade-domination/8"
          >
            <icon
              name="error"
              class="inline size-4.5 align-bottom font-medium text-shade-domination/8"
            />
            <span v-for="(reason, i) in errorBag.options" :key="i" class="">
              {{ reason }}
            </span>
          </TransitionScalePop>
          <Button
            size="9"
            type="submit"
            variant="neutral"
            @click.stop.prevent="validate()"
          >
            Submit Report
          </Button>
        </DialogFooter>
      </form>
    </LazyDialogContent>
  </Dialog>
</template>
