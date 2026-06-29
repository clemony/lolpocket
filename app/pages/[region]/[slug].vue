<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import type { SpringOptions } from "motion-v"
import { motion } from "motion-v"
import { provideProfileScrollBody } from "~/domain/summoner/composables/useProfileScrollBody"
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

const { scrollY } = useScroll({
  container: body,
  offset: ["start end", "end end"],
})
const scrollProgress = useSpring(scrollY, {
  skipInitialAnimation: true,
  stiffness: 180,
  damping: 30,
  mass: 0.5,
} as SpringOptions)

const baseStyle = useTransform(scrollProgress, [0, 162], {
  padding: ["0 32px", "0 16px"],
})

const headerStyle = useTransform(scrollY, [0, 152], {
  height: [216, 62],

  outline: ["1px solid  var(--color-p2)", "1px solid var(--color-p0)"],
  backgroundColor: ["var(--color-p0)", "--alpha(var(--color-p0) / 0.94)"],
})
const imageHeight = useTransform(scrollY, [0, 162], [156, 0])

const avatarSize = ["82px", "42px"]

const avatarRootStyle = useTransform(scrollY, [0, 162], {
  width: avatarSize,
})

const avatarStyle = useTransform(scrollY, [0, 162], {
  transform: ["translateY(-22px)", "translateY(0px)"],
  height: avatarSize,
  width: avatarSize,
})

const outlineStyle = useTransform(scrollY, [0, 138, 139], {
  outline: [
    "8px solid color-mix(in oklab, var(--color-p0) 100%, transparent 0%)",
    "8px solid color-mix(in oklab, var(--color-p0) 100%, transparent 0%)",
    "8px solid color-mix(in oklab, var(--color-p0) 0%, transparent 100%)",
  ],
})

const pingSize = ["8px", "5px"]
const pingStyle = useTransform(scrollY, [0, 162], {
  // scale: ["100%", "40% !important"],
  height: pingSize,
  width: pingSize,
  outline: ["3px solid  var(--color-p0)", "2px solid var(--color-p0)"],
  transform: ["translate(-8px, -8px) ", "translate(-4px, -4px)"],
})

const headerWrapperStyle = useTransform(scrollY, [0, 162], {
  transform: ["translateY(-6px)", "translateY(0px)"],
})

const h1Style = useTransform(scrollY, [0, 162], {
  fontSize: ["3.5rem", "2rem"],
})

const badgeStyle = useTransform(scrollY, [0, 162], {
  transform: ["translateY(8px)", "translateY(3px)"],
})
</script>

<template>
  <div :style="color" class="flex flex-1">
    <NuxtLayout name="profile-layout">
      <template #header>
        <div
          class="pointer-events-none sticky inset-x-0 top-0 z-4 bg-gradient-to-b from-p1 to-transparent pt-12">
          <motion.div
            :style="headerStyle"
            class="flex h-72 shrink-0 grow flex-col gap-0 overflow-hidden rounded-6xl bg-p0 bg-blend-screen backdrop-blur-lg backdrop-contrast-104">
            <!-- BACKGROUND SPLASH IMAGE -->
            <motion.div
              :style="{ height: imageHeight }"
              class="relative grid h-50 w-full items-center overflow-hidden after:absolute after:inset-0 after:z-3 after:size-full after:rounded-t-6xl after:inset-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] after:inset-ring after:inset-ring-pc/4">
              <NuxtImg
                v-if="bg"
                :src="bg || ''"
                alt="profile-splash-bg"
                class="z-0 size-full -translate-y-15 object-cover" />
            </motion.div>

            <motion.div
              :style="baseStyle"
              class="relative z-5 grid h-[62px] w-full grid-cols-2 items-center">
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
                        :avatar="{
                          ui: {
                            root: '   size-full   justify-self-center rounded-full',
                            image:
                              ' mask-radial-from-90% mask-radial-to-91% mask-radial-at-[90%_90%] ',
                          },
                        }"
                        :summoner="summoner ?? undefined" />

                      <!-- MATCH STATUS INDICATOR -->
                      <motion.div
                        :style="pingStyle"
                        class="absolute right-0 bottom-0 grid place-items-center rounded-full bg-[#fff]">
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
                    class="inline-flex items-center gap-3 align-middle">
                    <motion.h1 :style="h1Style" class="font-display">
                      {{ summoner?.name }}
                    </motion.h1>
                    <motion.span
                      :style="badgeStyle"
                      class="inline-flex h-px items-center">
                      <UBadge
                        :label="summoner?.tag"
                        icon="i-hash"
                        :ui="{
                          base: 'gap-px rounded-lg border-0 bg-(--account-color) pl-2 align-baseline leading-none ring-0 inset-ring inset-ring-(--account-dark)/50!',
                          label:
                            'text-md leading-7 font-semibold text-white/90',
                          leadingIcon:
                            'inline size-3.25 align-icon text-white/90',
                        }" />
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              <div class="flex w-full items-center justify-center">
                <!-- ROUTE TABS -->
                <UTabs
                  v-model:model-value="activeRoute"
                  :items="routes"
                  :ui="{
                    list: 'rounded-5xl border border-(--account-dark)/6 bg-(--account-color)/30 ring-0 inset-shadow-(--account-dark)/20',
                    indicator:
                      'h-10.5 bg-(--account-color) inset-ring-(--account-dark)/20',
                    label:
                      'group-active/trigger:font-semibold group-active/trigger:text-white',
                  }"
                  size="xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </template>

      <div
        ref="body"
        class="absolute inset-0 z-auto size-full scrollbar-none overflow-y-auto pt-82 pb-12">
        <NuxtPage
          v-if="summoner"
          :champion-key
          :routes
          :summoner="summoner"
          :style="color" />

        <div class="overflow-hidden rounded-6xl drop-shadow-sm">
          <SiteFooterEnd />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
