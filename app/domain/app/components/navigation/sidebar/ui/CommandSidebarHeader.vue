<script lang="ts" setup>
import type { ButtonProps, ChipProps } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { useAuthModal } from "~/domain/user/composables/useAuthModal"
const { color = "base" } = defineProps<{
  color?: "base" | "primary"
}>()
const emit = defineEmits(["update:component", "close"])
const { account, summoner } = safeObject(storeToRefs(user()))
const { openLogin, openSignUp } = useAuthModal()
type PingColor = NonNullable<ChipProps["color"]>

const colorVar = computed(() => ({
  base: "var(--color-p0)",
  primary: "var(--color-p1)",
})).value[color]
const pingColor = computed<PingColor>(
  () => (summoner.value?.color ?? "insp") as PingColor
)

const buttonProps: ButtonProps = {
  variant: "link",
  size: "xs",
  ui: {
    base: cn(
      "pointer-events-auto normal-case! drop-shadow-lg!",
      twDropShadow[color]
    ),
    label: cn(
      "text-md! drop-shadow-xs text-shadow-xs",
      twTextShadow[color],
      twTextShadow[color]
    ),
  },
}
</script>

<template>
  <div
    :class="
      cn(
        'command-sidebar-hero pointer-events-none absolute top-0 left-0 z-5 flex h-54 w-full flex-col items-center gap-3 overflow-hidden rounded-tl-5xl py-8 pr-4',
        ''
      )
    ">
    <!-- history link and icon -->
    <div class="pointer-events-auto -translate-y-1">
      <Ping
        position="bottom-right"
        :ui="{
          root: 'rounded-full',
          base: '-translate-x-0.5 -translate-y-2 ring-3',
        }"
        :color="pingColor"
        size="lg">
        <HoverIcon
          type="summoner"
          :to="buildSummonerRootPath(summoner)"
          :summoner="summoner"
          :avatar="{
            round: true,
            ui: { root: 'cursor-pointer size-21 rounded-full!' },
          }" />
      </Ping>
    </div>
    <div class="flex flex-col items-center">
      <!-- name and tag -->
      <h1
        :class="
          cn(
            '-translate-y-1 font-serif text-4xl leading-none font-black! normal-case! drop-shadow-2xs!',
            twDropShadow[color]
          )
        ">
        {{ summoner?.name || account?.username || "Hello." }}
      </h1>
      <div
        class="flex -translate-y-1 items-center justify-center gap-px text-sm font-medium normal-case!">
        <span v-if="summoner?.tag" class="py-1">
          <Icon name="i-hash" class="inline size-3!" />{{ summoner?.tag }}
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
            @click="closeFn(emit('close'), openLogin)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.command-sidebar-hero {
  isolation: isolate;
}

.command-sidebar-hero::before {
  --bind-color: v-bind("colorVar");
  position: absolute;
  inset: 0;
  content: "";
  background-image: linear-gradient(
    to bottom,
    color-mix(in oklab, var(--bind-color) 94%, var(--bind-color) 6%) 0%,
    color-mix(in oklab, var(--bind-color) 93%, var(--bind-color) 7%) 40%,
    color-mix(in oklab, var(--bind-color) 89%, transparent 11%) 60%,
    color-mix(in oklab, var(--bind-color) 72%, transparent 28%) 70%,
    color-mix(in oklab, var(--bind-color) 40%, transparent 60%) 85%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 52%,
    rgb(0 0 0 / 0.98) 66%,
    rgb(0 0 0 / 0.88) 70%,
    rgb(0 0 0 / 0.58) 80%,
    rgb(0 0 0 / 0.2) 85%,
    transparent 100%
  );
  backdrop-filter: blur(22px);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 52%,
    rgb(0 0 0 / 0.98) 66%,
    rgb(0 0 0 / 0.88) 70%,
    rgb(0 0 0 / 0.58) 80%,
    rgb(0 0 0 / 0.2) 90%,
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
    rgb(255 255 255 / 0.11) 20%,
    rgb(255 255 255 / 0.05) 40%,
    transparent 72%
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
