<script setup lang="ts">
import { itemRank } from '@constants'
import { itemRankColor } from '@references'

const { id } = defineProps<{
  id: number
}>()

const name = computed (() => itemNameById(id))
const rank = computed (() => itemRank[id])
</script>

<template>
  <button class="flex cursor-pointer gap-3 px-3 pt-2.5 pb-1">
    <!-- IMG -->

    <Item
      v-if="id"
      :id="id"
      spinner
      :alt="`${name} Image`"
      class="size-6">
    </Item>

    <div
      class="flex w-full items-center gap-4">
      <!-- NAME / LINK -->

      <h5
        :style="{
          color: itemRankColor?.[rank],
        }"
        class="leading-3 font-medium!">
        {{ name }}
      </h5>
    </div>
  </button>
</template>
