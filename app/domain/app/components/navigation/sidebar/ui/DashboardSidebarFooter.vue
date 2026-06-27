<script lang="ts" setup>
import { PopoverArrow } from "reka-ui"
import { getSummonerIcon } from "~/domain/utils/img"
import { asChipColor } from "~/types/typeAssert"

const emit = defineEmits(["update:sidebar"])
const { settings, hotkeys, account, matchStatus, summoner } =
  storeToRefs(user())
const query = defineModel<string | undefined>("query", { default: "" })
const sidebar = shallowRef<HTMLElement>()
const accountOpen = shallowRef<boolean>(false)
</script>

<template>
  <div ref="sidebar" class="flex grow gap-4 px-px">
    <UPopover
      v-model:open="accountOpen"
      :ui="{
        content:
          'w-[calc(var(--reka-popper-anchor-width)+0.7rem)] min-w-54 -translate-x-1.5 rounded-4xl p-0',
      }"
      :content="{
        align: 'start',
        side: 'top',
        sideOffset: 12,
      }">
      <button
        class="group relative flex grow cursor-pointer flex-nowrap items-center justify-start gap-3">
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
              'flex h-14 w-full grow items-center gap-2 rounded-5xl bg-p0 pr-3.5 pl-5 ring ring-p2 group-hover:ring-pc/60',
              { 'ring-pc/60': accountOpen }
            )
          ">
          <div class="flex grow flex-col">
            <div class="inline-flex grow items-center gap-2 align-baseline">
              <h6 class="text-md! font-semibold text-pc/94">
                {{ summoner?.name ?? "Not Connected" }}
              </h6>
              <span
                v-if="summoner?.tag"
                class="inline-flex items-center gap-px align-baseline text-xs! text-n5">
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
            class="size-4.5 opacity-50 group-hover:opacity-100" />
        </div>
      </button>

      <template #content>
        <div
          class="absolute -bottom-4.75 left-3.5 z-9999 grid size-8.5 -scale-y-100 place-items-center mask-b-from-57% mask-b-to-58% drop-shadow-md">
          <Icon
            name="caret-up"
            class="absolute size-8.5 scale-140 text-p4/30" />
          <Icon name="caret-up" class="absolute size-8.5 text-p0" />
        </div>

        <ThemeMenu
          :ui="{
            root: 'w-full max-w-full overflow-hidden',
            themeItem: '',
          }" />
      </template>
    </UPopover>
  </div>
</template>
