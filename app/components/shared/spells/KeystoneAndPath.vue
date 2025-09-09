<script lang="ts" setup>
const { set } = defineProps<{
  set: RuneSet
  kClass?: HTMLAttributes['class']
  pClass?: HTMLAttributes['class']
  xClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="size-full gap-3 grid grid-cols-2 !justify-end items-center">
    <span class="size-full relative grid items-center justify-end">
      <img
        v-if="set?.keystone"
        c
        :title="String(ix().runeNameById(set?.keystone))"
        :alt="set?.keystone.toString()"
        :src="`/img/runes/${set?.primary?.path}/${set?.keystone}.webp`"
        :class="cn('!w-14 shrink-0 absolute !justify-self-end drop-shadow-sm -right-2', kClass)" />

      <Placeholder
        v-else
        :class="cn('rounded-full size-11 bg-b2/80 justify-end  shrink-0', xClass)"
        class="" />
    </span>
    <img
      v-if="set?.secondary?.path"
      :title="set?.secondary?.path"
      :alt="set?.secondary?.path"
      :src="`/img/paths/${set?.secondary?.path}.webp`"
      :class="cn('w-7 drop-shadow-sm  justify-self-start ml-2', pClass)" />
    <Placeholder
      v-else
      :class="cn('rounded-full size-11 bg-b2/80 shrink-0 justify-start', xClass)" />
  </div>
</template>