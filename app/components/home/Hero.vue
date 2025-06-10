<script setup lang="ts">
const as = useAccountStore()
const viewLogin = ref(false)

watch(
  () => as.userAccount.session,
  (newVal) => {
    newVal ? (viewLogin.value = false) : ''
  },
)
const visible = ref(false)

function onChange() {
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, 2200)
}

const heroDisplays = [
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/skin86/animatedsplash/ahri_skin86_centered.skins_ahri_hol.webm',
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/seraphine/skins/skin03/animatedsplash/seraphine_skin3_centered.webm',
  'https://universe.communitydragon.org/events/2021/coven/videos/Ashe.webm',
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/udyr/skins/skin03/animatedsplash/udyr_skin3_centered.webm',
]
</script>

<template>
  <div class="size-screen sticky top-0 left-0 z-0 grid grid-cols-2">
    <div class="relative grid size-full shrink-0 items-center justify-center">
      <div class="relative mt-28 grid h-170 max-w-170 min-w-170 grid-rows-[2fr_1fr] flex-col justify-center">
        <Transition
          enter-active-class="delay-1000 transition-all duration-500"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-500"
          leave-from-class="opacity-100 "
          leave-to-class="opacity-0 -translate-y-2"
          mode="out-in">
          <Welcome v-if="!viewLogin" />
          <Login v-else-if="viewLogin" />
        </Transition>

        <div
          v-if="visible"
          class="pointer-events-none absolute top-12 left-10 size-110 overflow-hidden object-center">
          <video-background
            src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loot/video/open_cm_outro.webm"
            style="height: 100%"
            :loop="false"
            class="z-50 bg-center opacity-65 brightness-180 grayscale aspect-video"></video-background>
        </div>
        <button
          v-show="!as.userAccount.session"

          class="hover:bg-neutral btn-lg btn btn-outline border-b3 hover:text-nc w-fit self-start overflow-hidden shadow-xs transition-all duration-200"
          as-child>
          <label>
            <input
              v-model="viewLogin"
              type="checkbox"
              class="peer hidden"
              @change="onChange" />
            <span v-if="!viewLogin">Log In</span>

            <icon
              v-else
              name="mynaui:arrow-long-left"
              class="size-7 object-center opacity-70" />
          </label>
        </button>
      </div>

      <div class="absolute bottom-7 w-full self-end">
        <icon
          name="down-sm"
          class="animate-bounce delay-1000 opacity-40 stroke-[1.5] mx-auto size-6" />
      </div>
    </div>

    <div class="overflow-hidden">
      <video-background
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/skin86/animatedsplash/ahri_skin86_centered.skins_ahri_hol.webm"
        style="height: 100vh"
        class="mask-left-90 fixed -scale-x-[1] bg-center opacity-50 brightness-125 contrast-160 grayscale"></video-background>
    </div>
    <!--     <div
            class="pointer-events-none absolute bottom-10 flex w-screen items-center justify-center gap-4">
            <input
                v-for="i in heroDisplays"
                type="radio"
                :value="i"
                :key="i"
                v-model="as.heroModel"
                name="hero-model"
                class="radio radio-xs pointer-events-auto !bg-transparent opacity-65" />
        </div> -->
  </div>
</template>

<style scoped></style>
