<script lang="ts" setup>
import { libraryLinks } from '~/routes'
</script>

<template>
  <LazyNavigationMenuContent
    class=""
    @focus-outside.prevent>
    <TwoColNav class="gap-x-3">
      <li
        v-for="item in libraryLinks"
        :key="item.name"
        class="size-full ">
        <NavigationMenuLink @click="navigateTo(item.link)">
          <NavMenuImgWrapper>
            <Img
              :img="item.img.src"
              alt="items"
              :class="cn(' absolute  object-cover size-full z-0', item.img.class)" />

            <div
              class="flex select-none grow items-start absolute self-end flex-col text-start bottom-0 p-4  **:text-white/92 z-2">
              <h1 class="  text-shadow-sm  text-shadow-black drop-shadow-sm drop-shadow-black ">
                {{ item.name }}
              </h1>
            <!--
            <NavBlurb>
              {{ item.blurb }}
            </NavBlurb> -->
            </div>
          </NavMenuImgWrapper>
        </NavigationMenuLink>
      </li>
    </TwoColNav>
  </LazyNavigationMenuContent>
</template>