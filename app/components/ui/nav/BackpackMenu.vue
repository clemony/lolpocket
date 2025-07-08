<script lang="ts" setup>
const emit = defineEmits(['open:pins'])
const as = useAccountStore()
</script>

<template>
  <TwoColNav class="overflow-hidden grid-rows-1 gap-6 size-full min-h-90 max-h-90 min-w-160 grid-cols-[0.8fr_1fr]">
    <div class="h-full w-full gap-6 pr-1 items-center grid grid-rows-[1fr_0.4fr_0.6fr] col-start-1 overflow-hidden">
      <NavMenuLink class="self-start pt-2 text-start " @click="navigateTo(backpackLinks[0].link)">
        <NavMenuItemTitle>
          <i-lol-backpack class="size-5 shrink-0 dst opacity-80" />

          <h4 class="align-bottom">
            {{ backpackLinks[0].name }}
          </h4>
        </NavMenuItemTitle>

        <NavBlurb class="mt-2 font-normal  text-bc/60" v-html="backpackLinks[0].blurb" />
      </NavMenuLink>

      <NavigationMenuLink class=" btn btn-n1 w-full gap-2 font-medium text-2 justify-start pr-6 self-center" @click="addPocket()">
        <icon name="add-sm" class="text-nc  stroke-[1.5] mb-px shrink-0" />

        Create New Pocket
      </NavigationMenuLink>

      <div class="grid grid-cols-2 items-end size-full ">
        <NavMenuLink v-for="(item, i) in backpackLinks.filter(item => item != backpackLinks[0])" :key="i" class="!pb-4">
          <NavMenuItemTitle>
            <icon :name="item.icon.name" :class="{ 'size-4': i == 1, 'size-4.25': i == 0 }" class="shrink-0 *:stroke-[1.4]" />

            <h4 class=" text-bc/92 ">
              {{ item.name }}
            </h4>
          </NavMenuItemTitle>

          <NavBlurb class=" px-0 mt-2  font-normal  text-bc/60">
            {{ item.blurb }}
          </NavBlurb>
        </NavMenuLink>
      </div>
    </div>

    <div class="size-full overflow-hidden relative before:h-[calc(100%-16px)] before:border-l before:w-px  before:left-0 before:top-[10px]  before:absolute before:border-b4/40 grid-rows-[26px_1fr] grid  pl-5">
      <NavigationMenuLink class="mt-1.75  group/edit " @click="emit('open:pins')">
        <NavMenuItemTitle class="gap-4  items-center w-full px-3.5">
          <icon name="pin-solid" class="size-5 shrink-0 dst opacity-80" />

          <h4 class="grow">
            Pockets
          </h4>

          <div class="z-1 items-center   *:transition-opacity *:duration-250 cursor-pointer flex gap-2">
            <span class="opacity-0 text-2 group-hover/edit:underline underline-offset-2 group-hover/edit:opacity-60">
              edit
            </span>

            <icon name="edit" class="size-4.5 opacity-0 dst group-hover/edit:opacity-100" />
          </div>
        </NavMenuItemTitle>
      </NavigationMenuLink>

      <div class=" w-full max-w-full overflow-hidden h-full  py-2  items-end grid">
        <template v-for="pocketKey, i in as.userAccount.pockets.pinned" :key="pocketKey">
          <LazyPocketLabel v-if="i < 5" :pocket-key="pocketKey" hydrate-on-visible />
        </template>
      </div>
    </div>
  </TwoColNav>
</template>