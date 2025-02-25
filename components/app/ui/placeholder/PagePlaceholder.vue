<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="grid size-full -ml-10 justify-center pt-[7vh]" :class="cn('', props.class)">
    <div class="container mx-auto p-6 max-w-250 dst">
      <header class="text-start text-4xl px-6 font-bold mb-6 dst tracking-tight font-serif leading-14">
        This page seems afk.<br />
        <span class="pl-8">I offer you cat facts instead.</span>
      </header>
      <div class="flex gap-16 *:items-start  *:w-1/2">
        <div class="grid  gap-10 my-18 *:px-6 **:text-pretty -ml-6">
          <section class="mb-6 flex gap-6 items-center">
            <h2 class="text-8xl dst font-semibold mb-2 font-serif">
              1
            </h2>
            <p class="text-bc/70 dst ">
              Cats have a unique “vocabulary” with their owners! Unlike dogs, who tend to bark similarly at everyone, cats develop distinct meows and sounds specifically for their humans. They rarely meow at other cats!
            </p>
          </section>

          <section class="mb-6 flex gap-6 items-center">
            <h2 class="text-8xl dst font-semibold mb-2 font-serif">
              2
            </h2>
            <p class="text-bc/70 dst ">
              A cat’s purr has healing properties. The frequency of a cat’s purr (between 25 and 150 Hz) has been shown to promote bone growth and healing in both cats and humans. Some scientists believe this might be why cats recover from injuries so quickly!
            </p>
          </section>

          <section class="mb-6 flex gap-6 items-center">
            <h2 class="text-8xl dst font-semibold mb-2 font-serif">
              3
            </h2>
            <p class="text-bc/70 dst ">
              Cats can “chirp” and “chatter.” If you’ve ever seen a cat staring at birds through a window, you might hear them making little chirping or chattering noises. This is thought to be a mix of excitement and frustration—or even an instinctual hunting technique!
            </p>
          </section>
        </div>
        <div class="grid  gap-10 my-18 *:px-6 **:text-pretty -ml-6 ">
          <section class="mb-6 flex gap-6 items-center">
            <h2 class="text-8xl dst font-semibold mb-2 font-serif">
              4
            </h2>
            <p class="text-bc/70 dst ">
              Cats spend about 70% of their lives sleeping. On average, cats sleep 12–16 hours a day, but some can snooze for up to 20 hours! They’re basically professional nappers.
            </p>
          </section>
          <section class="mb-6 flex gap-6 items-center">
            <h2 class="text-8xl dst font-semibold mb-2 font-serif">
              5
            </h2>
            <p class="text-bc/70 dst ">
              Their whiskers are super sensitive. A cat’s whiskers aren’t just for looks—they help them sense their surroundings, detect changes in the air, and even determine if they can fit through a space!
            </p>
          </section>

          <section class="mb-6 flex gap-6 items-center">
            <h2 class="text-8xl dst font-semibold mb-2 font-serif">
              6
            </h2>
            <p class="text-bc/70 dst ">
              Cats “headbutt” you as a sign of love. When a cat bumps their head against you, they’re marking you with their scent as part of their family. It’s a big compliment in cat language!
            </p>
          </section>
        </div>
      </div>

      <footer class="text-center mt-6 items-center text-bc/60 dst italic flex justify-center gap-3">
        Paws for Progress
        <span class="not-italic">2028</span>
        <icon name="la:flag-usa" class="size-6 -mt-1" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
}
</style>
