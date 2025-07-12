<script lang="ts" setup>
const emit = defineEmits(['open:pins'])
const as = useAccountStore()
const ps = usePocketStore()

console.log('💠 - as.userAccount.pockets.pinned.length:', as.userAccount.pockets.pinned.length)
</script>

<template>
  <TwoColNav class="overflow-hidden grid-rows-1 gap-6 size-full min-h-90 max-h-90 min-w-160 grid-cols-[0.8fr_1fr]">
    <div class="h-full w-full gap-3 pr-1 items-center grid auto-rows-max  overflow-hidden">
      <NavMenuLink class="self-start pt-2 text-start group/navlink" @click="navigateTo(backpackLinks[0].link)">
        <NavMenuItemTitle>
          <i-lol-backpack class="size-5 shrink-0 dst opacity-84" />

          <h4 class="align-bottom">
            {{ backpackLinks[0].name }}
          </h4>
        </NavMenuItemTitle>

        <NavBlurb class="mt-1 font-normal  text-bc/60" v-html="backpackLinks[0].blurb" />

        <p class="w-full justify-end normal-case text-end transition duration-200 flex font-medium text-bc/75 tracking-tight pt-2 pb-1 group-hover/navlink:text-bc group-hover/navlink:underline italic">
          view all pockets...
        </p>
      </NavMenuLink>

      <NavigationMenuLink class=" btn btn-n1  w-full gap-2 font-medium text-2 justify-start pr-6 self-start" @click="addPocket()">
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

          <NavBlurb class=" px-0 mt-1  font-normal  text-bc/60">
            {{ item.blurb }}
          </NavBlurb>
        </NavMenuLink>
      </div>
    </div>

    <div class="size-full overflow-hidden relative before:h-[calc(100%-16px)] before:border-l before:w-px  before:left-0 before:top-[10px]  before:absolute before:border-b4/40 grid-rows-[26px_1fr] grid  pl-5">
      <!-- titlebar -->

      <NavMenuItemTitle class="gap-4 mt-2  items-center w-full px-1 flex justify-between">
        <span class="flex items-center gap-3">
          <icon name="pin-solid" class="size-5 shrink-0 dst opacity-84" />

          <h4>
            Pockets
          </h4>
        </span>

        <NavigationMenuLink v-tippy="'Edit pins'" class="flex  dst btn-xs btn btn-ghost !px-1 gap-0 group  hover:border-b3" @click="emit('open:pins')">
          <div class="relative size-4 *:transition-opacity *:duration-200 pl-px group-hover:*:last:opacity-100  group-hover:*:first:opacity-0">
            <icon name="pin" class="size-4 absolute" />

            <icon name="pin-solid" class="size-4 absolute  opacity-0" />
          </div>

          <icon name="add-sm" class="size-4 mt-0.25 -ml-0.25 group-hover:stroke-[1.4]" />
        </NavigationMenuLink>
      </NavMenuItemTitle>

      <div class="size-full overflow-hidden  grow py-2 items-center grid-rows-3 grid-cols-2 gap-2 grid">
        <template v-for="pocketKey, i in as.userAccount.pockets.pinned" :key="pocketKey">
          <NavigationMenuLink v-if="i < 6" class="group/link size-full grid items-end rounded-field shadow-sm drop-shadow-sm overflow-hidden relative **:select-none select-none **:pointer-events-none" @click="navigateTo(`/pocket/${pocketKey}`)">
            <LazyPocketPinButton :pocket-key="pocketKey" hydrate-on-visible />
          </NavigationMenuLink>
        </template>

        <NavigationMenuLink v-if="ps.pockets.length && !as.userAccount.pockets.pinned.length" as-child @click="emit('open:pins')">
          <Badge variant="outline" class="!text-2 row-start-2 col-span-2 dst w-38 justify-self-center grid group/badge py-1.25 pl-3 *:leading-4.5">
            <p class="inline-flex  gap-1 items-center  align-middle">
              <span class="font-serif -mt-px font-black align-middle">
                Protip:
              </span>

              <span>
                &nbsp;Pin your
              </span>

              <br />
            </p>

            <p class="inline-flex">
              favorite
              <span class="group-hover/badge:underline  group-hover/badge:font-semibold transition-all duration-200">
                &nbsp;pockets.
              </span>
            </p>
          </Badge>
        </NavigationMenuLink>

        <NavigationMenuLink v-else-if="!ps.pockets.length" as-child @click="addPocket()">
          <Badge variant="outline" class="!text-2 row-start-2 justify-self-center grid group/badge text-center py-1.25 leading-4.25">
            No pockets yet!<br />

            <p class="group-hover/badge:underline group-hover/badge:font-semibold transition-all duration-200">
              Create one?
            </p>
          </Badge>
        </NavigationMenuLink>
      </div>
    </div>
  </TwoColNav>
</template>