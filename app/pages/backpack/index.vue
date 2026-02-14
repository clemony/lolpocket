<script lang="ts" setup>
definePageMeta({
  title: "Pockets",
  icon: "lucide:folder",
  listClass: " size-4.75",
  order: 1,
})

const selected = ref<Pocket | null>(null)
</script>

<template>
  <!--     <LazyBackpackBoxCard
            <UButton v-tippy="'Add Pocket'" class="h-38 w-full" variant="ghost">
              <icon class="size-7 **:stroke-[1.5]" name="add" />
  <PocketDetailMenu :pocket-key="selected?.key ?? null" />
            </UButton>  -->
  <div class="flex flex-1 bg-p1">
    <UDashboardPanel />
    <UDashboardPanel />
  </div>
</template>
