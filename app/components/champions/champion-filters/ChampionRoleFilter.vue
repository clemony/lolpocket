<script setup lang="ts">
const cs = useChampStore()
function reset() {
  cs.championFilter.role = null
  console.log('💠 - reset -  cs.championFilter.role:', cs.championFilter.role)
}
</script>

<template>
  <ScrollArea as="div" class="grow">
    <TransitionSlide :offset="['100%', 0]" group class="grow flex flex-nowrap overflow-x-auto min-w-200 gap-3 mt-3  pb-4 pt-2">
      <button
        class="btn btn-square btn-sm !text-5 rounded-md font-normal"
        :class="{ hidden: !cs.championFilter.role }">
        <icon name="x-sm" class="stroke-[1.3]" @click="reset()" />
      </button>
      <label
        v-for="(role, i) in championRoles"
        :key="role + i"
        class="btn has-checked:!bg-neutral has-checked:!text-nc has-checked:!border-neutral !rounded-lg-2 !bg-b2/20 shadow-sm shadow-black/7 border-b2
        hover:bg-b3 has-checked:!shadow-neutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:!shadow-sm"
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

    <ScrollBar />
  </ScrollArea>
</template>

<style scoped></style>
