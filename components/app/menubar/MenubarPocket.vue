<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin';

const ts = useTempStore()
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Pockets</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class="min-w-130 min-h-84 h-84 py-8 px-9 gap-2 grid grid-cols-2 grid-rows-2">
        <NuxtLink
          v-for="folder in defaultFolders()"
          :key="folder.name"
          :to="folder.link"
          class="flex gap-4 items-center size-ful"
          :disabled="!ts.sessionInfo && folder.name != 'All'"
        >
          <NavigationMenuLink :class="navigationMenuTriggerStyle()" class="!size-full !place-content-center rounded-xl !grid  gap-2 !py-5">
            <div class="flex gap-2">
              <LittleIcon :icon="folder.icon" class="!size-5 shrink-0 !text-bc stroke-[1.2] dst" />

              <h4 class="dst !text-[1.05rem]">{{ folder.name }}</h4>
            </div>
            <p>{{ folder.description }}</p>
          </NavigationMenuLink>
        </NuxtLink>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>