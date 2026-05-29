<script setup lang="ts">
const route = useRoute()
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

const mainSet = computed(() =>
  pocket.value?.runes?.find((s: RuneSet) => s.id === pocket.value?._runes)
)
</script>

<template>
  <VarSelectTrigger
    class="relative grid size-max place-items-center overflow-hidden **:pointer-events-none"
    variant="ghost">
    <RuneAndPathImg
      v-if="mainSet"
      placement="left"
      variant="ghost"
      :class="
        cn(
          `group/btn pointer-events-auto! z-10 size-20 cursor-pointer! rounded-full fx-0 **:pointer-events-none hover:shadow-sm hover:shadow-black/4`
        )
      "
      :set="mainSet" />

    <icon class="absolute right-1.5 size-4" name="up-down" />
  </VarSelectTrigger>
</template>
