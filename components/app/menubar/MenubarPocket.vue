<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const ps = usePocketStore()
const ts = useTempStore()
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Pockets</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" nav-menu-size py-4 px-9 pgap-2 grid grid-cols-2 h-fit ">
        <div class="flex flex-col py-5 px-1 ">
          <div class="flex gap-x-3 justify-start items-center rounded-xl">
            <icon name="pin" class="!size-5  shrink-0 !text-bc stroke-[1.2] dst" />
            <h4 class="dst !text-[1.05rem]">
              Pinned
            </h4>
          </div>
          <p class=" mt-2 text-2 font-medium ">
            Quick links to your LP top 3.
          </p>

          <div class="grid w-full  items-center py-7  gap-y-10">
            <template v-for="index in 3" :key="index">
              <template v-if="ps.pinnedFolder.length">
                <template v-for="pocket in ps.pinnedFolder" :key="pocket.key">
                  <NuxtLink :to="`/pocket/${pocket.key}`">
                    <div class="btn aspect-square btn-md shadow-sm size-11 !p-0"></div>
                    <p class="text-3 f-tt f-m t-nw truncate">
                      {{ pocket.name }}
                    </p>
                    <p class="text-1 f-m  t-nw truncate">
                      <span v-for="champ in pocket.champions.children" :key="champ.name">
                        {{ champ.name }}
                      </span>
                    </p>
                  </NuxtLink>
                </template>
              </template>

              <div v-else class="flex gap-3 i-c select-none point-none ">
                <div class="btn aspect-squarebtn-md  size-11 gap-0 ">
                  0{{ index }}
                </div>
                <div class="">
                  <p class="btn rounded-sm b h-4 w-39">
                  </p>
                  <p class="btn rounded-sm  h-3.5 mt-1 w-30">
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="flex flex-col pb-3.5 pt-0.5">
          <div
            class="btn rounded-lg h-22 w-full btn-ghost group/b btn-lg grid  py-3 text-normal"
          >
            <NuxtLink
              to="/pockets"
            >
              <div class="flex gap-2 items-center w-full">
                <icon name="folders" class="!size-4.5 shrink-0 !text-bc stroke-[1.2] dst" />

                <h4 class="dst text-start !text-[1.05rem] grow">
                  All
                </h4>
                <BadgeNeutral>
                  TABLE
                </BadgeNeutral>
              </div>
              <p class="text-3 font-medium text-start mt-2">
                An overview of all your pockets.
              </p>
            </NuxtLink>
          </div>

          <Grow />
          <NeutralButton class="ml-3" @click="ts.pocketSheetTrigger = true">
            <icon
              name="add-sm"
              class="size-5 stroke-[1.2] 0 drop-shadow-sm -ml-4"
            />
            New Pocket
          </NeutralButton>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>