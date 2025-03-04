<script setup lang="ts">
const is = useItemStore()
</script>

<template>
  <DropdownMenuContent>
    <button v-tippy="'Reset all'" class="btn btn-ghost btn-sm" @click="is.filterItemStats = []">
      <span class="opacity-60">{{ is.filterItemStats.length }}</span>
      <icon name="reset" class="!size-4 shrink-0 ml-2 " />
    </button>
    <DropdownMenuCheckboxItem v-for="stat in itemStats" :key="stat.id" class="pointer-events-none">
      <label class="flex gap-4 pointer-events-auto -ml-6" @click.stop>
        <input v-model="is.filterItemStats" type="checkbox" :value="stat.id" class="hidden  peer" />
        <div class="size-4 relative">
          <icon v-if="is.filterItemStats.includes(stat.id)" name="tick-sm" class="absolute !size-6 shrink-0" />
        </div>
        {{ stat.displayName }}
      </label>
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</template>

<style scoped>
</style>