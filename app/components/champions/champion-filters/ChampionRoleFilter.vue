<script setup lang="ts">
const cs = useChampStore()
function reset() {
  cs.championFilter.role = null
  console.log('💠 - reset -  cs.championFilter.role:', cs.championFilter.role)
}
</script>

<template>
  <transition-fade
    group
    class="items-center flex">
    <button
      v-if="cs.championFilter.role"
      class="btn !h-9 w-36 border-b3 border  btn-neutral pr-2.5 inset-shadow-xs inset-shadow-b3/53 shadow-sm drop-shadow-sm !bg-n1/90 rounded-xl hover:opacity-90"
      @click="reset()">
      <span class="grow">
        {{ cs.championFilter.role }}
      </span>

      <icon name="x-sm" />
    </button>

    <div v-else>
      <Select v-model:model-value="cs.championFilter.role">
        <SelectTrigger class="max-w-36 bg-b2/70 w-36 hover:ring border-b3 hover:inset-shadow-sm data-[state=open]:inset-shadow-sm hover:ring-b4/60 h-9 rounded-xl ">
          <div class="size-full pt-0.5 bg-noise">
            <SelectValue
              placeholder="Role"
              class="placeholder:!text-bc/40 font-medium  " />
          </div>
        </SelectTrigger>

        <ContrastSelectContent class="w-(--reka-select-trigger-width)">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>

            <ContrastSelectItem
              v-for="(role, i) in championRoles"
              :key="role + i"
              :value="role">
              {{ role }}
            </ContrastSelectItem>
          </SelectGroup>
        </ContrastSelectContent>
      </Select>
    </div>
  </transition-fade>
</template>

<style scoped></style>
