<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { useAuthModal } from "~/domain/user/composables/useAuthModal"
const { color = "base" } = defineProps<{
  color?: "base" | "primary"
}>()
const emit = defineEmits(["update:component", "close"])
const { account, summoner } = safeObject(storeToRefs(user()))
const { openLogin, openSignUp } = useAuthModal()

const colorVar = computed(() => ({
  base: "var(--color-p0)",
  primary: "var(--color-p1)"
})).value[color]

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
        :to="buildSummonerRootPath(summoner)"
        :summoner="summoner"
        :avatar="{
          status: { size: 'lg', class: '-translate-y-3' },
          ui: { root: 'cursor-pointer size-21 rounded-full' }
        }" />
    </div>
    <div class="flex flex-col items-center">
      <!-- name and tag -->
      <h1
        class="font-serif text-3xl leading-none font-black! normal-case! drop-shadow-2xs! drop-shadow-p0!">
        {{ summoner?.name || account?.username || "Hello." }}
      </h1>
      <div
        class="flex items-center justify-center gap-px text-sm font-medium normal-case!">
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
    color-mix(in oklab, var(--bind-color) 89%, transparent 11%) 68%,
    color-mix(in oklab, var(--bind-color) 72%, transparent 28%) 80%,
    color-mix(in oklab, var(--bind-color) 40%, transparent 60%) 96%,
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
