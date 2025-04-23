<script lang="ts" setup>
import SettingsGeneral from 'components/app/sidebar/comps/SettingsGeneral.vue'
import SettingsTheme from 'components/app/sidebar/comps/SettingsTheme.vue'
import SettingsAccount from 'components/app/sidebar/comps/SettingsAccount.vue'

const target = ref<HTMLElement>(null)
const us = useUiStore()
onClickOutside(target, event => handleSidebarClose(us.settingsOpen))

const tabs = [
  {
    value: 'general',
    component: SettingsGeneral,
   },
   {
     value:'account',
    component:  SettingsAccount,
   },
   {
    value: 'theme',
    component: SettingsTheme,
  }]
const currentTab = ref('general')
</script>

<template>
  <div class="size-full " ref="target">
    <SidebarTitle class="sticky top-0 left-0 before:top-0 before:left-0 before:bg-b2/20 before:backdrop-blur-md before:absolute before:w-full before:h-32  before:border-b before:border-b-b3/30">
        <label @click="handleSidebarClose(us.settingsOpen)" class="btn btn-ghost absolute right-3 btn-square z-6 -ml-1 mr-1">
          <icon name="material-symbols-light:exit-to-app" class="size-6.5 -scale-x-100 dst" />
    <!--       <input v-model="us.settingsOpen" type="checkbox" class="peer hidden" /> -->
        </label>
    </SidebarTitle>

    <Tabs default-value="general" class="w-full">
      <div class=" py-4 px-3 sticky top-15 z-5 ">
        <TabsList class="w-full grid grid-cols-3 bg-b3/40">
          <HoverTabsTrigger @click="currentTab = tab.value"  v-for="tab in tabs" :value="tab.value" :key="tab.value" class="capitalize">
            {{tab.value}}
          </HoverTabsTrigger>
         
        </TabsList>
      </div>
      <MotionTabContentWrapper  group class="py-5">
        <template v-for="tab in tabs"  :key="tab" >
        <TabsContent  :value="tab.value" v-if="tab.value == currentTab">
     <component :is="tab.component"  />
        </TabsContent>
        </template>
      </MotionTabContentWrapper>
    </Tabs>


  </div>
</template>