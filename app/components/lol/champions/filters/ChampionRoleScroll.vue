<script setup lang="ts">
import { championRoles } from "#shared/references";

const { filtered, filters, setFilter } = useItemFilter();
function reset() {
  filters.role = null;
  console.log("💠 - reset -  filters.role:", filters.role);
}
</script>

<template>
  <ScrollArea as="div" class="relative">
    <div class="mask-right-sm size-fit">
      <TransitionSlide
        :offset="['100%', 0]"
        group
        class="mask-left-sm mt-3 flex max-w-160 grow flex-nowrap gap-3 overflow-x-auto px-10 pt-2 pb-4"
      >
        <button
          class="text-5rounded-md! btn btn-square font-normal btn-sm"
          :class="{ hidden: !filters.role }"
        >
          <icon name="x-sm" class="stroke-[1.3]" @click="reset()" />
        </button>

        <label
          v-for="(role, i) in championRoles"
          :key="`${role.name}${i}`"
          class="has-checked:!bgneutral has-checked:!borderneutral has-checked:!shadowneutral/20 btn mr-0 rounded-lg-2! rounded-md border-b2 bg-b2/20! text-3! font-medium tracking-normal capitalize shadow-sm shadow-black/7 transition-all duration-300 btn-sm checked:shadow-sm! hover:scale-110 hover:border-b3! hover:bg-b3/40! hover:drop-shadow-sm has-checked:text-nc!"
          :class="{ hidden: filters.role && role.name !== filters.role }"
        >
          <input
            v-model="filters.role"
            class="peer hidden"
            :value="role.name"
            type="radio"
            name="championClass"
          />
          {{ role.name }}
        </label>
      </TransitionSlide>
    </div>

    <ScrollBar />

    <div
      v-if="!filters.role"
      class="absolute top-2 -left-4 grid h-13 w-6 place-items-center bg-b1"
    >
      <icon name="left" class="z-1 size-6 shrink-0" />
    </div>

    <div
      v-if="!filters.role"
      class="absolute top-2 -right-4 grid h-13 w-6 place-items-center bg-b1"
    >
      <icon name="right" class="size-6" />
    </div>
  </ScrollArea>
</template>

<style scoped></style>
