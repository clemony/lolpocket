<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

/*  @click="navigateTo(`/pocket/${pocket.key}`) */
const menuOpen = ref(false)
</script>

<template>
  <label
    class=" **:select-none max-w-140 min-w-100 h-80 grow max-h-80 size-full hover:border-b3 hover:ring-1 hover:ring-b2 hover:shadow-pretty relative border group border-transparent  rounded-xl  shadow-warm gap-3 overflow-hidden ">

    <div class=" swap-off size-full">
      <BackpackCardBackground :pocket="pocket" />

      <div
        key="card-wrapper" class="absolute grid z-1  !pointer-events-auto inset-0 items-center rounded-xl overflow-hidden size-full">
        <div class="  pointer-events-none py-3 px-4 size-full   inset-shadow grid relative">

          <BackpackRunes :pocket="pocket" />

          <button v-tippy="'Open Pocket'" class="btn-ghost cursor-pointer hover:bg-b2/60 btn btn-square backdrop-blur-md absolute right-3 top-2 pointer-events-auto" @click="navigateTo(`/pocket/${pocket.key}`)">
            <icon name="open" class=" size-7 " />
          </button>

          <div class="flex gap-6 self-end w-full">
            <div class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">

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

    </div>

    <div class=" bg-white size-full gap-3 hidden ">
      <BackpackMenu :pocket="pocket" :menu-open="menuOpen" />
    </div>
  </label>
</template>
