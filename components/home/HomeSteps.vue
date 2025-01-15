<script setup lang="ts">
  const props = defineProps<{
    shadow?: boolean
  }>()

  const is1Visible = ref(false)
  const is2Visible = ref(false)
  const is3Visible = ref(false)
  const is4Visible = ref(false)

  // Function to handle visibility changes
  const visibilityChanged = (step) => (isVisible) => {
    if (step === 'step1') is1Visible.value = isVisible
    if (step === 'step2') is2Visible.value = isVisible
    if (step === 'step3') is3Visible.value = isVisible
    if (step === 'step4') is4Visible.value = isVisible
  }
  const classObject = 'animate-fade-up animate-duration-700 animate-ease-in-out  animate-fill-both animate-once !opacity-100 '

  // Create a ref to access the component instance
  const gameplayVideoRef = ref(null)

  onMounted(() => {
    if (gameplayVideoRef.value) {
      gameplayVideoRef.value.player.play()
    }
  })

  // Method to control video dynamically
  function controlVideo(action) {
    if (gameplayVideoRef.value) {
      switch (action) {
        case 'play':
          gameplayVideoRef.value.player.play()
          break
        case 'pause':
          gameplayVideoRef.value.player.pause()
          break
        default:
          console.warn('Invalid action:', action)
      }
    }
  }

  const step1 = ref(null)
  const step1IsVisible = useElementVisibility(step1)
  const step1On = ref(false)
  watchOnce(
    () => step1IsVisible.value,
    (newVal) => {
      console.log('💠 - newVal:', newVal)
    }
  )
  /* const target = ref(null)
const targetIsVisible = useElementVisibility(target)
const target = ref(null)
const targetIsVisible = useElementVisibility(target)
const target = ref(null)
const targetIsVisible = useElementVisibility(target) */
</script>
<template>
  <div class="w-full">
    <div
      class="border-b2/30 absolute -z-1 h-28 w-full border-t"
      :class="{
        'shadow-[0px_-10px_20px_5px_#00000010]': props.shadow == true,
      }" />
    <div class="[&_hr]:bg-b2 bg-b1 border-b2/30 relative z-10 w-full border-b px-12 py-26 transition-all duration-300 [&_hr]:mx-8">
      <slot />
      <ul
        class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical [&_hr]:bg/b2 [&_.timeline-end]:w-full [&_.timeline-start]:w-full [&_div]:max-w-150 [&_h1]:!font-extrabold [&_h2]:drop-shadow-sm [&_p]:drop-shadow-xs [&_svg]:drop-shadow-sm">
        <li
          ref="step1"
          class="w-full translate-y-6 opacity-0"
          :class="{ 'animate-in fade-in-100 opacity-100': step1On == true }">
          <div class="timeline-middle">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div class="timeline-start mb-10 w-full md:text-end">
            <p class="font-mono italic">Step 1</p>

            <h2>Create a Pocket</h2>

            <p>
              Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro
              use. Pockets can be linked to champions or a general role.
            </p>

            <div class="bg-b2/40 shadow-smooth mt-10 h-90 w-full rounded-lg" />
          </div>
          <hr />
        </li>
        <li
          ref="step1"
          class="w-full translate-y-6 opacity-0">
          <hr />
          <div class="timeline-middle">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div class="timeline-end mb-10">
            <p class="font-mono italic">Step 2</p>
            <h2>Craft a Build</h2>

            <p>craft bukild bflsjfl</p>
            <div class="bg-b2/40 shadow-smooth mt-10 h-90 w-full rounded-lg" />
          </div>
          <hr />
        </li>
        <li
          ref="step3"
          class="w-full translate-y-6 opacity-0">
          <hr />
          <div class="timeline-middle">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div class="timeline-start mb-10 md:text-end">
            <p class="font-mono italic">Step 3</p>
            <h2>Play Games</h2>

            <p>Do what you're best at. Get on the rift and grind some LP.</p>
            <div class="bg-b2/40 shadow-smooth relative mt-10 h-90 w-full overflow-hidden rounded-xl">
              <video-background
                ref="gameplayVideoRef"
                src="https://universe.communitydragon.org/events/riot-client/2024/04/lol/product-details-background.aea0275.webm"
                style="height: 100%"
                class="group relative z-0 grid size-full place-items-center bg-center">
                <div class="join absolute right-2 bottom-2 z-10 overflow-hidden rounded-md opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Button
                    size="icon"
                    @click="controlVideo('play')"
                    class="join-item border-dark-2/0 hover:border-dark/80 rounded-r-none bg-black/0 text-white/60 transition-all duration-300 hover:bg-black/80 hover:text-white/90">
                    <icon
                      name="qlementine-icons:play-16"
                      class="!size-6 shrink-0" />
                  </Button>

                  <Button
                    size="icon"
                    @click="controlVideo('pause')"
                    class="join-item border-dark-2/0 hover:border-dark/80 rounded-l-none bg-black/0 text-white/60 transition-all duration-300 hover:bg-black/80 hover:text-white/90">
                    <icon
                      name="qlementine-icons:pause-16"
                      class="!size-6 shrink-0" />
                  </Button>
                </div>
              </video-background>
            </div>
          </div>
          <hr />
        </li>
        <li
          ref="step4"
          class="w-full translate-y-6 opacity-0">
          <hr />
          <div class="timeline-middle">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div class="timeline-end mb-10">
            <p class="font-mono italic">Step 4</p>
            <h2>Analyze Results</h2>

            <p>The stuff that does stuff.</p>

            <div class="bg-b2/40 shadow-smooth mt-10 h-90 w-full rounded-lg" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
