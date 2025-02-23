<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
const ps = usePocketStore()
const ts = useTempStore()
ps.pinnedFolder = []

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})


const { userFolders } = useUserFolders()
</script>

<template>
  <MenubarMenu >
    <MenubarTrigger>Pockets</MenubarTrigger>

    <MenubarContent class="!w-74">
      <MenubarLabel inset>
        Folders
      </MenubarLabel>
      <MenubarSeparator />

      <MenubarSub>
        <MenubarSubTrigger @click="emit('update:modelValue', '')" :disabled="!pinned || pinned.length == null || pinned.length == 0" class=" cursor-alias group">
          <icon name="pin" class="size-4  " />
             <span class="group-hover:underline">Pinned</span>

          <MenubarShortcut v-if="!pinned || pinned.length == null || pinned.length == 0">
            0
          </MenubarShortcut>
        </MenubarSubTrigger>

        <MenubarSubContent>
          <NuxtLink v-for="pocket in pinned" :key="pocket.key"  :to="`/pocket/${pocket.key}`">
          <MenubarItem >
            <PocketIcon :image="pocket.icon" class="size-5" />
            {{ pocket.name }}
          </MenubarItem>
        </NuxtLink>
        </MenubarSubContent>
      </MenubarSub>

      <MenubarSub>
        <NuxtLink
          to="/pockets"
        >
          <MenubarSubTrigger @click="emit('update:modelValue', '')"  :disabled="!ps.pockets || ps.pockets.length == null || ps.pockets.length == 0" class="cursor-alias group">
            <icon name="folders" class="!size-3.5 shrink-0  dst " />
           <span class="group-hover:underline">All</span>
            <MenubarShortcut v-if="!ps.pockets || ps.pockets.length == null || ps.pockets.length == 0">
              0
            </MenubarShortcut>
          </MenubarSubTrigger>
        </NuxtLink>
        <MenubarSubContent>
            <NuxtLink v-for="pocket in ps.pockets" :key="pocket.key"  :to="`/pocket/${pocket.key}`">
          <MenubarItem >
            <PocketIcon :image="pocket.icon" class="size-5" />
            {{ pocket.name }}
          </MenubarItem>
            </NuxtLink>
        </MenubarSubContent>
      </MenubarSub>

      <MenubarSeparator />

       <MenubarSub v-if="as.userAccount.session && as.userAccount && as.userFolders && as.userFolders.length">

          <MenubarSubTrigger :disabled="!as.userFolders && !as.userFolders.length" class="capitalize" inset>
            {{`${as.userAccount.gameName || as.userAccount.name}'s Folders`}}
          </MenubarSubTrigger>

        <MenubarSubContent>
    
               <MenubarSub v-for="folder in userFolders" :key="folder.key" >
                 <MenubarSubTrigger :inset="!folder.icon"  :disabled="!folder || !folder.items.length || !folder.items.length == null">
            <icon v-if="folder.icon" :name="folder.icon" class="size-4" />
            {{ folder.name }}
                     <MenubarShortcut v-if="folder || !folder.items.length || !folder.items.length == null">
            0
          </MenubarShortcut>
            </MenubarSubTrigger>
             <MenubarSubContent>
      <NuxtLink v-for="pocket in folder.items" :key="pocket.key"  :to="`/pocket/${pocket.key}`">
<MenubarItem>
            <PocketIcon :image="pocket.icon" class="size-5" />
            {{ pocket.name }}
          </MenubarItem>

      </NuxtLink>
             </MenubarSubContent>
             </MenubarSub>

                  <MenubarSeparator />
          <DropdownMenuItem @click="ts.newFolderOpen = true">
            <icon name="add-sm" class="size-7 shrink-0 mr-1" />
            New Folder
          </DropdownMenuItem>

        </MenubarSubContent>
      </MenubarSub>
<!--  :disabled="!folder || folder.items.length == null || folder.items.length == 0" -->

      <MenubarSeparator />


      <NuxtLink
        to="/pockets/trash"
      >
        <MenubarItem inset>
          Archive

                               <MenubarShortcut >
         {{ps.archiveFolder.length ?? 0}}
          </MenubarShortcut>
        </MenubarItem>
      </NuxtLink>

      <NuxtLink
        to="/pockets/archive"
      >
        <MenubarItem inset>
          Trash

            <MenubarShortcut >
         {{ps.trashFolder.length ?? 0}}
          </MenubarShortcut>
        </MenubarItem>
      </NuxtLink>

      <MenubarSeparator />

      <MenubarItem>
        <NeutralButton class="flex gap-3 w-full" >
          <icon
            name="add-sm"
            class="size-5.5  shrink-0 stroke-[1.2] 0 drop-shadow-sm -ml-4"
          />
          New Pocket
        </NeutralButton>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</template>

<style scoped>

</style>