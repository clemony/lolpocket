<script lang="ts" setup>
import { deletePocket } from "~/domain/pocket/deletePocket"
import { duplicatePocket } from "~/domain/pocket/manage/duplicate"
const props = defineProps<{
  pocketData?: Pocket
}>()

const emit = defineEmits(["update:grid"])

const pocket = computed(() => props.pocketData)

// console.log('💠 - pocket:', pocket)
// const { userFolders } = useUserFolders()

const sort = ref("id")

onMounted(async () => {
  const a = ref(props.pocketData)
  await a
  console.log("💠 - onMounted - a:", a)
})
</script>

<template>
  <UContextMenu>
    <UButton class="">
      <slot />
    </UButton>
    <!--
    <ContextMenuPortal>
      <ContextMenuContent
        class="context-menu pointer-events-auto z-999 h-max w-74 text-sm **:text-sm"
        @interact-outside="emit('update:grid')">
        <ContextMenuItem
          class="[&_svg]:stroke-2"
          icon="basil:add-outline"
          icon-class="!size-5.5 opacity-60 -mt-0.5 shrink-0">
          New Pocket
          <ContextMenuShortcut>
            <UKbd value="meta" /> <UKbd value="P"
          /></ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuSub>
          <ContextMenuSubTrigger>Sort Table</ContextMenuSubTrigger>

          <ContextMenuPortal>
            <ContextMenuSubContent>
              <ContextMenuURadioGroup v-model="sort">
                <ContextMenuRadioItem value="id" @select.prevent>
                  By Item ID
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuRadioItem>

                <ContextMenuRadioItem value="az" @select.prevent>
                  Alphabetically
                </ContextMenuRadioItem>

                <ContextMenuRadioItem value="price" @select.prevent>
                  Price
                </ContextMenuRadioItem>
              </ContextMenuURadioGroup>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub> -->

    <!--    <template v-if="pocket">
        <ContextMenuSub v-if="user().userFolders.length">
          <ContextMenuSubTrigger text-value="Move to Folder">
            Move to Folder
          </ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent class="w-48">
              <ContextMenuURadioGroup :model-value="pocket.location.folder">
                <ContextMenuLabel inset>
                  Folders
                </ContextMenuLabel>

                <ContextMenuSeparator />
                   <ContextMenuRadioItem v-for="folder in user().userFolders" :key="folder.key" :value="folder.key">
                {{ folder.name }}
              </ContextMenuRadioItem>
              </ContextMenuURadioGroup>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub> -->

    <!--   <ContextMenuSeparator />

          <ContextMenuItem>
            <NuxtLink :to="`/pocket/${pocket?.key}/`"> Edit </NuxtLink>
          </ContextMenuItem>

          <ContextMenuItem @click="pocket ? duplicatePocket(pocket) : null">
            Duplicate

            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem inset disabled> Pin </ContextMenuItem>

          <ContextMenuItem inset disabled> Archive </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem @click="pocket ? deletePocket(pocket.key) : null">
            Delete
          </ContextMenuItem>
        </template>
      </ContextMenuContent>
    </ContextMenuPortal> -->
  </UContextMenu>
</template>
