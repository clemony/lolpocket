<script lang="ts" setup>

</script>

<template>
  <div class="w-full bg-b1 px-60 py-30">
    <div class="w-full justify-center justify-self-center grid grid-cols-2 py-30 gap-34">
      <div class="flex gap-4">
        <div class="size-20 overflow-hidden rounded-full shrink-0 border border-neutral/40 shadow-sm">
          <img src="/img/champion/Pantheon.webp" class="size-full scale-110 shrink-0" />
        </div>
        <div>
          <h1 class="!font-black dst font-serif !leading-9">
            I sought power on Targon's peak...
          </h1>

          <p class="text-bc text-4 w-full   dst mt-5">
            "...only to find it
            <span class="font-light"> [</span>on
            <b>lolpocket!</b>
            <span class="font-light"> ] </span>
            Do not give up! Before you fight, you must rise.
            <span class="font-light">[</span>
            After I signed up for  <b>lolpocket</b>
            <span class="font-light"> ]</span>,
            I cast my excuses into the dirt. You can only defeat yourself."
          </p>

          <p class="text-right mt-2 italic justify-self-end flex gap-2 items-center">
            - Pantheon, Mount Targon
            <icon v-tippy="'I mean, or something like that... I think.'" name="carbon:information" class="size-4.5 stroke-2" />
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="size-20 overflow-hidden rounded-full shrink-0 border border-neutral/40 shadow-sm">
          <img src="/img/champion/Camille.webp" class="size-full shrink-0 scale-110" />
        </div>
        <div class="">
          <h1 class="font-serif !font-black dst !leading-9">
            Another step on the march of progress.
          </h1>
          <p class="text-bc text-4 w-full dst mt-5">
            "Technology and I have a... complicated relationship,
            <span class="font-light">[</span>
            but using <b>lolpocket</b> is easy!
            <span class="font-light"> ] </span>
            Progress is served by technology, not controlled by it. Efficiency is paramount to success.
            <span class="font-light">[</span>
            With <b>lolpocket</b><span class="font-light"> ]</span>,
            I don't play the game, I make the rules."
          </p>

          <p class="text-right mt-2 italic justify-self-end flex gap-2 items-center">
            - Camille Ferros, Piltover

            <icon v-tippy="'Includes minor contextual additions--purely for clarity. Lolpockets makes no claims that these additions are in any way true.'" name="carbon:information" class="size-4.5 stroke-2" />
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="size-20 overflow-hidden rounded-full shrink-0 border border-neutral/40 shadow-sm">
          <img src="/img/champion/Swain.webp" class="size-full shrink-0 scale-110" />
        </div>
        <div class="">
          <h1 class="font-serif !font-black dst !leading-9">
            A new vantage, is all the advantage I need.
          </h1>

          <p class="text-bc dst text-4 w-full mt-5">
            "<span class="font-light">[</span>
            Using <b>lolpocket</b>
            <span class="font-light"> ]</span>,
            one can read the future in battle lines, assuming one can read. They expect me to play fairly...
            <span class="font-light">[</span>
            but with this tool
            <span class="font-light">]</span>,
            we aren't even playing the same game."
          </p>

          <p class="text-right mt-2 italic justify-self-end flex gap-2 items-center">
            - Jericho Swain, Noxus

            <icon v-tippy="'Contact Corporate Mundo\'s legal department with any complaints about the validity of this quote.'" name="carbon:information" class="size-4.5 stroke-2" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
b {
  font-weight: 500;
}
</style>
