<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <Button
      v-for="provider in authProviders"
      :key="provider"
      class="grid! w-full place-items-center [&_svg]:opacity-80"
      size="14"
      variant="border"
      hover="inset"
      @click="useSignIn(provider)"
    >
      <icon
        :name="provider"
        :class="cn('absolute mx-auto size-5.5 place-self-center')"
      />
    </Button>
  </div>
</template>
