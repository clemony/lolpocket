<script setup lang="ts">
const props = defineProps<{
  title?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Field
    :class="
      cn(
        'w-120 max-w-120 h-42 max-h-42  bg-b2/30 drop-shadow-xs border-b3/40 py-0 ',
        props.class,
      )
    "
    :title="`Ranked ${props.title}`">
    <div
      class="overflow-hidden size-full grid grid-cols-[1.1fr_1fr_1fr] place-items-center h-42 content-center">
      <div class="grid mt-0.5 overflow-hidden place-items-center">
        <!-- crest -->
        <img
          alt="unranked"
          src="/img/crests/unranked.webp"
          class="drop-shadow-sm object-contain opacity-40 size-25 saturate-0" />
      </div>

      <div class="relative grid place-items-center size-full">
        <div
          class="relative size-21 overflow-hidden mt-1 grid place-items-center rounded-lg">
          <DonutSkeleton class="absolute size-21" />
        </div>
      </div>

      <div
        class="pt-3 overflow-hidden font-medium flex flex-col items-end justify-center pb-3 text-end **:text-bc/30 gap-2.75 dst">
        <p class="capitalize">
          Unranked
        </p>

        <p class="capitalize font-semibold text-4">
          0 LP
        </p>

        <p
          v-tippy="`0 total`"
          class="hover:border-b-bc border-b-transparent border-b flex text-1 items-center gap-1 text-end justify-end text-nowrap">
          <span>0W</span>

          <span>0L</span>
        </p>
      </div>
    </div>
  </Field>
</template>
