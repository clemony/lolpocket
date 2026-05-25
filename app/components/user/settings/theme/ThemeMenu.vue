<script lang="ts" setup>
import type { PopoverProps } from "@nuxt/ui"
import {
  getThemeAccentOption,
  themeAccentOptions
} from "~/components/user/settings/theme/themeAccent"
import {
  colorModeIconClass,
  colorModes
} from "~/components/user/settings/theme/themeBase"
import { accountUpdate } from "~/composables/account/accountUpdate"
import { settingsUpdate } from "~/composables/account/settingsUpdate"

const props = defineProps<{
  button: ButtonPropsExt
  popover: PopoverProps
}>()

const { account: acc, settings: sett } = storeToRefs(user())
const account = computed(() => safeObject(acc.value))
const settings = computed(() => safeObject(sett.value))

const themePreference = useThemePreference()
const systemTheme = useSystemThemeValue()

const themeAccent = useThemeAccentPreference()
const currentAccent = computed(() => getThemeAccentOption(themeAccent.value))

const accentItems = themeAccentOptions.map((accent) => ({
  value: accent.value,
  label: accent.label,
  champion: accent.champion,
  description: accent.description,
  ui: {
    base: cn(
      "relative h-10 rounded-xl p-0!",
      accent.value === currentAccent.value.value ? "pointer-events-none" : ""
    ),
    label: "capitalize"
  }
}))

const themeItems = colorModes.map((theme) => ({
  value: theme === "system" ? systemTheme.value : theme,
  icon: `i-${theme}`,
  label: theme,
  ui: {
    base: cn(
      "h-14 rounded-xl p-1",
      theme === account.value.color ? "pointer-events-none" : ""
    ),
    leadingIcon: colorModeIconClass[theme],
    label: "capitalize"
  }
}))

const open = shallowRef<boolean>(false)

function setTheme(theme?: string) {
  settingsUpdate(
    { theme: theme || undefined },
    { message: "Your theme has been updated!" }
  )
}
function setAccent(accent?: string) {
  accountUpdate(
    { color: accent || undefined },
    { message: "Your accent color has been updated and is ready to show off!" }
  )
}
</script>

<template>
  <UPopover
    v-model:open="open"
    v-bind="props.popover"
    :ui="{ content: cn(props.popover?.ui?.content, 'pt-2 pb-3') }">
    <UButton
      v-bind="props.button"
      :active="open"
      label="Theme"
      :ui="{
        ...props.button?.ui,
        base: cn('order-2', props.button?.ui?.base)
      }"
      trailing-icon="i-right"
      icon="i-swatch">
      <!--  -->
    </UButton>
    <template #content>
      <h6 class="flex h-8 items-center px-3 opacity-50">Theme</h6>
      <div class="grid w-full grid-cols-2 place-items-center gap-2 px-3">
        <!--
            -->
        <UButton
          v-for="(item, i) in themeItems"
          :key="i"
          :trailing-icon="item.value === settings.theme ? 'i-check-fill' : ''"
          :data-theme="item.value"
          :ui="{
            base: cn(
              'group-hover:noise h-12! w-28 justify-between bg-p0 px-3 inset-ring-p3 duration-0 group-hover:bg-p1 group-hover:inset-ring-p4',
              item.value === settings.theme ? ' inset-ring-pc/50' : ''
            ),
            trailingIcon: 'text-pc! opacity-90!',
            label: 'font-semibold text-pc capitalize'
          }"
          :label="item.label"
          @click="setTheme(item.value)" />
      </div>
      <Separator class="mt-4 mb-2" />
      <h6 class="mb-1 flex h-8 items-center px-3 opacity-50">Accent</h6>
      <div class="grid w-full grid-cols-5 place-items-center gap-1.5 px-3">
        <UTooltip
          v-for="(item, i) in accentItems"
          :key="i"
          as-child
          disable-hoverable-content
          :text="item.label"
          :ui="{ content: 'h-max!' }"
          :content="{ side: 'bottom', align: 'start', alignOffset: 14 }">
          <UButton
            colo="transparent"
            :data-theme="themePreference ?? 'system'"
            :data-accent="item.value"
            :icon="item.value === themeAccent ? 'i-tick' : ''"
            :ui="{
              base: cn(
                'hover:bg-unset absolute aspect-square size-8 justify-center bg-accent inset-shadow-xs inset-ring-pc/8 duration-0 group-hover:inset-ring-accent group-hover:brightness-110',
                {
                  'inset-ring-pc/60': item.value === themeAccent
                },
                twBg[item.value]
              ),
              leadingIcon: 'text-white **:stroke-[2.5]'
            }"
            @click="setAccent(item.value)" />
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
                  —{{ item.champion }}
                </span>
                <UAvatar
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
      </div>
    </template>
  </UPopover>
</template>
