<script lang="ts" setup>
definePageMeta({
  title: 'settings',
  level: 1,
  order: 10,
})

// Account tracking
const { syncIfDirty: syncAccount } = useSupabaseSync(
  () => as().account,
  '/api/supabase/updateUserAccount',
  (uuid, account) => ({ uuid, account }),
  AccountSchema
)

// Settings tracking
const { syncIfDirty: syncSettings } = useSupabaseSync(
  () => as().settings,
  '/api/supabase/updateUserSettings',
  (uuid, settings) => ({ uuid, settings }),
  SettingsSchema
)
</script>

<template>
  <SeparatorLayout
    description="Manage your account settings and set display preferences."
    title="Settings">
    <LayoutAsideSplit>
      <template #aside>
        <SettingsNav />
      </template>
      <SettingsLayout>
        <NuxtPage />
      </SettingsLayout>
    </LayoutAsideSplit>
  </SeparatorLayout>
</template>
