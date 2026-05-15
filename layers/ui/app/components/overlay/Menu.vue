<script lang="ts" setup>
import { UContextMenu, UDropdownMenu } from "#components"
import type {
  ContextMenuEmits,
  ContextMenuItem,
  DropdownMenuEmits,
  DropdownMenuItem
} from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"
import { asSwitch } from "../../utils/menuUtils"

const props = withDefaults(
  defineProps<
    (ContextMenuItem | DropdownMenuItem) & {
      component?: string
    }
  >(),
  {
    component: "context"
  }
)
const emits = defineEmits(["update:modelValue"])

const forwarded = useForwardPropsEmits(props, emits)

const component = computed(() =>
  props.component === "context"
    ? UContextMenu
    : props.component === "dropdown"
      ? UDropdownMenu
      : null
)

const modelValue = defineModel("open", { default: false })
</script>

<template>
  <component :is="component" v-bind="forwarded" v-model:open="modelValue">
    <slot :forwarded :open="modelValue" />
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
  </component>
</template>
