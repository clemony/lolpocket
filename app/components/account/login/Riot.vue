<script setup lang="ts">
const supabase = useSupabaseClient()
</script>

<template>
  <button
    v-tippy="'Sign in with Riot ID'"
    alt="Sign in with Riot ID"
    class="btn btn-square size-26">
    <icon
      name="simple-icons:riotgames"
      class="size-8" />
  </button>
</template>

<style scoped></style>
