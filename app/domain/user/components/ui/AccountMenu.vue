<script lang="ts" setup>
import type {
  ButtonProps,
  DropdownMenuItem,
  PopoverProps,
  UserProps,
} from "@nuxt/ui"
import { userMenuItems } from "~/domain/user/utils/user/userMenuItems"
import { asDropdownItem } from "~/types/typeAssert"

type AvatarSize = ButtonProps["size"] | UserProps["size"]

const props = withDefaults(
  defineProps<
    Omit<ButtonProps, "prefetch"> & {
      class?: HTMLAttributes["class"]
      content?: DropdownMenuItem["content"]
    }
  >(),
  {
    variant: "ghost",
    activeVariant: "solid",
    activeColor: "primary",
    color: "secondary",
    size: "md",
    block: true,
  }
)

const delegated = reactiveOmit(props, "class", "content", "color")
const subProps: { button: ButtonPropsExt; popover: PopoverProps } = {
  button: {
    ...delegated,
    size: "md",
    tabindex: -1,
    ui: {
      base: "max-h-9! h-9!",
      label: "grow text-start capitalize",
      trailingIcon:
        "transition-translate duration-200 ease-spring-soft group-active/btn:translate-x-1 group-open/popover:translate-x-1",
    },
  },
  popover: {
    mode: "hover",
    content: { side: "right", align: "start", sideOffset: 2, alignOffset: -2 },
    ui: { content: "w-64 h-max rounded-xl p-0" },
  },
}

const { summoner } = safeObject(storeToRefs(user()))
const open = shallowRef<boolean>(false)
const menu = computed(() => userMenuItems(close))

const session = useSupabaseSession()
const supabaseUser = useSupabaseUser()

const themeOpen = shallowRef<boolean>(false)

const isAdmin = computed(() => {
  const token = !!session.value?.access_token
  return token && supabaseUser.value?.app_metadata?.user_role === "admin"
})
</script>

<template>
  <div class="sticky bottom-0 left-0 h-max w-full p-1">
    <LazyUPopover
      v-model:open="open"
      :content="{
        side: 'top',
        sideOffset: 2,
      }"
      :ui="{
        root: 'flex flex-col px-1',
        content:
          'w-(--reka-popover-trigger-width)! space-y-px divide-y divide-p3 shadow-none drop-shadow-sm drop-shadow-black/5',
      }">
      <MatchStatus
        v-if="summoner"
        v-bind="delegated"
        :active="open"
        :ui="{
          ...delegated.ui,
        }"
        trailing-icon="i-up-down"
        :summoner="summoner"
        component="user" />

      <template #content>
        <DevOnly><LazyAdminTestMenu v-bind="subProps" /></DevOnly>

        <div v-for="(group, i) in menu" :key="i" class="p-1">
          <UPopover
            v-model:open="themeOpen"
            v-bind="subProps.popover"
            :ui="{ content: cn(subProps.popover?.ui?.content, 'pt-2 pb-3') }">
            <UButton
              v-bind="subProps.button"
              :active="open"
              label="Theme"
              :ui="{
                ...subProps.button?.ui,
                base: cn('order-2', subProps.button?.ui?.base),
              }"
              trailing-icon="i-right"
              icon="i-swatch">
              <!--  -->
            </UButton>
            <template #content>
              <LazyThemeMenu v-if="i === 1" />
            </template>
          </UPopover>
          <UButton
            v-for="item in group"
            :key="item.label"
            v-bind="{ ...subProps.button, ...item }"
            color="secondary"
            :ui="{
              ...subProps.button.ui,
              leadingIcon: cn(
                asDropdownItem(item)?.ui?.itemLeadingIcon,
                item?.ui?.leadingIcon
              ),
            }"
            :icon="item.icon"
            :label="item.label"
            :to="item?.to"
            @click="item.onClick">
            <template v-if="asDropdownItem(item)?.kbds" #trailing>
              <div class="flex translate-x-0.5 items-center gap-0.5">
                <UKbd
                  v-for="k in asDropdownItem(item)?.kbds"
                  :key="String(k)"
                  square
                  size="md"
                  color="base"
                  variant="outline"
                  :value="String(k)" />
              </div>
            </template>
          </UButton>
        </div>
      </template>
    </LazyUPopover>
  </div>
</template>
