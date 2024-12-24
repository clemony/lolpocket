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
</script>
<template>
    <Card
        class="!shadow-color-b3/40 !border-b3 mt-4 mt-20 h-84 overflow-hidden">
        <Tabs default-value="connect" class="w-147">
            <TabsList class="grid h-14 w-full grid-cols-2">
                <TabsTrigger value="connect" class="">
                    <div class="flex h-9 flex-nowrap items-center gap-4">
                        <icon icon="bi:usb-c" class="size-6" />
                        Connect
                    </div>
                </TabsTrigger>

                <TabsTrigger value="email">
                    <div class="flex h-9 flex-nowrap items-center gap-4">
                        <icon
                            icon="teenyicons:at-outline"
                            class="size-4.5 stroke-[1.5]" />
                        Email
                    </div>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="connect">
                <CardHeader>
                    <CardTitle>Connect</CardTitle>
                    <CardDescription>
                        Log in with Riot or Google account.
                    </CardDescription>
                </CardHeader>
                <CardContent class="">
                    <!--    <GoogleLogin :callback="callback" /> -->
                </CardContent>
            </TabsContent>

            <TabsContent value="email">
                <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Login with email address.</CardDescription>
                </CardHeader>
                <CardContent class="space-y-4 px-6">
                    <div class="space-y-3">
                        <Label for="username">Username</Label>
                        <Input id="username" class="border-b3 h-10" />
                    </div>
                    <div class="space-y-1">
                        <Label for="password">Password</Label>
                        <Input id="password" class="border-b3 h-10" />
                    </div>
                </CardContent>
                <CardFooter class="flex items-center">
                    <Grow />
                    <div class="-mt-4">
                        <slot />
                    </div>
                    <Button size="lg" class="">Log in</Button>
                </CardFooter>
            </TabsContent>
        </Tabs>
    </Card>
</template>
<style scoped></style>
