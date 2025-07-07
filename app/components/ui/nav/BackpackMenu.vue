<script lang="ts" setup>
const emit = defineEmits(['open:pins'])
const as = useAccountStore()
</script>

<template>
  <TwoColNav class="overflow-hidden grid-rows-1 size-full min-h-90 min-w-160">
    <div class="h-full w-full gap-4 items-center grid grid-rows-[1fr_0.5fr_0.6fr] col-start-1 overflow-hidden">
      <NavMenuLink class="self-start text-start " @click="navigateTo(backpackLinks[0].link)">
        <NavMenuItemTitle>
          <i-lol-backpack-outline :name="backpackLinks[0].icon.name" class="size-5 shrink-0 dst" />

          <h4 class="align-bottom">
            {{ backpackLinks[0].name }}
          </h4>
        </NavMenuItemTitle>

        <NavBlurb class="mt-2" v-html="backpackLinks[0].blurb" />
      </NavMenuLink>

      <NavigationMenuLink class=" btn btn-neutral w-full gap-2 font-medium text-2 justify-start pr-6 self-end" @click="addPocket()">
        <icon name="add-sm" class="text-nc  stroke-[1.5] mb-px shrink-0" />

        Create New Pocket
      </NavigationMenuLink>

      <div class="grid grid-cols-2 items-end size-full ">
        <NavMenuLink v-for="(item, i) in backpackLinks.filter(item => item != backpackLinks[0])" :key="i" class="!pb-4">
          <NavMenuItemTitle>
            <icon :name="item.icon.name" :class="{ 'size-4': i == 1, 'size-4.25': i == 0 }" class="shrink-0 *:stroke-[1.4]" />

            <h5 class="font-bold text-bc/92 tracking-bold">
              {{ item.name }}
            </h5>
          </NavMenuItemTitle>

          <NavBlurb class="text-start pl-0 text-balanced">
            {{ item.blurb }}
          </NavBlurb>
        </NavMenuLink>
      </div>
    </div>

    <div class="rounded-box size-full  ">
      <div class="field-box bg-b2/90 size-full px-2 py-2 gap-1 flex flex-col">
        <LazyPocketLabel v-for="pocketKey in as.userAccount.pockets.pinned" :key="pocketKey" :pocket-key="pocketKey" hydrate-on-visible />

        <NavigationMenuLink class="z-1" @click="emit('open:pins')">
          edit
        </NavigationMenuLink>
      </div>
    </div>
  </TwoColNav>
</template>