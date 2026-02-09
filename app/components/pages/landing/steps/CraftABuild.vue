<script lang="ts" setup>
/* const shuffled = [...champions.sort(() => 0.5 - Math.random())]
const selectedChamps = computed (() => {
  console.log('💠 - selectedChamps - champions:', champions)
  return shuffled.slice(0, 6)
})
 */
const currentItems = ref<Index[]>([])

const champModel = ref<number | null>(null)
const champComplete = ref(false)
const isChampVisible = ref(true)

const itemModel = [
  {
    complete: ref(false),
    item: ref<Index | null>(null),
    visible: ref(false),
  },
  {
    complete: ref(false),
    item: ref<Index | null>(null),
    visible: ref(false),
  },
  {
    complete: ref(false),
    item: ref<Index | null>(null),
    visible: ref(false),
  },
  {
    complete: ref(false),
    item: ref<Index | null>(null),
    visible: ref(false),
  },
  {
    complete: ref(false),
    item: ref<Index | null>(null),
    visible: ref(false),
  },
  {
    complete: ref(false),
    item: ref<Index | null>(null),
    visible: ref(false),
  },
]

const item = ref(0)

function setTimer(timer: "champ" | "item", i?: number, itemValue?: Index) {
  // getRandomItems()
  setTimeout(() => {
    if (timer === "champ") {
      isChampVisible.value = false
      champComplete.value = true
      const first = itemModel[0]
      if (first) first.visible.value = true
    } else if (timer === "item") {
      if (i === undefined) return
      if (!itemModel[i]) return
      itemModel[i].item.value = itemValue ?? null
      itemModel[i].visible.value = false
      getRandom(itemIndex)
      const next = itemModel[i + 1]
      if (next) next.visible.value = true
    }
  }, 2000)
}

onMounted(async () => {
  currentItems.value = getRandom(itemIndex)
})
</script>

<template>
  <div
    class="relative flex size-full flex-col items-center justify-center gap-6">
    <div class="absolute top-5 flex h-16 gap-4">
      <div
        v-if="champModel && champComplete"
        v-tippy="champNameById(champModel)"
        class="animate-in slide-in-from-bottom-10 size-16 rounded-lg shadow-sm drop-shadow-sm transition-all duration-400 hover:scale-110 hover:ring-1 hover:ring-neutral hover:ring-offset-2 hover:ring-offset-p2">
        <Champion :id="champModel" class="size-16 overflow-hidden rounded-lg" />
      </div>
      <!--
      <template v-for="(item, i) in itemModel">
        <div v-if="itemModel[i].item && itemModel[i].complete.value === true" :key="i" v-tippy="itemModel[i].item.value.name" class="size-16   hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-400 animate-in slide-in-from-bottom-10 hover:ring-offset-2 hover:ring-offset-p2">
          <div class="overflow-hidden size-16 rounded-lg">
            <img :src="`/img/champion/${itemModel[i].item.value.id}.webp`" class="size-full scale-115" />
          </div>
        </div>
      </template> -->
    </div>

    <template v-if="isChampVisible">
      <Transition name="puff">
        <p v-if="!champModel" class="f-sb f-tt text-lg">
          Select a Champion...
        </p>
      </Transition>

      <transition-slide
        class="flex items-center justify-center gap-4"
        group
        :offset="[8, 0]"
        :duration="1000">
        <!--  <template v-for="champion in selectedChamps" :key="champion.name">
          <Champion v-if="champModel ? champion === champModel : selectedChamps.includes(champion)" :id="champion.id" v-tippy="champion.name" class="size-16 cursor-pointer hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-200 hover:ring-offset-2 hover:ring-offset-p2" :class="{ hidden: champModel !== null && champion !== champModel }">
            <input v-model="champModel" name="champion" type="radio" class="peer hidden" :value="champion" @change="setTimer('champ')" />
          </ChampionIcon>

          <h1
            v-if="champion === champModel" class="flex gap-3 items-center ">
            {{ champion.name }}
            <icon name="line-md:confirm-circle" class="size-7" />
          </h1>
        </template> -->
      </transition-slide>
    </template>

    <template v-if="itemModel[item]?.visible">
      <Transition name="puff">
        <p v-if="!itemModel[item]?.item" class="f-sb f-tt text-lg">
          Select your first item...
        </p>
      </Transition>

      <transition-slide
        class="flex items-center justify-center gap-4"
        group
        :offset="[8, 0]"
        :duration="1000">
        <template v-for="(i, x) in currentItems" :key="i.name">
          <!--     <label
            v-if="
              item.id
                ? item.id === itemModel
                : currentItems.includes(item)
            "
            v-tippy="item.name"
            class="size-16 cursor-pointer hover:scale-110 hover:ring-1 hover:ring-neutral rounded-lg shadow-sm drop-shadow-sm transition-all duration-300 hover:ring-offset-2 hover:ring-offset-p2"
            :class="{
              hidden:
                itemModel[itemIndex].item !== null
                && item !== itemModel[itemIndex].item,
            }"> -->
          <input
            v-model="itemModel[x]?.item"
            class="peer hidden"
            name="item"
            type="radio"
            :value="item"
            @change="setTimer('item', x, i)" />

          <div class="size-16 overflow-hidden rounded-lg">
            <img
              class="s size-full"
              :alt="i.name"
              :src="`/img/items/${i.id}.webp`" />
          </div>
          <!--   </label> -->

          <!--  <h1
            v-if="item.id === itemModel"
            class="flex gap-3 items-center">
            {{ item.name }}
            <icon
              name="line-md:confirm-circle"
              class="size-7" />
          </h1> -->
        </template>
      </transition-slide>
    </template>
  </div>
</template>
