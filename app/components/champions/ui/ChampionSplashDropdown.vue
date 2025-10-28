<script setup lang="ts">
const { card: c, champion } = defineProps<{
  card: Card
  champion: ChampionKey
}>()

const card = computed(() => c)

<<<<<<< HEAD
// @todo FIX
=======
// TODO FIX
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <Popover>
    <PopoverTrigger
<<<<<<< HEAD
      class="btn btn-ghost btn-circle btn hover:bg-b2 hover:border-b3 size-11">
      <div
        v-if="champion"
        :key="champion"
        class="size-8 overflow-hidden rounded-full"
=======
      class="btn btn-ghost btn-circle btn size-11 hover:bg-b2 hover:border-b3">
      <div
        v-if="champion"
        :key="champion"
        class="size-8 rounded-full overflow-hidden"
>>>>>>> refs/remotes/origin/main
        :class="{}">
        <Image
          :image="`/img/champion/${champion}.webp`"
          :alt="champion"
          class="!size-8 scale-114" />
      </div>
    </PopoverTrigger>

    <PopoverContent
      align="start"
      :side-offset="6"
      :align-offset="-12"
<<<<<<< HEAD
      class="grid w-fit min-w-90 grid-cols-4 gap-2">
=======
      class="grid grid-cols-4 gap-2 w-fit min-w-90">
>>>>>>> refs/remotes/origin/main
      <!-- <Label v-for="splash in ix().skins" :key="splash.name">
        <PopoverClose as-child>
          <Champion :url="getSplash(splash.tilePath)" class="size-20 min-h-20 shadow-sm drop-shadow-sm" />

        </PopoverClose>
        <input v-model="pocket.card.splash" type="radio" :value="splash.splashPath" class="peer hidden" />
      </Label> -->
    </PopoverContent>
  </Popover>
</template>

<style scoped></style>
