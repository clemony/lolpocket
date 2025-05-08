<script setup lang="ts">
const cs = useChampStore()
function reset() {
  cs.championFilter.role = null
  console.log('💠 - reset -  cs.championFilter.role:', cs.championFilter.role)
}
</script>

<template>
  <transition-slide group>
    <button v-if="cs.championFilter.role" class="btn mt-1 btn-neutral pr-2.5 !bg-neutral/90 rounded-xl hover:opacity-90" @click="reset()">
      {{ cs.championFilter.role }}
      <icon name="x-sm" />
    </button>

    <div v-else>
      <Select v-model:model-value="cs.championFilter.role">
        <ContrastSelectTrigger class="mt-1 max-w-40 w-40 hover:ring hover:ring-b4/80">
          <SelectValue placeholder="Role" class="placeholder:!text-bc/40" />
        </ContrastSelectTrigger>
        <ContrastSelectContent class="w-(--reka-select-trigger-width)">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <ContrastSelectItem
              v-for="(role, i) in championRoles"
              :key="role + i" :value="role">
              {{ role }}
            </ContrastSelectItem>
          </SelectGroup>
        </ContrastSelectContent>
      </Select>
    </div>
  </transition-slide>
</template>

<style scoped></style>
