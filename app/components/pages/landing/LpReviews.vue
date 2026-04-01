<script lang="ts" setup>
import type { description } from "valibot"
import type { ReviewItem } from "./reviews/reviews"
import { reviews } from "./reviews/reviews"

const chunked = chunkArray(reviews, 3) as ReviewItem[][]
</script>

<template>
  <div class="flex h-[80vh] w-full items-center overflow-hidden">
    <div class="my-auto h-max w-full">
      <ClientOnly>
        <LazyUCarousel
          v-slot="{ item }"
          class="size-full"
          wheel-gestures
          loop
          arrows
          dots
          next-icon="i-right"
          prev-icon="i-left"
          :items="chunked"
          :ui="{
            controls: 'pointer-events-none absolute inset-0! z-10',
            root: 'h-max! w-full',
            arrows:
              'pointer-events-none absolute inset-0! top-1/2 flex -translate-y-1/2 items-center justify-between px-18 md:px-32 lg:px-36',
            container: 'ms-0 h-max',
            item: 'flex size-full items-center justify-center px-6 md:px-14 lg:px-24',
            prev: 'pointer-events-auto static z-10 translate-y-0',
            next: 'pointer-events-auto static z-10 translate-y-0',
            dots: 'pointer-events-auto absolute inset-x-0 -bottom-24 z-10 flex flex-wrap items-center justify-center gap-3'
          }">
          <div
            class="grid h-max w-full max-w-(--ui-container) grid-cols-1 gap-12 md:grid-cols-3">
            <div
              v-for="review in item"
              :key="review.id"
              class="flex w-full justify-center py-1">
              <LazyUPageCTA
                :description="review.text"
                :title="review.title"
                :ui="{
                  title: 'font-serif',
                  root: 'items-evenly h-full max-w-160 grow',
                  footer: 'self-end',
                  description:
                    'text-left text-sm leading-7 font-normal text-pretty text-n1'
                }">
                <template #footer>
                  <Tooltip
                    :label="review.tip"
                    side="bottom"
                    arrow
                    :ui="{ content: 'h-fit max-w-44 text-pretty' }">
                    <LazyUUser
                      size="sm"
                      :avatar="{
                        src: `/img/champion/${review.id}.webp`
                      }"
                      :ui="{
                        root: 'group/label',
                        description:
                          'inline-flex items-center gap-1 leading-none group-hover/label:text-pc group-hover/label:underline group-hover/label:opacity-100'
                      }"
                      :name="review.name">
                      <template #description>
                        {{ review.location }}
                        <Icon
                          class="inline size-3.5 align-middle text-n5 **:stroke-3"
                          name="i-ri:information-2-line" />
                      </template>
                    </LazyUUser>
                  </Tooltip>
                </template>
              </LazyUPageCTA>
            </div>
          </div>
        </LazyUCarousel>
      </ClientOnly>
    </div>
  </div>
</template>
