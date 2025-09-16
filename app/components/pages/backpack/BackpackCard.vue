<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

/*  @click="navigateTo(`/pocket/${pocket.key}`) */
const menuOpen = ref(false)
</script>

<template>
  <div class="w-full min-w-[22rem] max-w-100 min-h-[17.5rem] max-h-[22.5rem]">
    <ContextMenu
      as="div"
      class="w-inherit h-inherit min-w-inherit min-h-inherit">
      <ContextMenuTrigger
        as="div"
        class="**:select-none drop-shadow-sm cursor-pointer w-inherit h-inherit min-w-inherit min-h-inherit drop-shadow-black/5 hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-warm relative border border-b2 rounded-xl shadow-warm-soft gap-3 overflow-hidden"
        @click="navigateTo(`/pocket/${pocket.key}`)">
        <BackpackCardBackground :pocket="pocket" />

        <div
          key="card-wrapper"
          class="absolute grid z-1 !pointer-events-auto inset-0 items-center rounded-xl overflow-hidden size-full">
          <div
            class="pointer-events-none py-3 px-4 size-full inset-shadow grid relative">
            <BackpackRunes :pocket="pocket" />

            <div class="flex gap-6 self-end w-full">
              <div
                class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">
                <BackpackChampion :pocket="pocket" />

                <div class="group flex flex-col gap-1 pr-4">
                  <p class="grow pb-3">
                    {{ pocket.name }}
                  </p>

                  <BackpackRoles :pocket="pocket" />
                </div>

                <BackpackItems :pocket="pocket" />
              </div>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>

      <LazyBackpackPocketMenu
        :pocket="pocket"
        hydrate-on-interact />
    </ContextMenu>
  </div>
</template>
