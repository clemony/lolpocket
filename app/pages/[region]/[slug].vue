<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import type { SpringOptions } from "motion-v"
import { motion } from "motion-v"
import { buildSummonerProfileRoutes } from "~/domain/summoner/utils/profileRoutes"

definePageMeta({
  search: false,
  layout: false,
  name: "summoner-profile",
  middleware: "resolve-from-route",
})

const query = shallowRef<string | undefined>(undefined)
const route = useRoute("summoner-profile")
const championKey = computed(() => route.params?.championKey)

const router = useRouter()

const routes = computed<TabsItem[]>(() =>
  buildSummonerProfileRoutes(router.getRoutes())
)
const session = sSession()
const { summoner, account } = storeToRefs(session)

const color = computed(() => ({
  "--account-color": `var(--color-${String(account.value?.color ?? "p1")})`,
  "--account-dark": `color-mix(in oklab, var(--account-color) 100%, black 10%)`,
}))

const bg = computed(() => sSession().splash || sData().mostPlayed.splash)

const body = useTemplateRef<HTMLElement>("body")

const { scrollY } = useScroll({
  container: body,
  offset: ["start end", "end end"],
})
const scrollProgress = useSpring(scrollY, {
  skipInitialAnimation: true,
} as SpringOptions)

const baseStyle = useTransform(scrollY, [0, 162], {
  padding: ["0 32px", "0 16px"],
})

const headerStyle = useTransform(scrollY, [0, 162], {
  height: [216, 62],
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
const pingStyle = useTransform(scrollY, [0, 162], {
  scale: ["100%", "60%"],
  transform: ["translate(-6px, -12px)", "translate(-3px)"],
})

const headerWrapperStyle = useTransform(scrollY, [0, 162], {
  transform: ["translateY(-6px)", "translateY(0px)"],
})

const h1Style = useTransform(scrollY, [0, 162], {
  fontSize: ["3.5rem", "2.6rem"],
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
            class="flex h-72 shrink-0 grow flex-col gap-0 overflow-hidden rounded-6xl bg-p0 bg-blend-screen ring inset-ring ring-p3/50 inset-ring-p0/60 backdrop-blur-lg backdrop-contrast-104">
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
              class="relative z-5 grid h-[62px] w-full grid-cols-3 items-center">
              <div class="flex h-full items-center gap-5">
                <motion.div
                  :style="avatarRootStyle"
                  class="relative grid h-px place-items-center">
                  <motion.div
                    :style="{ ...avatarStyle, ...outlineStyle }"
                    class="absolute size-full rounded-full">
                    <Ping
                      v-if="summoner"
                      size="xl"
                      :style="pingStyle"
                      position="bottom-right"
                      :ui="{ root: 'size-full', base: 'ring-0' }">
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
                    </Ping>
                  </motion.div>
                </motion.div>
                <div class="grid items-end">
                  <motion.div
                    :style="headerWrapperStyle"
                    class="inline-flex items-center gap-3 align-middle">
                    <motion.h1 :style="h1Style" class="font-serif">
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
            </motion.div>
          </motion.div>
        </div>
      </template>

      <motion.div
        ref="body"
        class="absolute inset-0 z-auto size-full overflow-y-auto px-12 pt-82">
        <NuxtPage
          v-if="summoner"
          :champion-key
          :routes
          :summoner="summoner"
          :style="color" />

        <div class="mt-12 overflow-hidden rounded-6xl drop-shadow-sm">
          <SiteFooter />
        </div>
      </motion.div>
    </NuxtLayout>
  </div>
</template>
