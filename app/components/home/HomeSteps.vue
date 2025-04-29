<script setup lang="ts">
const props = defineProps<{
  shadow?: boolean
}>()

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

const target1 = ref(null)
const target1IsVisible = ref(false)
const target1Check = useElementVisibility(target1, { threshold: 1.0 })

watch(
  target1Check,
  (newVal) => {
    if (newVal) {
      target1IsVisible.value = true
    }
  },
  { once: true },
)

const target2 = ref(null)
const target2IsVisible = ref(false)
const target2Check = useElementVisibility(target2, { threshold: 1.0 })

watch(
  target2Check,
  (newVal) => {
    if (newVal) {
      target2IsVisible.value = true
    }
  },
  { once: true },
)

const target3 = ref(null)
const target3IsVisible = ref(false)
const target3Check = useElementVisibility(target3, { threshold: 1.0 })

watch(
  target3Check,
  (newVal) => {
    if (newVal) {
      target3IsVisible.value = true
    }
  },
  { once: true },
)

const target4 = ref(null)
const target4IsVisible = ref(false)
const target4Check = useElementVisibility(target4, { threshold: 1.0 })

watch(
  target4Check,
  (newVal) => {
    if (newVal) {
      target4IsVisible.value = true
    }
  },
  { once: true },
)
</script>

<template>
  <div class="w-full">
    <div
      class="border-b2/30 absolute -z-1 h-28 w-full border-t"
      :class="{
        'shadow-[0px_-10px_20px_5px_#00000010]': props.shadow == true,
      }" />
    <div class="[&_hr]:bg-b2 bg-b1 border-b2/30 relative z-10 w-full border-b px-12 py-46 transition-all duration-300 [&_hr]:mx-12">
      <slot />
      <ul
        class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical [&_hr]:bg/b2 [&_.timeline-end]:w-full [&_.timeline-start]:w-full [&_div]:max-w-150 [&_h1]:!font-extrabold [&_h2]:drop-shadow-sm [&_p]:drop-shadow-xs [&_svg]:drop-shadow-sm ">
        <li ref="target1" class="w-full">
          <div class="timeline-middle">
            <icon
              name="check-fill"
              class="size-5" />
          </div>

          <div
            class="timeline-start  pb-44  mb-10 w-full md:text-end opacity-0 transition-all duration-500 delay-100"
            :class="{ 'opacity-100 animate-in slide-in-from-bottom-10 fade-in': target1IsVisible }">
            <p class="font-mono italic">
              Step 1
            </p>

            <h2>Create a Pocket</h2>

            <p class="pt-3">
              Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro
              use. Pockets can be linked to champions or a general role.
            </p>
            <CreateAPocket />
          </div>

          <hr />
        </li>

        <li
          ref="target2"
          class="w-full">
          <hr />
          <div class="timeline-middle">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div
            class="timeline-end mb-10  pb-44  w-full md:text-start opacity-0 transition-all duration-500 delay-100"
            :class="{ 'opacity-100 animate-in slide-in-from-bottom-10 fade-in': target2IsVisible }">
            <p class="font-mono italic">
              Step 2
            </p>
            <h2>Craft a Build</h2>

            <p class="pt-3">
              craft bukild bflsjfl
            </p>
            <CraftABuild />
          </div>
          <hr />
        </li>
        <li
          ref="target3">
          <hr />
          <div class="timeline-middle ">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div
            class="timeline-start mb-10 pb-44 w-full md:text-end opacity-0 transition-all duration-500 delay-100"
            :class="{ 'opacity-100 animate-in slide-in-from-bottom-10 fade-in': target3IsVisible }">
            <p class="font-mono italic">
              Step 3
            </p>
            <h2>Play Games</h2>

            <p class="pt-3">
              Do what you're best at. Get on the rift and grind some LP.
            </p>
            <div class="bg-b2/40 shadow-smooth relative mt-10 h-90 w-full overflow-hidden rounded-xl">
              <video-background
                ref="gameplayVideoRef"
                src="https://universe.communitydragon.org/events/riot-client/2024/04/lol/product-details-background.aea0275.webm"
                style="height: 100%"
                class="group relative z-0 grid size-full place-items-center bg-center">
                <div class="join absolute right-2 bottom-2 z-10 overflow-hidden rounded-md opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <button
                    class="join-item border-dark-2/0 hover:border-dark/80 rounded-r-none bg-black/0 text-white/60 transition-all duration-300 hover:bg-black/80 hover:text-white/90  btn btn-square"
                    @click="controlVideo('play')">
                    <icon
                      name="qlementine-icons:play-16"
                      class="!size-6 shrink-0" />
                  </button>

                  <button
                    class="join-item border-dark-2/0 hover:border-dark/80 rounded-l-none bg-black/0 text-white/60 transition-all duration-300 hover:bg-black/80 hover:text-white/90 btn btn-square"
                    @click="controlVideo('pause')">
                    <icon
                      name="qlementine-icons:pause-16"
                      class="!size-6 shrink-0" />
                  </button>
                </div>
              </video-background>
            </div>
          </div>
          <hr />
        </li>
        <li
          ref="target4"
          class="w-full">
          <hr />
          <div class="timeline-middle">
            <icon
              name="bi:check-circle-fill"
              class="size-5" />
          </div>
          <div
            class="timeline-end  mb-10 w-full md:text-start opacity-0 transition-all duration-500 delay-100"
            :class="{ 'opacity-100 animate-in slide-in-from-bottom-10 fade-in': target4IsVisible }">
            <p class="font-mono italic">
              Step 4
            </p>
            <h2>Analyze Results</h2>

            <p class="pt-3">
              The stuff that does stuff.
            </p>

            <AnalyzeResults />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
