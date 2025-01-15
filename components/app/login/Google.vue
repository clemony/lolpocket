<script setup lang="ts">
  import { getUserRole } from 'shared/supabase/supaIndex';
  const supabase = useSupabaseClient();

  const googleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    getUserRole();
  };
</script>

<template>
  <Button
    @click="googleLogin"
    variant="outline"
    size="lg"
    class="hover:border-neutral/80 h-14 gap-4.5 shadow-xs">
    <icon
      name="mdi:google"
      class="-ml-6.5 size-6" />
    <div class="">Log in with Google</div>
  </Button>
</template>
<style scoped></style>
