<script setup lang="ts">

import { championRoles } from '#shared/references'
const { filtered, filters, setFilter } = useItemFilter()
function reset() {
  filters.role = null
  console.log('💠 - reset -  filters.role:', filters.role)
}
</script>

<template>
  <ScrollArea
    as="div"
    class="relative">
    <div class="mask-right-sm size-fit">
      <TransitionSlide
        :offset="['100%', 0]"
        group
        class="mask-left-sm mt-3 flex max-w-160 grow flex-nowrap gap-3 overflow-x-auto px-10 pt-2 pb-4">
        <button
          class="btn btn-square btn-sm !text-5rounded-md font-normal"
          :class="{ hidden: !filters.role }">
          <icon
            name="x-sm"
            class="stroke-[1.3]"
            @click="reset()" />
        </button>

        <label
          v-for="(role, i) in championRoles"
          :key="`${role.name}${i}`"
          class="btn has-checked:!bgneutral has-checked:!text-nc has-checked:!borderneutral !rounded-lg-2 !bg-b2/20 border-b2 hover:!border-b3 hover:!bg-b3/40 has-checked:!shadowneutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize shadow-sm shadow-black/7 transition-all duration-300 checked:!shadow-sm hover:scale-110 hover:drop-shadow-sm"
          :class="{ hidden: filters.role && role.name !== filters.role }">
          <input
            v-model="filters.role"
            class="peer hidden"
            :value="role.name"
            type="radio"
            name="championClass" />
          {{ role.name }}
        </label>
      </TransitionSlide>
    </div>

    <ScrollBar />

    <div
      v-if="!filters.role"
      class="bg-b1 absolute top-2 -left-4 grid h-13 w-6 place-items-center">
      <icon
        name="left"
        class="z-1 size-6 shrink-0" />
    </div>

    <div
      v-if="!filters.role"
      class="bg-b1 absolute top-2 -right-4 grid h-13 w-6 place-items-center">
      <icon
        name="right"
        class="size-6" />
    </div>
  </ScrollArea>
</template>

<style scoped></style>
