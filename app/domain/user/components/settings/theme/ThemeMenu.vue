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
  champion: accent?.champion,
  description: accent.description,
  onClick(e: MouseEvent): void | Promise<void> {
    e.preventDefault()
    e.stopPropagation()
    accountUpdate(
      { color: accent.value || undefined },
      {
        message: "Your accent color has been updated and is ready to show off!",
      }
    )
  },
  ui: {
    base: cn(
      "relative h-10 rounded-xl bg-(--color-accent)! p-0! inset-shadow-xs inset-ring-pc/8 hover:bg-(--color-accent)! hover:brightness-110",
      accent.value === currentAccent.value?.value
        ? "pointer-events-none inset-ring-pc/60 outline -outline-offset-2 outline-pc/60"
        : ""
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

const container = useTemplateRef<HTMLElement>("container")
const { width } = useElementBounding(container)
const open = shallowRef<boolean>(false)

const accentItemWidth = 30
const accentGap = 6
const accentInlinePadding = 16
const moreTriggerWidth = 30

const visibleAccentCount = computed(() => {
  if (!width.value) return accentItems.length

  const allItemsWidth =
    accentItems.length * accentItemWidth +
    (accentItems.length - 1) * accentGap +
    accentInlinePadding

  if (width.value >= allItemsWidth) return accentItems.length

  const reservedOverflowWidth = moreTriggerWidth + accentGap
  const availableWidth = Math.max(
    0,
    width.value - accentInlinePadding - reservedOverflowWidth
  )
  const itemSlotWidth = accentItemWidth + accentGap

  return Math.max(
    1,
    Math.min(
      accentItems.length - 1,
      Math.floor((availableWidth + accentGap) / itemSlotWidth)
    )
  )
})

const accents = computed(() => {
  const triggerCount = visibleAccentCount.value
  const hasOverflow = triggerCount < accentItems.length

  return {
    trigger: [
      ...accentItems.slice(0, triggerCount),
      ...(hasOverflow
        ? [
            {
              value: "empty",
              label: undefined,
              ui: {
                base: "opacity-0 pointer-events-none! min-w-0! shrink! invisible grow",
              },
            },
            {
              value: "more",
              icon: open.value ? "i-down" : "i-more",
              label: "More",
              onClick(e: MouseEvent) {
                e.preventDefault()
                e.stopPropagation()
                open.value = !open.value
              },
              ui: {
                base: "-ml-2 inset-ring-0 shadow-none! fx-0! inset-shadow-none! drop-shadow-none! bg-transparent",
              },
            },
          ]
        : []),
    ],
    content: hasOverflow ? accentItems.slice(triggerCount) : [],
  }
})

watch(
  () => visibleAccentCount.value === accentItems.length,
  (allAccentsFit) => {
    if (allAccentsFit) {
      open.value = false
    }
  }
)
</script>

<template>
  <div ref="container" :class="cn('w-full py-2', props.ui?.root)">
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
    <div class="w-full pr-2 pl-2.5">
      <h6 :class="cn('flex h-8 items-center opacity-50', props.ui?.label)">
        Accent
      </h6>
      <UCollapsible
        v-model:open="open"
        :ui="{
          root: 'w-full',
          content: cn(
            'flex items-center gap-1.5 px-px py-0.5',
            props.ui?.accent
          ),
        }">
        <div
          class="pointer-events-none flex w-full max-w-full items-center gap-1.5 overflow-hidden px-px py-0.5 **:pointer-events-auto">
          <AccentIndicator
            v-for="item in accents.trigger"
            :key="item.value"
            :item="item" />
        </div>

        <template #content>
          <AccentIndicator
            v-for="item in accents.content"
            :key="item.value"
            :open
            :item="item" />
        </template>
      </UCollapsible>
    </div>
  </div>
</template>
