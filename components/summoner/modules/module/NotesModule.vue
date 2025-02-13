<script lang="ts" setup>
const as = useAccountStore()
const activeTab = ref(1)

const title = ['Best Builds', 'Ideas', 'Try this']
</script>

<template>
  <ModuleTemplate title=" " class="!shadow-none !border-0">
    <!--    <div class="relative size-full">
      <div
        role="tablist" class="absolute inset-0 top-0 -left-6 size-full tabs tabs-lift mx-4 "
        :style="{ flexWrap: 'nowrap' }"
      >
        <label v-for="(note, i) in as.userNotes" :key="i" role="tab" :class="{ 'tab-active': activeTab == i }" class=" tab !w-32 ">
          <input v-model="activeTab" type="radio" class="peer hidden" :value="i" />
          <div class="size-fullflex items-center justify-center" :class="{ ' tab-fix-2': activeTab == i }">
            <i-tab-border v-if="activeTab == i" class="absolute -right-[9px] top-6.5 text-b3 size-3.5 " />
            <i-tab-border v-if="activeTab == i" class="absolute -scale-x-100 -left-3.25 top-6.5 text-b3 size-3.5 " />
            <div class="size-full  flex items-center before:absolute justify-center" :class="{ ' tab-fix': activeTab == i }">
              {{ note.title }}
            </div></div>
        </label>
        <div class=" relative">
          <div class="absolute -bottom-22 -left-95 flex items-center h-22 w-95">

          </div>
        </div>
      </div>
    </div>  -->

    <!-- name of each tab group should be unique -->
    <div class="size-full grid relative">
      <div class="tabs tabs-lift -mt-7 h-full">
        <label v-for="(note, i) in as.userNotes" :key="i" class="tab min-w-32 max-w-32 w-32" role="tab" :class="{ 'tab-active': activeTab == i }">
          <input v-model="activeTab" type="radio" class="peer hidden" :value="i" />
          hihihihi
        </label>
        <div class="tab-content bg-base-100 border-b3 p-6">
          Tab content 1
        </div>

        <template v-if="!as.userNotes.length">
          <label class="tab w-32 min-w-32 max-w-32  shadow-sm tab-active" role="tab">
            <input type="radio" name="module-notes" aria-label="Default Note" class="hidden absolute" />
            <div class="absolute h-4 bg-gradient-to-b from-b1 to-transparent from-60% w-31.5 bg-b1 top-9.5 ">
              <icon name="tabler:triangle-filled" class="text-b1 size-4 -rotate-15 absolute -top-1.5 -right-2" />
            </div>
            <div class="size-full  flex items-center before:absolute justify-center tab-fix after:hidden">
              <i-tab-border class="absolute -right-[9px] top-[20px] text-b3 size-[10px] " />Notes
            </div>

          </label>
          <div class="tab-content h-full min-h-[225px] grow shadow-sm bg-b1 border-b3 p-6 rounded-tl-none">
            <TextEditor />
          </div>
        </template>
      </div>
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>