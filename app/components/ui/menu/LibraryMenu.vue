<script lang="ts" setup>
import { currentChampionArt, currentItemArt, currentRuneArt } from 'data/content/current-art'
// grayscale brightness-120 contrast-105  opacity-90
</script>

<template>
  <TwoColNav>
    <li v-for="item, i in libraryLinks" :key="item.name" class="size-full col-start-1">
      <NavMenuLink v-if="i != 2" @click="navigateTo(item.link)">
        <NavMenuImgWrapper>
          <Img v-if="i == 0" :img="currentItemArt.img" alt="items" :class="cn(' absolute  object-cover size-full', currentItemArt.class)" />

          <Img v-if="i == 1" :img="currentChampionArt.img" alt="champions" class="size-full  absolute  object-cover " :class="cn(' absolute  object-cover size-full', currentChampionArt.class)" />
        </NavMenuImgWrapper>

        <div
          class="flex select-none grow items-start flex-col text-start">
          <h4 class="mt-1 mb-3 dst">
            {{ item.name }}
          </h4>

          <p class="leading-tight text-2 normal-case">
            {{ item.blurb }}
          </p>
        </div>
      </NavMenuLink>
    </li>

    <li class=" size-full row-start-1 col-start-2  px-2 py-1">
      <div class=" relative shadow-sm drop-shadow-sm size-full overflow-hidden rounded-lg">
        <LazyVideo :src="currentRuneArt.video" alt="champions" :class="cn('    size-full object-cover absolute', currentRuneArt.class)" />
      </div>
    </li>

    <li class=" row-start-2 size-full col-start-2 items-center overflow-hidden">
      <ul class="size-full grid grid-rows-[2fr_1fr] gap-3 overflow-hidden">
        <li class="size-full grow">
          <NavigationMenuLink class="size-full items-end px-3 text-end flex flex-col" @click="navigateTo(libraryLinks[2].links[0].link)">
            <h4 class="mb-1 mt-3 dst">
              {{ libraryLinks[2].links[0].name }}
            </h4>

            <p class="leading-tight text-2 mb-2 normal-case text-pretty">
              {{ libraryLinks[2].links[0].blurb }}
            </p>
          </NavigationMenuLink>
        </li>

        <li class="size-full grid grow">
          <NavigationMenuLink class="flex group/sums select-none justify-between grow size-full text-end pr-3 pl-1" @click="navigateTo(libraryLinks[2].links[1].link)">
            <div class="avatar-group -space-x-4 ">
              <div v-for="spell in ['Ignite', 'Heal', 'Ghost', 'Flash']" :key="spell" class="avatar size-12 group-hover/sums:border-b2">
                <Img :img="`/img/spells/${spell}.webp`" :alt="spell" class="size-10" />
              </div>
            </div>

            <h4 class="dst">
              {{ libraryLinks[2].links[1].name }}
            </h4>
          </NavigationMenuLink>
        </li>
      </ul>
    </li>
  </TwoColNav>
</template>