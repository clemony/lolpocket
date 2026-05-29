<script lang="ts" setup>
import type { AvatarProps, UserProps } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"
const {
  class: className,
  summoner,
  variant = "default",
  avatarSize = "lg",
  ui
} = defineProps<
  UserProps &
    Omit<UserProps, "size"> & {
      class?: HTMLAttributes["class"]
      puuid?: string
      summoner?: Summoner
      variant?: "default" | "user" | "button"
      avatarSize?: AvatarProps["size"]
    }
>()
// todo match status hook this up this is a good comment
const matchStatus = shallowRef<boolean>(true)
function refreshMatchStatus() {}

const userUi = computed<NonNullable<UserProps["ui"]>>(
  () =>
    mergeUi<NonNullable<UserProps["ui"]>>(
      {
        name: "text-start"
      },
      ui
    ) as NonNullable<UserProps["ui"]>
)
</script>

<template>
  <!-- live -->

  <UUser
    v-if="summoner && variant === 'user'"
    trailing-icon="up-down"
    :size
    :ui="userUi"
    :description="matchStatus ? 'In Game' : 'afk'"
    :name="summoner?.name ?? 'Not Connected'">
    <template #avatar>
      <div class="relative">
        <UAvatar
          :size="avatarSize"
          :src="getSummonerIcon(summoner?.icon) ?? null"
          icon="i-plug" />
        <Ping
          inset
          :color="summoner?.color ?? 'diminuendo'"
          class="right-0.5 bottom-1" />
      </div>
    </template>
  </UUser>

  <LazyUTooltip
    v-else-if="summoner?.puuid && variant === 'button'"
    :content="{ side: 'bottom', align: 'start', alignOffset: 14 }"
    :text="
      matchStatus ? 'Live match details &nbsp;🡭' : 'No in-progress match found.'
    ">
    <UButton
      :to="`${buildSummonerRootPath({ puuid: summoner.puuid })}/live`"
      size="sm"
      variant="ghost"
      :ui="{
        base: 'justify-center gap-3',
        label: cn('text-xs font-medium', matchStatus ? 'text-pc' : 'text-n4')
      }"
      :label="matchStatus ? 'In Game' : 'afk'">
      <template #leading>
        <Ping :color="summoner?.color ?? 'diminuendo'" />
      </template>
    </UButton>
  </LazyUTooltip>

  <span
    v-else
    class="inline-flex items-center gap-2 align-baseline text-xs font-medium">
    <Ping :color="summoner?.color ?? 'diminuendo'" class="relative!" />
    {{ matchStatus ? "In Game" : "afk" }}
  </span>
</template>
