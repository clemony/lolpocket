<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const ts = useTempStore()
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Pockets</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" nav-menu-size  py-4 px-9 gap-2 grid grid-cols-2 grid-rows-[1fr_1fr_50px]">
        <NuxtLink
          v-for="folder in defaultFolders()"
          :key="folder.name"
          :to="folder.link"
          class="flex gap-4 items-center size-full"
        >
          <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="!size-full !place-content-center rounded-xl !grid  gap-2 !py-5">
            <div class="flex gap-2">
              <LittleIcon :icon="folder.icon" class="!size-5 shrink-0 !text-bc stroke-[1.2] dst" />

              <h4 class="dst !text-[1.05rem]">
                {{ folder.name }}
              </h4>
            </div>
            <p>{{ folder.description }}</p>
          </NavigationMenuLink>
        </NuxtLink>

        <div class="row-start-3 w-full"></div>
        <div class="row-start-3 col-start-2  w-full justify-end justify-self-end relative ">
          <label
            :class="navigationMenuTriggerStyle()"

            class="absolute right-1 bottom-5 btn btn-neutral pr-3 !w-57 flex btn-md grow  hover:text-nc"
          >
            <input
              v-model="ts.PocketSheetTrigger"
              type="checkbox"
              class="hidden"
              @change="console.log(ts.PocketSheetTrigger)"
            />

            <icon
              name="add-sm"
              class="size-5 stroke-[1.2] 0 drop-shadow-sm -ml-4"
            />
            New Pocket

          </label>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>