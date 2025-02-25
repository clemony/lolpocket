<script lang="ts" setup>
import type { CSSProperties } from 'vue'

const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)

const as = useAccountStore()

const set = ref(pocket.value.runes.default)
console.log(set)

const wrapper = ref(null)
const parallax = reactive(useParallax(wrapper))
const isHovered = useElementHover(wrapper)

// Define roll and tilt as modifiable refs
const roll = ref(0)
const tilt = ref(0)
onMounted(() => {
  roll.value = 0 // Set initial roll
  console.log('mount', roll.value)
  tilt.value = 0 // Set initial tilt
  console.log('mout', tilt.value)
})
const wrapperStyle: CSSProperties = {
  minHeight: '200px',
  transition: '.3s ease-out all',
}

const containerStyle: CSSProperties = {
  perspective: '350px',
}

const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
}))

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 2}px) translateY(${parallax.roll * 2}px) `,
}))

const layer1 = computed(() => ({
  perspective: '45px',
  transform: isHovered ? `translateX(${parallax.tilt * 8}px) translateY(${parallax.roll * 8}px) scale(1)` : null,
}))

const layer2 = computed(() => ({
  perspective: '250px',
  transform: isHovered ? `translateX(${parallax.tilt * 4}px) translateY(${parallax.roll * 4}px) scale(1)` : null,
}))

const layer3 = computed(() => ({
  perspective: '150px',
  // perspective: '300px',
  transform: isHovered ? `translateX(${parallax.tilt * 6}px) translateY(${parallax.roll * 6}px) scale(1)` : null,
}))
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <slot />
    </DialogTrigger>
    <Hide>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
    </Hide>

    <DialogContent>
      <div
        v-bind="$attrs"
        ref="wrapper"
        :style="wrapperStyle"
        class="rounded-xl"
      >
        <div
          :style="containerStyle"
          class="rounded-xl"
        >
          <div
            :style="isHovered ? cardStyle : null"
            class="rounded-xl transition-all duration-300 ease-out"
          >
            <label class="swap swap-flip shadow-smooth relative size-full rounded-xl">
              <input
                type="checkbox"
                class="hidden"
              />

              <!--  <Card
                class="swap-off border-dark-3 z-10 flex size-fit h-[290px] w-[230px] items-center justify-center rounded-xl border-1 !p-0"
                :class="`bg-linear-to-br from-transparent via-${set.primary}-light to-${set.primary}`"
              >
                <CardContent class="via-light-1/50 to-light-1/40 border-light-1 relative !m-0 !size-full items-center rounded-lg border-4 bg-linear-to-br from-transparent/60 p-5">
                  <CardChampion
                    :pocket="pocket"
                    :wrapper="wrapper"
                    :is-hovered="isHovered"
                    :layer1="layer1"
                    :layer2="layer2"
                    :layer3="layer3"
                  >
                    <menu class="absolute right-2.5 bottom-2.5 z-10 flex items-center gap-3 text-white">
                      <CardShards :pocket="pocket" />
                      <CardSpells :pocket="pocket" />
                    </menu>
                  </CardChampion>
                  <CardKeystone
                    :set="set"
                    :style="layer0"
                  />

                  <div class="flex w-full flex-col gap-5 py-6">
                    <CardRuneset
                      :pocket="pocket"
                      :style="layer0"
                      :set="set"
                    ></CardRuneset>

                    <CardItems
                      :pocket="pocket"
                      :set="set"
                    />
                  </div>
                </CardContent>
              </Card> -->
              <div
                :style="{ backgroundImage: `url(${as.cardBack})` }"
                class="swap-on flex h-[290px] w-[230px] items-center justify-center bg-transparent! [background-size:230px_290px] bg-center"
              >
                <CardBack
                  :pocket="pocket"
                  :style="layer0"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>
