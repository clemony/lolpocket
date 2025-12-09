<script setup lang="ts">
import { runeToTier } from '@constants'

const {
  id,
} = defineProps<{
  id: number
}>()

const tier = computed (() => runeToTier[id])
const path = computed (() => runeToPath[id])
const name = computed (() => runeNameById(id))
</script>

<template>
  <button class="flex cursor-pointer items-center gap-2 px-3 pt-2.5 pb-1">
    <div
      :class="cn('relative grid size-6 shrink-0 place-items-center')">
      <Img
        v-if="id"
        :key="name"
        spinner
        :src="`/img/runes/${id}.webp`"
        :alt="`${name} Image`"
        :class="cn('pointer-events-none absolute rounded-full object-cover shadow-sm inset-shadow-sm drop-shadow-sm', { '[&_img]:size-9! ': tier === 0, '[&_img]:size-8': tier !== 0 })
        " />
    </div>

    <div class="flex items-center gap-4">
      <h4 class="flex grow items-center gap-2 text-3! leading-none font-medium!">
        {{ name }}
        <Element
          size="c-4">
          <span :class="cn('size-4', { 'size-3.5': path === 'Inspiration' })">
            <img
              v-if="path"
              :src="`/img/paths/${path}.webp`"
              :alt="path"
              :title=" path "
              class="shrink-0 object-contain dst" />
          </span>
        </Element>
      </h4>

      <Icon
        name="open"
        class="size-3.5" />
    </div>
  </button>
</template>