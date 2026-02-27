<script lang="ts" setup>
import { pageCTA } from "#build/ui"
import { motion } from "motion-v"
import { reviewVariants } from "../variants"
import { reviews } from "./reviews"

const inView = ref(0)
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    wheel-gestures
    :ui="{
      root: 'grid w-screen py-4',
      container: 'w-screen',
      item: 'grid grid-cols-2 grid-rows-2 place-items-center gap-x-40 gap-y-60 justify-self-center size-full  p-1 basis-1/1',
    }"
    prev-icon="i-right"
    dots
    :slides-to-scroll="3"
    next-icon="i-left"
    :opts="{
      loop: true,
    }"
    :items="reviews">
    <UPageCTA
      v-for="r in item"
      :key="r.id"
      :title="r.title"
      :ui="{ title: 'font-serif', root: 'max-w-110 h-140' }">
      <template #description>
        <p
          class="text-left text-md leading-7 font-normal text-pretty text-n1 ds-2xs [&_u]:decoration-dotted"
          v-html="r.text" />
      </template>
      <template #footer>
        <Tooltip :label="r.tip">
          <UUser
            size="sm"
            :avatar="{ src: `/img/champions/${r.id}.webp`, avatar: 'size-10' }"
            :description="r.location">
            <template #name>
              <div
                class="inline-flex items-center gap-1 text-md leading-none font-bold">
                {{ r.name }}
                <Icon
                  class="inline size-3.5 -translate-y-[0.5px] align-middle text-n1 **:stroke-3"
                  name="i-ri:information-2-line" />
              </div>
            </template>
          </UUser>
        </Tooltip>
      </template>
    </UPageCTA>
  </UCarousel>
</template>
