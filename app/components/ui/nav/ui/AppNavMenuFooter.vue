<script lang="ts" setup>
const as = useAccountStore()
</script>

<template>
  <div
    class="flex border-t border-t-b4/80 pt-2  mt-4 justify-between items-center px-3">
    <div class="flex items-center text-2 gap-2">
      <slot />
    </div>

    <div class="flex gap-4">
      <NavHyperlink
        nuxt
        to="/about"
        hash
        class="text-1 [&_svg]:size-3.5">
        about
      </NavHyperlink>

      <NavHyperlink
        nuxt
        to="/docs"
        hash
        class="text-1 [&_svg]:size-3.5">
        docs / help
      </NavHyperlink>

      <NavHyperlink
        v-if="as?.loggedIn"
        @click="useSignOut()">
        <icon
          name="mdi:sign-out"
          class="size-4 shrink-0 dst" />
      </NavHyperlink>
    </div>
  </div>
</template>