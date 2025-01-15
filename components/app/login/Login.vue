<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
const props = defineProps<{
    class1?: HTMLAttributes['class']
}>()
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
                    class="border-b3 shadow-b2 rounded-lg shadow-sm transition-all duration-100"
                    as-child>
                    <label
                        class="text-bc/80 flex h-8 items-center gap-3 pr-4 pl-1"
                        :class="{ 'text-nc': tabModel == 'connect' }">
                        <input
                            type="radio"
                            class="radio radio-sm border-b3 radio-neutral border"
                            :class="{ 'ring-b1': tabModel == 'connect' }"
                            value="connect"
                            v-model="tabModel" />

                        Connect
                    </label>
                </Badge>

                <Badge
                    :variant="variant2"
                    class="border-b3 shadow-b2 rounded-lg shadow-sm transition-all duration-100"
                    as-child>
                    <label
                        class="text-bc/80 flex h-8 items-center gap-3 pr-4 pl-1"
                        :class="{ 'text-nc': tabModel == 'email' }">
                        <input
                            type="radio"
                            class="radio radio-sm border-b3 radio-neutral border"
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

                <div class="grid w-[60%] gap-4" :class="props.class1">
                    <Riot />

                    <Discord />

                    <Google />
                </div>
            </div>

            <div
                v-if="tabModel == 'email'"
                class="z-0 mt-12 w-4/5 px-1"
                :class="props.class1">
                <h3>Email</h3>
                <p class="mb-10">Log in with email address.</p>

                <Email class="email-form" />
            </div>
        </Tabs>
    </div>
</template>
<style scoped></style>
