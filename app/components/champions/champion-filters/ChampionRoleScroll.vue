<script setup lang="ts">
const cs = useChampStore()
function reset() {
  cs.championFilter.role = null
  console.log('💠 - reset -  cs.championFilter.role:', cs.championFilter.role)
}
</script>

<template>
  <ScrollArea
    as="div"
    class="relative">
    <div class="size-fit  mask-right-sm ">
      <TransitionSlide
        :offset="['100%', 0]"
        group
        class="grow flex mask-left-sm flex-nowrap overflow-x-auto max-w-160 gap-3 mt-3 px-10 pb-4 pt-2">
        <button
          class="btn btn-square btn-sm !text-5 rounded-md font-normal"
          :class="{ hidden: !cs.championFilter.role }">
          <icon
            name="x-sm"
            class="stroke-[1.3]"
            @click="reset()" />
        </button>

        <label
          v-for="(role, i) in championRoles"
          :key="role + i"
          class="btn has-checked:!bg-n1 has-checked:!text-nc has-checked:!border-n1 !rounded-lg-2 !bg-b2/20 shadow-sm shadow-black/7 border-b2 hover:!border-b3 hover:scale-110  transition-all duration-300
        hover:drop-shadow-sm
        hover:!bg-b3/40 has-checked:!shadow-n1/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:!shadow-sm"
          :class="{ hidden: cs.championFilter.role && role != cs.championFilter.role }">
          <input
            v-model="cs.championFilter.role"
            class="hidden peer"
            :value="role"
            type="radio"
            name="championClass" />
          {{ role }}
        </label>
      </TransitionSlide>
    </div>

    <ScrollBar />

    <div
      v-if="!cs.championFilter.role"
      class="absolute h-13 bg-b1 w-6 -left-4 top-2 grid place-items-center">
      <icon
        name="left-sm"
        class="size-6 z-1 shrink-0" />
    </div>

    <div
      v-if="!cs.championFilter.role"
      class="absolute h-13 bg-b1 w-6 -right-4 top-2 grid place-items-center">
      <icon
        name="right-sm"
        class="size-6" />
    </div>
  </ScrollArea>
</template>

<style scoped></style>
