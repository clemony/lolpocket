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
        icon: 'carbon:function-math',
        text: 'Learn about the stats on each item and rune, and sum the totals for each build, Optionally, view how passives and actives affect those stats.',
    },
    {
        title: 'Browse',
        icon: 'iconoir:glasses',
        text: 'Peruse a database of League champions, items, spells,and runes. Get the data you need for build completion all in one spot.',
    },
    {
        title: 'Export & Share',
        icon: 'iconoir:git-pull-request',
        text: 'Upload to the cloud, export to the League Client, or share your build with friends. Never forget the item set you were cooking up.',
    },
    {
        title: 'Customize',
        icon: 'hugeicons:dna-01',
        text: 'Personal homepages can be customized with modules -- so you always have the most important data on hand.',
    },
]
</script>
<template>
    <div
        class="bg-neutral text-nc sticky top-0 left-0 !z-0 flex h-[100vh] w-full flex-col items-center justify-center px-10">
        <div>
            <h2 class="!text-12 mb-38 justify-self-start px-32">
                Additional Tools.
            </h2>
        </div>

        <div class="flex w-[85%] flex-wrap items-start justify-evenly gap-18">
            <div
                v-for="(item, i) in data"
                class="grid max-w-82 min-w-48 items-start p-6">
                <div class="mb-5 grid w-full items-center gap-24">
                    <icon
                        :icon="item.icon"
                        class="size-14 justify-self-center stroke-[0.5]" />

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
<style scoped></style>
