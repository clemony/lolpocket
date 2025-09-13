<script lang="ts" setup>
import { getDeviceKey } from '~/utils/config/handleDevice'

const props = defineProps<{
  pocketData?: Pocket
}>()

const emit = defineEmits(['update:grid'])
const pocket = computedAsync(() => props.pocketData)

// console.log('💠 - pocket:', pocket)
// const { userFolders } = useUserFolders()

const sort = ref('id')

onMounted (async () => {
  const a = ref(props.pocketData)
  await a
  console.log('💠 - onMounted - a:', a)
})
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="">
      <slot />
    </ContextMenuTrigger>

    <ContextMenuPortal>
      <ContextMenuContent
        class="context-menu w-74 h-max z-999 pointer-events-auto text-2  **:text-2"
        @interact-outside="emit('update:grid')">
        <ContextMenuItem
          icon="basil:add-outline"
          icon-class="!size-5.5 opacity-60 -mt-0.5 shrink-0"
          class=" [&_svg]:stroke-2">
          New Pocket
          <ContextMenuShortcut>{{ getDeviceKey() }}P</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            Sort Table
          </ContextMenuSubTrigger>

          <ContextMenuPortal>
            <ContextMenuSubContent>
              <ContextMenuRadioGroup v-model="sort">
                <ContextMenuRadioItem
                  value="id"
                  @select.prevent>
                  By Item ID
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuRadioItem>

                <ContextMenuRadioItem
                  value="az"
                  @select.prevent>
                  Alphabetically
                </ContextMenuRadioItem>

                <ContextMenuRadioItem
                  value="price"
                  @select.prevent>
                  Price
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>

        <template v-if="props.pocketData">
          <!-- <ContextMenuSub v-if="as.userFolders.length">
          <ContextMenuSubTrigger text-value="Move to Folder">
            Move to Folder
          </ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent class="w-48">
              <ContextMenuRadioGroup :model-value="pocket.location.folder">
                <ContextMenuLabel inset>
                  Folders
                </ContextMenuLabel>

                <ContextMenuSeparator />
                   <ContextMenuRadioItem v-for="folder in as.userFolders" :key="folder.key" :value="folder.key">
                {{ folder.name }}
              </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub> -->

          <ContextMenuSeparator />

          <ContextMenuItem>
            <NuxtLink :to="`/pocket/${pocket.key}/`">
              Edit
            </NuxtLink>
          </ContextMenuItem>

          <ContextMenuItem @click="duplicatePocket(pocket)">
            Duplicate

            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem
            inset
            disabled>
            Pin
          </ContextMenuItem>

          <ContextMenuItem
            inset
            disabled>
            Archive
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem @click="deletePocket(pocket.key)">
            Delete
          </ContextMenuItem>
        </template>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenu>
</template>

<style scoped>

</style>