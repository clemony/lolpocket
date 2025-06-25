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
  () => as.currentSession.session,
  (newVal) => {
    newVal ? (viewLogin.value = false) : ''
  },
)
</script>

<template>
  <div class="grid items-center size-full relative max-w-140 w-140 pl-22">
    <TransitionSlide class="size-full">
      <LolpocketDefinition v-if="!viewLogin">
        <input
        v-model="viewLogin"
        type="checkbox"
        class="peer hidden"
        @change="onChange" />
      </LolpocketDefinition>

      <Login v-else-if="viewLogin">

    <label
      v-show="!as.currentSession.session"
      class="pointer-events-auto justify-self-end hover:bg-neutral btn-lg mt-3 btn btn-outline border-b3 hover:text-nc text-2 w-fit self-end justify-self-end overflow-hidden shadow-xs transition-all duration-200">
      <input
        v-model="viewLogin"
        type="checkbox"
        class="peer hidden"
        @change="onChange" />

      <icon
        name="mynaui:arrow-long-left"
        class="size-7 object-center opacity-70" />
    </label>
      </Login>
    </TransitionSlide>

    <!--     <div
      v-if="visible"
      class="pointer-events-none absolute top-12 left-10 size-110 overflow-hidden object-center">
      <video-background
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loot/video/open_cm_outro.webm"
        style="height: 100%"
        :loop="false"
        class="z-50 bg-center opacity-65 brightness-180 grayscale aspect-video"></video-background>
    </div> -->

  </div>
  <!-- bg-b1/20 backdrop-blur-md  size-16 rounded-full  shadow-xs -->
  <div class="absolute bottom-5 w-full self-end justify-center grid">
    <div class="place-items-center grid">
      <icon
        name="down-sm"
        class=" opacity-30  size-9" />
    </div>
  </div>
</template>