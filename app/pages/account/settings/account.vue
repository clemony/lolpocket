<script setup lang="ts">
definePageMeta({
  title: 'account',
  description: 'Manage your account settings and login settings.',
  icon: 'at',
  path: '/settings/account',
  search: 'user',
  /*   middleware: 'confirm-auth', */
})

const userProviders = await computedAsync(() =>
  Object.values(as().user.app_metadata.providers)
)
const email = shallowRef<string>(null)
const username = shallowRef<string>(null)
onMounted(() => {
  email.value = as().user.email
  username.value = as().account.username
})
</script>

<template>
  <form
    class="flex w-full flex-col gap-6"
    @submit.prevent>
    <!-- username -->
    <FormItem>
      <FieldTitle>Username</FieldTitle>
      <InputGroup class="px-3">
        <InputGroupAddon>
          <icon name="user" />
        </InputGroupAddon>
        <InputGroupInput
          v-model:model-value="username"
          class="**:text-md!"
          @blur="validateField(usernameSchema)" />
      </InputGroup>

      <FieldDescription>
        Used to identify you and your account. Your main display name if you
        haven't connected a Riot account.
      </FieldDescription>
    </FormItem>

    <!-- email -->

    <FormItem>
      <FieldTitle>Email</FieldTitle>
      <InputGroup class="px-3">
        <InputGroupAddon>
          <Icon
            class=""
            name="mail" />
        </InputGroupAddon>
        <InputGroupInput
          v-model:model-value="email"
          class="**:text-mdd!"
          @blur="validateField(emailSchema)" />
        <InputGroupAddon
          v-if="!as().user.email_confirmed_at"
          v-tippy="'verified!'"
          class="aspect-square scale-90 rounded-full dst"
          color="neutral"
          align="inline-end"
          hover="neutral"
          size="6">
          <Icon
            class="absolute size-4.25 **:stroke-[3.3]"
            name="tick" />
        </InputGroupAddon>
        <InputGroupAddon
          v-else
          v-tippy="{
            content: `Check your inbox! Verification email sent at ${as().user.email_change_sent_at}.`,
            offset: [0, 12],
          }"
          class="rounded-md border-p3/60"
          size="6"
          align="inline-end"
          variant="base">
          <icon
            class="size-3.5"
            name="refresh" />
          pending...
        </InputGroupAddon>
      </InputGroup>

      <FieldDescription>
        Receive password reset and update messages.
      </FieldDescription>
    </FormItem>

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
                <span
                  v-else
                  class="text-sm opacity-60">Not Connected</span>

                <Switch
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

    <fieldset
      id="blocked-users"
      class="space-y-6">
      <div class="leading-4">
        <h4
          class="mb-2 text-xl font-semibold"
          as="legend">
          Blocked Users
        </h4>

        <p class="label text-wrap">
          This is the name that will be used throughout the site. Defers to in
          game name if a Riot account is connected.
        </p>
      </div>
      <Input
        type="text"
        placeholder="Username" />
    </fieldset>

    <div class="flex justify-start">
      <Button
        color="neutral"
        @click.prevent
        @click="accountUpdate({})">
        Update account
      </Button>
    </div>
  </form>
</template>
