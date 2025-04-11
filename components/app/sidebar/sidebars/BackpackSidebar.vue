<script lang="ts" setup>
const as = useAccountStore()
const ps = usePocketStore()

const all = ref(true)

</script>

<template>
<div class="">
      <SidebarTitle  />
    <div class="px-6 mt-2 border-t border-y-b3/50 pt-3 flex items-center font-semibold text-bc/40 tracking-tight">
      Pockets
    </div>
    <div class="pl-4 pr-2">
      <LazyCollapsiblePinned />

      <LazyCollapsible v-model:open="all" :disabled="!ps.pockets || ps.pockets.length == null || ps.pockets.length == 0" class="group/all">
        <SidebarCollapsibleTrigger as-child>
          <i-ui-pocket class="size-5 -mt-px -left-0.25 group-not-disabled/pin:text-bc group-disabled/all:text-bc/35" />

          <SidebarText>
            All
          </SidebarText>
          <SidebarBadge class="font-mono !text-1 pr-4">
            <span v-if="!ps.pockets || ps.pockets.length == null || ps.pockets.length == 0">0</span>
            <span v-else>
              {{ ps.pockets.length }}
            </span>
          </SidebarBadge>
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent class="pb-6">
          <NuxtLink v-for="pocket in ps.pockets" :key="pocket.key" :to="`/pocket/${pocket.key}`">
            <SidebarButton v-if="pocket">
              <PocketIcon :image="pocket.icon" class="size-5" />
              <SidebarText>
                {{ pocket.name }}
              </SidebarText>
            </SidebarButton>
          </NuxtLink>
        </SidebarCollapsibleContent>
      </LazyCollapsible>

      <SidebarButton @click="navigateTo('/pockets/archive')">
        <icon name="archive" class="size-4 ml-0.25" />
        Archive
        <SidebarBadge class="font-mono !text-1 pr-4">
          <span v-if="!ps.archiveFolder || ps.archiveFolder == null || ps.archiveFolder.length == 0">0</span>
          <span v-else>
            {{ ps.archiveFolder.length }}
          </span>
        </SidebarBadge>
      </SidebarButton>

      <SidebarButton @click="navigateTo('/pockets/trash')">
        <icon name="trash" />
        Trash
        <SidebarBadge class="font-mono !text-1 pr-4">
          <span v-if="!ps.trashFolder || ps.trashFolder == null || ps.trashFolder.length == 0">0</span>
          <span v-else>
            {{ ps.trashFolder.length }}
          </span>
        </SidebarBadge>
      </SidebarButton>
    </div>
  </div>
</template>