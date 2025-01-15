<script setup lang="ts">
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
  ];
  const title = ref();
</script>
<template>
  <div class="bg-neutral text-nc @container relative !z-0 flex h-[80vh] w-full flex-col items-center justify-center px-10">
    <!--       <div
            class="border-b1 ring-b1 ring-offset-b1 before:bg-b1 after:bg-b1 inset-shadow-b1 -ring-offset-10 pointer-events-none absolute top-3 left-0 !z-20 mx-auto h-[70vh] w-full rounded-xl border border-3 bg-transparent inset-shadow-sm ring-10 before:absolute before:left-0 before:-mt-1 before:h-[70vh] before:w-[3%] after:absolute after:right-0 after:-mt-1 after:h-[70vh] after:w-[3%]"> -->
    <div class="border-b1 ring-offset-b1 absolute z-20 m-auto size-[95%] rounded-3xl border inset-shadow-sm ring-1 ring-offset-50" />

    <h2
      ref="title"
      class="!text-12 mb-38 justify-self-start px-32">
      Additional Tools.
    </h2>

    <div class="grid w-[85%] items-start justify-evenly gap-18 @[40rem]:!grid-cols-2 @[65rem]:!grid-cols-4">
      <div
        v-for="(item, i) in data"
        :key="item.title"
        :ref="'item' + i"
        class="grid max-w-82 min-w-48 items-start p-6">
        <div class="mb-5 grid w-full items-center gap-24">
          <icon
            v-if="item.icon"
            :name="item.icon"
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
