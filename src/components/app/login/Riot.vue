<script setup lang="ts">
import { supabase } from '@lib/supabase'
</script>
<template>
    <Button
        variant="outline"
        size="lg"
        class="hover:border-neutral/80 h-14 gap-5 shadow-xs">
        <icon icon="simple-icons:riotgames" class="-ml-8 size-5.5" />
        <div class="">Log in with Riot ID</div>
    </Button>
</template>
<style scoped></style>
