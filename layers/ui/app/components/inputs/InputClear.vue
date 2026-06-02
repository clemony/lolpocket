<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    size: "xs",
    square: true,
    variant: "ghost",
    color: "base"
  }
)
const emit = defineEmits(["clearInput"])

const id = crypto.randomUUID()

const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emit)
</script>

<template>
  <label
    :for="id"
    :class="
      cn(
        'group/label -mr-1 hidden h-12 w-10 shrink-0 cursor-pointer place-items-center group-focus-within/input:grid',
        props.class
      )
    ">
    <UButton
      :id
      v-bind="forwarded"
      icon="i-x"
      :ui="{
        leadingIcon: cn(
          '**:stroke-[14%]!',
          color === 'neutral'
            ? '**:stroke-[16%]!'
            : 'opacity-50 group-hover/btn:opacity-100',
          props.leadingIcon
        ),
        base: cn('anchor pointer-events-auto shrink-0', ui?.base)
      }"
      square
      @click.stop="emit('clearInput')" />
  </label>
</template>
