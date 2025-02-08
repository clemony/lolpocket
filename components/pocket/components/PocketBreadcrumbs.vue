<script setup lang="ts">
import { DropdownMenuItemIndicator } from 'radix-vue'

const ts = useTempStore()
const as = useAccountStore()
const ps = usePocketStore()
const viewPocket = ref()

const openFolder = ref()
/*
const userFolders = computed (() => {
const folderObject = ref()
const a = .forEach(folderKey => {
 */
const folderKeys = as.userFolders.map(folder => folder.key)
console.log('💠 - folderKeys:', folderKeys)

const { userFolders } = useUserFolders()

onMounted (() => {
  const a = defaultFolders()[0].items.length ? defaultFolders()[0] : defaultFolders()[1]
  openFolder.value = a.name
})
</script>

<template>
  <div class="text-3 font-medium tracking-tight flex items-center px-6">
    <div class="flex flex-col gap-1.5">
      <p class="text-3 f-tt pl-0">
        Pocket Folders
      </p>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button class="btn btn-ghost hover:!btn-outline px-3 min-w-50  max-w-70  justify-start relative data-[state=open]:btn-active gap-3 align-bottom -ml-3">
        <icon name="folders" class="size-6 dst shrink-0 mt-0.25" />
              <h1 class="capitalize">
                {{ openFolder }}
              </h1>

              <icon name="select" class="size-5.5 shrink-0 absolute right-3" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-70" align="start">
            <DropdownMenuRadioGroup v-model="openFolder">
              <DropdownMenuRadioItem v-for="folder in defaultFolders()" :key="folder.key" :disabled="!folder.items.length && folder.name != 'all'" :value="folder.name" class="pl-2 pr-4 flex gap-4 text-2 py-2 disabled:opacity-60">
                <icon :name="folder.icon" class="size-4.5" />

                {{ folder.name }}

                <span class="absolute right-3 flex size-4 items-center justify-center">
                  <DropdownMenuItemIndicator>
                    <icon
                      name="tick-sm"
                      class="size-5 fill-current"
                    />
                  </DropdownMenuItemIndicator>
                </span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup v-if="userFolders" v-model="openFolder">
              <DropdownMenuRadioItem v-for="folder in userFolders" :key="folder.key" :disabled="!folder.items.length" :value="folder.name" class="pl-2 pr-4 flex gap-4 text-2 py-2 disabled:opacity-60">
                <icon :name="folder.icon" class="size-4.5" />

                {{ folder.name }}

                <span class="absolute right-3 flex size-4 items-center justify-center">
                  <DropdownMenuItemIndicator>
                    <icon
                      name="tick-sm"
                      class="size-5 fill-current"
                    />
                  </DropdownMenuItemIndicator>
                </span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem @click="ts.newFolderOpen = true">
              <icon name="add-sm" class="size-5" />
              New Folder
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
 
  </div>
</template>

<style scoped>
</style>