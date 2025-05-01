<script lang="ts" setup>
const user = useSupabaseUser()
// console.log('💠 - user:', user.value.app_metadata.providers)
</script>

<template>
  <div class="px-8 grid">
    <p class="w-full border-b font-semibold tracking-tight  text-5 w-full h-6 pb-4 border-b-b3">
      Connected Accounts
    </p>
    <div class=" gap-9 pt-6 grid">
      <label
        v-for="provider in providers"
        :key="provider.name"
        class="flex gap-4 items-center">

        <icon
          :name="provider.icon"
          class="size-6 dst" />
        <h4 class="tracking-tight dst ">
          {{ provider.name }}
        </h4>

        <Grow />
        <Switch
          :checked="user.app_metadata.providers.includes(provider.name.toLowerCase())"
          class=" scale-90 -mt-0.25 dst" />

      </label>
    </div>
  </div>
</template>