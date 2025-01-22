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
    }
  )

  const classObject = computed(() => {
    if (champCheck.value) {
      return 'content-wrapper'
    } else {
      return 'hidden'
    }
  })
</script>

<template>
  <div
    class="grid grid-rows-[repeat(8,min-content)_1fr] grid-cols-1 justify-start h-[95vh] max-h-[95vh] min-h-[90vh] max-w-90 w-full pl-14"
    ref="el">
    <PocketHeader :pocket="pocket" />

    <ul class="flex flex-col gap-3 pt-3 pb-4 w-full">
      <li><LinkButton link="">Overview</LinkButton></li>
      <li><LinkButton link="Items">Items</LinkButton></li>
      <li><LinkButton link="Runes">Runes</LinkButton></li>
    </ul>
    <Separator />

    <label
      for="champ"
      class="collapse pointer-events-auto p-0 w-full group -mb-2">
      <input
        type="checkbox"
        id="champ"
        v-model="champCheck"
        class="peer" />
      <div class="collapse-title -mb-2 !pl-0 pr-2 text-start w-full flex items-center flex-nowrap pt-2 pb-0 relative">
        <span class="grow">Champions</span>

        <PlusMinusExpand v-model:check="champCheck" />
      </div>
      <div class="collapse-content !px-0 py-0">
        <SelectedChampions
          :pocket="pocket"
          class="py-1" />
      </div>
    </label>

    <div class="collapse p-0 w-full -mb-3">
      <input
        type="checkbox"
        v-model="roleCheck" />

      <div class="collapse-title flex items-center flex-nowrap !pl-0 pr-2 pt-0 pb-0 text-start w-full -mb-4">
        <span class="grow">Role</span>

        <PlusMinusExpand :check="roleCheck" />
      </div>
      <div class="collapse-content !px-0.75 py-0">
        <LazyRoleSelect
          :pocket="pocket"
          class="" />
      </div>
    </div>

    <div class="collapse p-0 w-full">
      <input
        type="checkbox"
        v-model="spellCheck"
        checkThis />

      <div class="collapse-title flex items-center flex-nowrap !pl-0 pr-2 text-start w-full pt-0 pb-0 -mb-4">
        <span class="grow">Summoner Spells</span>

        <PlusMinusExpand :check="spellCheck" />
      </div>
      <div class="collapse-content !px-0.75 py-0">
        <LazySummonerSpellDisplay
          :pocket="pocket"
          class="" />
      </div>
    </div>
    <Separator class="mt-3" />
    <div class="py-3">Pocket Browser</div>
    <div class="grid w-full h-fit max-h-full grid-cols-1 overflow-y-auto overflow-x-hidden">
      <PocketFileTree />
    </div>
  </div>
</template>

<style></style>
