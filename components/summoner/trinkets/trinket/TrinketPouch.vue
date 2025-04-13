<script lang="ts" setup>
import { CollapsibleContent, CollapsibleTrigger } from 'reka-ui'

const isOpen = ref(false)

const as = useAccountStore()

console.log(as.nexusTrinkets)

const filter = computed (() => {
  const a = as.nexusTrinkets.filter(m => m != null)
  return a.map(m => m.name)
})

//TODO rename as trinket pouch


const trinketArray = [
  {
    name: 'mini',
    value: 0,
    isOpen: ref(false)
  },
  {
    name: 'small',
    value: 1,
    isOpen: ref(false)
  },
  {
    name: 'medium',
    value: 2,
    isOpen: ref(false)
  },
  {
    name: 'large',
    value: 3,
    isOpen: ref(false)
  },
  ]

const tab = ref(2)
const previous = usePrevious(tab)
const offset = computed((): {
  enter: [number, number]
  leave: [number, number]
} => {
  if (previous.value == null) {
    // first load or undefined previous: enter from right, no leave
    return {
      enter: [100, 0],
      leave: [0, 0]
    }
  }

  if (tab.value > previous.value) {
    // moving forward: enter from right, leave to left
    return {
      enter: [100, 0],
      leave: [-100, 0]
    }
  } else {
    // moving backward: enter from left, leave to right
    return {
      enter: [-100, 0],
      leave: [100, 0]
    }
  }
})
</script>

<template>
 <Collapsible v-model:open="isOpen" class="max-h-full size-full overflow-y-scroll">
    <CollapsibleTrigger class="flex cursor-pointer w-full items-center pl-2.5  pr-4 gap-3 py-2">
              <i-ui-trinket-pouch class="size-6 opacity-70 dst" />
      <span class="grow flex items-center dst  font-medium tracking-tight ">Trinket Pouch</span>
    <icon name="left-sm" class="tldr-30 " :class="{ '-rotate-90': isOpen }" />
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent grid grow overflow-hidden max-h-full h-fit pt-3 w-full relative">
 <Tabs  class="px-9 w-full" v-model:model-value="tab" >
  
    <TabsList class="w-full grid grid-cols-[1fr_1fr_1.1fr_1fr]">
      <HoverTabsTrigger v-for="trinkets in trinketArray" :key="trinkets.value"  :value="trinkets.value" class="capitalize">
        {{trinkets.name}}
      </HoverTabsTrigger>
    </TabsList>
  <transition-slide    :offset="offset" mode="out-in" as="div">
    <template v-for="trinkets in trinketArray" :key="trinkets.value">
  <TabsContent  v-if="tab == trinkets.value" :value="trinkets.value">
    <div>
      {{ trinkets.value }}
      <div
        v-for="module in allTrinkets"
        :key="module.name"
        class="size-full max-w-81 max-h-44"
        :data-name="module.name"
      >
        <component
          :is="ghostRegistry[module.name]"
          :data-name="module.name"
          :title="module.title"
          :queue="module.queue"
        />
      </div>
    </div>
  </TabsContent>
    </template>
</transition-slide>
  </Tabs>
    </CollapsibleContent>
  </Collapsible>


</template>