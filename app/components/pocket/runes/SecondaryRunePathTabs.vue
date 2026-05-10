<script lang="ts" setup>
import { pathIndex } from "~~/shared/constants/runes/pathIndex"

const { pocket, set: s } = defineProps<{
  pocket: Pocket
  path: string | undefined
  set: RuneSet
}>()
const set = computed(() => s)
</script>

<template>
  <!-- secondary trigger start  -->
  <div class="relative w-full">
    <UTabs
      v-slot="{ item }"
      v-model:model-value="set.secondary.path"
      :items="
        Object.values(pathIndex).map((p) => ({
          ...p,
          ui: {
            trigger: 'disabled:pointer-events-none disabled:[&_img]:opacity-20'
          },
          disabled: set.primary.path === p.id
        }))
      "
      value-key="id" />

    <!-- primary indicator  -->

    <UTabs
      v-model:model-value="set.primary.path"
      :items="Object.values(pathIndex)"
      value-key="id" />
  </div>
</template>
