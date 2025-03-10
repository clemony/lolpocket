<script lang="ts" setup>
/* const { ControlRight, ControlLeft, MetaRight, MetaLeft, K } = useMagicKeys()

watchEffect(() => {
  if ((ControlLeft.value || ControlRight.value || MetaRight.value || MetaLeft.value) && K.value)
    console.log('Shift + A have been pressed')
}) */

const ds = useDataStore()
const us = useUiStore()
</script>

<template>
  <div class="flex gap-4 w-full items-center pr-2 overflow-hidden ">
    <SidebarButton class="overflow-hidden group/up pr-4 !btn-lg">
      <NuxtLink to="/" class="w-full pt-px items-center flex justify-start">
        <h4 class="dst select-none !tracking-normal ">
          LP
        </h4>
        <span class="flex gap-1 pl-2 items-center translate-y-3 opacity-0 pointer-events-none group-hover/up:translate-y-0 group-hover/up:opacity-100 tldr-30 ease-in-out expand-hide">
          up
          <icon name="arrow-up" class="size-5" />
        </span>
      </NuxtLink>

      <button
        v-if="us.sidebarExpanded"
        class="justify-self-end  btn gap-2    border-b3 hover:ring-neutral/50 flex h-9 !bg-b1  cursor-pointer items-center  px-3 !py-0  hover:!bg-b1  hover:ring-1 group inset-shadow-xs group  expand-hide"
        :style="{ '--noise': 0 }" @click.stop="ts.commandOpen = true">
        <icon
          name="teenyicons:search-outline"
          class="-mt-px  size-3.5 opacity-80 group-hover:opacity-100" />

        <span
          class="!text-3   text-bc/50">
          {{ getDeviceKey() }} K
        </span>
      </button>
    </SidebarButton>

    <!--
    <LazyCommand /> -->
  </div>
</template>