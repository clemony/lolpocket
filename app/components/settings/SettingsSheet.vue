<script lang="ts" setup>
import { DrawerTrigger } from 'vaul-vue'

const as = useAccountStore()

const tabs = ref('App')
</script>

<template>
  <Drawer direction="right">
    <DrawerTrigger as-child>
      <slot />
    </DrawerTrigger>

    <LazyDrawerContent side="right">
      <div class="flex flex-col max-w-140 h-screen max-h-screen gap-6 px-0 pt-6 overflow-hidden ">
        <Tabs v-model:model-value="tabs">
          <DrawerHeader class="px-0 pb-0 flex mb-6 px-6 items-center justify-between gap-8  w-full  ">
            <DrawerTitle>
              Settings
            </DrawerTitle>

            <Hide>
              <DrawerDescription>Modify Account Details</DrawerDescription>
            </Hide>

            <IndicatorTabsList class="**:!font-medium  grid-cols-2 *:w-26">
              <IndicatorTabsTrigger value="App">
                App
              </IndicatorTabsTrigger>

              <IndicatorTabsTrigger value="Account">
                Account
              </IndicatorTabsTrigger>

              <TabIndicator class="-bottom-0.25" />
            </IndicatorTabsList>
          </DrawerHeader>

          <TransitionSlide
            group
            :offset="[-16, 0]">
            <TabsContent
              v-if="tabs == 'App'"
              value="App"
              class="flex flex-col w-130 h-screen max-h-screen gap-6 px-6  overflow-hidden ">
              <SettingsGeneral />

              <p class="w-full border-b font-semibold    text-5 w-full h-7  border-b-b3">
                Themes
              </p>

              <SettingsTheme />
            </TabsContent>

            <TabsContent
              v-if="tabs == 'Account'"
              value="Account"
              class="flex flex-col w-130 h-screen max-h-screen gap-8 px-6 overflow-hidden ">
              <p class="w-full border-b mt-6 font-semibold text-5 w-full h-7  border-b-b3">
                Connected Accounts
              </p>

              <SettingsAccount />

              <p class="w-full border-b font-semibold   text-5 w-full h-7 pb-4 border-b-b3">
                Notifications
              </p>

              <SettingsNotifications />
            </TabsContent>
          </TransitionSlide>
        </Tabs>

        <div class="h-8" />

        <div class="w-full left-0 justify-end grid border-t-b3/60 border-t  py-5 px-4  bg-b2/20 backdrop-blur-md  absolute bottom-0">
          <button class="btn btn-neutral px-8">
            Save
          </button>
        </div>
      </div>
    </LazyDrawerContent>
  </Drawer>
</template>