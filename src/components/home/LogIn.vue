<script setup lang="ts">
//import GoogleLogin from 'vue3-google-login'
/* import type { CallbackTypes } from 'vue3-google-login'
import { googleAuthCodeLogin } from 'vue3-google-login'
import { googleLogout } from 'vue3-google-login'
import { decodeCredential } from 'vue3-google-login' */
const accountTypes = [
    {
        id: 'riotAccount',
        name: 'Riot Account',
        icon: 'simple-icons:riotgames',
    },
    {
        id: 'google',
        name: 'Google',
        icon: 'teenyicons:google-outline',
    },
    {
        id: 'email',
        name: 'email',
        icon: 'teenyicons:at-outline',
    },
]

/* const login = () => {
    googleAuthCodeLogin().then((response) => {
        console.log('Handle the response', response)
    })
}

const yourLogoutFunction = () => {
    // your logout logics
    googleLogout()
} */

const callback = (response) => {
    // This callback will be triggered when the user selects or login to
    // his Google account from the popup
    console.log('Handle the response', response)
}

/* const callback: CallbackTypes.CredentialCallback = (response) => {
    const userData = decodeCredential(response.credential)
    console.log('Handle the userData', userData)
} */
/* const loginError = (response) => {
    console.log('Handle the response', response)
} */

const tabModel = ref('connect')
const variant1 = computed(() => {
    return tabModel.value == 'connect' ? 'neutral' : 'outline'
})

const variant2 = computed(() => {
    return tabModel.value == 'email' ? 'neutral' : 'outline'
})
</script>
<template>
    <div class="mt-18 h-84">
        <Tabs class="w-147">
            <div class="flex items-center gap-5">
                <Badge
                    :variant="variant1"
                    class="border-b3 shadow-b2 rounded-lg shadow-sm transition-all duration-300"
                    as-child>
                    <label
                        class="text-bc/80 flex h-8 items-center gap-3 pr-4 pl-1"
                        :class="{ 'text-nc': tabModel == 'connect' }">
                        <input
                            type="radio"
                            class="radio radio-sm border-b3 border"
                            :class="{ 'ring-b1': tabModel == 'connect' }"
                            value="connect"
                            v-model="tabModel" />

                        Connect
                    </label>
                </Badge>

                <Badge
                    :variant="variant2"
                    class="border-b3 shadow-b2 rounded-lg shadow-sm transition-all duration-300"
                    as-child>
                    <label
                        class="text-bc/80 flex h-8 items-center gap-3 pr-4 pl-1"
                        :class="{ 'text-nc': tabModel == 'email' }">
                        <input
                            type="radio"
                            class="radio radio-sm border-b3 before:!shadow-neutral border"
                            :class="{ 'ring-b1': tabModel == 'email' }"
                            value="email"
                            v-model="tabModel" />
                        Email
                    </label>
                </Badge>
            </div>

            <div
                v-if="tabModel == 'connect'"
                class="z-0 mt-12 w-full gap-2 px-1">
                <h3>Connect</h3>
                <p class="mb-10">Log in with another account.</p>

                <div class="grid w-[60%] gap-4">
                    <Riot />

                    <Discord />

                    <Google />
                </div>
            </div>

            <div v-if="tabModel == 'email'" class="z-0 mt-12 w-4/5 px-1">
                <h3>Email</h3>
                <p class="mb-10">Log in with email address.</p>

                <div class="grid space-y-4">
                    <div>
                        <Label for="username">Username</Label>
                        <Input id="username" class="border-b3 h-10" />
                    </div>
                    <div>
                        <Label for="password">Password</Label>
                        <Input id="password" class="border-b3 h-10" />
                    </div>

                    <a
                        href=""
                        class="text-2 mt-2 underline-offset-2 hover:underline">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </Tabs>
    </div>
</template>
<style scoped></style>
