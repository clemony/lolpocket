<script setup lang="ts">
const { filtered, filters, setFilter } = useItemFilter()
function reset() {
  filters.role = null
  console.log("💠 - reset -  filters.role:", filters.role)
}
</script>

<template>
  <ScrollArea class="relative" as="div">
    <div class="mask-right-sm size-fit">
      <TransitionSlide
        class="mask-left-sm mt-3 flex max-w-160 grow flex-nowrap gap-3 overflow-x-auto px-10 pt-2 pb-4"
        :offset="['100%', 0]"
        group>
        <button
          class="text-xlrounded-md! btn btn-square font-normal btn-sm"
          :class="{ hidden: !filters.role }">
          <icon class="stroke-[1.3]" name="x-sm" @click="reset()" />
        </button>

        <label
          v-for="(role, i) in championRoles"
          :key="`${role.name}${i}`"
          class="has-checked:!bgneutral has-checked:!borderneutral has-checked:!shadowneutral/20 btn mr-0 rounded-lg-2! rounded-md border-p2 bg-p2/20! text-md! font-medium tracking-normal capitalize shadow-sm shadow-black/7 transition-all duration-300 btn-sm checked:shadow-sm! hover:scale-110 hover:border-p3! hover:bg-p3/40! hover:drop-shadow-sm has-checked:text-nc!"
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
      class="absolute top-2 -left-4 grid h-13 w-6 place-items-center bg-p0">
      <icon class="z-1 size-6 shrink-0" name="left" />
    </div>

    <div
      v-if="!filters.role"
      class="absolute top-2 -right-4 grid h-13 w-6 place-items-center bg-p0">
      <icon class="size-6" name="right" />
    </div>
  </ScrollArea>
</template>
