<script lang="ts" setup>
const { class: className, pocket, selected } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  selected?: Pocket
}>()
console.log('🌱 - pocket:', pocket)
</script>

<template>
  <button
    :class="cn(
      'flex flex-col items-start gap-2 rounded-lg border p-3 text-left  transition-all hover:bg-b2/50',
      selected?.key === pocket?.key && 'bg-b2/30',
    )">
    <div class="flex w-full gap-2">
      <!-- icon -->
      <PocketIcon
        :img="pocket.icon"
        class="size-11 rounded-full" />
      <div class="flex grow flex-col gap-1">
        <div class="flex items-center">
          <div class="flex items-center gap-2">
            <!-- name -->
            <div class="font-semibold">
              {{ pocket.name }}
            </div>
          <!-- <span
            v-if="!pocket.read"
            class="flex h-2 w-2 rounded-full bg-blue-600" /> -->
          </div>
          <div
            v-if="pocket.roles?.length"
            :class="cn(
              'ml-auto text-2',
              selected?.key === pocket?.key
                ? 'text-bc'
                : 'text-bc/60',
            )">
            {{ pocket.roles[0] || '' }}
          </div>
        </div>
      </div>

      <div
        v-if="pocket.champions?.length"
        class="text-2 font-medium">
        <span
          v-for="champion in pocket.champions"
          :key="champion">
          {{ ix().champNameByKey(champion) }}
        </span>
      </div>
    </div>
    <div
      v-if="pocket.notes?.[0]"
      class="line-clamp-2 text-xs text-bc/60">
      {{ pocket.notes[0].substring(0, 300) }}
    </div>
    <div
      v-if="pocket.tags?.length"
      class="flex items-center gap-2">
      <Badge
        v-for="tag in pocket.tags"
        :key="tag">
        <icon
          name="hash"
          class="size-3" />{{ tag }}
      </Badge>
    </div>
  </button>
</template>
