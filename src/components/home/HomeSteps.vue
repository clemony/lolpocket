<script setup lang="ts">
// Define refs for each step and its visibility state
const step1 = ref(null)
const is1Visible = ref(false)
const step2 = ref(null)
const is2Visible = ref(false)
const step3 = ref(null)
const is3Visible = ref(false)
const step4 = ref(null)
const is4Visible = ref(false)

const animationObject = '    opacity-100'

// Function to handle visibility changes
const visibilityChanged = (step) => (isVisible) => {
    if (step === 'step1') is1Visible.value = true
    if (step === 'step2') is2Visible.value = isVisible
    if (step === 'step3') is3Visible.value = isVisible
    if (step === 'step4') is4Visible.value = isVisible
}
const classObject =
    '[&.was-in-viewport]:animate-fade-up [&.was-in-viewport]:animate-duration-1000 [&.was-in-viewport]:animate-ease-in-out [&.was-in-viewport]: [&.was-in-viewport]:animate-fill-both [&.was-in-viewport]:animate-once translate-y-6 opacity-0 [&.was-in-viewport]:opacity-100'
</script>
<template>
    <div
        class="[&_hr]:bg-b2 bg-b1 border-b2/30 mt-[100vh] border-t px-12 py-26 [&_hr]:mx-8">
        <ul
            class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical [&_h1]:!font-extrabold [&_h1]:!tracking-tight [&_p]:max-w-150">
            <li v-in-viewport :class="classObject">
                <div class="timeline-middle">
                    <icon icon="bi:check-circle-fill" class="size-5" />
                </div>
                <div class="timeline-start mb-10 md:text-end">
                    <p class="font-mono italic">Step 1</p>
                    <h2>Create a Pocket</h2>
                    <p>
                        Pockets are little spaces designed to hold your builds
                        and ideas -- similar to a pocket folder. Theorycraft
                        within them, or use them to remember that ONE build you
                        saw your favorite pro use. Pockets can be linked to
                        champions or a general role.
                    </p>

                    <div class="bg-b2/40 mt-10 h-90 w-full rounded-lg" />
                </div>
                <hr />
            </li>
            <li v-in-viewport :class="classObject">
                <hr />
                <div class="timeline-middle">
                    <icon icon="bi:check-circle-fill" class="size-5" />
                </div>
                <div class="timeline-end mb-10">
                    <p class="font-mono italic">Step 2</p>
                    <h2>Craft a Build</h2>

                    <p>craft bukild bflsjfl</p>
                    <div class="bg-b2/40 mt-10 h-90 w-full rounded-lg" />
                </div>
                <hr />
            </li>
            <li v-in-viewport :class="classObject">
                <hr />
                <div class="timeline-middle">
                    <icon icon="bi:check-circle-fill" class="size-5" />
                </div>
                <div class="timeline-start mb-10 md:text-end">
                    <p class="font-mono italic">Step 3</p>
                    <h2>Play Games</h2>

                    <p>oh you know</p>
                    <div class="bg-b2/40 mt-10 h-90 w-full rounded-lg" />
                </div>
                <hr />
            </li>
            <li v-in-viewport :class="classObject">
                <hr />
                <div class="timeline-middle">
                    <icon icon="bi:check-circle-fill" class="size-5" />
                </div>
                <div class="timeline-end mb-10">
                    <p class="font-mono italic">Step 4</p>
                    <h2>Analyze Results</h2>

                    <p>The stuff that does stuff.</p>

                    <div class="bg-b2/40 mt-10 h-90 w-full rounded-lg" />
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.was-in-viewport {
}
</style>
