<script setup lang="ts">
import { useGeneralStore } from '../stores/generalStore'

const gs = useGeneralStore()
const settings = useGeneralStore()

const general = ref(null)
const appearance = ref(null)
const account = ref(null)
const hotkeys = ref(null)
const storage = ref(null)

// Use ref to track the selected framework
</script>

<template>
    <main class="grid size-full grid-cols-[1fr_3.5fr] pr-12">
        <div class="mx-auto flex w-full flex-col items-center gap-12">
            <LayoutSpacer class="!h-10" />
            <h1 class="!text-3xl font-semibold">Settings</h1>

            <nav class="flex flex-col gap-5 pl-6 text-base-content/80">
                <a href="#" class="font-semibold">General</a>
                <a href="#">Appearance</a>
                <a href="#">Storage</a>
                <a href="#">Hotkeys</a>
                <a href="#">Account</a>
                <a href="#">About</a>
            </nav>
        </div>
        <router-view>
            <div
                id="pocket-contents"
                class="carousel carousel-vertical h-full w-[98%] justify-self-center overflow-x-hidden overflow-y-scroll">
                <a class="carousel-item relative size-full" id="general">
                    <GeneralSettings />
                </a>
                <a class="carousel-item size-full" id="appearance">
                    <AppearanceSettings />
                </a>
                <a class="carousel-item size-full" id="account">
                    <AccountSettings />
                </a>
                <a class="carousel-itemsize-full" id="hotkeys">
                    <HotkeySettings />
                </a>
                <a class="carousel-item size-full" id="storage">
                    <StorageSettings />
                </a>
            </div>
        </router-view>
    </main>
</template>

<style scoped></style>
