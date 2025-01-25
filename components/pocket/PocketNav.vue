<script lang="ts" setup>
import { ResizablePanel } from 'components/base/resizable/rindex'

const props = defineProps<{
  pocket?: pocket
}>()

const pocket = ref(props.pocket)

const champCheck = ref(true)
const roleCheck = ref(false)
const spellCheck = ref(true)

watch(
  () => champCheck.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

function handleResize(e) {
  console.log('💠 - handleResize - e:', e)
}
</script>

<template>
  <ResizablePanelGroup
    auto-save-id="nav-split"
    direction="vertical"
    class="  h-full min-h-full max-h-full  pl-7  bg-b2/30  border-b2 border-l "
  >
    <ResizablePanel :default-size="60">
      <div class="pr-7">
        <MenubarSpacer class="bg-b3 w-full" />
        <PocketHeader :pocket="pocket" />

        <ul class="flex flex-col gap-3 pt-5  w-full">
          <li>
            <LinkButton link="">
              Overview
            </LinkButton>
          </li>
          <li>
            <LinkButton link="Items">
              Items
            </LinkButton>
          </li>
          <li>
            <LinkButton link="Runes">
              Runes
            </LinkButton>
          </li>
        </ul>

        <label
          for="champ"
          class="collapse pointer-events-auto p-0 w-full group -mt-2 -mb-2"
        >
          <input
            id="champ"
            v-model="champCheck"
            type="checkbox"
            class="peer"
          />
          <div class="collapse-title pl-2  pr-2 text-start w-full flex items-center flex-nowrap  pb-0 relative">
            <span class="grow">Champions</span>

            <PlusMinusExpand v-model:check="champCheck" />
          </div>
          <div class="collapse-content  py-0">
            <SelectedChampions
              :pocket="pocket"
              class="pt-1"
            />
          </div>
        </label>

        <div class="collapse p-0 w-full ">
          <input
            v-model="roleCheck"
            type="checkbox"
          />

          <div class="collapse-title flex items-center mt-2 flex-nowrap px-2 pt-0 !pb-0 text-start w-full ">
            <span class="grow">Roles</span>

            <PlusMinusExpand :check="roleCheck" />
          </div>
          <div class="collapse-content !pt-0">
            <LazyRoleSelect
              :pocket="pocket"
              class=""
            />
          </div>
        </div>

        <div class="collapse p-0 w-full -mt-2">
          <input
            v-model="spellCheck"
            type="checkbox"
            checkThis
          />

          <div class="collapse-title flex items-center flex-nowrap px-2 text-start w-full pt-0 pb-0 ">
            <span class="grow">Summoner Spells</span>

            <PlusMinusExpand :check="spellCheck" />
          </div>
          <div class="collapse-content  py-0">
            <LazySummonerSpellDisplay
              :pocket="pocket"
              class=""
            />
          </div>
        </div>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :default-size="40" @resize="handleResize($event)">
      <div class="h-full">
        <div class="py-3 ">
          Pocket Browser
        </div>
        <div class="max-h-full h-full justify-start overflow-auto pr-7">
          <PocketFileTree />
        </div>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style></style>
