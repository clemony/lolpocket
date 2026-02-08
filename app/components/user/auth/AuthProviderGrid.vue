<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <UButton
      v-for="provider in authProviders"
      :key="provider"
      size="lg"
      variant="outline"
      color="p3"
      :ui="{
        base: 'w-full',
        leadingIcon: 'opacity-80 absolute mx-auto size-5.5 place-self-center',
      }"
      :icon="provider"
      @click="useSignIn(provider)" />
  </div>
</template>
