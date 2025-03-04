<script lang="ts" setup>

const props = defineProps<{
  pocket: pocket
}>()
const ts = useTempStore()
</script>

<template>
  <div class="relative inset-0 grid grid-rows-[1fr_1.4fr]">
    <div class="">
      <div class="">
        <h1>Sort</h1>
      </div>

      <div class="">
        <h1>Category</h1>
        <button v-tippy="'Reset all'" size="sm" variant="ghost" @click="is.filterItemTypes = ''">
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </button>

        <ul class="flex flex-col gap-2">
          <li v-for="type in itemTypes" :key="type">
            <label class=" flex gap-4 items-center">
              <input v-model="is.filterItemTypes" type="radio" :value="type" class="radio radio-neutral radio-xs" />
              {{ type }}
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="">
      <h1>Stats</h1>
      <Button v-tippy="'Reset all'" size="sm" variant="ghost" @click="is.filterItemStats = []">
        <span class="opacity-60">{{ is.filterItemStats.length }}</span>
        <icon name="reset" class="!size-4 shrink-0 ml-2 " />
      </Button>

      <ul class="flex flex-col gap-2">
        <li v-for="stat in itemStats" :key="stat.id" class="pointer-events-none">
          <label class="flex gap-4 pointer-events-auto" @click.stop>
            <input v-model="is.filterItemStats" type="checkbox" :value="stat.id" class="checkbox-neutral peer" />

            {{ stat.displayName }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
