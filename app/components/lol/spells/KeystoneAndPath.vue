<script lang="ts" setup>
import type { RuneSet } from '~~/shared/schema'

const { set } = defineProps<{
  set: RuneSet
  kClass?: HTMLAttributes['class']
  pClass?: HTMLAttributes['class']
  xClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="grid size-full grid-cols-2 items-center !justify-end gap-3">
    <span class="relative grid size-full items-center justify-end">
      <img
        v-if="set?.keystone"
        c
        :title="String(ix().runeNameById(set?.keystone))"
        :alt="set?.keystone.toString()"
        :src="`/img/runes/${set?.primary?.path}/${set?.keystone}.webp`"
        :class="
          cn(
            'absolute -right-2 !w-14 shrink-0 !justify-self-end drop-shadow-sm',
            kClass,
          )
        " />

      <Placeholder
        v-else
        :class="
          cn('size-11 shrink-0 justify-end rounded-full bg-b2/80', xClass)
        "
        class="" />
    </span>
    <img
      v-if="set?.secondary?.path"
      :title="set?.secondary?.path"
      :alt="set?.secondary?.path"
      :src="`/img/paths/${set?.secondary?.path}.webp`"
      :class="cn('ml-2 w-7 justify-self-start drop-shadow-sm', pClass)" />
    <Placeholder
      v-else
      :class="
        cn('size-11 shrink-0 justify-start rounded-full bg-b2/80', xClass)
      " />
  </div>
</template>
