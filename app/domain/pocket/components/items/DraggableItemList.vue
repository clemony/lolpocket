<script setup lang="ts">
const { items } = defineProps<{
  items: ComputedRef<number[]>
}>()
const a = computed(() => items.value.length < is().defaultFilterLength)

watch(
  () => a.value,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
  }
)
</script>

<template>
  <div class="flex w-full flex-col pb-32">
    <div
      v-if="items.value.length"
      class="grid w-full grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-evenly gap-3 pt-6 select-none">
      <DraggableIcon
        v-for="(item, i) in items.value"
        :id="item"
        :key="item"
        group="item-list"
        type="item"
        :data="computed(() => ({ id: item }))"
        list="item"
        drag="clone"
        :index="i"
        :icon="{ avatar: { size: '8xl' }, id: item, type: 'item' }" />
    </div>
    <div
      v-if="items.value.length < is().defaultFilterLength"
      class="z-2 grid w-full place-items-center pt-32">
      <UButton
        class="w-fit *:opacity-80 hover:inset-shadow-xs hover:*:opacity-100"
        variant="outline"
        size="sm"
        @click="is().clearFilters()">
        <span>
          {{ !items.value.length ? "sold out" : "reset" }}
        </span>
        <icon class="size-3.5" name="reset" />
      </UButton>
    </div>
  </div>
</template>
