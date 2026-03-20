<script lang="ts" setup>
import { providers } from "~/domain/lp/external/authProviders"
import { useSignIn } from "./useAuth"
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <UButton
      v-for="provider in providers"
      :key="provider.label"
      size="lg"
      variant="outline"
      color="transparent"
      :ui="{
        base: 'w-full',
        leadingIcon: 'absolute mx-auto size-5.5 place-self-center opacity-80'
      }"
      :icon="provider.icon"
      @click="useSignIn(provider.label)" />
  </div>
</template>
