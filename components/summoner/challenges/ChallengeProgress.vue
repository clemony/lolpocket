<script lang="ts" setup>
const props = defineProps<{
category: any
}>()

const category = ref(props.category)
</script>

<template>
<div v-tippy="`${category.current} / ${category.max}`" class="flex-col flex gap-2">
            <div class="flex gap-3">
              <i-challenges-icon_category_veterancy v-if="category == 'veterancy'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_imagination v-if="category == 'imagination'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_collection v-if="category == 'collection'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_teamwork v-if="category == 'teamwork'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_expertise v-if="category == 'expertise'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <p class="text-3 f-sb tracking-tight capitalize">
                {{ category }}
              </p>
            </div>

            <progress
              class="bg-b3/60 progress w-68 dst " :value="category.current" :max="category" :class="category.totalPoints.level.toLowerCase()"
            ></progress>
          </div>

          <div class="relative size-8 grid p-i-c ">
            <div v-tippy="{ content: category.level }" class="absolute size-10 -top-1 rounded-full ">
              <img :src="`/img/challenges/crystal_${category.level.toLowerCase()}.webp`" class=" h-10 opacity-90 drop-shadow-sm   top-1 mt-0.5" />
            </div>
          </div>
</template>

<style scoped>

</style>