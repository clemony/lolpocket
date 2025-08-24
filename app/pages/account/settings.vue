<script lang="ts" setup>
const items = [
  {
    name: 'General',
    description: 'Update your account settings. Set your preferred language and timezone.',
  },

  {
    name: 'Profile',
    description: 'Update your account settings. Set your preferred language and timezone.',
  },
  {
    name: 'Account',
    description: 'Update and view your account settings. Set your region.',
  },
]

// Account tracking
const { syncIfDirty: syncAccount } = useSupabaseSync(
  () => as().account,
  '/api/supabase/updateUserAccount',
  (uuid, account) => ({ uuid, account }),
  AccountSchema,
)

// Settings tracking
const { syncIfDirty: syncSettings } = useSupabaseSync(
  () => as().settings,
  '/api/supabase/updateUserSettings',
  (uuid, settings) => ({ uuid, settings }),
  SettingsSchema,
)
</script>

<template>
  <div class="hidden space-y-6 px-22 py-12 pb-16 md:block">
    <div class="space-y-0.5">
      <h2 class="text-9 font-bold dst">
        Settings
      </h2>
      <p class="text-bc/60 leading-8">
        Manage your account settings and set display preferences.
      </p>
    </div>
    <Separator class="mt-6 mb-12" />
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-ml-2 w-full max-w-1/5 overflow-hidden">
        <SettingsNav :items />
      </aside>
      <div class="flex-1 lg:max-w-4xl px-0.25">
        <div class="space-y-12">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>