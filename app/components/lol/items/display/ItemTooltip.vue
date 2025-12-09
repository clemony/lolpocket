<script setup lang="ts">
import { itemPrice, itemRank } from '@constants'
import { itemRankColor } from '@references'

const { id, map } = defineProps<{
  id: number
  map?: number
}>()

const name = computed (() => itemNameById(id))
const rank = computed (() => itemRank[id])
</script>

<template>
  <ItemData
    :id
    v-slot="{ open, disabled }"
    :map
    class="flex flex-col pt-3 pb-2">
    <CollapsibleTrigger class="flex h-11 w-full grow gap-3 px-4">
      <!-- IMG -->

      <Item
        v-if="id"
        :id="id"
        spinner
        :alt="`${name} Image`"
        class="size-11">
      </Item>

      <div class="items-between flex h-full grow flex-col gap-1">
        <div
          class="flex w-full items-center justify-between gap-1">
          <!-- NAME / LINK -->

          <h5 class="text-3! leading-3 font-semibold!">
            {{ name }}
          </h5>

          <!--           <a
            v-if="name"
            :title="`Official LoL Wiki - ${name}`"
            :href="getWikiLink(name)"
            class="size-5 transition-all duration-200 hover:scale-120"
            target="_blank"
            @click.stop>
            <Icon
              name="la:wikipedia-w"
              class="" />
          </a> -->

          <CaretFlip
            :class="cn('size-4.25', { '!opacity-0': open || disabled })" />
        </div>

        <!-- TIER -->
        <div class="z-0 flex items-end gap-1">
          <span
            v-if="rank"
            :style="{
              color: itemRankColor[rank],
            }"
            class="text-1! italic">
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
    </CollapsibleTrigger>
  </ItemData>
</template>
