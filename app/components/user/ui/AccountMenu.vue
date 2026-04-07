<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem, UserProps } from "@nuxt/ui"
import { userMenuItems } from "~/components/user/ui/userMenuItems"
import { getSummonerIcon } from "~/domain/utils/img"
import type { CommandItem } from "../../layout/navigation/command/build/useCommandGroups"

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
    variant: "ghost",
    activeVariant: "outline",
    size: "sm",
    avatarSize: "2xs",
    block: true,
    triggerStyle: "button"
  }
)

const delegated = reactiveOmit(props, "triggerStyle", "avatarSize", "class")

const { account } = safeObject(storeToRefs(user()))
const userButtonUi = computed<NonNullable<ButtonProps["ui"]>>(
  () =>
    mergeUi<NonNullable<ButtonProps["ui"]>>(
      {
        base: ""
      },
      props.ui
    ) as NonNullable<ButtonProps["ui"]>
)
</script>

<template>
  <LazyUCollapsible
    :ui="{
      root: 'flex flex-col p-0',
      content: 'order-first border-y border-y-p3/80 px-3 py-1'
    }">
    <UButton
      :size="props.size"
      :variant="props.variant"
      :active-variant="props.activeVariant"
      :color="props.color"
      :ui="{
        base: 'sticky bottom-0 left-0 order-last w-full justify-between border-0! bg-transparent! px-3 shadow-none ring-0! inset-ring-0! ring-offset-0! drop-shadow-none fx-0',
        trailingIcon:
          'transition-rotate size-4 opacity-60 duration-200 **:stroke-[2.4] group-open/btn:rotate-90 group-open/btn:opacity-100 group-hover/btn:opacity-100'
      }"
      :user="{
        size: 'xl',
        ui: {
          name: 'text-sm!',
          root: 'gap-2.5 size-full translate-x-2.5! grow'
        }
      }"
      trailing-icon="i-left">
      <MatchStatus
        v-if="account && props.triggerStyle === 'user'"
        v-bind="props?.user"
        :ui="props.user?.ui"
        :summoner="account"
        variant="user" />
    </UButton>
    <template #content>
      <ThemeMenu />
    </template>
  </LazyUCollapsible>
</template>
