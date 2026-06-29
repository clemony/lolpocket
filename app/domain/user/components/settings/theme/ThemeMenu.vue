<script lang="ts" setup>
import { motion } from "motion-v"

import { accountUpdate } from "~/domain/user/composables/accountUpdate"
import { settingsUpdate } from "~/domain/user/composables/settingsUpdate"
import {
  getThemeAccentOption,
  themeAccentOptions,
} from "~/domain/user/utils/theme/themeAccent"
import { colorModes, themeIconClass } from "~/domain/user/utils/theme/themeBase"

const props = defineProps<{
  ui?: {
    root?: HTMLAttributes["class"]
    theme?: HTMLAttributes["class"]
    accent?: HTMLAttributes["class"]
    label?: HTMLAttributes["class"]
    themeItem?: HTMLAttributes["class"]
    accentItem?: HTMLAttributes["class"]
  }
}>()

const { settings: sett } = storeToRefs(user())
const settings = computed(() => safeObject(sett.value))

const themePreference = useThemePreference()
const systemTheme = useSystemThemeValue()

const themeAccent = useThemeAccentPreference()
const currentAccent = computed(() => getThemeAccentOption(themeAccent.value))
const hoveredTheme = ref<string | null>(null)

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
    label: "capitalize",
  },
}))

const themeItems = computed(() =>
  colorModes.map((theme) => ({
    value: theme,
    previewTheme: theme === "system" ? systemTheme.value : theme,
    icon: `i-${theme}`,
    label: theme,
  }))
)

const themeButtonVariants = {
  idle: {
    flexBasis: "1.5rem",
    flexGrow: 1,
    flexShrink: 1,
  },
  active: {
    flexBasis: "10.5rem",
    flexGrow: 1,
    flexShrink: 1,
  },
}

const themeLabelVariants = {
  hidden: {
    marginLeft: 0,
    maxWidth: 0,
    opacity: 0,
    display: "absolute",
  },
  visible: {
    marginLeft: "0.5rem",
    maxWidth: "5rem",
    display: "block",
    opacity: 1,
  },
}
const wrapperVariants = {
  active: {},
  idle: {},
}
const themeMotionTransition = {
  bounce: 0.18,
  duration: 0.42,
  type: "spring",
}

function isThemeActive(theme: string) {
  return (settings.value.theme ?? "system") === theme
}

function getThemeButtonState(theme: string) {
  return !hoveredTheme.value && isThemeActive(theme) ? "active" : "idle"
}

function isThemeLabelVisible(theme: string) {
  return hoveredTheme.value
    ? hoveredTheme.value === theme
    : isThemeActive(theme)
}

function clearHoveredTheme(theme: string) {
  if (hoveredTheme.value === theme) hoveredTheme.value = null
}

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
  <div :class="cn('w-full py-2', props.ui?.root)">
    <h6 :class="cn('flex h-8 items-center px-3 opacity-50', props.ui?.label)">
      Theme
    </h6>
    <div
      layout
      :class="
        cn(
          'group/theme flex w-full flex-nowrap items-center gap-2 px-3',
          props.ui?.theme
        )
      ">
      <LayoutGroup>
        <Motion
          v-for="item in themeItems"
          :key="item.value"
          as-child
          layout
          :variants="themeButtonVariants"
          initial="idle"
          :animate="getThemeButtonState(item.value)"
          while-hover="active"
          :transition="themeMotionTransition">
          <UButton
            :data-theme="item.previewTheme"
            :ui="{
              base: cn(
                'group-hover:noise x-0 relative h-9! min-w-9! origin-center overflow-hidden rounded-full bg-p0! ring-1! inset-ring-0! ring-p3 group-hover:ring-p4 hover:bg-p0!',
                {
                  ' ring-pc/50 outline-1 grow max-w-full! -outline-offset-1 outline-pc/60':
                    isThemeActive(item.value),
                },
                props.ui?.themeItem
              ),
              leadingIcon: 'absolute',
            }"
            @mouseenter="hoveredTheme = item.value"
            @mouseleave="clearHoveredTheme(item.value)"
            @click="setTheme(item.value)">
            <template #default>
              <motion.div
                :variants="wrapperVariants"
                initial="idle"
                :transition="themeMotionTransition"
                :animate="isThemeLabelVisible(item.value) ? 'active' : 'idle'"
                class="relative grid size-full place-items-center">
                <motion.div
                  :class="
                    cn('absolute flex min-w-0 items-center justify-center')
                  ">
                  <Icon
                    :name="item.icon"
                    :class="
                      cn(
                        'size-4.5 shrink-0 text-pc',
                        themeIconClass[item.value]
                      )
                    " />
                  <motion.span
                    class="block overflow-hidden text-md font-semibold whitespace-nowrap capitalize"
                    :variants="themeLabelVariants"
                    initial="hidden"
                    :animate="
                      isThemeLabelVisible(item.value) ? 'visible' : 'hidden'
                    "
                    :transition="{ duration: 0.18, ease: 'easeOut' }">
                    {{ item.label }}
                  </motion.span>
                </motion.div>
              </motion.div>
            </template>
          </UButton>
        </Motion>
      </LayoutGroup>
    </div>
    <Separator class="mt-4 mb-2" />
    <h6 :class="cn('flex h-8 items-center px-3 opacity-50', props.ui?.label)">
      Accent
    </h6>
    <UScrollArea
      :items="accentItems"
      orientation="horizontal"
      :ui="{
        root: 'w-full max-w-full scrollbar-none mask-x-from-98% mask-x-to-100% pb-1',
        item: 'last:mr-13',
        viewport: cn(
          'flex w-full flex-nowrap items-center gap-1.5 px-3 py-0.5',
          props.ui?.accent
        ),
      }">
      <template #default="{ item }">
        <UTooltip
          as-child
          disable-hoverable-content
          :text="item.label"
          arrow
          :ui="{ content: 'h-max! rounded-2xl' }"
          :content="{ side: 'top', sideOffset: 2 }">
          <div
            :style="{
              '--color-accent': `var(--color-${item.value})`,
            }">
            <UButton
              :icon="item.value === themeAccent ? 'i-tick' : ''"
              :ui="{
                base: cn(
                  'absolute aspect-square size-8 justify-center rounded-full bg-(--color-accent)! inset-shadow-xs inset-ring-pc/8 transition-transform duration-300 ease-spring hover:scale-110 hover:bg-(--color-accent)! hover:inset-ring-(--color-accent) hover:brightness-110',
                  {
                    'inset-ring-pc/60 outline outline-pc/60 -outline-offset-2':
                      item.value === themeAccent,
                  },
                  props.ui?.accentItem
                ),
                leadingIcon: 'text-pc **:stroke-[12%]!',
              }"
              @click="setAccent(item.value)" />
          </div>
          <template #content>
            <div class="inline-flex items-center gap-1">
              <UAvatar
                icon="i-riot"
                :ui="{
                  root: 'bg-n3',
                  icon: 'size-3.5 text-nc',
                }"
                :src="`/img/champion/${champIdByName(item.champion)}.webp`"
                size="2xs" />
              <div class="text-sm font-semibold text-nc">
                {{ item.label }}
              </div>
            </div>
          </template>
        </UTooltip>
      </template>
    </UScrollArea>
  </div>
</template>
