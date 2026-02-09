<script lang="ts" setup>
definePageMeta({
  name: "settings",
  order: 10,
  path: "/settings",
  redirect: "/settings/app",
})

// Account tracking
/* const { syncIfDirty: syncAccount } = useSupabaseSync(
  () => as().account,
  '/supabase/updateUserAccount',
  (uuid, account) => ({ uuid, account }),
  AccountSchema
)
 */
// Settings tracking
/* const { syncIfDirty: syncSettings } = useSupabaseSync(
  () => as().settings,
  '/supabase/updateUserSettings',
  (uuid, settings) => ({ uuid, settings }),
  SettingsSchema
) */
const route = useRoute()

const settingsRoutes = computed(
  () =>
    route.matched[0]?.children.map((c) => ({
      to: c.path,
      label: c.meta?.title,
    })) ?? []
)
</script>

<template>
  <UPage
    class="overflow-hidden!"
    description="Manage your account settings and set display preferences."
    title="Settings">
    <template #left>
      <UPageAside
        class="flex size-full space-x-2 gap-y-1 overflow-hidden pr-4 pl-0.5 lg:flex-col lg:space-x-0">
        <UPageLinks :items="settingsRoutes" size="xl" />
      </UPageAside>
    </template>
    <SettingsLayout>
      <UPageBody class="w-full space-y-8">
        <UPageHeader :title="String(route.meta?.title)" />
        <NuxtPage />
      </UPageBody>
    </SettingsLayout>
  </UPage>
</template>
