<script lang="ts" setup>
import { LazyReport } from "#components"
import type { ButtonProps } from "@nuxt/ui"
import { offsetTooltipContent } from "~~/layers/ui/app/variants/tooltip"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: "outline",
    size: "sm"
  }
)
const emit = defineEmits(["update:open"])
const overlay = useOverlay()

const report = overlay.create(LazyReport, {
  props: {}
})
async function openReport(): Promise<void> {
  emit("update:open", false)
  report.open()
}

const forwarded = reactiveOmit(props, "class")
const { summoner } = storeToRefs(sSession())

const toolbar = computed(() => [
  {
    label: "Message",
    class: "scale-96",
    icon: "i-chat"
  },
  {
    label: "Block",
    class: "",
    icon: "i-ban"
  },
  {
    label: "Report",
    icon: "i-warning",
    class: "",
    onClick: () => openReport()
  }
])

const open = shallowRef<boolean>(false)
</script>

<template>
  <div class="grid w-full grid-cols-4 items-center gap-1.5">
    <FollowButton
      variant="solid"
      color="p0"
      side="top"
      :ui="{ base: 'w-full! grow! drop-shadow-none' }" />
    <UTooltip
      v-for="(v, i) in toolbar"
      :key="i"
      as-child
      :text="v.label"
      :content="offsetTooltipContent">
      <UButton
        :icon="v.icon"
        size="sm"
        :ui="{
          base: 'w-full! grow! drop-shadow-none',
          leadingIcon: cn('**:stroke-[2.4]', v.class)
        }"
        variant="solid"
        color="p0" />
    </UTooltip>
    <!-- <LazyUDropdownMenu
      v-model:open="open"
      :highlight="false"
      :content="{
        side: 'top',
        align: 'end',
        sideOffset: 6
      }"
      size="sm"
      :active="open"
      class="pointer-events-auto"
      :items="toolbar"
      :ui="{
        item: 'gap-2',
        content: 'min-w-44 rounded-lg shadow-sm drop-shadow-sm',
        itemLeadingIcon: 'size-4 **:stroke-[2.6]'
      }">
      <UButton
        v-bind="forwarded"
        :ui="{
          base: cn('h-max w-full', props.ui?.base)
        }"
        icon="i-more" />
      <template #content-top>
        <span class="p-2 text-xs font-semibold text-pc/60"> Social </span>
      </template>
    </LazyUDropdownMenu> -->
  </div>
</template>
