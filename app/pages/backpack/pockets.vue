<script lang="ts" setup>
import type { Pocket } from '~~/shared/schema'
import { generatePocket } from '~~/shared/schema'

definePageMeta({
  name: 'pockets',
  icon: 'folder',
  listClass: ' size-4.75',
  order: 1,
})

const selected = ref<Pocket>(null)
</script>

<template>
  <div class="">
    <BoxPage>
      <template #center>
        <BoxPanelCenter title="Pockets">
          <template #tabs>
            <Button
              variant="neutral"
              class="ml-auto pr-4 pl-2.5 font-normal"
              @click="generatePocket(ps().pockets)">
              <icon name="add" />
              Add Pocket
            </Button>
          </template>

          <TransitionScalePop class="flex size-full flex-col gap-6 px-4">
            <LazyBackpackBoxCard
              v-for="pocket in ps().pockets.filter(
                (p) => !(ps().pinned.includes(p.key) || ps().trash.includes(p.key) || ps().archive.includes(p.key)),
              )"
              :key="pocket.key"
              :pocket
              :selected
              @click="selected = pocket" />
            <Button
              v-tippy="'Add Pocket'"
              class="h-38 w-full"
              variant="ghost">
              <icon
                name="add"
                class="size-7 **:stroke-[1.5]" />
            </Button>
          </TransitionScalePop>
        </BoxPanelCenter>
      </template>
      <template #right>
        <div class="flex h-full flex-col">
          <PocketDetailMenu :pocket-key="selected?.key ?? null" />
          <BackpackCardDetail :pocket="selected" />
        </div>
      </template>
    </BoxPage>
  </div>
</template>
