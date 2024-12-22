<script setup lang="ts"></script>
<template>
    <div class="size-screen sticky top-0 left-0 z-0 grid grid-cols-2">
        <div
            class="relative grid size-full shrink-0 grid-rows-[1fr_3fr] flex-col items-center justify-center">
            <div class="relative w-[80%]">
                <div
                    class="wrapper **:!text-12 absolute top-44 flex items-center justify-center **:!font-bold **:tracking-tight">
                    <div class="ws-nowrap relative -ml-1 flex">
                        <h1 class="">l</h1>
                        <h1 class="tracking-in-expand">ol</h1>
                        <h1 class="">p</h1>
                        <h1 class="tracking-in-expand">ocket</h1>

                        <div
                            class="animate-fade-up animate-once animate-duration-500 animate-delay-2500 animate-fill-both -ml-2 flex animate-[cubic-bezier(.74,.3,.44,1.39)] gap-6 !tracking-tight text-nowrap">
                            up
                            <icon
                                icon="teenyicons:up-small-outline"
                                class="mt-4 size-12 stroke-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-1/2 w-full justify-self-start">
                <div class="flex items-center gap-2">
                    <h1 class="!text-9">lolpocket</h1>
                    <span class="text-7 font-serif italic">noun</span>
                </div>
                <p class="mb-3 px-1">[ lohl - pok - it ]</p>
                <div class="text-5 flex flex-col gap-3 font-serif !font-light">
                    <p class="">
                        A pocket to store your League picks, builds, and
                        theorycrafts.
                    </p>
                    <p>
                        Assists you, as a summoner, with organization and
                        planning,
                    </p>
                    <p>
                        so you can focus on the
                        <span class="text-6 mt-4 ml-1 font-bold">win.</span>
                    </p>
                </div>
                <div class="mt-4 flex w-full justify-end px-2">
                    <Button
                        variant="outline"
                        size="lg"
                        class="hover:bg-neutral hover:text-nc !font-sans">
                        Log In
                    </Button>
                </div>
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
<style scoped>
.tracking-in-expand {
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
        reverse both;
    animation-delay: 1s;
}
@keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    40% {
        opacity: 0.65;
    }
    100% {
        opacity: 1;
    }
}
</style>
