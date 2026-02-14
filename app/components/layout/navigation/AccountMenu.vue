<script lang="ts" setup>
import type {
  ArrayOrNested,
  BadgeProps,
  ButtonProps,
  ChipProps,
  DropdownMenuItem,
} from "@nuxt/ui"
import { buildDropdown } from "~/components/layout/navigation/buildDropdown"
import { getSummonerIcon } from "~/domain/utils/img"
import { icon } from "~~/layers/ui/app/assets/icons/index.icons"

const emit = defineEmits(["openLogIn"])
const inGame = shallowRef<boolean>(true)
function checkInGame() {}

const router = useRouter()
const routes = router.getRoutes()

const modeData = useColorMode()
const { account } = storeToRefs(user())
const slugRoot = computed(() => `/summoner/${account.value?.puuid}`)
const domains = ["summoner-region-slug", "summoner-region-slug-champions"]
const sbu = useSupabaseUser()

const navDropdown = computed<ArrayOrNested<DropdownMenuItem>>(() => [])
</script>

<template>
  <UDropdownMenu
    :external-icon="true"
    :content="{ sideOffset: 4 }"
    :items="buildDropdown"
    :ui="{
      itemLeadingAvatar: 'rounded-md',
      content: 'w-64 **:disabled:opacity-100',
      item: 'px-2',
    }"
    @update:open="checkInGame()">
    <UButton
      :color="!account?.icon ? 'neutral' : 'p3'"
      :variant="!account?.icon ? 'solid' : 'ghost'"
      size="sm"
      :avatar="{
        src: getSummonerIcon(account?.icon) ?? null,
        size: 'sm',
        icon: 'i-plug',
      }"
      square
      :ui="{
        base: 'shadow-none transition-all ease-out duration-200  shrink-0 rounded-full p-0 open:btn-active  open:noise',
      }" />

    <template #user-trailing>
      <UBadge
        size="xs"
        :ui="{
          base: cn('mr-2 items-center', inGame ? '' : 'text-pc/50'),
        }"
        :color="inGame ? 'neutral' : 'p3'"
        :variant="inGame ? 'solid' : 'outline'">
        <template #leading>
          <UChip
            size="dot"
            square
            :color="inGame ? 'p0' : 'p3'"
            inset
            standalone />
        </template>
        {{ inGame ? "Live" : "afk" }}
      </UBadge>
    </template>

    <template #colormode-label>
      Theme
      <UBadge
        size="xs"
        :ui="{ label: 'capitalize text-pc' }"
        :label="modeData.value"
        :icon="`i-${modeData.value}`"
        color="p0" />
    </template>
  </UDropdownMenu>
</template>
