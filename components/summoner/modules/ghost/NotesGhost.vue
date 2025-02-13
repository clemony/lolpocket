<script lang="ts" setup>
const props = defineProps<{
  text?: string
  title?: string
}>()

const activeTab = ref(2)

const title = ['Best Builds', 'Ideas', 'Try this']
</script>

<template>
  <ModuleGhostTemplate title="Notes">
    <div class="relative size-full">
      <div
        role="tablist" class="absolute inset-0 top-0 -left-6 size-full tabs tabs-lift "
        :style="{ flexWrap: 'nowrap' }"
      >
        <label v-for="i in 3" :key="i" role="tab" :class="{ 'tab-active': activeTab == i }" class=" tab !w-32 ">
          <input v-model="activeTab" type="radio" class="peer hidden" :value="i" />
          <div class="size-fullflex items-center justify-center" :class="{ ' tab-fix-2': activeTab == i }">
            <i-tab-border v-if="activeTab == i" class="absolute -right-[9px] top-6.5 text-b3 size-3.5 " />
            <i-tab-border v-if="activeTab == i" class="absolute -scale-x-100 -left-3.25 top-6.5 text-b3 size-3.5 " />
            <div class="size-full  flex items-center before:absolute justify-center" :class="{ ' tab-fix': activeTab == i }">
              {{ title[i - 1] }}
            </div></div>
        </label>
        <div class=" relative">
          <div class="absolute -bottom-22 -left-95 flex items-center h-22 w-95">
            A spot to jot down quick reminders.
          </div>
        </div>
      </div>
    </div>
  </ModuleGhostTemplate>
</template>

<style scoped>

</style>