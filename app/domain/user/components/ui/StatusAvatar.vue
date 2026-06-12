<script lang="ts" setup>
import type {
  AvatarProps,
  ChipProps,
  TooltipProps
} from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"

type PingColor = NonNullable<ChipProps["color"]>

const props = withDefaults(
  defineProps<
    AvatarProps & {
      puuid?: string
      summoner?: Summoner
      class?: HTMLAttributes["class"]
      tooltip?: TooltipProps
      chip?: ChipProps
    }
  >(),
  { size: "md" }
)

const chipProps = computed<ChipProps>(() => ({
  ...(props.chip as ChipProps),
  color: (props.summoner?.color ?? "diminuendo") as PingColor,
  inset: props.chip?.inset || true,
  ui: {
    ...props.chip?.ui,
    root: cn("rounded-full", props.chip?.ui?.root)
  }
}))

const delegated = reactiveOmit(
  props,
  "class",
  "puuid",
  "summoner",
  "tooltip",
  "chip"
)
</script>

<template>
  <UTooltip v-bind="props.tooltip" as-child>
    <div :class="props.class">
      <Ping v-bind="chipProps">
        <UAvatar
          v-bind="delegated"
          :src="getSummonerIcon(summoner?.icon) ?? null"
          icon="i-plug" />
      </Ping>
    </div>
  </UTooltip>
</template>
