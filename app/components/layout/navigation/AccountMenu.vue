<script lang="ts" setup>
import type {
  ArrayOrNested,
  BadgeProps,
  ButtonProps,
  ChipProps,
  DropdownMenuItem,
} from "@nuxt/ui"
import { buildDropdown } from "~/components/layout/navigation/buildDropdown"

const emit = defineEmits(["openLogIn"])
const inGame = shallowRef<boolean>(true)
function checkInGame() {}

const router = useRouter()
const routes = router.getRoutes()

const mode = useColorMode()
const { account } = storeToRefs(as())
const slugRoot = computed(() => `/summoner/${account.value?.puuid}`)
const domains = ["summoner-region-slug", "summoner-region-slug-champions"]
const user = useSupabaseUser()

const navDropdown = computed<ArrayOrNested<DropdownMenuItem>>(() => [])
</script>

<template>
  <UDropdownMenu
    arrow
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
      :color="(!account?.icon ? 'neutral' : 'p3') as ButtonProps['color']"
      :variant="!account?.icon ? 'solid' : 'ghost'"
      size="md"
      square
      :ui="{
        base: 'shadow-none transition-all ease-out duration-200 size-9.5 p-0.5 shrink-0 rounded-full open:btn-active  open:noise',
        leadingIcon: cn('', {
          hidden: account?.icon,
        }),
      }">
      <Icon
        v-if="!account?.icon"
        name="i-plug"
        :class="
          cn(
            'size-5 text-nc duration-200 **:stroke-[1.8]',
            !account?.icon ? 'animate-in fade-in' : 'animate-out fade-out'
          )
        " />
      <SummonerIcon
        v-else
        :class="
          cn(
            'size-full rounded-full shadow-xs dss',
            account.icon ? 'animate-in fade-in' : 'animate-out fade-out'
          )
        " />
    </UButton>

    <template #live-trailing>
      <UBadge
        size="xs"
        :ui="{
          base: cn('mr-2 items-center', inGame ? '' : 'text-pc/50'),
        }"
        :color="(inGame ? 'neutral' : 'p3') as BadgeProps['color']"
        :variant="inGame ? 'solid' : 'outline'">
        <template #leading>
          <UChip
            :size="'dot' as ChipProps['size']"
            square
            :color="(inGame ? 'p0' : 'p3') as ChipProps['color']"
            inset
            standalone />
        </template>
        {{ inGame ? "Live" : "afk" }}
      </UBadge>
    </template>

    <!--     <template #theme="{ item }">
      <UColorModeButton block :label="item.label" />
    </template> -->
    <template #colormode>
      Theme
      <UBadge
        size="xs"
        :ui="{ label: 'capitalize' }"
        :label="mode.value"
        :icon="`i-${mode.value}`"
        :color="'p0' as BadgeProps['color']" />
    </template>
  </UDropdownMenu>
</template>
