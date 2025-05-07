<script setup lang="ts">

const cs = useChampStore()
function reset(){
  cs.championFilter.role = null
  console.log("💠 - reset -  cs.championFilter.role:",  cs.championFilter.role)
}
</script>

<template>
  <ScrollArea as="div" class="">
    <TransitionSlide  :offset="['100%', 0]" group class="w-full flex flex-nowrap overflow-x-auto min-w-200 gap-3  w-1/2 max-w-1/2 pb-5 pt-2">
    <button
      class="btn btn-square btn-sm !text-5 rounded-md font-normal"
      :class="{'hidden': !cs.championFilter.role}">
    <icon name="x-sm" class="stroke-[1.3]" @click="reset()"/>
    </button>
      <label
        v-for="(role, i) in championRoles"
        :key="role + i"
        class="btn has-checked:!bg-neutral has-checked:!text-nc has-checked:!border-neutral
        hover:bg-b3 has-checked:!shadow-neutral/20 btn-sm !text-3 mr-0 rounded-md font-medium tracking-normal capitalize checked:!shadow-sm"
        :class="{'hidden': cs.championFilter.role && role != cs.championFilter.role}">
        <input
class="hidden peer"
        v-model="cs.championFilter.role"
        :value="role"
        type="radio"
        name="championClass" />
        {{role}}
    </label>
    </TransitionSlide>

  <ScrollBar  />
  </ScrollArea>
</template>

<style scoped></style>
