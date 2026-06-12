<script lang="ts" setup>
import type { ButtonProps, ChipProps } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"

type PingColor = NonNullable<ChipProps["color"]>

const props = withDefaults(
  defineProps<
    ButtonProps & {
      puuid?: string
      summoner?: Summoner
      component?: "user" | "button" | "avatar" | "default"
    }
  >(),
  { variant: "highlight", trailingIcon: "i-up-down", color: "primary" }
)
const pingColor = computed<PingColor>(
  () => (props.summoner?.color ?? "diminuendo") as PingColor
)
// todo match status hook this up this is a good comment
const matchStatus = shallowRef<boolean>(true)
function refreshMatchStatus() {}
</script>

<template>
  <!-- live -->

  <UButton
    v-if="summoner && component === 'user'"
    v-bind="props"
    :trailing-icon="props?.trailingIcon">
    <template #leading>
      <div class="relative translate-y-px justify-self-start">
        <UAvatar
          :size="props.avatar?.size ?? 'md'"
          :src="getSummonerIcon(summoner?.icon) ?? null"
          icon="i-plug" />
        <Ping
          inset
          :color="pingColor"
          class="right-0.5 bottom-1" />
      </div>
    </template>
    <div
      class="flex grow flex-col justify-start self-center text-start text-pc">
      <h6 :class="cn('text-lg leading-5.5 font-bold', props?.ui?.label)">
        {{ summoner?.name ?? "Not Connected" }}
      </h6>
      <p class="text-xs font-medium">
        {{ matchStatus ? "In Game" : "afk" }}
      </p>
    </div>
    <template #trailing>
      <Icon
        :name="props?.trailingIcon"
        class="size-4.5 -translate-x-2.5 opacity-50 group-open/btn:opacity-100 group-hover/btn:opacity-100" />
    </template>
  </UButton>

  <LazyUTooltip
    v-else-if="summoner?.puuid && component === 'button'"
    :content="{ side: 'bottom', align: 'start', alignOffset: 14 }"
    :text="
      matchStatus ? 'Live match details &nbsp;🡭' : 'No in-progress match found.'
    ">
    <UButton
      size="xs"
      variant="ghost"
      :to="`${buildSummonerRootPath({ puuid: summoner.puuid })}/live`"
      :ui="{
        base: 'justify-center gap-3',
        label: cn('text-xs font-medium', matchStatus ? 'text-pc' : 'text-n4')
      }"
      :label="matchStatus ? 'In Game' : 'afk'">
      <template #leading>
        <Ping :color="pingColor" />
      </template>
    </UButton>
  </LazyUTooltip>

  <span
    v-else
    class="inline-flex items-center gap-2 align-baseline text-xs font-medium">
    <Ping :color="pingColor" class="relative!" />
    {{ matchStatus ? "In Game" : "afk" }}
  </span>
</template>
