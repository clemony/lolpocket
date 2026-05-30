<script lang="ts" setup>
import {
  providers,
  supabaseProviders
} from "~/domain/about/external/authProviders"
import { useSignIn } from "../../composables/useAuth"
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <UButton
      v-for="provider in supabaseProviders"
      :key="providers[provider].label"
      size="lg"
      variant="outline"
      color="primary"
      :ui="{
        base: 'w-full',
        leadingIcon: 'absolute mx-auto size-5.5 place-self-center opacity-80'
      }"
      :icon="providers[provider].icon"
      @click="useSignIn(provider)" />
  </div>
</template>
