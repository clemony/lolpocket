<script setup lang="ts">
import { itemPrice, itemRank } from '@constants'

const { id, map } = defineProps<{
  id: number
  map?: number
}>()

const name = computed (() => itemNameById(id))
const rank = computed (() => itemRank[id])
</script>

<template>
  <div
    class="flex w-80 flex-col justify-self-center overflow-hidden pt-4 pb-3">
    <div class="flex h-fit w-full grow gap-3 px-4">
      <!-- IMG -->

      <Item
        v-if="id"
        :id="id"
        spinner
        :alt="`${name} Image`"
        class="size-11">
      </Item>

      <div class="flex w-full grow flex-col text-4">
        <div class="flex w-full items-center justify-between gap-1">
          <!-- NAME / LINK -->

          <h5 class="text-4! leading-3 font-semibold!">
            {{ name }}
          </h5>

          <a
            v-if="name"
            :title="`Official LoL Wiki - ${name}`"
            :href="getWikiLink(name)"
            class="size-5 transition-all duration-200 hover:scale-120"
            target="_blank"
            @click.stop>
            <Icon
              name="la:wikipedia-w"
              class="" />
          </a>
        </div>

        <!-- TIER -->
        <div class="z-0 flex items-end gap-1">
          <span
            v-if="rank"
            class="text-2">
            {{ rank }}
          </span>

          <Grow />

          <!-- PRICE -->
          <figure
            class="inline-flex items-end gap-1 text-2 font-medium">
            <img
              src="/img/icons/gold-coin.webp"
              alt="item price"
              class="ml-1 inline size-4 self-center opacity-80" />
            <figcaption>
              {{ itemPrice[id] }}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <LazyItemData
      :id
      :map />
  </div>
</template>
