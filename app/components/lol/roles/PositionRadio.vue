<script lang="ts" setup>
import { positions } from "./handleRoles";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Field
    class=""
    :class="{
      'flex! w-full justify-between! gap-2.5 px-4! py-2': props.class,
    }"
  >
    <label
      v-for="position in positions"
      :key="position"
      class="has-checked:bgneutral btn btn-square rounded-[0.85rem] btn-ghost hover:bg-b3/40 has-checked:btn-neutral!"
    >
      <input
        v-model="ms().filter.role"
        name="research-positions"
        type="radio"
        class="peer hidden"
        value="all"
      />

      <span class="flex w-8.5 items-center justify-center">
        <component
          :is="`i-roles-${position.replace(' ', '-')}`"
          class="h-5 w-auto shrink-0 dst peer-checked:text-nc"
        />
      </span>
    </label>
  </Field>
</template>
