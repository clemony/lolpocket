<script setup lang="ts">
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
        text: 'Export your builds to the League Client, or share yourbuild with others. Never forget the item set you weretheorycrafting and intended to test.',
    },
    {
        title: 'Calculate',
        icon: 'teenyicons:edit-1-outline',
        text: 'Lorem ipsum odor amet, consectetuer adipiscing elit.Ligula blandit id maximus penatibus sagittis morbivehicula accumsan. Nisl justo suscipit lectus felistempus sit quisque torquent.',
    },
]
</script>
<template>
    <div
        class="bg-neutral text-nc flex w-full justify-center justify-items-center px-24 py-20">
        <div class="grid w-4/5 grid-cols-4 items-start gap-16">
            <div v-for="item in data" class="grid items-start p-6">
                <h3 class="!text-6 text-center !font-normal tracking-tight">
                    {{ item.title }}
                </h3>

                <icon
                    :icon="item.icon"
                    class="my-8 size-8 justify-self-center stroke-[0.8]" />

                <p
                    :class="
                        cn(
                            'text-justify leading-loose !font-light',

                            'first-letter:text-8 first-letter:float-start first-letter:mt-1 first-letter:mr-1 first-letter:font-serif first-letter:leading-none'
                        )
                    ">
                    {{ item.text }}
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
