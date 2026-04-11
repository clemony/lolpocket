<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem, UserProps } from "@nuxt/ui"
import { userMenuItems } from "~/components/user/ui/userMenuItems"
import { getSummonerIcon } from "~/domain/utils/img"

type AvatarSize = ButtonProps["size"] | UserProps["size"]

const props = withDefaults(
  defineProps<
    ButtonProps & {
      triggerStyle?: "button" | "user"
      avatarSize?: AvatarSize
      class?: HTMLAttributes["class"]
      content?: DropdownMenuItem["content"]
      user?: UserProps
    }
  >(),
  {
    variant: "solid",
    size: "sm",
    color: "base",
    avatarSize: "2xs",
    block: true,
    triggerStyle: "button"
  }
)

const delegated = reactiveOmit(props, "triggerStyle", "avatarSize", "class")

const { account } = safeObject(storeToRefs(user()))
const themePreference = useThemePreference()
const systemTheme = useSystemThemeValue()
const command = inject<Record<string, () => void>>("command")
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

const currentThemePreview = computed(
  () => 0
  //themePreference.value === "system" ? systemTheme.value : themePreference.value
)
</script>

<template>
  <LazyUDropdownMenu
    :highlight="false"
    :content="{ align: 'start', sideOffset: 6, side: props?.content?.side }"
    :items="userMenuItems(command)"
    active-variant="outline"
    :ui="{
      content: 'min-w-(--reka-dropdown-menu-trigger-width) drop-shadow-sm'
    }">
    <template #default="{ open: dropdownOpen }">
      <UButton
        v-if="props.triggerStyle === 'button'"
        v-bind="delegated"
        :color
        :variant
        :ui="{
          label: 'text-start',
          base: 'justify-between px-2 open:bg-p0! open:ring open:ring-p4/60 open:ring-offset-1 open:ring-offset-p0 open:fx-0',
          leadingIcon:
            'transition-rotate size-3.5! opacity-40 duration-200 group-open/btn:-rotate-180 group-open/btn:opacity-100 group-hover/btn:opacity-100'
        }"
        :avatar="{
          src: getSummonerIcon(account?.icon),
          size: '2xs',
          icon: 'i-plug'
        }">
        <span
          class="inline-flex grow flex-nowrap items-center gap-px text-start align-baseline">
          <span class="text-lg font-bold text-n2">
            {{ account?.name || account?.name || "Hello." }}
          </span>
          <span
            class="ml-0.5 inline-flex items-center pr-3 align-baseline text-sm font-medium text-n4">
            <Icon name="i-hash" class="inline size-3.25 text-n4" />
            {{ account?.tag }}
          </span>
        </span>
      </UButton>

      <UButton
        v-else
        :size="props.size"
        :variant
        :color
        :ui="{
          ...props.ui,
          base: cn('justify-between rounded-none! text-start', props.ui?.base),
          trailingIcon: cn('size-4 text-n5 group-hover/btn:text-pc', props)
        }"
        trailing-icon="i-up-down">
        <MatchStatus
          v-if="account && props.triggerStyle === 'user'"
          v-bind="props?.user"
          :ui="{
            root: ''
          }"
          :summoner="account"
          variant="user" />
      </UButton>
    </template>
    <!--
        :trailing-icon="
          getThemeItemValue(item) === themePreference ? 'i-tick' : ''
        " -->
    <template #theme="{ item }">
      <!--    <UBadge
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
        :label="getThemeItemLabel(item)" /> -->
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
</template>
