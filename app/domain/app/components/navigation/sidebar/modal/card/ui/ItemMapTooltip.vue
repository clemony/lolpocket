<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { mapIndex } from "~~/shared/constants/misc/map-index"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      item: Item
    }
  >(),
  {
    color: "transparent",
    size: "xs",
    icon: "i-info",
  }
)

const maps = computed(() =>
  props.item?.maps
    ?.map((map) => ({
      value: map,
      label: mapIndex.find((i) => i.id === map)?.name,
    }))
    .filter(Boolean)
)

const delegated = reactiveOmit(props, "class", "item")
</script>

<template>
  <GlassTooltip
    :hide-on-click="false"
    arrow
    :content="{ side: 'right', sideOffset: 8 }"
    :ui="{ content: 'h-max!', surface: 'h-max!' }">
    <UButton
      v-bind="delegated"
      :aria-label="`Available on ${maps?.map((map) => map.label).join(', ')}`"
      :ui="{
        ...props.ui,
        base: cn(
          'anchor place-self-center rounded-full duration-100! hover:bg-p2! hover:inset-ring hover:inset-ring-n3',
          props.ui?.base
        ),
        leadingIcon: cn(
          'size-4 text-nc/60 group-hover/btn:text-pc',
          props.ui?.leadingIcon
        ),
      }" />
    <template #content>
      <ul class="flex h-max! flex-col gap-1">
        <li
          v-for="map in maps"
          :key="map.value"
          class="inline-flex items-center gap-2 align-baseline">
          <Icon
            :name="`i-lp-${map.value}`"
            class="inline size-4 text-nc opacity-80" />
          <span class="mr-2 grow text-start">{{ map.label }}</span>
          <Icon name="check" class="inline size-4 align-icon text-nc" />
        </li>
      </ul>
    </template>
  </GlassTooltip>
</template>
