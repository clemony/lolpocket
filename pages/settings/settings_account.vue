<script setup lang="ts">
const route = useRoute()
console.log(route)

definePageMeta({
  name: 'account',
  path: '/settings/account',
})

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
      class="col-start-2">
      <div
        :title="provider.name"
        class="pt-3 pb-2 justify-center"
        description=""
        content-class="py-0 h-0">
        <div>
          <icon
            :name="provider.icon"
            class="size-6" />
        </div>

        <div>
          <Switch
            :checked="user.app_metadata.providers.includes(provider.name.toLowerCase())"
            class="rotate-180 scale-90" />
        </div>
      </div>
    </label>
  </NuxtLayout>
</template>

<style scoped></style>
