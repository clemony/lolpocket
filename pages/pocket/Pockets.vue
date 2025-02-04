<script lang="ts" setup>
import { ResizablePanel } from 'components/base/resizable/rindex'
import { DropdownMenuRadioGroup } from 'radix-vue'

const viewPocket = ref()

const openFolder = ref()

onMounted (() => {
  const a = defaultFolders()[0].items.length ? defaultFolders()[0] : defaultFolders()[1]
  openFolder.value = a.name
})
</script>

<template>
  <div class="size-full pt-[6vh]">
    <ResizablePanelGroup
      direction="horizontal"
      class="max-h-full h-full  border-t border-t-b3 "
    >
      <ResizablePanel :default-size="28" :min-size="10">
        <div class="h-[7vh] px-12 w-full flex items-center border-b border-b-b2">
          <h1 class="!text-8 text-nowrap">
            All Pockets
          </h1>
        </div>
        <PocketsCollapse v-for="folder in defaultFolders()" :key="folder.key" :folder="folder" />
      </ResizablePanel>
      <ResizableHandle
        with-handle
        class=""
      />

      <ResizablePanel :default-size="44" :min-size="10">
        <div class="h-[7vh] px-12 w-full flex items-center border-b border-b-b2">
          <div class="breadcrumbs text-3 font-medium tracking-tight">
            <ul class="flex items-center ">
              <li>
                <span class="inline-flex items-center gap-2.5">
                  <icon name="formkit:folder" class="size-4.5 dst" />
                  Pocket Folders
                </span>
              </li>
              <li class="">
                <DropdownMenu>
                  <DropdownMenuTrigger class="ml-2 border border-b3 rounded-md py-1.5 w-50 px-3 inset-shadow-sm items-center">
                    <span class="inline-flex items-center grow !gap-2.5 capitalize">
                      <icon name="teenyicons:folder-outline" />
                      {{ openFolder }}
                    </span>
                    <icon name="select" class="size-4.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-50">
                    <DropdownMenuRadioGroup v-model="openFolder">
                      <DropdownMenuRadioItem v-for="folder in defaultFolders()" :key="folder.key" :value="folder.name">
                        {{ folder.name }}
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle
        with-handle
        class=""
      />

      <ResizablePanel :min-size="20" :default-size="40">
        <div class="h-[7vh] px-12 w-full flex items-center border-b border-b-b2">
          <h3 class="text-nowrap">
            Detail
          </h3>
        </div>

        <div class="size-full pt-12 justify-items-center shadow-inset-sm">
          <PocketIdCard />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped>

</style>