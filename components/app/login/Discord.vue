<script setup lang="ts">
  import { getUserRole } from 'shared/supabase/supaIndex';
  const supabase = useSupabaseClient();

  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    });
    if (error) {
      console.error('Error logging in with Discord:', error);
    } else {
      // await updateItemData(user.id)
    }

    getUserRole();
  }
</script>
<template>
  <Button
    @click="signInWithDiscord"
    variant="outline"
    size="lg"
    class="hover:border-neutral/80 h-14 gap-4 shadow-xs">
    <icon
      name="prime:discord"
      class="-ml-6 size-7" />
    <div class="">Log in with Discord</div>
  </Button>
</template>
<style scoped></style>
