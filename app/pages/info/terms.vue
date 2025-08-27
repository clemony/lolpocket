<script lang="ts" setup>
definePageMeta({
  name: 'terms',
  // path: '/terms',
  icon: 'gear',
  title: 'Terms & Conditions',
  description: 'General app usage data.',
})
</script>

<template>
  <SeparatorLayout>
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