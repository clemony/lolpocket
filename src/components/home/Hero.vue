<script setup lang="ts">
const Welcome = defineAsyncComponent(() => import('./Welcome.vue'))
const Login = defineAsyncComponent(() => import('./Login.vue'))
const viewLogin = ref(false)

const component = computed(() => {
    return viewLogin ? Login : Welcome
})

const visible = ref(false)

function onChange() {
    visible.value = true
    setTimeout(() => {
        visible.value = false
    }, 2200)
}

const bg = [
    {
        name: 'ahri',
        url: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loot/video/open_cm_outro.webm',
    },
    {
        name: 'sona',
        url: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sona/skins/skin06/animatedsplash/sona_skin6_centered.webm',
    },
    {
        name: 'udyr',
        url: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/udyr/skins/skin03/animatedsplash/udyr_skin3_centered.webm',
    },
]
</script>
<template>
    <div class="size-screen sticky top-0 left-0 z-0 grid grid-cols-2">
        <div
            class="relative grid size-full shrink-0 items-center justify-center">
            <div
                class="relative mt-32 grid h-200 max-w-200 min-w-140 grid-rows-[2fr_1fr] flex-col justify-center">
                <Transition
                    enter-active-class="delay-1000 transition-all duration-500"
                    enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-all duration-500"
                    leave-from-class="opacity-100 "
                    leave-to-class="opacity-0 -translate-y-2"
                    mode="out-in">
                    <Welcome v-if="!viewLogin" />
                    <Login v-else-if="viewLogin" />
                </Transition>

                <div
                    v-if="visible"
                    class="pointer-events-none absolute top-12 left-10 size-110 overflow-hidden object-center">
                    <video-background
                        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loot/video/open_cm_outro.webm"
                        style="height: 100%"
                        :loop="false"
                        class="z-50 bg-center opacity-65 brightness-180 grayscale"></video-background>

                    <!--                 <div
                    v-if="visible"
                    class="pointer-events-none absolute top-10 -left-24 size-250 overflow-hidden object-center">
                    <video-background
                        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/rewards/honor/milestone/celebration/honor_5_transition.webm"
                        style="height: 100%"
                        :loop="false"
                        class="z-50 bg-center opacity-40 brightness-150 contrast-200 grayscale"></video-background> -->
                </div>
                <Button
                    variant="outline"
                    size="lg"
                    class="hover:bg-neutral border-b2 hover:text-nc shadow-b3/50 w-fit self-start overflow-hidden shadow-sm transition-all duration-200"
                    as-child>
                    <label>
                        <input
                            type="checkbox"
                            v-model="viewLogin"
                            class="peer hidden"
                            @change="onChange" />
                        <span v-if="!viewLogin">Log In</span>

                        <icon
                            v-else
                            icon="mynaui:arrow-long-left"
                            class="size-7 object-center opacity-70" />
                    </label>
                </Button>
            </div>

            <div class="absolute bottom-5 left-4 self-end">
                <icon
                    icon="teenyicons:down-outline"
                    class="animate-pulse stroke-[1.5]" />
            </div>
        </div>

        <div class="overflow-hidden">
            <video-background
                src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/skin86/animatedsplash/ahri_skin86_centered.skins_ahri_hol.webm"
                style="height: 100vh"
                class="mask-left fixed -scale-x-[1] bg-center opacity-50 brightness-125 contrast-160 grayscale"></video-background>
        </div>
    </div>
</template>
<style scoped></style>
