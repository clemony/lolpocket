<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
interface CatFact {
  title: string
  num: number
  text: string
}
const facts: CatFact[] = [
  {
    title: 'Cats are good communicators.',
    num: 1,
    text: 'Cats have a unique “vocabulary” with their owners! Unlike dogs, who tend to bark similarly at everyone, cats develop distinct meows and sounds specifically for their humms. They rarely meow at other cats!',
  },
  {
    title: 'Cats are wizards.',
    num: 2,
    text: 'A cat’s purr has healing properties. The frequency of a cat’s purr (between 25 and 150 Hz) has been shown to promote bone growth and healing in both cats and humms. Some scientists believe this might be why cats recover from injuries so quickly!',
  },
  {
    title: 'Cats are birds.',
    num: 3,
    text: 'Cats can “chirp” and “chatter.” If you’ve ever seen a cat staring at birds through a window, you might hear them making little chirping or chattering noises. This is thought to be a mix of excitement and frustration—or even an instinctual hunting technique!',
  },
  {
    title: 'Cats have pro nap game.',
    num: 4,
    text: 'Cats spend about 70% of their lives sleeping. On average, cats sleep 12–16 hours a day, but some can snooze for up to 20 hours! They’re basically professional nappers.',
  },
  {
    title: 'Cats are aliens.',
    num: 5,
    text: 'Their whiskers are super sensitive. A cat’s whiskers aren’t just for looks—they help them sense their surroundings, detect changes in the air, and even determine if they can fit through a space!',
  },
  {
    title: 'Boops are good',
    num: 6,
    text: 'Cats “headbutt” you as a sign of love. When a cat bumps their head against you, they’re marking you with their scent as part of their family. It’s a big compliment in cat language!',
  },
]

const catFact = ref<CatFact>()

onMounted(() => {
  catFact.value = getRandom(facts)
  console.log('💠 - onMounted - catFact:', catFact.value)
})
</script>

<template>
  <main
    v-if="catFact"
    class="grid size-full min-h-[70vh] justify-center py-24"
    :class="cn('', props.class)">
    <article class="container mx-auto p-6 max-w-250 min-w-190 dst">
      <header
        class="text-start mb-6 dst tracking-tight">
        <span class="text-6">
          404: <span class="italic">page seems afk</span>
        </span>
        <br />

        <span class=" leading-14 font-bold font-serif text-[2rem] ">In place, I offer you a cat fact.</span>
      </header>

      <section
        class="pb-28 items-start flex gap-4 pt-20 gap-3 max-w-180 w-full **:text-pretty relative">
        <div class="flex flex-col gap-3">
          <p class="mt-1 text-6 dst">
            <!-- #{{catFact.num}}  -->
            {{ catFact.num }}: {{ catFact.title }}
          </p>
          <p class="leading-7">
            {{ catFact.text }}
          </p>
        </div>
      </section>

      <footer
        class="text-end italic text-2 items-center flex gap-4 *:flex *:items-end justify-center *:gap-2">
        <p class="text-1 text-bc/70">
          Brought to you by
        </p>
        <p class="font-semibold italic opacity-80 antialiased">
          <icon
            name="la:flag-usa"
            class="size-5" />
          Paws for Progress
          <span class="">2028</span>
        </p>
        <p class="text-1 text-bc/70">
          Refresh in peace
        </p>
      </footer>
    </article>
  </main>
</template>

<style scoped>
.container {
  max-width: 800px;
}
</style>
