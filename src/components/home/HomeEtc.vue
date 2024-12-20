<script setup lang="ts">
const is1Visible = ref(false)
const is2Visible = ref(false)
const is3Visible = ref(false)
const is4Visible = ref(false)

const visibilityChanged = (step) => (isVisible) => {
    if (step === 'step1') is1Visible.value = isVisible
    if (step === 'step2') is2Visible.value = isVisible
    if (step === 'step3') is3Visible.value = isVisible
    if (step === 'step4') is4Visible.value = isVisible
}

const data = [
    {
        title: 'Calculate',
        icon: 'teenyicons:calculator-outline',
        text: 'Evaluate the stats on each item and rune, and figure the sum of all stats for each build, Optionally, view how passives and actives affect those stats.',
    },
    {
        title: 'Browse',
        icon: 'oui:glasses',
        text: 'Examine a database of League champions, items, spells,and runes. Get the data you need for build completionall in one spot.',
    },
    {
        title: 'Export & Share',
        icon: 'teenyicons:upload-outline',
        text: 'Export your builds to the League Client, or share yourbuild with others. Never forget the item set you were theorycrafting and intended to test.',
    },
    {
        title: 'Customize',
        icon: 'material-symbols-light:dashboard-customize-outline-rounded',
        text: 'Your personal homepage can be personalized with data modules -- so you always have the most important data on hand. App color themes allow you to select your favorite style.',
    },
]
function getDelay(i) {
    const ms = i * 100 * 2
    return `animate-delay-${ms}`
}
const classObject =
    'animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-alternate animate-fill-both'
</script>
<template>
    <div
        class="sticky-this bg-neutral text-nc grid w-full justify-center justify-items-center px-10 pt-44 pb-58">
        <h2
            v-in-viewport
            :class="classObject"
            class="!text-12 mb-10 justify-self-start px-32">
            Additional Tools.
        </h2>

        <div class="grid w-[85%] grid-cols-4 items-start gap-18">
            <div
                v-for="(item, i) in data"
                v-in-viewport
                :class="cn(classObject, getDelay(i))"
                class="grid items-start p-6">
                <div class="mt-22 mb-5 grid w-full items-center gap-24">
                    <icon
                        :icon="item.icon"
                        class="size-12 justify-self-center" />
                    <h3 class="!text-7 grow !font-semibold">
                        {{ item.title }}
                    </h3>
                </div>
                <p
                    :class="
                        cn(
                            'text-justify leading-loose !font-light',

                            'first-letter:text-10 first-letter:float-start first-letter:mt-1.5 first-letter:mr-3 first-letter:leading-none first-letter:font-semibold',

                            'first-line:text-4 first-line:leading-7 first-line:font-normal'
                        )
                    ">
                    {{ item.text }}
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    position: relative;
    height: 900px;
    /*         clip-path: inset(0); */
    border-radius: 25px;
    overflow: clip;
}

.overflow-container {
    height: 2000vh;
    margin-top: -1000vh;
}

.sticky-this {
    /* IMPORTANT This is the part related to the effect */
    /*  object-fit: cover;
    position: sticky;
    top: 0; */
}
</style>
