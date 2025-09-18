<script setup lang="ts">
import { providers } from '#shared/appdata/authProviders'
import { toast } from 'vue-sonner'

definePageMeta({
  name: 'account',
  description: 'Manage your account settings and login settings.',
  icon: 'at',
  path: '/settings/account',
  /*   middleware: 'confirm-auth', */
})

const select = shallowRef<string>(null)

async function onSubmit(values: any) {
  toast.success({
    title: 'Account Updated!',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    ),
  })
}

const user = useSupabaseUser()

const userProviders = computed(() =>
  Object.values(user.value.app_metadata.providers)
)
console.log('userProviders: ', userProviders)
</script>

<template>
  <form
    class="space-y-12 w-full"
    @submit="onSubmit">
    <!-- username -->

    <fieldset
      id="username"
      class="space-y-6">
      <div class="leading-4">
        <Label
          as="legend"
          class="text-lgfont-semibold mb-2">Username</Label>

        <p class="label text-wrap">
          This is the name that will be used throughout the site. Defers to in
          game name if a Riot account is connected.
        </p>
      </div>
      <Input
        v-model="as().account.username"
        type="text"
        placeholder="Username" />
    </fieldset>

    <!-- region select -->

    <fieldset
      id="region"
      class="space-y-6">
      <div class="leading-4">
        <Label
          as="legend"
          class="text-lgfont-semibold mb-2">Region</Label>

        <p class="label text-wrap">
          Your default summoner search region.
        </p>
      </div>

      <Select
        v-model:model-value="as().account.region"
        position="popper"
        :default-value="as().account.region"
        @close-auto-focui.prevent>
        <SelectTrigger class="h-12 w-full inset-shadow-none flex input">
          <!--       <span class="grow">
              {{ select }}
            </span> -->
          <SelectValue />
        </SelectTrigger>
        <LazyRegionSelectContent
          class="!w-[var(--reka-select-trigger-width)] -top-[calc(var(--reka-select-trigger-height)+4px)]" />
      </Select>
    </fieldset>

    <!-- connected accounts -->

    <fieldset
      id="connected-accounts"
      class="space-y-2">
      <div class="leading-4">
        <Label
          as="legend"
          class="text-lgfont-semibold mb-2">
          Connected Accounts
        </Label>

        <p class="label text-wrap">
          Manage the accounts used to log in to
          <b>lolpocket.</b>
        </p>
      </div>
      <label
        v-for="(provider, i) in providers"
        :key="i"
        class=""
        :class="
          cn(
            'flex !gap-5  border-b !border-b-b2 items-center justify-start   w-full h-20',
          )
        ">
        <div
          :class="
            cn(
              'aspect-square size-11 shadow-sm grid place-items-center rounded-lg border border-b3',
              provider.class,
            )
          ">
          <icon
            :name="String(provider.icon)"
            :class="cn('size-6.5 dst')" />
        </div>
        <h4 class="capitalize text-start dst font-semibold text-md grow">
          {{ provider.name }}
        </h4>

        <span
          v-if="userProviders.includes(provider.name)"
          class="text-xs">
          Connected
        </span>

        <span
          v-else
          class="opacity-60 text-xs">Not Connected</span>

        <Switch
          :model-value="userProviders.includes(provider.name)"
          class="switch data-[state=checked]:ring data-[state=checked]:ring-white/60 scale-90 -mt-0.25 dst" />
      </label>
    </fieldset>

    <!-- email -->

    <fieldset
      id="connected-accounts"
      class="space-y-6">
      <div class="leading-4">
        <Label
          as="legend"
          class="text-lgfont-semibold mb-2 flex gap-2 items-center">
          Email
        </Label>

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
            class="aspect-square rounded-full scale-90 dst"
            size="xxs">
            <icon
              name="tick"
              class="absolute size-4.25 **:stroke-[3.3]" />
          </Button>
          <Button
            v-else
            v-tippy="{
              content: `Check your inbox! Verification email sent at ${user.email_change_sent_at}.`,
              offset: [0, 12],
            }"
            size="xxs"
            class="rounded-md border-b3/60"
            variant="default">
            <icon
              name="refresh"
              class="size-3.5" />
            pending...
          </Button>
        </template>
      </Input>
    </fieldset>

    <div class="flex justify-start">
      <Button variant="neutral">
        Update account
      </Button>
    </div>
  </form>
</template>
