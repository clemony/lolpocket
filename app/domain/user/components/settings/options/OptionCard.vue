<script lang="ts" setup>
import type { CheckboxProps } from "@nuxt/ui"

const { class: className, item } = defineProps<{
  class?: HTMLAttributes["class"]
  item: CheckboxProps & { hint: string }
}>()
</script>

<template>
  <label class="group h-max w-full cursor-pointer" :for="item.label">
    <UCard
      color="base"
      variant="outline"
      :ui="{
        root: 'h-max! w-full rounded-xl group-hover:ring-pc/70!',
        body: 'pointer-events-none grid w-full grid-cols-[36px_auto_24px] items-center gap-3 overflow-hidden px-3! py-4!'
      }">
      <div class="relative size-full">
        <div class="grid gap-0.75">
          <h3
            class="truncate text-lg leading-none font-bold text-pc/80 capitalize">
            {{ item.label }}
          </h3>

          <div class="w-full space-x-1 truncate align-baseline *:inline">
            <h6>
              {{ item.label }}
            </h6>
            <span class="inline w-full truncate text-xs text-n5">{{
              item.description
            }}</span>
          </div>
        </div>
        <div class="pointer-events-auto grid h-full self-start pt-1">
          <HintTooltip :label="item.hint">
            <USwitch :model-value="item.value" size="sm" />
          </HintTooltip>
        </div></div
    ></UCard>
  </label>
</template>
