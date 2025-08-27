<script lang="ts" setup>
import { backpackLinks } from '~/routes'

const emit = defineEmits(['open:pins'])
const as = useAccountStore()
</script>

<template>
  <LazyNavigationMenuContent
    class=""
    @focus-outside.prevent>
    <div class="overflow-hidden  px-6 py-5 size-full min-h-66 max-h-66 min-w-100  gap-2 items-center grid auto-rows-max  overflow-hidden">
      <NavMenuLink
        class="self-start pt-2 text-start group/navlink"
        @click="navigateTo('/backpack')">
        <NavMenuItemTitle>
          <i-lol-backpack class="size-5 shrink-0 dst opacity-84" />

          <h4 class="align-bottom dst">
            Backpack
          </h4>
        </NavMenuItemTitle>

        <NavBlurb
          class="mt-2 font-normal  text-bc/60"
          v-html="backpackLinks[0].blurb" />

        <p class="w-full  normal-case text-end transition duration-200 flex font-medium text-bc/80 tracking-tight pt-3 pb-2 underline group-hover/navlink:text-bc group-hover/navlink:underline italic">
          view all pockets...
        </p>
      </NavMenuLink>

      <NavigationMenuLink
        class=" btn btn-neutral  w-full gap-2 font-medium text-2 justify-start pr-6 self-start">
        <icon
          name="add-sm"
          class="text-nc  stroke-[1.5] mb-px shrink-0" />

        Create New Pocket
      </NavigationMenuLink>
    </div>
  </LazyNavigationMenuContent>
</template>