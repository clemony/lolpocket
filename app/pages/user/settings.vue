<script lang="ts" setup>
definePageMeta({
  title: "Settings",
  order: 10,
  icon: "i-gear",
  class: "**:stroke-[2.2] -translate-x-1!",
  path: "/settings"
})

// Account tracking
/* const { syncIfDirty: syncAccount } = useSupabaseSync(
  () => user().account,
  '/supabase/updateUserAccount',
  (uuid, account) => ({ uuid, account }),
  AccountSchema
)
 */
// Settings tracking
/* const { syncIfDirty: syncSettings } = useSupabaseSync(
  () => user().settings,
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
      label: c
    })) ?? []
)
</script>

<template>
  <UContainer>
    <UPage :ui="{ left: 'lg:col-span-3', center: '-ml-10 lg:col-span-7' }">
      <template #left>
        <UPageAside
          :ui="{
            container:
              'flex size-full space-x-2 gap-y-1 overflow-hidden pr-4 pl-20 lg:flex-col lg:space-x-0'
          }">
          <UPageLinks
            title="Settings"
            :ui="{
              link: 'py-2 pl-1 font-medium capitalize hover:underline',
              title: 'pt-9 pb-6 text-4xl font-bold'
            }"
            :links="settingsRoutes"
            size="xl" />
        </UPageAside>
      </template>
      <UPageBody class="w-full space-y-8">
        <UPageHeader :title="String(route.meta?.title)" />

        <UTheme
          :ui="{
            form: {
              base: 'flex w-full max-w-170 flex-col gap-12'
            },
            formField: {
              root: 'max-w-full min-w-90 grow',
              container: 'flex flex-col gap-4',
              wrapper: ''
            },
            input: { root: 'w-full' }
          }">
          <NuxtPage />
        </UTheme>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
