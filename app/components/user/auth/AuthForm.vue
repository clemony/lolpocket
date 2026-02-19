<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui"
import * as v from "valibot"

const { type } = defineProps<{
  type: "logIn" | "signUp"
}>()

const schema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email")),
  password: v.pipe(v.string(), v.minLength(8, "Must be at least 8 characters")),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: "",
  password: "",
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: "Success", description: "The form has been submitted." })
  console.log(event.data)
}
interface AuthLink {
  label: string
  to: string
}

interface AuthFormType {
  submit: {
    label?: string
  }
  swap?: AuthLink[]
}

const formType: Record<string, AuthFormType> = {
  logIn: {
    submit: {
      label: "Login",
    },
    swap: [
      {
        label: "Signing up?",
        to: "/sign-up",
      },
    ],
  },
  signUp: {
    submit: {
      label: "Sign up with Email",
    },
    swap: [
      {
        label: "Signing up?",
        to: "/login",
      },
      {
        label: "Forgot Password?",
        to: "/password-reset",
      },
    ],
  },
}
</script>

<template>
  <div class="flex h-fit w-full flex-col justify-center gap-4 self-start">
    <AuthProviderGrid />
    <USeparator color="p2" label="or" class="my-3" />
    <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
      <UFormField label="Email" name="email" class="">
        <UInput v-model="state.email" size="lg" :ui="{ root: 'w-full' }" />
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
          :ui="{ root: 'w-full' }"
          type="password">
          <template #trailing>
            <InputClear />
          </template>
        </UInput>
      </UFormField>

      <UButton
        class="mt-6 w-full font-semibold"
        color="neutral"
        size="md"
        type="submit">
        {{ formType?.[type]?.submit.label }}
      </UButton>
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
