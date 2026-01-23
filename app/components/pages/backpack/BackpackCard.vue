<script lang="ts" setup>
import type { Pocket } from '~~/shared/types/schema/schema.pocket'

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
  <div class="max-h-90 min-h-70 w-full max-w-100 min-w-88">
    <ContextMenu
      as="div"
      class="h-inherit min-h-inherit w-inherit min-w-inherit">
      <ContextMenuTrigger
        as="div"
        class="
          h-inherit min-h-inherit w-inherit min-w-inherit border-b2
          shadow-warm-soft hover:border-b3 hover:shadow-warm hover:ring-b2 relative cursor-pointer
          gap-3 overflow-hidden rounded-xl border
          drop-shadow-sm drop-shadow-black/5 **:select-none hover:ring-1
        "
        @click="navigateTo(`/pocket/${pocket.key}`)">
        <BackpackCardBackground :pocket="pocket" />

        <div
          key="card-wrapper"
          class="
            pointer-events-auto! absolute inset-0 z-1 grid size-full
            items-center overflow-hidden rounded-xl
          ">
          <div
            class="
              pointer-events-none relative grid size-full px-4 py-3 inset-shadow-sm
            ">
            <BackpackRunes :pocket="pocket" />

            <div class="flex w-full gap-6 self-end">
              <div
                class="flex grow flex-col gap-2 self-end pb-4 pl-3 font-medium">
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
