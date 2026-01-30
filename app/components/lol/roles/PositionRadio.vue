<script lang="ts" setup>
import { positions } from './handleRoles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    class=""
    :class="{
      'flex! w-full justify-between! gap-2.5 px-4! py-2': props.class,
    }"
  >
    <label
      v-for="position in positions"
      :key="position"
      class="has-checked:bgneutral btn btn-square btn-ghost hover:bg-b3/40 has-checked:btn-neutral! rounded-[0.85rem]"
    >
      <input
        v-model="ms().filter.role"
        class="peer hidden"
        name="research-positions"
        type="radio"
        value="all"
      >

      <span class="flex w-8.5 items-center justify-center">
        <component
          :is="`i-roles-${position.replace(' ', '-')}`"
          class="dst peer-checked:text-nc h-5 w-auto shrink-0"
        />
      </span>
    </label>
  </div>
</template>
