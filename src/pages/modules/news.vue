<script setup lang="ts">

import { Icon } from '@iconify/vue';
interface article {
  title: string
  source: string
  icon?: string
  source2?: string
  image: string
  link?: string
  linkTitle?: string
}


const NewsArticles: article[] = [
  {
    title: 'Patch 14.15',
    source: 'Riot Games',
    icon: 'simple-icons:riotgames',
    image:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/24eb05be171a372ed26b0b6034bf875b3bd09d98-2560x1440.png?auto=format&fit=fill&q=80&w=960',
  },
  {
    title: 'PBE Changes',
    source2: ' /u/FrankTheBoxMonster',
    source: 'Reddit',
    icon: 'fa:reddit',
    image:
      '/img/art/magic.webp',
    link: 'https://www.reddit.com/r/leagueoflegends/wiki/pbechanges/',
    linkTitle: 'Reddit.com',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Lolpockets Team',
    source2: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Lolpockets Team',
    source2: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Lolpockets Team',
    source2: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Lolpockets Team',
    source2: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
]

</script>
<template>
  <div
    class="flex w-full pr-11 ml-5 absolute overflow-x-scroll h-64 content-center gap-5 top-32 scrollbar-hide left-0 !z-1 news-after">

    <a v-for="article in NewsArticles"
      class="card !bg-base-100/60 h-56 text-sm shadow-lg first:w-64px first:min-w-96 min-w-56 !z-0 !*:z-0 group overflow-hidden hover:scale-105"
      target="_blank" :href="article.link" :title="article.link">

      <figure class="relative">

        <div
          class=" group-hover:opacity-100 absolute transition-all duration-500 opacity-0 bg-neutral/60 w-full h-full  top-0 left-0 backdrop-blur-md text-neutral-content rounded-lg overflow-hidden grid grid-cols-1 place-items-center place-content-center font-semibold">
          <p class="">Read more on</p>
          <p class="flex gap-2 "> {{ article.linkTitle }}
            <Icon icon="cil:external-link" class="size-3 " />
          </p>
        </div>

        <img :src="article.image" :alt="article.title + ' image'" />
      </figure>

      <div class="card-body ">
        <div>
          <h2 class="card-title text-base text-balanced mb-0">{{ article.title }}</h2>

          <div class="text-xs mt-0 grid gap-1 *:text-pretty *:content-start *:justify-start relative">
            <div class="flex gap-1  align-top">
              {{ article.source }}

            </div>
            <div v-if="article && article.source2" class="text-xxs italic font-sans flex gap-1 ">
              by {{ article.source2 }}
            </div>
          </div>
          <div class="absolute bottom-5 right-5 ">
            <Icon v-if="article && article.icon" :icon="article.icon" class="size-5 text-base-content/70" />
          </div>
        </div>



      </div>
    </a>
  </div>



</template>

<style>
/*
.news-after::after {
    /*background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, oklch(var(--b2)) 100%);*/

/*background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 89%, oklch(var(--b2)/0.85) 98%, oklch(var(--b2)) 100%);

    @apply content-[''] z-50 fixed top-28 right-0 w-[0] h-56 pointer-events-none;
}*/
</style>