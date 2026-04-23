<script lang="ts" setup>
import type { ButtonProps, ChipProps } from "@nuxt/ui"
import { userProfileItems } from "~/components/user/ui/userMenuItems"
import { newPocket } from "~/domain/pocket/newPocket"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import type { CommandGroup, CommandItem } from "../build/useCommandGroups"

const { backpack } = defineProps<{
  backpack: CommandGroup
}>()

const emit = defineEmits(["close"])
const { account, settings } = safeObject(storeToRefs(user()))
const menu = computed<CommandItem[]>(
  () =>
    [
      {
        label: "Profile",
        type: "label",
        value: "profile-label",
        items: userProfileItems.value
      },
      {
        label: "Backpack",
        type: "label",
        value: "backpack-label",
        items: [
          {
            label: "Pockets",
            icon: "i-folders",
            value: "backpack-pocket",
            trailingIcon: "",
            to: "/backpack/pockets"
          },
          {
            label: "New Pocket",
            icon: "i-lucide-plus",
            value: "new-pocket",
            variant: "solid",
            trailingIcon: "",
            color: "neutral",
            onSelect(event: Event) {
              newPocket()
              emit("close")
            }
          }
        ]
      },
      settings.value?.favorite_summoners
        ? {
            label: "Following",
            type: "label",
            icon: "i-heart",
            value: "following-label",
            items: settings.value?.favorite_summoners.map((puuid: string) => {
              const summoner = async () =>
                await summonerStore().resolveOrFetch(puuid)
              return {}
            })
          }
        : {}
    ].filter(Boolean) as CommandItem[]
)
const { openLogin, openSignUp } = useAuthModal()

const buttonProps: ButtonProps = {
  variant: "link",
  size: "xs",
  ui: {
    base: "pointer-events-auto normal-case! drop-shadow-lg! drop-shadow-p0",
    label:
      "text-md! drop-shadow-xs drop-shadow-p0 text-shadow-p0 text-shadow-xs"
  }
}
</script>

<template>
  <div
    class="flex max-h-180 min-h-0 w-[inherit] shrink-0 grow flex-col justify-start overflow-y-auto">
    <div
      :class="
        cn(
          'command-sidebar-hero pointer-events-none absolute top-0 left-0 z-2 flex h-50 w-full flex-col items-center gap-3 overflow-hidden py-6 pr-px',
          ''
        )
      ">
      <!-- history link and icon -->
      <div class="pointer-events-auto">
        <HoverIcon
          type="status"
          :to="buildSummonerRootPath(account)"
          :summoner="account"
          :avatar="{
            status: { size: 'lg', class: '-translate-y-3' },
            ui: { root: 'cursor-pointer size-21 rounded-full' }
          }" />
      </div>
      <div class="flex flex-col items-center">
        <!-- name and tag -->
        <h1
          class="font-serif text-2xl leading-none font-semibold! normal-case! drop-shadow-lg! drop-shadow-p0!">
          {{ account?.name || account?.username || "Hello." }}
        </h1>
        <div
          class="flex items-center justify-center gap-px text-sm font-medium normal-case!">
          <span v-if="account?.tag" class="py-1">
            <Icon name="i-hash" class="inline size-3!" />{{ account?.tag }}
          </span>

          <!-- connect -->
          <UButton
            v-else-if="account?.uuid && !account?.puuid"
            v-bind="buttonProps"
            label="Connect Riot Account"
            @click="closeFn(emit('close'), openLogin)" />

          <!-- log in-->
          <div v-else class="flex items-center justify-center">
            <UButton
              v-bind="buttonProps"
              label="Log in"
              @click="closeFn(emit('close'), openLogin)" />
            <Icon name="i-slash" class="size-4" />
            <UButton
              v-bind="buttonProps"
              label="Sign up"
              @click="closeFn(emit('close'), openSignUp)" />
          </div>
        </div>
      </div>
    </div>

    <div class="z-0 flex w-full grow flex-col items-center pt-43">
      <div class="w-full space-y-1 p-3">
        <template v-for="item in menu" :key="item.value">
          <h6
            v-if="item.type === 'label'"
            class="ml-1.25 py-1 text-sm not-first:mt-4">
            {{ item.label }}
          </h6>
          <div class="w-full space-y-1">
            <CommandButton
              v-for="im in item.items"
              :key="im.value"
              :value="im.value"
              :item="im" />
          </div>
        </template>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <AccountMenu
        trigger-style="user"
        :content="{
          side: 'top'
        }"
        :user="{
          size: 'lg',
          ui: {
            name: 'text-lg! leading-4.5 font-bold!',
            description: 'text-xs! mb-px leading-4',
            wrapper: 'justify-center align-center flex flex-col'
          }
        }"
        :ui="{
          base: 'pr-2.5',
          trailingIcon: 'size-5'
        }"
        size="xl"
        block />
    </div>
  </div>
</template>

<style scoped>
.command-sidebar-hero {
  isolation: isolate;
}

.command-sidebar-hero::before {
  position: absolute;
  inset: 0;
  content: "";
  background-image: linear-gradient(
    to bottom,
    color-mix(in oklab, var(--color-p0) 94%, var(--color-p0) 6%) 0%,
    color-mix(in oklab, var(--color-p0) 93%, var(--color-p0) 7%) 40%,
    color-mix(in oklab, var(--color-p0) 89%, transparent 11%) 68%,
    color-mix(in oklab, var(--color-p0) 72%, transparent 28%) 80%,
    color-mix(in oklab, var(--color-p0) 40%, transparent 60%) 96%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 52%,
    rgb(0 0 0 / 0.98) 66%,
    rgb(0 0 0 / 0.88) 78%,
    rgb(0 0 0 / 0.58) 90%,
    rgb(0 0 0 / 0.2) 97%,
    transparent 100%
  );
  backdrop-filter: blur(22px);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-backdrop-filter: blur(22px);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 52%,
    rgb(0 0 0 / 0.98) 66%,
    rgb(0 0 0 / 0.88) 78%,
    rgb(0 0 0 / 0.58) 90%,
    rgb(0 0 0 / 0.2) 97%,
    transparent 100%
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
}

.command-sidebar-hero::after {
  position: absolute;
  inset: 0;
  content: "";
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0.18) 0%,
    rgb(255 255 255 / 0.11) 30%,
    rgb(255 255 255 / 0.05) 58%,
    transparent 82%
  );
  mix-blend-mode: screen;
  opacity: 0.62;
  pointer-events: none;
}

.command-sidebar-hero > * {
  position: relative;
  z-index: 1;
}
</style>
