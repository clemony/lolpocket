<script lang="ts" setup>
const ts = useTempStore()
const isPopOpen = ref(false)
watch(
  () => ts.pocketItemSelect,
  (newVal) => {
    if (newVal) {
      isPopOpen.value = true
    }
  },
)
</script>

<template>
  <div class="h-full w-16">
    <PocketBarButton>
      <icon name="filter" class="size-5 stroke-[1.3]" />
    </PocketBarButton>
    <Popover v-if="ts.pocketItemSelect" :open="isPopOpen">
      <PopoverTrigger @click="isPopOpen = true">
        <Button class="p-0 rounded-full shadow-sm border border-neutral">
          <img :src="`/img/item/${ts.pocketItemSelect.id}.webp`" class="size-11 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="left"
        :side-offset="18" :align-offset="-3" align="end" class="max-h-100 h-100 w-90 pr-0 rounded-xl" @click="isPopOpen = false"
        @interact-outside="isPopOpen = false"
      >
        <div class="max-h-90 h-90  overflow-y-auto pr-4">
          <LazyItemInfo />
        </div>
      </PopoverContent>
    </Popover>>
  </div>
</template>

<style scoped>

</style>