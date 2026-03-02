<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui"
import * as v from "valibot"
import { formType } from "./formType"

const { type } = defineProps<{
  type: "logIn" | "signUp"
}>()

const emit = defineEmits(["error"])

const schema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email")),
  password: v.pipe(v.string(), v.minLength(8, "Must be at least 8 characters")),
})

type Schema = v.InferOutput<typeof schema>

const form = useTemplateRef<HTMLFormElement>("form")

const show = shallowRef<boolean>(false)

const state = reactive({
  email: "",
  password: "",
})

watch(
  () => state.email,
  (v) => {
    state.email = v.trim().toLowerCase()
  },
)

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (type === "logIn") {
    const error = await useSignInWithEmail(state.email, state.password)
    if (error) {
      emit("error", error)
    }
  }
  toast.add({ title: "Success", description: "The form has been submitted." })
  console.log(event.data)
}
</script>

<template>
  <div class="flex h-fit w-full flex-col justify-center gap-4 self-start">
    <AuthProviderGrid />
    <USeparator color="p2" label="or" class="mt-4.5 mb-3.5" />
    <UForm
      ref="form"
      :schema="schema"
      :state="state"
      class="space-y-10"
      @submit="onSubmit">
      <UFormField label="Email" name="email">
        <UInput
          v-model="state.email"
          inputmode="email"
          autocomplete="email"
          autocapitalize="none"
          size="lg"
          :ui="{ root: 'w-full' }">
          <template #trailing>
            <LazyInputClear
              v-if="state.email"
              @clear-input="state.email = ''" />
          </template>
        </UInput>
      </UFormField>

      <UFormField label="Password" name="password">
        <template v-if="type === 'logIn'" #hint>
          <NuxtLink class="text-xs hover:underline" to="/auth/password-reset">
            Forgot your password?
          </NuxtLink>
        </template>

        <UInput
          v-model="state.password"
          size="lg"
          :autocomplete="formType?.[type]?.autocomplete"
          :ui="{ root: 'w-full' }"
          :type="show ? 'text' : 'password'">
          <template #trailing>
            <UButton
              color="transparent"
              :ui="{ leadingIcon: 'text-pc/50 group-hover/btn:text-pc' }"
              variant="link"
              size="sm"
              :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="show ? 'Hide password' : 'Show password'"
              :aria-pressed="show"
              aria-controls="password"
              @click="show = !show" />
            <LazyInputClear
              v-if="state.password"
              @clear-input="state.password = ''" />
          </template>
        </UInput>
      </UFormField>

      <UButton
        :ui="{ base: 'w-full justify-center font-semibold' }"
        color="neutral"
        size="md"
        :disabled="!state.email || !state.password || !form?.errors?.length"
        :label="formType?.[type]?.submit.label"
        type="submit" />
    </UForm>
    <div class="flex w-full items-center justify-center gap-3">
      <ULink
        v-for="(item, i) in formType?.[type]?.swap"
        :key="i"
        underline
        size="xs"
        :to="item.to">
        {{ item.label }}
      </ULink>
    </div>
  </div>
</template>

<style>
/* Hide the password reveal button in Edge */
::-ms-reveal {
  display: none;
}
</style>
