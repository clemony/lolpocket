<script setup lang="ts">
const props = defineProps<{
  queue: string
  title?: string
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <Field :class="cn('size-full bg-b2/30 drop-shadow-xs w-110 max-w-110 border-b3/40  ', props.class)" :title="`Ranked ${props.title}`">
    <div class="ranked-grid relative grid grid-cols-[1.1fr_1fr_1fr] place-items-center">
      <div class="grid size-36 place-items-center">
        <!-- placeholder -->
        <img
          :src="`/img/crests/${'iron'}.webp`"
          class="object-contain drop-shadow-lg" />
      </div>

      <div class="relative -mt-1">
        <RankedDonut :winrate="60" rank="iron" />
        <span class="text-bc absolute top-9 left-8 font-medium drop-shadow-sm">
          <!-- placeholder winrate -->
          {{ 60 }}%
        </span>
      </div>

      <div class="-mt-1 flex flex-col justify-center gap-2 font-medium">
        <p class="capitalize">
          <!-- placeholder tier  -->
          {{ 'Iron IV' }}
        </p>

        <p>{{ 1001 }} Games</p>

        <div class="flex items-center gap-2">
          <p class="flex items-center text-nowrap">
            {{ 1 }}W
            <icon
              name="ion:caret-up-outline"
              class="text-inspiration  size-4" />
          </p>
          <p class="flex items-center text-nowrap">
            {{ 1000 }}L
            <icon
              name="ion:caret-down-outline"
              class="text-domination  size-4" />
          </p>
        </div>
      </div>
    </div>
  </Field>
</template>
