<script lang="ts" setup>
import { UContextMenu, UDropdownMenu } from "#components"
import type {
  ContextMenuItem,
  DropdownMenuItem,
  SelectItem,
  SelectValue
} from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"
import type { Ref } from "vue"
import { asSwitch } from "../../utils/typeAssert"

interface SelectMenuItem {
  select: {
    modelValue: Ref<SelectValue | undefined>
    open: Ref<boolean>
    items?: SelectItem[]
    content?: Record<string, any>
    ui?: Record<string, any>
  }
}

type MenuItem = Record<string, any>

const props = withDefaults(
  defineProps<{
    component?: string
    content?: Record<string, any>
    items?: MenuItem[]
  }>(),
  {
    component: "context"
  }
)
const emits = defineEmits(["update:modelValue"])

const nestedSelectContentClass = "lp-nested-menu-select-content "

const forwarded = useForwardPropsEmits(props, emits)

const component = computed(() =>
  props.component === "context"
    ? UContextMenu
    : props.component === "dropdown"
      ? UDropdownMenu
      : null
)

const modelValue = defineModel("open", { default: false })

function asSelect(item: MenuItem): SelectMenuItem {
  return item as ContextMenuItem & SelectMenuItem
}

function updateSelectValue(item: MenuItem, value: SelectValue | undefined) {
  const select = asSelect(item).select

  select.modelValue.value = value
  select.open.value = false
}

function eventTarget(event: Event) {
  const customEvent = event as CustomEvent<{ originalEvent?: Event }>

  return customEvent.detail?.originalEvent?.target ?? event.target
}

function isNestedSelectEvent(event: Event) {
  const target = eventTarget(event)

  return (
    target instanceof Element &&
    !!target.closest(`.${nestedSelectContentClass}`)
  )
}

function guardNestedSelectEvent<T extends Event>(handler?: (event: T) => void) {
  return (event: T) => {
    if (isNestedSelectEvent(event)) {
      event.preventDefault()
      return
    }

    handler?.(event)
  }
}

function guardedContent(content?: Record<string, any>) {
  return {
    ...content,
    onPointerDownOutside: guardNestedSelectEvent(content?.onPointerDownOutside),
    onInteractOutside: guardNestedSelectEvent(content?.onInteractOutside),
    onFocusOutside: guardNestedSelectEvent(content?.onFocusOutside)
  }
}

function guardedItems(items?: MenuItem[]): MenuItem[] | undefined {
  return items?.map((item) => {
    if (!("children" in item) || !item.children?.length) return item

    return {
      ...item,
      content: guardedContent(item.content),
      children: guardedItems(item.children as MenuItem[])
    }
  })
}

function selectContent(item: MenuItem) {
  return {
    position: "popper" as const,
    ...asSelect(item).select.content
  }
}

function selectUi(item: MenuItem) {
  const ui = asSelect(item).select.ui

  return {
    ...ui,
    content: cn(nestedSelectContentClass, ui?.content)
  }
}

const content = computed(() => guardedContent(props.content))
const items = computed(() => guardedItems(props.items))
</script>

<template>
  <component
    :is="component"
    v-bind="forwarded"
    v-model:open="modelValue"
    :content
    :items>
    <slot :forwarded :open="modelValue" />
    <template #switch-trailing="{ item }">
      <USwitch :checked="asSwitch(item).checked" size="xs" />
    </template>

    <template #icons>
      <slot name="icons" />
    </template>

    <template #select="{ item }">
      <USelect
        :model-value="asSelect(item).select.modelValue.value"
        :open="asSelect(item).select.open.value"
        :portal="true"
        :default-open="false"
        :content="selectContent(item)"
        :ui="selectUi(item)"
        :items="asSelect(item).select.items"
        @pointerdown.stop
        @click.stop
        @update:open="asSelect(item).select.open.value = $event"
        @update:model-value="updateSelectValue(item, $event)" />
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
    <template #check-trailing="{ item }">
      <Checkbox
        :model-value="asSwitch(item).checked"
        v-bind="item.indicator"
        :class="cn('rounded-full', item.ui?.itemTrailing)" />
    </template>
  </component>
</template>
