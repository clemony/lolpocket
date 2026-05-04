<script lang="ts" setup>
import type {
  ButtonProps,
  DropdownMenuItem,
  PopoverProps,
  UserProps
} from "@nuxt/ui"
import { userMenuItems } from "~/components/user/ui/userMenuItems"
import { asDropdownItem } from "../../layout/navigation/command/build/helpers"

type AvatarSize = ButtonProps["size"] | UserProps["size"]

const props = withDefaults(
  defineProps<
    Omit<ButtonProps, "prefetch"> & {
      avatarSize?: AvatarSize
      class?: HTMLAttributes["class"]
      content?: DropdownMenuItem["content"]
      user?: UserProps
    }
  >(),
  {
    variant: "ghost",
    activeVariant: "solid",
    activeColor: "primary",
    color: "secondary",
    size: "md",
    avatarSize: "md",
    block: true
  }
)

const delegated = reactiveOmit(props, "avatarSize", "class", "content", "user")
const subProps: { button: ButtonPropsExt; popover: PopoverProps } = {
  button: {
    ...delegated,
    size: "md",
    tabindex: -1,
    ui: {
      base: "max-h-9! h-9!",
      label: "grow text-start capitalize",
      trailingIcon:
        "transition-translate duration-200 ease-spring-soft group-active/btn:translate-x-1 group-open/popover:translate-x-1"
    }
  },
  popover: {
    mode: "hover",
    content: { side: "right", align: "start", sideOffset: 2, alignOffset: -2 },
    ui: { content: "w-64 h-max rounded-xl p-0" }
  }
}
const { close } = useApp().command
const { summoner } = safeObject(storeToRefs(user()))
const open = shallowRef<boolean>(false)
const menu = computed(() => userMenuItems(close))

const session = useSupabaseSession()
const supabaseUser = useSupabaseUser()

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
        sideOffset: 2
      }"
      :ui="{
        root: 'flex flex-col px-1',
        content:
          'w-(--reka-popover-trigger-width)! space-y-px divide-y divide-p3 shadow-none drop-shadow-sm drop-shadow-black/5'
      }">
      <UButton
        v-bind="delegated"
        size="xl"
        :active="open"
        :ui="{
          base: cn(
            'w-full justify-between px-2 inset-shadow-none!',
            props.ui?.base
          ),
          trailingIcon:
            'size-4 translate-x-px opacity-60 group-open/btn:opacity-100 group-hover/btn:opacity-100'
        }"
        trailing-icon="i-up-down">
        <MatchStatus
          v-if="summoner"
          v-bind="props?.user"
          :ui="props.user?.ui"
          :summoner="summoner"
          variant="user" />
      </UButton>
      <template #content>
        <LazyAdminTestMenu v-if="isAdmin" v-bind="subProps" />

        <div v-for="(group, i) in menu" :key="i" class="p-1">
          <LazyThemeMenu v-if="i === 1" v-bind="subProps" />
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
              )
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
                  size="lg"
                  color="base"
                  :value="String(k)" />
              </div>
            </template>
          </UButton>
        </div>
      </template>
    </LazyUPopover>
  </div>
</template>
