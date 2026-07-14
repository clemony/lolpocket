<script lang="ts" setup>
import { motion } from "motion-v"

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
    themeAccent.value = accent.value
  },
  ui: {
    base: cn(
      "relative h-10 rounded-xl bg-(--color-accent)! p-0! inset-shadow-xs inset-ring-pc/8 hover:bg-(--color-accent)! hover:brightness-110",
      accent.value === currentAccent.value?.value ? "pointer-events-none" : ""
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
  return themePreference.value === theme
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
  themePreference.value = theme || "system"
}

const container = useTemplateRef<HTMLElement>("container")
const { width } = useElementBounding(container)
const open = shallowRef<boolean>(false)

const accents = computed(() => {
  return {
    trigger: [
      ...accentItems.slice(0, 5),

      {
        value: "empty",
        label: undefined,
        ui: {
          base: "opacity-0 pointer-events-none! min-w-0! shrink! invisible grow",
        },
      },
    ],
    content: accentItems.slice(5),
  }
})

function onClick(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  open.value = !open.value
}
</script>

<template>
  <div ref="container" :class="cn('w-full py-3', props.ui?.root)">
    <h6
      :class="
        cn('flex h-8 items-center px-4 pb-2 opacity-50', props.ui?.label)
      ">
      Theme
    </h6>
    <div
      layout
      :class="
        cn(
          'group/theme flex w-full flex-nowrap items-center gap-2 px-4',
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
                'group-hover:noise relative h-8.5! min-w-8.5! origin-center overflow-hidden rounded-full bg-p0! px-3 ring-1! inset-ring-0! ring-p3 group-hover:ring-p4 hover:bg-p0! light:ring-p4/80',

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
                :class="
                  cn(
                    'relative grid size-full place-items-center',
                    isThemeLabelVisible(item.value)
                      ? 'grow justify-start! text-start'
                      : ''
                  )
                ">
                <motion.div
                  :class="
                    cn(
                      'absolute flex min-w-0 items-center justify-center',
                      isThemeLabelVisible(item.value)
                        ? 'justify-self-start! text-start'
                        : 'justify-self-center!'
                    )
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
    <div class="w-full pr-3 pl-4">
      <h6 :class="cn('flex h-8 items-center opacity-50', props.ui?.label)">
        Accent
      </h6>
      <UCollapsible
        v-model:open="open"
        :ui="{
          root: 'w-full',
          content: cn(
            'flex w-full items-center gap-1.5 px-px py-0.5',
            props.ui?.accent
          ),
        }">
        <div
          class="pointer-events-none flex w-full max-w-full items-center gap-1.5 overflow-hidden px-px py-0.5 **:pointer-events-auto">
          <AccentIndicator
            v-for="item in accents.trigger"
            :key="item.value"
            :item="item" />

          <UButton
            :icon="open ? 'i-down' : 'i-more'"
            aria-label="More"
            :ui="{
              base: 'z-5 -ml-2 size-9! rounded-full bg-transparent shadow-none! inset-shadow-none! inset-ring-0 drop-shadow-none! fx-0!',
            }"
            @click="onClick($event)" />
        </div>

        <template #content>
          <div class="grid w-max grid-cols-5 grid-rows-2 gap-1.5">
            <AccentIndicator
              v-for="item in accents.content"
              :key="item.value"
              :open
              :item="item" />
          </div>
        </template>
      </UCollapsible>
    </div>
  </div>
</template>
