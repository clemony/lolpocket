<script setup lang="ts">
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
const mainSet = computed(() =>
  pocket.runes.find(s => s.id === pocket.main?.runes)
)
</script>

<template>
  <VarSelectTrigger
    variant="ghost"
    class="overflow-hidden size-max relative grid place-items-center   **:pointer-events-none ">
    <RuneAndPathImg

      placement="left"
      variant="ghost"
      :class="cn('group/btn  fx-0 z-10  rounded-full !cursor-pointer !pointer-events-auto **:pointer-events-none size-20  hover:shadow-sm hover:shadow-black/4')"
      :set="mainSet" />

    <icon
      name="select"
      class=" size-4 absolute right-1.5" />
  </VarSelectTrigger>
</template>