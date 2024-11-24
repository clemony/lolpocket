<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useGeneralStore } from '../stores/generalStore'
import { storeToRefs } from 'pinia'
import { ref, computed, onMounted } from 'vue'
const gs = useGeneralStore()

// Access user settings from the store
const settings = useGeneralStore()

// Use ref to track the selected framework
const frameworkChoice = ref('light')
const themeChoice = ref('minimalist')

// Framework options
const frameworks = [
    {
        key: 'light',
        name: 'light',
        mode: 'light',
    },
    {
        key: 'dark',
        name: 'dark',
        mode: 'dark',
    },
    {
        key: 'neutral',
        name: 'neutral',
        mode: 'neutral',
    },
    {
        key: 'dim',
        name: 'dim',
        mode: 'dim',
    },
]

const themes = [
    {
        key: 'minimalist',
        name: 'minimalist',
    },
    {
        key: 'aesthetic',
        name: 'aesthetic',
    },
    {
        key: 'nord',
        name: 'nord',
    },
    {
        key: 'latte',
        name: 'latte',
    },
]

function handleThemeChoice() {
    const currenttheme = themes.find((f) => f.key === themeChoice.value)
    const mode = settings.dataMode
    // Update the theme and mode in the store
    if (currenttheme) {
        settings.dataTheme = mode + currenttheme.key
        settings.dataAccent = currenttheme.key
    }
}

function handleFrameworkChoice() {
    const currentFramework = frameworks.find(
        (f) => f.key === frameworkChoice.value
    )

    // Update the theme and mode in the store
    if (currentFramework) {
        const theme = settings.dataAccent
        settings.dataTheme = currentFramework.mode + theme
        settings.dataMode = currentFramework.mode
    }
}

// Initialize frameworkChoice when store data is ready
onMounted(() => {
    frameworkChoice.value = settings.dataMode || 'light' // Set from store or default to "light"
    themeChoice.value = settings.dataAccent || 'minimalist' // Set from store or default to "light"
})
</script>

<template>
    <main
        class="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 px-6 pt-12">
        <div class="mx-auto grid w-full max-w-6xl gap-2">
            <h1 class="!text-2xl font-semibold">Settings</h1>
        </div>
        <div
            class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav class="text-muted-foreground grid gap-4 text-sm">
                <a href="#" class="font-semibold">General</a>
                <a href="#">Appearance</a>
                <a href="#">Storage</a>
                <a href="#">Hotkeys</a>
                <a href="#">Account</a>
                <a href="#">About</a>
            </nav>
            <div class="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Store Name</CardTitle>
                        <CardDescription>
                            Used to identify your store in the marketplace.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <Input placeholder="Store Name" />
                        </form>
                    </CardContent>
                    <CardFooter class="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Plugins Directory</CardTitle>
                        <CardDescription>
                            The directory within your project, in which your
                            plugins are located.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form class="flex flex-col gap-4">
                            <Input
                                placeholder="Project Name"
                                default-value="/content/plugins" />
                            <div class="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="include"
                                    class="checkbox checkbox-xs" />
                                <label
                                    for="include"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Allow administrators to change the
                                    directory.
                                </label>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter class="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
