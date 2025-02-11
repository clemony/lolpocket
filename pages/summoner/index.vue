<script lang="ts" setup>
definePageMeta({
  alias: '/summoner',
  path: '/summoner',
})

const as = useAccountStore()
const ts = useTempStore()
const user = ref(as.userAccount)
</script>

<template>
  <ModuleDrawer>
    <div class="pt-[5vh] wrapper size-full items-center justify-center gap-15">
      <div class="w-full grid-cols-3 grid h-[8vh] items-center px-12">
        <div class=" flex items-center gap-3">
          <h1 class="!text-9 drop-shadow-text px-2 tracking-tight flex flex-wrap capitalize">
            {{ user.gameName != 'Summoner' ? `${user.gameName}'s` : `${user.name}'s` != 'Summoner' ? user.name : 'Summoner' }} Board
          </h1>

          <button v-tippy="'Modules'" class="btn px-2 w-fit font-normal !text-3 rounded-md hover:bg-b2/85 drawer-button " @click="ts.moduleDrawerTrigger = true">
            <icon name="ph:squares-four-light" class="size-6.5 dst " />
          </button>
        </div>
      </div>

      <ModuleWrapper v-for="(moduleList, index) in as.userBoardModules" :key="index" :modules="moduleList" :index="index" location="board" />
    </div>
  </ModuleDrawer>
</template>

<style scoped></style>
