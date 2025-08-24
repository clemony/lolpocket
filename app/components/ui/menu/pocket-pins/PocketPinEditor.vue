<script lang="ts" setup>
const ps = usePocketStore()
const as = useAccountStore()

const pocketKeys = computed(() =>
  ps.pockets.map(p => p.key).filter(k => !as.pockets.pinned.map(p => p.key).includes(k)),
)
</script>

<template>
  <ResponsiveDialog>
    <ResponsiveDialogTrigger>
      <slot />
    </ResponsiveDialogTrigger>

    <LazyResponsiveDialogContent
      side="bottom"
      class="w-180 min-w-180 h-138 focus:outline-none flex flex-col gap-10 px-7 ">
      <div class="flex justify-between items-start">
        <ResponsiveDialogHeader
          title="Edit Pocket Pins"
          description="Select and organize your favorite pockets for easy access."
          class="[&_h1]:text-6 [&_p]:opacity-90" />

        <tippy

          class="size-10 grid place-items-center -mt-4">
          <icon
            name="info-circle"
            class="" />

          <template #content>
            <div class="max-w-64 flex flex-col gap-3 *:leading-5 *:text-pretty  p-2">
              <p>
                Click pocket labels for pocket preview popup.
              </p>

              <p>
                A total of 5 pockets may be pinned at a time.
              </p>

              <p>
                If another pocket is added, the last pocket is automatically unpinned.
              </p>
            </div>
          </template>
        </tippy>
      </div>

      <div class="grid grid-cols-[45%_55%] gap-5 w-full h-110">
        <DraggableAllPockets :pocket-keys="pocketKeys" />

        <DraggablePinnedPockets :pocket-keys="pocketKeys" />

        <!--
        <div class="size-full relative grid justify-items-center dst h-100 opacity-50 row-start-1 col-start-2">
          <icon name="tdesign:swap" class="absolute top-[37%]" />
        </div> -->
      </div>
    </LazyResponsiveDialogContent>
  </ResponsiveDialog>
</template>