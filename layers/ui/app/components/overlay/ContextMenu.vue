<script lang="ts" setup>
import type { ContextMenuEmits, ContextMenuItem } from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"
import { asSwitch } from "../../utils/menuUtils"

const props = defineProps<ContextMenuItem>()
const emits = defineEmits<ContextMenuEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <UContextMenu v-bind="props">
    <slot :forwarded />
    <template #switch-trailing="{ item }">
      <USwitch :checked="asSwitch(item).checked" size="xs" />
    </template>

    <template #icons>
      <slot name="icons" />
    </template>
    <template #radio-trailing="{ item }">
      <input
        v-model="asSwitch(item).modelValue"
        type="radio"
        class="peer hidden"
        :value="asSwitch(item).value"
        :name="asSwitch(item).name" />
      <span
        :class="
          cn(
            'relative grid size-4 place-items-center rounded-full bg-p1/40 inset-shadow-xs inset-ring',
            asSwitch(item).checked ? 'inset-ring-pc' : 'inset-ring-p4'
          )
        ">
        <span
          :class="
            cn(
              'absolute size-2 rounded-full bg-pc transition-all duration-500 ease-spring-soft',
              asSwitch(item).checked
                ? 'animate-in fade-in scale-in scale-100'
                : 'animate-out fade-out scale-out scale-0'
            )
          " />
      </span>
    </template>
  </UContextMenu>
</template>
