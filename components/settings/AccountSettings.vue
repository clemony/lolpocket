<script setup lang="ts">
const route = useRoute()
console.log(route)

const user = useSupabaseUser()
// console.log('💠 - user:', user.value.app_metadata.providers)
</script>

<template>
  <NuxtLayout name="setting-section-layout">
    <label
      v-for="provider in providers"
      :key="provider.name"
      v-tippy="
        computed(() => {
          return user.app_metadata.providers.includes(provider.name.toLowerCase()) ? `${provider.name} Connected` : `${provider.name} Disconnected`
        }).value.toString()
      "
      class="col-start-2"
    >
      <SettingCard
        :title="provider.name"
        class="pt-3 pb-2 justify-center"
        description=""
        content-class="py-0 h-0"
      >
        <template #header-icon>
          <icon
            :name="provider.icon"
            class="size-6"
          />
        </template>

        <template #header-badge>
          <Switch
            :checked="user.app_metadata.providers.includes(provider.name.toLowerCase())"
            class="rotate-180 scale-90"
          />
        </template>
      </SettingCard>
    </label>
  </NuxtLayout>
</template>

<style scoped></style>
