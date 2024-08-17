<script setup lang="ts">
interface article {
  title: string
  source: string
  icon?: string
  source2?: string
  image: string
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
    source: ' /u/FrankTheBoxMonster',
    source2: 'Reddit',
    icon: 'fa:reddit',
    image:
      '/img/art/magic.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
  {
    title: 'Champ Flavor Tier List',
    source: 'Clem',
    icon: 'fluent-emoji-high-contrast:kissing-cat',
    image:
      '/img/art/chase.webp',
  },
]

</script>
<template>
  <div
    class="flex w-full pr-6 ml-5 absolute overflow-x-scroll h-64 content-center gap-5 top-32 scrollbar-hide left-0 !z-1">

    <div v-for="article in NewsArticles"
      class="card !bg-base-100/60 h-56 text-sm shadow-lg first:w-64px first:min-w-96 min-w-56 !z-0 !*:z-0">
      <figure>
        <img :src="article.image" :alt="article.title + ' image'" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-base text-balanced mb-0">{{ article.title }}</h2>

        <div class="text-xs italic mt-0 grid gap-1 *:text-pretty *:content-start *:justify-start">
          <div class="flex gap-1 ">
            {{ article.source }}
          </div>
          <div v-if="article && article.source2" class="text-xxs font-sans flex gap-1 ">
            on {{ article.source2 }}
          </div>
        </div>

        <div class="absolute bottom-5 right-5">
          <Icon v-if="article && article.icon" :icon="article.icon" class="size-5 text-base-content/70" />
        </div>
      </div>
    </div>

  </div>
</template>