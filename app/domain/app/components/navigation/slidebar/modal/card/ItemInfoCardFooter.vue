<script lang="ts" setup>
import { mapIndex } from "~~/shared/constants/misc/map-index"

const { item, expanded, has } = defineProps<{
  item: Item
  expanded: boolean
  has?: ComputedRef<boolean>
}>()

const emit = defineEmits(["toggleExpanded"])
const hoveredMap = shallowRef<string>("")

const maps = computed(() =>
  item?.maps
    ?.map((map) => ({
      value: map,
      label: mapIndex.find((i) => i.id === map)?.name,
    }))
    .filter(Boolean)
)
</script>

<template>
  <div class="flex size-full items-center overflow-visible px-1">
    <UTooltip
      :hide-on-click="false"
      arrow
      :ui="{ content: 'h-7!' }"
      :content="{ side: 'left', sideOffset: 10 }">
      <div class="flex items-center justify-self-end overflow-hidden">
        <UButton
          v-for="map in maps"
          :key="map.value"
          size="xs"
          color="transparent"
          :aria-label="map.label"
          class="group/tt h-4 w-6"
          @mouseover="hoveredMap = String(map.label)"
          @mouseleave="hoveredMap = ''"
          @focusout="hoveredMap = ''"
          @focus="hoveredMap = String(map.label)">
          <Icon
            :name="`i-lp-${map.value}`"
            class="size-4 text-nc opacity-30 group-hover/tt:opacity-100" />
        </UButton>
      </div>
      <template #content>
        <div class="inline-flex items-center gap-2 align-baseline">
          {{ hoveredMap }}
          <Icon name="check" class="inline size-4 align-icon text-nc" />
        </div>
      </template>
    </UTooltip>
  </div>

  <div class="grid size-full place-items-center overflow-hidden">
    <UButton
      v-if="has"
      color="transparent"
      icon="i-up"
      size="xs"
      :ui="{
        base: 'anchor toggle-more size-full!',
        leadingIcon: cn(
          'transition-rotate col-start-2 text-nc/40 duration-200 ease-spring-soft group-hover/btn:text-nc',
          {
            'rotate-180': expanded,
          }
        ),
      }"
      aria-label="Close"
      :aria-describedby="`Collapse ${item?.name} additional info.`"
      @click="emit('toggleExpanded')" />
  </div>

  <div class="align-center inline-flex justify-end gap-1.5 px-2 font-medium">
    <Icon
      class="dst inline size-3.5 self-center stroke-pc/30 stroke-4 text-vanguard/90"
      name="i-lp-gold"
      alt="item price" />
    {{ item.gold?.total }}
  </div>
</template>
