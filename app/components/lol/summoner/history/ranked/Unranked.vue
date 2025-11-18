<script setup lang="ts">
const props = defineProps<{
  title?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('h-42 max-h-42 w-120 max-w-120 border-b3/40 bg-b2/30 py-0 drop-shadow-xs',
        props.class,
      )
    "
    :title="`Ranked ${props.title}`">
    <div
      class="
        grid size-full h-42 grid-cols-[1.1fr_1fr_1fr] place-items-center
        content-center overflow-hidden
      ">
      <div class="mt-0.5 grid place-items-center overflow-hidden">
        <!-- crest -->
        <img
          alt="unranked"
          src="/img/crests/unranked.webp"
          class="size-25 object-contain opacity-40 drop-shadow-sm saturate-0" />
      </div>

      <div class="relative grid size-full place-items-center">
        <div
          class="
            relative mt-1 grid size-21 place-items-center overflow-hidden
            rounded-lg
          ">
          <DonutSkeleton class="absolute size-21" />
        </div>
      </div>

      <div
        class="
          flex flex-col items-end justify-center gap-2.75 overflow-hidden pt-3
          pb-3 text-end font-medium dst **:text-bc/30
        ">
        <p class="capitalize">
          Unranked
        </p>

        <p class="text-4 font-semibold capitalize">
          0 LP
        </p>

        <p
          v-tippy="`0 total`"
          class="
            flex items-center justify-end gap-1 border-b border-b-transparent
            text-end text-1 text-nowrap hover:border-b-bc
          ">
          <span>0W</span>

          <span>0L</span>
        </p>
      </div>
    </div>
  </div>
</template>
