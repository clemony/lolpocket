<script lang="ts" setup>
import { userMenuItems } from "~/components/user/ui/userMenuItems"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"

const { inbox } = storeToRefs(user())
const themePreference = useThemePreference()
const systemTheme = useSystemThemeValue()
const themeAccent = useThemeAccentPreference()
function previewTheme(mode: string) {
  return mode === "system" ? systemTheme.value : mode
}

function getThemeItemValue(item: string | { label?: string; value?: string }) {
  if (typeof item === "string") return item

  return item.value ?? item.label ?? "system"
}

function getThemeItemLabel(item: string | { label?: string; value?: string }) {
  if (typeof item === "string") return item

  return item.label ?? item.value ?? "system"
}

const currentThemePreview = computed(() =>
  themePreference.value === "system" ? systemTheme.value : themePreference.value
)

const unread = computed(() =>
  inbox.value?.messages.length
    ? inbox.value.messages.filter((m) => !m.read).length > 0
    : false
)
</script>

<template>
  <div
    class="flex h-10 w-full items-center justify-between border-b border-p3 px-3">
    <LazyUDropdownMenu
      :highlight="false"
      :content="{ align: 'start', sideOffset: 6 }"
      :items="userMenuItems"
      active-variant="outline"
      :ui="{
        content: 'min-w-[calc(var(--reka-dropdown-menu-trigger-width)+1px)]'
      }">
      <template #default="{ open: dropdownOpen }">
        <UButton
          size="sm"
          variant="ghost"
          :ui="{
            label: 'text-start',
            base: 'min-w-64 justify-between px-2 open:bg-p0! open:ring open:ring-p4/60 open:ring-offset-1 open:ring-offset-p0 open:fx-0',
            leadingIcon:
              'transition-rotate size-3.5! opacity-40 duration-200 group-open/btn:-rotate-180 group-open/btn:opacity-100 group-hover/btn:opacity-100'
          }"
          :avatar="{
            src: getSummonerIcon(user().account?.icon),
            size: '2xs',
            icon: 'i-plug'
          }">
          <span
            class="inline-flex grow flex-nowrap items-center gap-px text-start align-baseline">
            <span class="text-lg font-bold text-n2">
              {{ user().account?.name || user().account?.name || "Hello." }}
            </span>
            <span
              class="ml-0.5 inline-flex items-center pr-3 align-baseline text-sm font-medium text-n4">
              <Icon name="i-hash" class="inline size-3.25 text-n4" />
              {{ user().account?.tag }}
            </span>
          </span>
        </UButton>
      </template>

      <template #theme="{ item }">
        <UBadge
          :trailing-icon="
            getThemeItemValue(item) === themePreference ? 'i-tick' : ''
          "
          :data-theme="previewTheme(getThemeItemValue(item))"
          :ui="{
            base: cn(
              'group-hover:noise size-full justify-between bg-p0 px-3 duration-0 group-hover:border-p4 group-hover:bg-p1',
              getThemeItemValue(item) === themePreference
                ? ' border-p4 ring ring-pc/50'
                : ''
            ),
            trailingIcon: '**:stroke-[2.5]',
            label: 'font-semibold text-pc capitalize'
          }"
          :label="getThemeItemLabel(item)" />
      </template>
      <template #accent="{ item }">
        <UTooltip
          as-child
          :text="item.label"
          :ui="{ content: 'h-max!' }"
          :content="{ side: 'bottom', align: 'start', alignOffset: 14 }">
          <div class="absolute inset-0 grid place-items-center">
            <UBadge
              :data-theme="currentThemePreview"
              :data-accent="item.value"
              :icon="item.value === themeAccent ? 'i-tick' : ''"
              :ui="{
                base: cn(
                  'absolute aspect-square size-8 justify-center border-pc/8 bg-accent inset-shadow-xs duration-0 group-hover:border-accent group-hover:brightness-110',
                  {
                    'ring  ring-pc/60': item.value === themeAccent
                  },
                  twBg[item.value]
                ),
                leadingIcon: 'text-white **:stroke-[2.5]'
              }" />
          </div>

          <template #content>
            <div class="p-1">
              <div class="text-sm font-semibold text-nc">
                {{ item.label }}
              </div>
              <p class="my-1 text-xs font-normal! opacity-70">
                "{{ item.description }}"
              </p>
              <div class="mb-1 flex items-center justify-end gap-2 text-end">
                <span class="text-xs font-normal! italic opacity-70">
                  —{{ item.champion }} </span
                ><UAvatar
                  icon="i-riot"
                  :ui="{
                    icon: 'size-3.5 text-nc'
                  }"
                  :src="`/img/champion/${champIdByName(item.champion)}.webp`"
                  size="2xs" />
              </div>
            </div>
          </template>
        </UTooltip>
      </template>
    </LazyUDropdownMenu>

    <div class="flex items-center">
      <MatchStatus v-if="user()?.account" :summoner="user().account" />
      <!-- mail -->
      <LazyUTooltip
        :content="{ side: 'bottom', align: 'start', alignOffset: 14 }"
        text="Inbox &nbsp;🡭">
        <UButton
          icon="i-lucide-mail"
          size="sm"
          to="/inbox"
          variant="ghost"
          :label="
            inbox && inbox.messages.filter((m) => !m.read).length > 0
              ? (inbox?.messages.filter((m) => !m.read).length ?? 0).toString()
              : ''
          "
          :ui="{
            base: cn(
              'relative min-w-10 gap-2.5 rounded-lg',
              unread
                ? 'before:inset-0 hover:bg-p0! hover:inset-ring-0! hover:before:bg-neutral/80 before:absolute before:z-0 before:h-[84%] before:w-full before:self-center before:justify-self-center before:rounded-[0.6rem]  before:bg-neutral'
                : ''
            ),
            label: cn('z-1', unread ? 'text-pc' : 'text-pc/30'),
            leadingIcon: cn('z-1 size-4.5', unread ? 'text-nc!' : 'text-n1')
          }" />
      </LazyUTooltip>

      <!-- history -->
      <LazyUTooltip
        :content="{ side: 'bottom', align: 'start', alignOffset: 14 }"
        text="Match History &nbsp;🡭">
        <UButton
          size="sm"
          :to="buildSummonerRootPath(user().account)"
          icon="i-history"
          variant="ghost"
          :ui="{
            base: 'w-10',
            leadingIcon: 'size-4.5 -translate-y-[0.5px] text-n1'
          }" />
      </LazyUTooltip>
    </div>
  </div>
</template>
