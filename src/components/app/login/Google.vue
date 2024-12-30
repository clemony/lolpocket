<script setup lang="ts">
import { supabase } from '@lib/supabase'

const googleLogin = () =>
    supabase.auth.signInWithOAuth({
        provider: 'google',
    })
</script>

<template>
    <Button
        @click="googleLogin"
        variant="outline"
        size="lg"
        class="hover:border-neutral/80 h-14 gap-4.5 shadow-xs">
        <icon icon="mdi:google" class="-ml-6.5 size-6" />
        <div class="">Log in with Google</div>
    </Button>

    <!--
        <div
            id="g_id_onload"
            data-client_id="YOUR_GOOGLE_CLIENT_ID"
            data-login_uri="https://your.domain/your_login_endpoint"
            data-auto_prompt="false"></div>
        <div
            class="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"></div>
    -->
</template>
<style scoped></style>
