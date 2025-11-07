<script lang="ts" setup>
const option = ref('General')
</script>

<template>
  <!--
  <LazySettingsSheet
    v-model:open="settingsOpen"
    hydrate-on-interact /> -->
  <SidebarContentWrapper title="Settings">
    <div class="!flex w-full flex-col items-start gap-6 py-4">
      <Accordion
        v-model:model-value="option"
        type="single"
        collapsible
        class="w-full justify-start">
        <SidebarMenu>
          <AccordionItem value="General">
            <SidebarMenuItem>
              <AccordionTrigger class="group/option">
                <SidebarMenuButton
                  size="12"
                  class="text-3 text-bc/60 justify-between font-semibold">
                  General

                  <icon
                    name="left"
                    class="transition-rotate size-5.5 duration-200 group-data-[state=open]/option:-rotate-90" />
                </SidebarMenuButton>
              </AccordionTrigger>
              <AccordionContent class="AccordionContent">
                <SidebarMenuSub>
                  <SidebarMenuSubItem />
                </SidebarMenuSub>
              </AccordionContent>
            </SidebarMenuItem>
          </AccordionItem>
        </SidebarMenu>

        <SidebarMenu>
          <AccordionItem value="Account">
            <SidebarMenuItem>
              <AccordionTrigger class="group/option">
                <SidebarMenuButton
                  size="12"
                  class="text-3 text-bc/60 justify-between font-semibold">
                  Account
                  <icon
                    name="left"
                    class="transition-rotate size-5.5 duration-200 group-data-[state=open]/option:-rotate-90" />
                </SidebarMenuButton>
              </AccordionTrigger>
              <AccordionContent class="AccordionContent">
                <SidebarMenuSub>
                  <SidebarMenuSubItem />
                </SidebarMenuSub>
              </AccordionContent>
            </SidebarMenuItem>
          </AccordionItem>
        </SidebarMenu>
      </Accordion>
    </div>
  </SidebarContentWrapper>
</template>
