<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import type { SpringOptions } from "motion-v"
import { motion } from "motion-v"
import { useFollowSummoner } from "~/domain/summoner/composables/useFollowSummoner"
import {
  provideProfileScrollBody,
  useProfileScroll,
} from "~/domain/summoner/composables/useProfileScroll"
import { buildSummonerProfileRoutes } from "~/domain/summoner/utils/profileRoutes"

definePageMeta({
  search: false,
  layout: false,
  name: "summoner-profile",
  middleware: "resolve-from-route",
})

const query = shallowRef<string | undefined>(undefined)
const route = useRoute("summoner-profile")
const activeRoute = shallowRef<string>(String(route.name))

watch(
  () => activeRoute.value,
  (v) => {
    navigateTo({ name: v })
  }
)
onMounted(() => {
  activeRoute.value = String(route.name)
})
const championKey = computed(() => route.params?.championKey)

const routes = computed<TabsItem[]>(() => buildSummonerProfileRoutes())
const session = sSession()
const { summoner, account } = storeToRefs(session)

const color = computed(() => ({
  "--account-color": `var(--color-${String(account.value?.color ?? "p1")})`,
  "--account-dark": `color-mix(in oklab, var(--account-color) 100%, black 10%)`,
}))

const bg = computed(() => sSession().splash || sData().mostPlayed.splash)

const body = useTemplateRef<HTMLElement>("body")
provideProfileScrollBody(body)

const {
  headerStyle,
  baseStyle,
  avatarRootStyle,
  avatarStyle,
  outlineStyle,
  imageHeight,
  pingStyle,
  headerWrapperStyle,
  h1Style,
  badgeStyle,
} = useProfileScroll(body)

const { isFavorite, isSelf, tooltipText, update } = useFollowSummoner(summoner)
</script>

<template>
  <div :style="color" class="mx-auto flex flex-1">
    <NuxtLayout name="profile-layout">
      <template #header>
        <div
          class="pointer-events-none sticky inset-x-0 top-0 z-15 mx-auto max-w-[1100px] bg-gradient-to-b from-p1 to-transparent pt-12">
          <motion.div
            :style="headerStyle"
            class="pointer-events-none flex h-72 shrink-0 grow flex-col gap-0 overflow-hidden rounded-6xl bg-p0 bg-blend-screen backdrop-blur-lg backdrop-contrast-104">
            <!-- BACKGROUND SPLASH IMAGE -->
            <motion.div
              :style="{ height: imageHeight }"
              class="pointer-events-none! relative grid h-50 w-full items-center overflow-hidden after:absolute after:inset-0 after:z-3 after:size-full after:rounded-t-6xl after:inset-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] after:inset-ring after:inset-ring-pc/4">
              <NuxtImg
                v-if="bg"
                :width="1100"
                :preload="{ fetchPriority: 'high' }"
                format="webp"
                :height="650"
                :src="bg || ''"
                alt="profile-splash-bg"
                class="z-0 size-full -translate-y-15 object-cover" />
            </motion.div>

            <motion.div
              :style="baseStyle"
              class="pointer-events-auto relative z-5 grid h-[62px] w-full grid-cols-2 items-center">
              <div class="flex h-full items-center gap-5">
                <motion.div
                  :style="avatarRootStyle"
                  class="relative grid h-px place-items-center">
                  <motion.div
                    :style="{ ...avatarStyle, ...outlineStyle }"
                    class="absolute size-full rounded-full">
                    <div v-if="summoner" class="relative">
                      <!-- AVATAR -->
                      <HoverIcon
                        :tooltip="{ disabled: true }"
                        type="summoner"
                        :ui="{
                          root: 'size-full',
                          image:
                            'mask-radial-from-90% mask-radial-to-91% mask-radial-at-[90%_90%]',
                        }"
                        :summoner="summoner ?? undefined" />

                      <!-- MATCH STATUS INDICATOR -->
                      <motion.div
                        :style="pingStyle"
                        class="absolute right-0 bottom-0 z-5 grid place-items-center rounded-full bg-[#fff]">
                        <div
                          class="absolute z-1 status size-full animate-ping rounded-full bg-(--account-color) saturate-110" />
                        <div
                          class="absolute z-2 status size-full rounded-full bg-(--account-color) saturate-110" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
                <div class="grid items-end">
                  <!-- SUMMONER NAME -->
                  <motion.div
                    :style="headerWrapperStyle"
                    class="inline-flex items-end gap-3 align-baseline">
                    <motion.h1 :style="h1Style" class="font-display">
                      {{ summoner?.name }}
                    </motion.h1>
                    <motion.span
                      :style="badgeStyle"
                      class="inline-flex items-center gap-px leading-14 font-medium">
                      <Icon name="i-hash" class="size-3.5" />
                      {{ summoner?.tag }}
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              <div
                class="pointer-evens-auto! flex w-full items-center justify-end gap-4">
                <Tooltip :content="{ side: 'bottom' }" :text="tooltipText">
                  <HeartButton
                    v-if="summoner"
                    trailing-icon="i-heart-fill"
                    size="lg"
                    :ui="{
                      base: 'relative grid w-15 place-items-center rounded-5xl! drop-shadow-none fx-0!',
                      leadingIcon: cn(
                        'absolute size-4.5! group-not-checked/btn:text-pc/60! group-not-checked/btn:group-hover/btn:text-pc!'
                      ),
                    }"
                    variant="outline"
                    :tooltip-text="tooltipText"
                    :model-value="isFavorite"
                    @update:model-value="update($event)" />
                </Tooltip>
                <!-- UPDATE SUMMONER -->
                <UpdateSummoner>
                  <UButton
                    v-if="summoner"
                    icon="i-bytesize-reload"
                    variant="outline"
                    size="lg"
                    :ui="{
                      base: 'relative w-15 overflow-hidden! rounded-5xl! px-5! drop-shadow-none fx-0!',
                      leadingIcon:
                        'size-4.5 **:stroke-[10%] group-not-checked/btn:text-pc/60! group-hover/btn:text-pc!',
                    }" />
                </UpdateSummoner>
                <!-- ROUTE TABS -->
                <UTabs
                  v-model:model-value="activeRoute"
                  :items="routes"
                  :ui="{
                    list: 'bg-transparent inset-shadow-none inset-ring-0',
                    trigger: 'active:pointer-events-none',
                    indicator: 'h-12 rounded-5xl',
                    label: cn(
                      'shiny-tab-label bg-clip-text group-hover/trigger:font-semibold group-active/trigger:font-semibold group-active/trigger:text-pc!'
                      //default
                    ),
                  }"
                  size="xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </template>

      <div
        ref="body"
        class="absolute inset-0 z-auto flex size-full scrollbar-none flex-col items-center gap-14 overflow-y-auto pt-82 pr-12 *:z-0">
        <NuxtPage
          v-if="summoner"
          :champion-key
          :routes
          :summoner="summoner"
          :style="color" />

        <div class="mx-auto max-w-[1100px] pb-12">
          <SiteFooterEnd class="overflow-hidden rounded-6xl drop-shadow-sm" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
