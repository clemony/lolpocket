<script lang="ts" setup>
import { UCollapsible, UPopover } from "#components"
import type { ButtonProps } from "@nuxt/ui"
const {
  collapsed,
  label,
  active,
  legend,
  icon,
  value,
  variant = "link",
  side = "top",
} = defineProps<{
  collapsed?: boolean
  label: string
  icon: string
  legend: string
  active?: boolean
  value?: number
  side?: Side
  variant?: ButtonProps["variant"]
}>()

watch(
  () => active,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

const base = "group w-full justify-between"
const popOpen = shallowRef<boolean>(false)
</script>

<template>
  <UPopover
    v-if="collapsed"
    v-model:open="popOpen"
    :ui="{
      content: 'border-y-transparent  w-60 max-h-80 overflow-hidden relative',
    }"
    :content="{
      side,
    }">
    <Tooltip :label="label" :disabled="popOpen" side="top" class="size-10">
      <UChip :text="value" :show="!!value" size="2xl" color="neutral">
        <UButton
          square
          :icon
          active-variant="solid"
          :ui="{
            base: !!value ? 'border border-p4' : '',
            leadingIcon:
              label === 'Statistics' ? '**:stroke-[2.8] ' : '**:stroke-[2.4]',
          }"
          :active="popOpen"
          variant="ghost" />
      </UChip>
    </Tooltip>

    <template #content>
      <ScrollAreaButtons
        class="z-auto w-full [&_.slot-fieldset]:gap-px"
        scroll-area-class="max-h-70"
        content-class="pb-2.5">
        <template #default>
          <div class="px-3 pt-2.5 pb-1">
            <h6 class="text-sm">
              {{ legend }}
            </h6>
          </div>
          <div class="w-full px-1.5">
            <slot name="content" />
          </div>
        </template>
      </ScrollAreaButtons>
    </template>
  </UPopover>

  <UCollapsible
    v-else
    :ui="{
      root: 'w-full',
      content: 'max-h-90 overflow-scroll ',
    }"
    :default-open="!collapsed">
    <UButton variant="link" block>
      <Separator size="md" :label>
        <template #leading>
          <Icon
            name="right"
            class="group-hover/btn:**:text-80 size-4.5 text-pc/40 **:stroke-[2.8] open:rotate-90" />
        </template>
      </Separator>
    </UButton>
    <template #content>
      <slot name="content" />
    </template>
  </UCollapsible>
</template>
