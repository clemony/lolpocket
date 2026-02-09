<script setup lang="ts">
definePageMeta({
  title: "account",
  description: "Manage your account settings and login settings.",
  icon: "at",
  path: "/settings/account",
  search: "user",
  /*   middleware: 'confirm-auth', */
})

const userProviders = await computedAsync(() =>
  Object.values(as().user?.app_metadata?.providers ?? {})
)
const email = shallowRef<string | null>(null)
const username = shallowRef<string | null>(null)
onMounted(() => {
  email.value = as().user?.email ?? null
  username.value = as().account?.username ?? null
})
</script>

<template>
  <UForm class="flex w-full flex-col gap-6" @submit.prevent>
    <!-- username -->
    <UFormField
      title="Username"
      description="Used to identify you and your account. Your main display name if you
        haven't connected a Riot account.">
      <UInput
        icon="i-user"
        @blur="validateField(usernameSchema)"
        v-model:model-value="username" />
    </UFormField>

    <!-- email -->

    <UFormField
      title="Email"
      description="Receive password reset and update messages."
      icon="mail">
      <UInput v-model:model-value="email" @blur="validateField(emailSchema)">
        <template #trailing>
          <InputClear @clear-input="is().filters.query = ''" />
          <Tooltip v-if="!as().user?.email_confirmed_at" text="Verified!">
            <UBadge icon="i-tick" size="xs" color="neutral">
              pending...
            </UBadge>
          </Tooltip>
          <Tooltip
            v-else
            :text="`Check your inbox! Verification email sent at ${as().user?.email_change_sent_at}.`">
            <UBadge icon="i-refresh" size="xs" variant="outline">
              pending...
            </UBadge>
          </Tooltip>
        </template>
      </UInput>
    </UFormField>

    <!-- connected accounts -->

    <FieldContent>
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
          <Card>
            <CardContent class="w-full">
              <div class="grid h-26 w-full place-items-center">
                <Icon
                  :name="String(provider.icon)"
                  :class="
                    cn('size-10.5 dst', {
                      'text-domination': provider.name === 'riot',
                      'scale-90': provider.name === 'google',
                    })
                  " />
              </div>
              <CardTitle
                class="grow text-start text-lg font-semibold capitalize dst">
                {{ provider.name }}
              </CardTitle>

              <CardDescription class="flex w-full items-center justify-between">
                <span
                  v-if="userProviders?.includes(provider.name)"
                  class="text-sm">
                  Connected
                </span>
                <span v-else class="text-sm opacity-60">Not Connected</span>

                <USwitch
                  class="switch -mt-0.25 scale-90 dst data-[state=checked]:ring data-[state=checked]:ring-white/60"
                  name="toggle-provider"
                  :model-value="userProviders?.includes(provider.name)" />
              </CardDescription>
            </CardContent>
          </Card>
        </Label>
      </FieldGroup>
    </FieldContent>

    <!-- username -->

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
