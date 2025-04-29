<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
/*
const emit = defineEmits(['update:modelValue']) */

const us = useUiStore()

function handleAddClick() {
  const ps = usePocketStore()
  ps.newPocketOpen = true
/*   emit('update:modelValue') */
}
</script>

<template>
  <div class="join self-center items-center rounded-box *:px-2 mr-3">
    <button v-tippy="'New Pocket'" class="btn-sm join-item btn-ghost  btn" :class="cn('', props.class)" @click="handleAddClick()">
      <icon
        name="mynaui:plus"
        class=" shrink-0 size-6.5  dst" />
    </button>
    <button v-tippy="`${getDeviceKey()} K`" class="btn-ghost btn-sm join-item btn  ">
      <icon name="mynaui:search" class="shrink-0 size-6 opacity-70 dst" />
    </button>
    <!--    <button v-tippy="'Settings'" class=" btn-sm btn btn-ghost join-item mr-3 disabled:hover:opacity-80" :class="{ 'btn-active  **:opacity-100 pointer-events-none': us.settingsOpen }" @click="handleSidebarOpen('settings')">
      <icon name="mynaui:cog-four-solid" class=" dst opacity-70 size-7 " />
    </button> -->
  </div>
</template>