<script lang="ts" setup>
import { stats, types } from 'shared/data/item';

const ts = useTempStore()
const classObject = 'w-68 h-88 border-b2 backdrop-blur-md'
</script>

<template>
  <div class=" items-center flex-nowrap gap-4 absolute  bg-b1/80  top-[5.7vh] backdrop-blur-md rounded-lg py-2 px-3 left-6">


    <div class="flex items-center ">

    
      <ToggleStateButton
        v-model:model="ts.sortItemsAZ"
        class="tracking-tight btn-md font-normal btn rounded-r-none"
        @click.stop
        @update:model="(v) => (ts.sortItemsAZ = v)"
      >
        <span class="dst">Aa</span>
      </ToggleStateButton>

      <ToggleStateButton

        :class="{ 'btn-neutral ': ts.sortPrice }"
        :model="ts.sortPrice"
        class="tracking-tight btn  px-5 !text-3 rounded-none border-l-0"
        @click.stop
        @update:model="(v) => (ts.sortPrice = v)"
      >
        <span class="">$</span>
      </ToggleStateButton>

      <NavigationMenu disable-click-trigger>
        <NavigationMenuList class="gap-0">
          <NavigationMenuItem>
            <NavigationMenuTrigger class="text-3 btn btn-md rounded-none !mx-0 dst font-normal border-x-0  !px-4 dst">
              Stats
            </NavigationMenuTrigger>

            <NavigationMenuContent class="!px-0 ">
              <div
                :class="classObject"
                class="grid relative"
              >
                <div class="bg-b1/20 backdrop-contrast-95 backdrop-blur-sm absolute z-10 h-12 w-full flex items-center pl-6 !pr-0 left-0">
                  Stats
                </div>

                <ul class="grid w-full overflow-y-auto h-full **:tracking-tight relative z-0 [&_label]:text-nowrap !pr-0 [&_label]:truncate pt-12">
                  <li v-for="stat in stats" :key="stat.id">
                    <Label
                      variant="ghost"
                      size="sm"
                      :for="stat.id"
                      class="flex gap-4 items-center cursor-pointer hover:bg-b3/50 font-normal text-bc"
                    >
                      <input
                        :id="stat.id"
                        type="checkbox"
                        class="checkbox checked:bg-neutral checked:text-white checkbox-sm rounded-sm"
                      />
                      {{ stat.displayName }}
                    </Label>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          <!-- <NavigationMenuViewport class="right-39 top-0.5" /> -->
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger class="!text-3 dst btn !mx-0 !px-4 font-normal rounded-none border-r-0">
              Categories
            </NavigationMenuTrigger>

            <NavigationMenuContent class="bg-b1/85 w-full">
              <div
                :class="classObject"
                class="grid"
              >
                <div class="w-full pl-5 absolute h-12 flex z-10 items-center right-0 dst">
                  Categories
                </div>

                <ul class="py-4 pt-12 **:tracking-tight">
                  <li v-for="type in types" :key="type">
                    <Label
                      variant="ghost"
                      size="sm"
                      :for="type"
                      class="flex gap-4 items-center cursor-pointer hover:bg-b2 font-normal text-bc"
                    >
                      <input
                        :id="type"
                        v-model="ts.filterItemTypes"
                        type="radio"
                        class="radio radio-sm"
                        name="item-type"
                      />
                      {{ type }}
                    </Label>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger :no-arrow="true" class="rounded-l-none btn">
              <icon name="search" class="dst size-4.5 shrink-0" />
            </NavigationMenuTrigger>

            <NavigationMenuContent class="bg-b1/85 ">
              <div class=" z-40 px-4 py-3.5 flex items-center">
                <ItemSearch
                  placeholder="Search Items"
                  input-class=" text-bc  "
                  class=" shadow-none h-9 [&_svg]:size-4  rounded-lg "
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuViewport class="right-6.25 -top-0.5 !bg-transparent " />

          <NavigationMenuViewport class="-right-1" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
</template>

<style scoped></style>
