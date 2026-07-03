<script lang="ts" setup>
import { useSignInOrOut } from "~/domain/user/composables/useSignInOrOut"
import { getSummonerIcon } from "~/domain/utils/img"
import { asChipColor } from "~/types/typeAssert"

const emit = defineEmits(["update:sidebar"])
const { settings, hotkeys, account, matchStatus, summoner } =
  storeToRefs(user())
const query = defineModel<string | undefined>("query", { default: "" })
const sidebar = shallowRef<HTMLElement>()
const accountOpen = shallowRef<boolean>(false)

const accountState = useSignInOrOut(() => {
  accountOpen.value = false
})
</script>

<template>
  <div
    ref="sidebar"
    v-motion="{ layout: 'size' }"
    class="flex h-13 w-full shrink-0 justify-center gap-4 px-px">
    <UPopover
      v-model:open="accountOpen"
      :ui="{
        content:
          'w-[calc(var(--reka-popper-anchor-width)+0.7rem)] min-w-74 -translate-x-1.5 rounded-5xl px-0 pt-0 pb-2',
      }"
      :content="{
        align: 'start',
        side: 'top',
        sideOffset: 14,
      }">
      <button
        v-motion="{ layout: 'size' }"
        class="group relative grid w-full max-w-min cursor-pointer grid-flow-col grid-cols-[45px_1px] items-center gap-3 @min-[150px]:max-w-full @min-[150px]:grid-cols-[45px_1fr]">
        <Ping
          position="bottom-right"
          size="sm"
          :ui="{
            base: cn(
              '-translate-1 transition-transform duration-300 ease-spring group-hover:-translate-0.5',
              {
                'group-hover:-translate-0.5 -translate-0.5': accountOpen,
              }
            ),
          }"
          :color="asChipColor(summoner?.color ?? 'diminuendo')">
          <UAvatar
            size="4xl"
            :src="summoner?.icon ? getSummonerIcon(summoner?.icon) : undefined"
            :ui="{
              root: 'w-fit self-center',
              image: cn(
                'transition-transform duration-300 ease-spring group-hover:scale-108',
                {
                  'scale-110 group-hover:scale-110 hover:scale-110':
                    accountOpen,
                }
              ),
            }" />
        </Ping>
        <div
          :class="
            cn(
              'relative hidden h-14 w-full items-center justify-start gap-2 overflow-hidden rounded-5xl bg-p0 pr-9 pl-5 text-start ring ring-p2 transition-discrete duration-200 group-hover:ring-pc/60 @max-[139px]:-translate-x-3.5 @max-[139px]:opacity-0 @min-[140px]:flex @min-[140px]:-translate-x-0 @min-[140px]:opacity-100',
              { 'ring-pc/60': accountOpen }
            )
          ">
          <div class="min-w-0 overflow-hidden">
            <div
              class="inline-flex w-full max-w-full min-w-0 items-center gap-2 truncate align-baseline">
              <span class="text-md! font-semibold text-pc/94">
                {{ summoner?.name ?? "Not Connected" }}
              </span>
              <span
                v-if="summoner?.tag"
                class="inline-flex items-center gap-px truncate align-baseline text-xs! text-n5">
                <Icon name="i-hash" class="size-3 align-icon text-n5" />
                {{ summoner?.tag }}
              </span>
            </div>
            <!--<div class="text-start text-xs! leading-none text-n5">
              {{ matchStatus ? "In Game" : "afk" }}
            </div>-->
          </div>
          <Icon
            name="i-up-down"
            class="absolute right-3.5 size-4.5 opacity-50 group-hover:opacity-100" />
        </div>
      </button>

      <template #content>
        <div
          class="absolute -bottom-4.75 left-4.5 z-9999 grid size-8.5 -scale-y-100 place-items-center mask-b-from-57% mask-b-to-58%">
          <Icon
            name="i-fluent-caret-up-12-filled"
            class="absolute size-9.5 scale-140 text-p3/80" />
          <Icon
            name="i-fluent-caret-up-12-filled"
            class="absolute size-9.5 text-p0" />
        </div>
        <ThemeMenu
          :ui="{
            root: 'w-full max-w-full overflow-hidden',
          }" />

        <USeparator class="mt-4 mb-2" />
        <div class="w-full px-1">
          <UButton
            block
            variant="ghost"
            size="lg"
            :icon="accountState.icon"
            :ui="{ ...accountState?.ui, label: 'text-md! font-semibold' }"
            :label="accountState.label"
            @click="accountState.action">
            <template #trailing>
              <div
                class="flex items-center -space-x-px opacity-80 group-hover/btn:opacity-100">
                <UKbd
                  v-for="kbd in accountState.kbds"
                  :key="String(kbd)"
                  size="lg"
                  square
                  variant="ghost"
                  color="base"
                  :value="kbd" />
              </div>
            </template>
          </UButton>
        </div>
      </template>
    </UPopover>
  </div>
</template>
