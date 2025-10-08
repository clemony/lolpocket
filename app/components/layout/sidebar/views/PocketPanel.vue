<script lang="ts" setup>
import { closeAndNav } from '../utils'

defineOptions({
  meta: {
    name: 'Pockets',
    class: '**:stroke-[2.21]',
    icon: 'folder'

  },
})

const route = useRoute()

const pinned = computed(() => {
  const p = ps().pockets.filter(p => p.location.pinned)
  console.log('🌱 - p:', p)
  return [p.slice(0, 4), p.slice(4, 8)]
})
</script>

<template>
  <div class="px-6 py-1 flex flex-col gap-4">
    <Collapsible
      v-model:open="ui().collapseStates.panel.pocket"
      class="pr-2 ">
      <CollapsibleTrigger
        class="mt-1 gap-4 w-full text-start hover:underline py-1 hover:*:text-bc/80 focus-visible:outline-0 items-center">
        <span class="grow text-2 capitalize font-bold text-bc/50">
          Pinned
        </span>

        <CaretRotate />
      </CollapsibleTrigger>

      <CollapsibleContent
        class="pt-1 gap-2 grid auto-rows-fr">
        <div
          v-for="set, i in pinned"
          :key="i"
          class="w-full flex w-full group/wrap gap-2">
          <tippy
            v-for="pocket in set"
            :key="pocket.key"
            theme="base"
            :placement="i === 0 ? 'top-start' : 'bottom-start'"
            tag="div"
            :class="
              cn(
                'relative group/p  flex max-h-22 min-h-22 h-full rounded-lg flex-1 items-center cursor-pointer *:pointer-events-none shadow-sm drop-shadow-sm shadow-black/8 overflow-hidden transition-all duration-500 ease-in-out hover:flex-[]',

                //hover
                '*:transition-scale *:ease-in-out hover:*:scale-100 *:duration-500  group-has-hover/wrap:*:scale-170 ',
                { 'btn-active': route.params?.pocket_key === pocket.key },
              )
            "
            @click="closeAndNav(`/pocket/${pocket.key}`)">
            <AspectRatio
              :ratio="1 / 1"
              class=" relative  grid place-items-center overflow-hidden  grow flex object-cover">
              <PocketIcon
                :img="pocket.icon"
                class=" h-full absolute grow object-cover" />
            </AspectRatio>

            <template #content>
              <div
                v-if="pocket.main.items"
                class="gap-1 w-fit grid grid-cols-6">
                <template
                  v-for="item in pocket.items.find(p => p.id === pocket.main.items).items"
                  :key="item">
                  <LazyItem
                    v-if="item"
                    :id="item"
                    class="size-7 rounded-lg " />
                </template>
              </div>
            </template>
          </tippy>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
