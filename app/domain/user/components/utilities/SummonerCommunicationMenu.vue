<script lang="ts" setup>
import { LazyReport } from "#components"
import type { ButtonProps } from "@nuxt/ui"
import { useFollowSummoner } from "~/domain/summoner/composables/useFollowSummoner"
import { offsetTooltipContent } from "~~/layers/ui/app/variants/tooltip"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: "outline",
    size: "sm",
  }
)
const emit = defineEmits(["update:open"])
const overlay = useOverlay()

const report = overlay.create(LazyReport, {
  props: {},
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
    icon: "i-chat",
  },
  {
    label: "Block",
    class: " ",
    icon: "i-ban",
  },
  {
    label: "Report",
    icon: "i-warning",
    class: "",
    onClick: () => openReport(),
  },
])

const open = shallowRef<boolean>(false)

const btnProps: ButtonProps & { tabindex?: string } = {
  color: "base",
  variant: "outline",
  size: "sm",
  tabindex: "-1",
}

const { isSelf, isFavorite, tooltipText, update } = useFollowSummoner(summoner)
</script>

<template>
  <div class="grid w-full grid-cols-4 items-center gap-1.5">
    <Tooltip :text="tooltipText">
      <HeartButton
        v-if="summoner"
        v-bind="btnProps"
        :ui="{ base: 'min-h-9! grow shadow-none drop-shadow-none' }"
        :size
        :tooltip-text="tooltipText"
        :disabled="isSelf"
        :checked="isSelf || isFavorite"
        @update:model-value="update($event)">
      </HeartButton>
    </Tooltip>
    <UTooltip
      v-for="(v, i) in toolbar"
      :key="i"
      as-child
      :text="v.label"
      :content="offsetTooltipContent">
      <UButton
        v-bind="btnProps"
        :icon="v.icon"
        :ui="{
          base: 'min-h-9! w-full! grow shadow-none drop-shadow-none',
          leadingIcon: cn('**:stroke-[2.4]', v.class),
        }" />
    </UTooltip>
  </div>
</template>
