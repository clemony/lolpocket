<script lang="ts" setup>
import SettingsGeneral from 'components/ui/menu/settings/SettingsGeneral.vue'
import SettingsTheme from 'components/ui/menu/settings/SettingsTheme.vue'
import SettingsAccount from 'components/ui/menu/settings/SettingsAccount.vue'

const target = ref<HTMLElement>(null)
const us = useUiStore()
onClickOutside(target, event => handleSidebarClose(us.settingsOpen))

const tabs = [
  {
    value: 'general',
    component: SettingsGeneral,
  },
  {
    value: 'account',
    component: SettingsAccount,
  },
  {
    value: 'theme',
    component: SettingsTheme,
  },
]
const currentTab = ref('general')
</script>

<template>
  <div ref="target" class="size-full ">
    <SidebarTitle class="sticky top-0 left-0 before:top-0 before:left-0 before:bg-b2/20 before:backdrop-blur-md before:absolute before:w-full before:h-32  before:border-b before:border-b-b3/30">
      <label class="btn btn-ghost absolute right-3 btn-square z-6 -ml-1 mr-1" @click="handleSidebarClose(us.settingsOpen)">
        <icon name="material-symbols-light:exit-to-app" class="size-6.5 -scale-x-100 dst" />
        <!--       <input v-model="us.settingsOpen" type="checkbox" class="peer hidden" /> -->
      </label>
    </SidebarTitle>

    <Tabs default-value="general" class="w-full">
      <div class=" py-4 px-3 sticky top-15 z-5 ">
        <TabsList class="w-full grid grid-cols-3 bg-b3/40">
          <HoverTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" class="capitalize" @click="currentTab = tab.value">
            {{ tab.value }}
          </HoverTabsTrigger>
        </TabsList>
      </div>
      <MotionTabContentWrapper group class="py-5">
        <template v-for="tab in tabs" :key="tab">
          <TabsContent v-if="tab.value == currentTab" :value="tab.value">
            <component :is="tab.component" />
          </TabsContent>
        </template>
      </MotionTabContentWrapper>
    </Tabs>
  </div>
</template>