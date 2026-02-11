<script lang="ts" setup>
definePageMeta({
  name: "settings",
  order: 10,
  path: "/settings",
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
const router = useRouter()
const route = useRoute()

const settingsRoutes = computed(
  () =>
    ["app", "account", "profile", "messaging", "theme"].map((c) => ({
      to: `/settings/${c}`,
      label: c,
    })) ?? []
)
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside
        class="flex size-full space-x-2 gap-y-1 overflow-hidden pr-4 pl-0.5 lg:flex-col lg:space-x-0">
        <template #top>
          <UPageHeader class="border-b-0" title="Settings" />
        </template>
        <UPageLinks
          :ui="{ link: 'capitalize pl-1 py-2 font-medium hover:underline' }"
          :links="settingsRoutes"
          size="xl" />
      </UPageAside>
    </template>
    <UPageBody class="w-full space-y-8">
      <UPageHeader :title="String(route.meta?.title)" />
      <NuxtPage />
    </UPageBody>
  </UPage>
</template>
