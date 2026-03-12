<script setup lang="ts">
import type { ProviderType } from "~/domain/lp/external/authProviders"
import { providers } from "~/domain/lp/external/authProviders"

definePageMeta({
  title: "Account",
  description: "Manage your account settings and login settings.",
  icon: "at",
  path: "/settings/account",
  auth: true,
  order: 1,
  prefix: "Settings",
  /*   middleware: 'confirm-auth', */
})

const userProviders = await computedAsync(() =>
  Object.values(user().user?.app_metadata?.providers ?? {}),
)
const email = shallowRef<string | undefined>("")
const username = shallowRef<string | undefined>("")
onMounted(() => {
  email.value = user().user?.email
  username.value = user().account?.username
})
</script>

<template>
  <UForm class="flex w-full flex-col gap-6">
    <!-- username -->
    <UFormField
      title="Username"
      description="Used to identify you and your account. Your main display name if you
        haven't connected a Riot account.">
      <UInput
        v-model:model-value="username"
        icon="i-user"
        @blur="validateField(usernameSchema)" />
    </UFormField>

    <!-- email -->

    <UFormField
      title="Email"
      description="Receive password reset and update messages."
      icon="mail">
      <UInput v-model:model-value="email" @blur="validateField(emailSchema)">
        <template #trailing>
          <LazyInputClear @clear-input="is().filters.query = ''" />
          <Tooltip v-if="!user().user?.email_confirmed_at" label="Verified!">
            <UBadge icon="i-tick" size="xs" color="neutral">
              pending...
            </UBadge>
          </Tooltip>
          <Tooltip
            v-else
            :label="`Check your inbox! Verification email sent at ${user().user?.email_change_sent_at}.`">
            <UBadge icon="i-refresh" size="xs" variant="outline">
              pending...
            </UBadge>
          </Tooltip>
        </template>
      </UInput>
    </UFormField>

    <!-- connected accounts -->

    <UFormField title="" description="">
      <FieldTitle>Connected Accounts</FieldTitle>

      <FieldDescription>
        Manage the accounts used to log in to
        <b>lolpocket.</b>
      </FieldDescription>
      <FieldGroup class="grid w-full grid-cols-3">
        <Label
          v-for="(provider, i) in providers"
          :key="i"
          for="toggle-provider"
          as-child>
          <UCard>
            <UUser
              size="md"
              :name="provider.label"
              :icon="String(provider.icon)">
              <template #avatar>
                <Icon
                  :name="String(provider.icon)"
                  :class="
                    cn('size-10.5 ds-2xs', {
                      'text-dom':
                        provider.label === ('riot' as ProviderType['label']),
                      'scale-90': provider.label === 'google',
                    })
                  " />
              </template>
            </UUser>

            <USwitch
              :ui="{ label: 'order-first' }"
              :label="
                userProviders?.includes(provider.label)
                  ? 'Connected'
                  : 'Not Connected'
              "
              class="switch -mt-0.25 scale-90 ds-2xs data-[state=checked]:ring data-[state=checked]:ring-white/60"
              :model-value="userProviders?.includes(provider.label)" />
          </UCard>
        </Label>
      </FieldGroup>
    </UFormField>

    <!-- username -->
    <UFormField title="" description=""></UFormField>
    <fieldset id="blocked-users" class="space-y-6">
      <div class="leading-4">
        <h4 class="mb-2 text-xl font-semibold" as="legend">Blocked Users</h4>

        <p class="label text-wrap">
          This is the name that will be used throughout the site. Defers to in
          game name if a Riot account is connected.
        </p>
      </div>
      <UInput type="text" placeholder="Username" />
    </fieldset>

    <div class="flex justify-start">
      <UButton color="neutral" @click.prevent @click="accountUpdate({})">
        Update account
      </UButton>
    </div>
  </UForm>
</template>
