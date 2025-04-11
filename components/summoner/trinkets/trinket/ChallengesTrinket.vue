<script lang="ts" setup>

const props = defineProps<{
container: any
}>()
</script>

<template>

      <Trinket size="md" :container="props.container" class="py-9  pl-9.5 pr-4 gap-6 "  solid>
     
        <div v-for="cat in Object.keys(challenges.categoryPoints)" :key="cat" class="flex i-c gap-5 w-full group">
          <div v-tippy="`${challenges.categoryPoints[cat].current.toLocaleString()} / ${challenges.categoryPoints[cat].max.toLocaleString()}`" class="flex-col flex gap-2">
            <div class="flex gap-3 *:pointer-events-none">
              <i-challenges-icon_category_veterancy v-if="cat.toLowerCase() == 'veterancy'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_imagination v-if="cat.toLowerCase() == 'imagination'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_collection v-if="cat.toLowerCase() == 'collection'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_teamwork v-if="cat.toLowerCase() == 'teamwork'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <i-challenges-icon_category_expertise v-if="cat.toLowerCase() == 'expertise'" class="size-5.5 dst text fill-bc [&_svg]:fill-bc" />
              <p class="text-3 font-semibold tracking-tight capitalize dst">
                {{ cat.toLowerCase() }}
              </p>
            </div>

            <progress
              class="bg-b3/60 progress w-68 drop-shadow-sm " :value="challenges.categoryPoints[cat].current" :max="challenges.categoryPoints[cat].max" :class="challenges.categoryPoints[cat].level.toLowerCase()"
            ></progress>
          </div>

          <div class="relative size-8 grid place-items-center">
            <div v-tippy="{ content: challenges.categoryPoints[cat].level }" class="absolute size-10 -top-1 rounded-full ">
              <img :src="`/img/challenges/crystal_${challenges.categoryPoints[cat].level.toLowerCase()}.webp`" class="pointer-events-none h-10 opacity-90 drop-shadow-sm drop-shadow-[#000]/50  top-1 mt-0.5" />
            </div>
          </div>
        </div>
   

    </Trinket>
</template>

<style scoped>

</style>