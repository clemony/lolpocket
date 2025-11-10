<script setup lang="ts">
import { providers } from '~~/shared/references'
import { toast } from '~/base/notification/toast/use-toast'

definePageMeta({
  title: 'account',
  description: 'Manage your account settings and login settings.',
  icon: 'at',
  path: '/settings/account',
  search: 'user',
  /*   middleware: 'confirm-auth', */
})

const select = shallowRef<string>(null)

async function onSubmit(values: any) {
  toast({
    title: 'Account Updated!',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    ),
  })
}

const user = useSupabaseUser()

const userProviders = await computedAsync(() =>
  Object.values(user.value.app_metadata.providers)
)
</script>

<template>
  <form
    v-if="user"
    class="w-full space-y-12"
    @submit="onSubmit">
    <!-- username -->

    <FieldSet
      id="username">
      <FieldContent>
        <FieldTitle>
          Username
        </FieldTitle>

        <FieldDescription>
          This is the name that will be used throughout the site. Defers to in
          game name if a Riot account is connected.
        </FieldDescription>
      </FieldContent>
      <ClientOnly>
        <InputGroup>
          <InputGroupInput
            v-model="as().account.username"
            type="text"
            placeholder="Username" />
          <InputGroupAddon>
            <icon name="user" />
          </InputGroupAddon>
        </InputGroup>
      </ClientOnly>
    </FieldSet>

    <!-- region select -->

    <fieldset
      id="region"
      class="space-y-6">
      <div class="leading-4">
        <h4
          as="legend"
          class="mb-2 text-5 font-semibold">
          Region
        </h4>

        <p class="label text-wrap">
          Your default summoner search region.
        </p>
      </div>

      <ClientOnly>
        <Select
          v-model:model-value="as().account.region"
          name="region-select"
          position="popper"
          :default-value="as().account.region"
          @close-auto-focus.prevent>
          <SelectTrigger
            class="input flex h-12 w-full inset-shadow-none">
            <!--       <span class="grow">
              {{ select }}
            </span> -->
            <SelectValue />
          </SelectTrigger>
          <LazyRegionSelectContent
            class="
              -top-[calc(var(--reka-select-trigger-height)+4px)]
              !w-[var(--reka-select-trigger-width)]
            " />
        </Select>
      </ClientOnly>
    </fieldset>

    <!-- connected accounts -->

    <fieldset
      id="connected-accounts"
      class="space-y-2">
      <div class="leading-4">
        <h4
          as="legend"
          class="mb-2">
          Connected Accounts
        </h4>

        <p class="label text-wrap">
          Manage the accounts used to log in to
          <b>lolpocket.</b>
        </p>
      </div>
      <label
        v-for="(provider, i) in providers"
        :key="i"
        for="toggle-provider"
        class=""
        :class="
          cn(
            `
              flex h-20 w-full items-center justify-start !gap-5 border-b
              !border-b-b2
            `,
          )">
        <div
          :class="
            cn(
              `
                grid aspect-square size-11 place-items-center rounded-lg border
                border-b3 shadow-sm
              `,
              provider.class,
            )
          ">
          <icon
            :name="String(provider.icon)"
            :class="cn('size-6.5 dst')" />
        </div>
        <h4 class="grow text-start text-4 font-semibold capitalize dst">
          {{ provider.name }}
        </h4>

        <span
          v-if="userProviders?.includes(provider.name)"
          class="text-2">
          Connected
        </span>

        <span
          v-else
          class="text-2 opacity-60">Not Connected</span>

        <Switch
          name="toggle-provider"
          :model-value="userProviders?.includes(provider.name)"
          class="
            switch -mt-0.25 scale-90 dst
            data-[state=checked]:ring data-[state=checked]:ring-white/60
          " />
      </label>
    </fieldset>

    <!-- email -->

    <fieldset
      id="connected-accounts"
      class="space-y-6">
      <div class="leading-4">
        <h4
          as="legend"
          class="text-5font-semibold mb-2 flex items-center gap-2">
          Email
        </h4>

        <p class="label text-wrap">
          Used for password reset and update.
        </p>
      </div>

      <Input
        id="email"
        v-model:email="user.email"
        class="h-12"
        required
        :default-value="user.email"
        type="email"
        placeholder="example@example.com"
        @clear:input="user.email = ''">
        <icon name="mail" />

        <template #2>
          <Button
            v-if="!user.email_confirmed_at"
            v-tippy="'verified!'"
            variant="neutral"
            hover="neutral"
            class="aspect-square scale-90 rounded-full dst"
            size="6">
            <icon
              name="tick"
              class="
                absolute size-4.25
                **:stroke-[3.3]
              " />
          </Button>
          <Button
            v-else
            v-tippy="{
              content: `Check your inbox! Verification email sent at ${user.email_change_sent_at}.`,
              offset: [0, 12],
            }"
            size="6"
            class="rounded-md border-b3/60"
            variant="base">
            <icon
              name="refresh"
              class="size-3.5" />
            pending...
          </Button>
        </template>
      </Input>
    </fieldset>

    <!-- username -->

    <fieldset
      id="blocked-users"
      class="space-y-6">
      <div class="leading-4">
        <h4
          as="legend"
          class="mb-2 text-5 font-semibold">
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
      <Button variant="neutral">
        Update account
      </Button>
    </div>
  </form>
</template>
