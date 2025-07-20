<script lang="ts" setup>
import { ListboxFilter, ListboxItem, ListboxItemIndicator, ListboxRoot, ListboxVirtualizer, SplitterPanel as ResizablePanel } from 'reka-ui'

const ix = useIndexStore()
const as = useAccountStore()

const champQuery = ref<string | null>(null)
const selectedChampion = ref<string | null>(null)
</script>

<template>
<div class=" border-b2 shadow-warm-soft bg-b1 drop-shadow-md border !grid !grid-cols-1 grid-rows-[36px_1fr] rounded-lg  max-w-240">
    <menu class="h-full row-start-1 border-b border-b3  px-1 w-full grid grid-cols-3 items-center">
      <li class="w-full "></li>
      <li class="grid justify-items-end w-full">
        <div class="input shadow-none inset-shadow-xs group/input size-full border-b3 focus-within:ring-bc/50 rounded-md bg-b1/70 justify-self-end flex relative h-9.5   w-full">
        <icon name="search" class="absolute left-2 pointer-events-none transition-opacity duration-200  opacity-40 group-focus-within/input:opacity-80  size-4.25"/>
      <div class="search-wrapper group-not-focus-within/input:italic h-full group-not-focus-within/input:text-bc/70" />
      <button v-if="champQuery != null" @click="champQuery = null"  class="btn btn-ghost btn-xs btn-square absolute right-2">
<icon name="x-sm" class="shrink-0"/>
      </button>
        </div>
      </li>
<li class="font-semibold justify-center text-center  w-full text-2 text-bc/50">

</li>
    </menu>
  <ResizablePanelGroup direction="horizontal" :multiple="false" class=" h-inherit  max-w-inherit   w-inherit max-h-imherit overflow-hidden  max-h-140">
    <ResizablePanel :default-size="20" class=" row-start-2 h-inherit  max-h-imherit relative flex">
  <ListboxRoot v-model:model-value="selectedChampion" selection-behavior="replace" class=" overflow-y-auto transition-all duration-200  h-inherit w-full max-h-imherit ">

    <Teleport defer to=".search-wrapper">
      <ListboxFilter v-model:model-value="champQuery" type="text" class="size-full px-5 text-2"/>
</Teleport>

    <ListboxVirtualizer as="div" :options="ix.champions.map(a => a.name).sort()" :text-content="(o) => o" v-slot="{option}" :estimate-size="40" class=" h-inherit max-h-imherit w-full  z-0 ">
      <ListboxItem :value="option" :class="cn('h-[40px] w-full px-1 mt-2 z-0 flex items-center gap-3 font-medium')">
        <div  :class="cn('btn btn-ghost w-full justify-start h-[34px] r', {'btn-active': option == selectedChampion})">
        <ChampionIcon :id="ix.champIdByName(option) as number" :alt="option"  class="size-10 rounded-lg"/>
        <span class="grow text-start truncate">
{{ option }}
</span>
        <ListboxItemIndicator>
          <icon name="right-sm" />
        </ListboxItemIndicator>
        </div>
      </ListboxItem>

    </ListboxVirtualizer>

  </ListboxRoot>
</ResizablePanel>
<ResizableHandle  class="bg-b3"/>
<ResizablePanel class=" h-inherit">
  <div class=" overflow-y-auto size-full">
  <transition-slide group v-if="selectedChampion" class="w-full h-inherit h-min gap-8 grid grid-cols-4 p-8">
    <Card
            v-for="skin in ix.skins[ix.champKeyByName(selectedChampion)]"
            :key="skin.name" class="rounded-lg size-full !bg-b1 w-38 bg-noise h-42 cursor-pointer parallax photo inset-shadow-xxs p-2 border-b3 group/photo grid grid-rows-[1.5fr_0.3fr]">

     <PocketIcon
            :alt="skin.name"
            :url="getSkinSplash(selectedChampion, skin, 'tile')"
            class=" rounded-md shrink-0 size-full pointer-events-none bg-black/90 **:text-white">
            <LazyPrismaticShine class="scale-110 !opacity-0 group-hover/photo:!opacity-100 transition duration-250 " />
          </PocketIcon>

            <input v-model="as.userAccount.settings.profile.splash" type="radio" :value="getSkinSplash(selectedChampion, skin, 'tile')" class="peer hidden" name="splash-select" />
          <div class="w-full text-2 truncate h-5 max-h-5 w-34 max-w-34 mt-1.5 px-0.5 italic grid items-center">
{{ skin.name }}
          </div>

    </Card>
  </transition-slide>
  </div>
</ResizablePanel>
  </ResizablePanelGroup>
  </div>
</template>