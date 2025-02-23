<script lang="ts" setup>
const ds = useDataStore()
const ts = useTempStore()
const as = useAccountStore()

const champion = ref(ts.selectedChampion)

watch(
  () => ts.selectedChampion,
  (newVal) => {
    champion.value = newVal
    // console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div
    :key="champion"
    class="drawer"
  >
    <input
      id="champ-drawer"
      type="checkbox"
      class="drawer-toggle"
    />

    <div class="drawer-side z-60">
      <label
        for="champ-drawer"
        aria-label="close sidebar"
        class="drawer-overlay !bg-black/70"
      ></label>

      <div class="backdrop-blur-md min-h-full w-100 bg-b1 shadow-pretty overflow-hidden rounded-r-md inset-shadow-sm relative">
        <div
          key="id"
          :champion="champion"
          class="relative h-full w-110 justify-self-center"
        >
          <div class="rating absolute top-1 right-17 size-fit gap-1">
            <input
              v-model="as.favoriteChamps"
              type="checkbox"
              :value="champion"
              name="favorite-item"
              :aria-label="`favorite ${champion.name}`"
              class="mask mask-heart bg-[#dd5f61]"
            />
          </div>

          <div class="flex w-full gap-6 pb-5">
            <Champion
              :champion="champion"
              class="pointer-events-none size-24 shrink-0"
              :src="`/img/champion/${champion.apiname}.webp`"
            />

            <div class="flex flex-col">
              <h1 class="flex flex-wrap items-end gap-2 pt-1 leading-none tracking-tighter drop-shadow-sm">
                {{ champion.name }}

                <span
                  v-if="champion.nickname"
                  class="text-2 mb-0.75 font-normal italic"
                >
                  a.k.a. {{ champion.nickname }}
                </span>
              </h1>

              <p class="text-4 mb-2 ml-0.5 tracking-tight">
                @{{ champion.title }}
              </p>

              <div class="flex gap-2">
                <Badge
                  v-if="champion.herotype"
                  size="sm"
                  class="text-3 text-bc flex flex-nowrap text-center font-mono lowercase"
                  :style="{
                    backgroundColor: `var(--color-${champion.herotype.toLowerCase()})`,
                  }"
                >
                  #{{ champion.herotype }}
                </Badge>

                <Badge
                  v-if="champion.alttype"
                  size="sm"
                  class="text-3 text-bc flex flex-nowrap text-center font-mono lowercase"
                  :style="{
                    backgroundColor: `var(--color-${champion.alttype.toLowerCase()})`,
                  }"
                >
                  #{{ champion.alttype }}
                </Badge>
              </div>
            </div>
          </div>

          <ChampionStats :champion="champion" />
          <!-- <ChampionAspects /> -->

          <Separator
            label="ABILITIES"
            class="my-11"
          />
          <!--   <ChampionAbilities :champion="champion" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
