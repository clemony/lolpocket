<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"

const { objectData, map } = defineProps<{
  objectData: ObjectDataReturn
  map?: MaybeRefOrGetter<number | undefined>
}>()

const { idRef, data, typeRef, status } = objectData
</script>

<template>
  <div class="grid h-max w-full pt-1">
    <template v-if="status === 'success' && data">
      <div class="grid h-max w-full grid-cols-[1fr_1.5fr] gap-4">
        <LazyItemInfoCard
          v-if="idRef && data && typeRef === 'item'"
          :object-data
          :map />
      </div>
    </template>
    <div v-else-if="status === 'pending'"></div>

    <!-- i-streamline-ultimate-work-from-home-user-pet-cat
     i-arcticons-emoji-cat -->
    <LazyUEmpty
      v-if="status === 'error'"
      variant="naked"
      icon="i-streamline-freehand-work-from-home-user-pet-cat"
      size="xs"
      title="Item not found.">
      <template #description>
        It seems
        <ULink class="inline" underline> clem </ULink>
        may have moved this from it's previous location. Try refreshing to see
        if we've found it.
      </template>
    </LazyUEmpty>
  </div>
</template>
