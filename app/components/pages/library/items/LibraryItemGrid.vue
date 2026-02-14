<script setup lang="ts"></script>

<template>
  <div v-auto-animate class="">
    <div
      v-if="is().filtered.length"
      v-auto-animate
      class="grid w-full grid-cols-[repeat(auto-fill,minmax(50px,1fr))] justify-between gap-4 pt-3">
      <div v-for="item in is().filtered" :key="item" class="size-16">
        <Item :id="item" class="size-full" />
      </div>
    </div>

    <div v-else class="grid w-full place-items-center">
      <UEmpty
        size="sm"
        icon="i-lucide-package-x"
        class="translate-y-1/2"
        title="Sold out"
        description="Looks like we've found no items for these filters."
        :actions="[
          {
            icon: 'i-lucide-refresh-cw',
            label: 'Reset',
            color: 'neutral',
          },
        ]"
        @click="is().clearFilters()" />
    </div>
  </div>
</template>
