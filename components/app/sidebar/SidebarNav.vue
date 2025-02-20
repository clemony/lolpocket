<script lang="ts" setup>
import { vMouseInElement } from '@vueuse/components'


const props = defineProps<{
  modelValue: Array<SidebarItem>
}>()
const translateY = ref()

const ss = useSidebarStore()

const nav= ref(null)
const button= ref(null)


const isOutsideNav = ref(true)
function onMouseInNav({ isOutside }) {
isOutsideNav.value = isOutside
}

const isOutsideButton = ref(true)
function onMouseInButton({ isOutside }) {
  isOutsideButton.value = isOutside
}

watch(
() => isOutsideNav.value,
(newVal) => {
 if(newVal == true && isOutsideButton.value == true){
  ss.sidebarDisabled = false
 }
}
)
</script>

<template>
  <ul ref="nav" class="timeline timeline-vertical pointer-events-none justify-center items-center relative self-center w-fit py-0 px-2 rounded-full bg-b2 border-b3 shadow-sm " v-mouse-in-element="onMouseInNav">
    <div class="absolute pointer-events-none **:pointer-events-none w-1  bg-b3/30 h-4/5 overflow-hidden justify-center">
      <div class="size-full duration-1000 transition-all " :style="{ transform: translateY }">
        <div
          class="  size-5 bg-neutral shadow-[0px_0px_30px_5px_var(--color-bc)]"
        >
        </div>
      </div>
    </div>

    <SidebarNavButton ref="button"  v-for="page in props.modelValue" v-mouse-in-element="onMouseInButton" :page="page" :key="page.link" :model-value="props.modelValue" @update:translate="(e) => translateY = e" />
  </ul>
</template>

<style scoped>

</style>