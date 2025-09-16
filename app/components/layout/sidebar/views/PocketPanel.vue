<script lang="ts" setup>
const emit = defineEmits(['close-sidebar'])

const route = useRoute()

const groups = [
  {
    name: 'pinned',
    pockets: computed(() => ps().pockets.filter(p => p.location.pinned))
      .value,
  },

  {
    name: 'unsorted',
    pockets: computed(() =>
      ps().pockets.filter(
        p => !p.location.pinned && p.location.folder == 'all'
      )
    ).value,
  },
]
</script>

<template>
  <aside>
    <SidebarHeaderWrapper title="Pockets" />
    <div class="px-6 py-4 flex flex-col gap-4">
      <Collapsible
        v-for="(group, i) in groups"
        :key="group.name"
        v-model:open="us().collapseStates.panel.pocket[i]"
        class="pr-2">
        <CollapsibleTrigger as-child>
          <Label class="my-1 gap-4 items-center">
            <span class="grow text-6 font-bold dst">
              {{ group.name }}
            </span>

            <CaretRotate />
          </Label>
        </CollapsibleTrigger>

        <CollapsibleContent
          class="after:top-3 mt-2 pt-1 gap-1 relative flex flex-col justify-items-center">
          <Blink
            v-for="pocket in group.pockets"
            :key="pocket.key"
            :to="`/pocket/${pocket.key}`"
            variant="ghost"
            size="lg"
            :class="
              cn(
                'gap-2.75 pl-4 w-full !duration-0 !text-bc/60 h-10 text-sm capitalize text-nowrap flex-nowrap overflow-hidden hover:!text-bc justify-start',
                { 'btn-active': route.params?.pocket_key == pocket.key },
              )
            "
            @click="emit('close-sidebar')">
            {{ pocket.name || pocket.key }}
          </Blink>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </aside>
</template>
