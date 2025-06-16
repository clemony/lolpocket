<script lang="ts" setup>
const as = useAccountStore()
const viewLogin = ref(false)

const visible = ref(false)

function onChange() {
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, 2200)
}

watch(
  () => as.userAccount.session,
  (newVal) => {
    newVal ? (viewLogin.value = false) : ''
  },
)
</script>

<template>
  <div class="grid place-items-center">
    <div class="relative mt-28 grid h-170 max-w-170 min-w-170 grid-rows-[2fr_1fr] flex-col justify-center">
      <TransitionSlide>
        <LolpocketDefinition v-if="!viewLogin" />
        <Login v-else-if="viewLogin" />
      </TransitionSlide>

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

        class="pointer-events-auto hover:bg-neutral btn-lg btn btn-outline border-b3 hover:text-nc w-fit self-start overflow-hidden shadow-xs transition-all duration-200"
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
</template>