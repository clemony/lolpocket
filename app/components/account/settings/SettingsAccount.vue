<script lang="ts" setup>
const user = useSupabaseUser()
// console.log('💠 - user:', user.value.app_metadata.providers)
</script>

<template>
  <div class="px-8 grid gap-7">
  <label
    v-for="provider in providers"
    :key="provider.name"
    class="flex gap-4 items-center">

        <icon
          :name="provider.icon"
          class="size-6 dst" />
        <h4 class="tracking-tight dst ">
        {{provider.name}}
        </h4>

<Grow  />
        <Switch
          :checked="user.app_metadata.providers.includes(provider.name.toLowerCase())"
          class=" scale-90 -mt-0.25 dst" />
  
  </label>
  </div>
</template>