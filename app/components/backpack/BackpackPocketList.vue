<script lang="ts" setup>
const as = useAccountStore()
const ps = usePocketStore()
const route = useRoute()
const all = ref(true)

const model = ref('Grid')

onMounted (() => {
  route.path != '/backpack' ? model.value = 'List' : 'Grid'
})
</script>

<template>
  <div class="pl-8 pt-19 relative w-120">
    <!--       <Tabs v-model:model-value="model" class="absolute right-5.25 top-3.75 **:pointer-events-auto z-5">
        <IndicatorTabsList class="grid grid-cols-2 ">
          <IndicatorTabsTrigger value="Grid" @click="navigateTo('/items')">
            Grid
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="List" @click="navigateTo('/items/list')">
            List
          </IndicatorTabsTrigger>
          <TabIndicator />
        </IndicatorTabsList>
      </Tabs> -->
    <div class="mt-2   pt-3 flex items-center font-semibold text-bc/70 tracking-tight">
      Pockets
    </div>
    <div class="">
      <SidebarAddPocket class="w-full btn bg-b2/40 border-b3/40 my-3 btn-md" />
      <LazyCollapsiblePinned />

      <LazyCollapsible v-model:open="all" :disabled="!ps.pockets || ps.pockets.length == null || ps.pockets.length == 0" class="group/all">
        <SidebarCollapsibleTrigger as-child>
          <i-ui-pocket class="size-5 -mt-px -left-0.25 group-not-disabled/pin:text-bc group-disabled/all:text-bc/35" />

          
            All
          
          <SidebarBadge class="font-mono !text-1 pr-4">
            <span v-if="!ps.pockets || ps.pockets.length == null || ps.pockets.length == 0">0</span>
            <span v-else>
              {{ ps.pockets.length }}
            </span>
          </SidebarBadge>
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent class="pb-6">
          <NuxtLink v-for="pocket in ps.pockets" :key="pocket.key" :to="`/pocket/${pocket.key}`">
            <Btn v-if="pocket">
              <PocketIcon :url="pocket.icon" class="size-5" />
              
                {{ pocket.name }}
              
            </Btn>
          </NuxtLink>
        </SidebarCollapsibleContent>
      </LazyCollapsible>

      <Btn @click="navigateTo('/pockets/archive')">
        <icon name="archive" class="size-4 ml-0.25" />
        Archive
        <SidebarBadge class="font-mono !text-1 pr-4">
          <span v-if="!ps.archiveFolder || ps.archiveFolder == null || ps.archiveFolder.length == 0">0</span>
          <span v-else>
            {{ ps.archiveFolder.length }}
          </span>
        </SidebarBadge>
      </Btn>

      <Btn @click="navigateTo('/pockets/trash')">
        <icon name="trash" />
        Trash
        <SidebarBadge class="font-mono !text-1 pr-4">
          <span v-if="!ps.trashFolder || ps.trashFolder == null || ps.trashFolder.length == 0">0</span>
          <span v-else>
            {{ ps.trashFolder.length }}
          </span>
        </SidebarBadge>
      </Btn>
    </div>
  </div>
</template>