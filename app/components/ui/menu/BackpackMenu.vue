<script lang="ts" setup>
import { currentBagArt } from 'data/content/current-art'
const emit = defineEmits(['open:pins'])
</script>

<template>
  <TwoColNav class="grid-rows-1 overflow-hidden  ">
    <div class="size-full gap-1 items-center grid col-start-1 overflow-hidden">
      <NavigationMenuLink class="self-start text-start flex-col size-full" @click="navigateTo(backpackLinks[0].link)">
        <NavMenuItemTitle>
          <icon :name="backpackLinks[0].icon.name" class="size-5 shrink-0" />

          <h4 class="mt-1 mb-3 dst">
            {{ backpackLinks[0].name }}
          </h4>
        </NavMenuItemTitle>

        <NavBlurb class="">
          {{ backpackLinks[0].blurb }}
        </NavBlurb>
      </NavigationMenuLink>

      <button class=" btn btn-neutral w-full gap-2 justify-end text-end">
        <!--
        <icon name="add-sm" class="text-nc -ml-2.5 size-5.5  shrink-0" /> -->
        <icon name="material-symbols-light:fast-forward-outline-rounded" class="text-nc  size-6.5 shrink-0" />
        Quick Start New Pocket
      </button>

      <NavigationMenuLink v-for="(item, i) in backpackLinks.filter(item => item != backpackLinks[0])" :key="i" class="size-full flex flex-col justify-start items-start text-start px-3 py-2">
        <NavMenuItemTitle>
          <icon :name="item.icon.name" :class="{ 'size-4.25': i == 1, 'size-4.75': i == 0 }" />

          <h5>
            {{ item.name }}
          </h5>
        </NavMenuItemTitle>

        <NavBlurb>
          {{ item.blurb }}
        </NavBlurb>
      </NavigationMenuLink>
    </div>

    <div class="field-box bg-b2/60 size-full">

      <NavMenuLink @click="emit('open:pins')">
      edit
    </NavMenuLink>
    </div>
  </TwoColNav>
</template>