<script setup lang="ts">
const { champion } = defineProps<{
  champion: string
}>()

// todo FIX
</script>

<template>
  <UPopover>
    <UButton
      class="btn btn-circle size-11 btn-ghost hover:border-p3 hover:bg-p2">
      <div
        v-if="champion"
        :key="champion"
        class="size-8 overflow-hidden rounded-full"
        :class="{}">
        <Image
          class="size-8! scale-114"
          :image="`/img/champion/${champion}.webp`"
          :alt="champion" />
      </div>
    </UButton>

    <PopoverContent
      class="grid w-fit min-w-90 grid-cols-4 gap-2"
      align="start"
      :side-offset="6"
      :align-offset="-12">
      <!-- <Label v-for="splash in ix().skins" :key="splash.name">
        <PopoverClose as-child>
          <Champion :url="getSplash(splash.tilePath)" class="size-20 min-h-20 shadow-sm drop-shadow-sm" />

        </PopoverClose>
        <input v-model="pocket.card.splash" type="radio" :value="splash.splashPath" class="peer hidden" />
      </Label> -->
    </PopoverContent>
  </UPopover>
</template>
