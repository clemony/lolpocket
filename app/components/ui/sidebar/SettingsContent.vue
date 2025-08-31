<script lang="ts" setup>
const option = ref('General')
</script>

<template>
  <!--
  <LazySettingsSheet
    v-model:open="settingsOpen"
    hydrate-on-interact /> -->
  <SidebarContentWrapper title="Settings">
    <SidebarGroupContent class="gap-6 py-4 w-full !flex flex-col items-start">
      <Accordion
        v-model:model-value="option"
        type="single"
        collapsible
        class="w-full justify-start">
        <SidebarMenu>
          <AccordionItem
            value="General">
            <SidebarMenuItem>
              <AccordionTrigger class="group/option">
                <SidebarMenuButton
                  size="lg"
                  class="justify-between text-3 font-semibold text-bc/60">
                  General

                  <icon
                    name="left"
                    class="size-5.5 group-data-[state=open]/option:-rotate-90 transition-rotate duration-200" />
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
                  size="lg"
                  class="justify-between text-3 font-semibold text-bc/60">
                  Account
                  <icon
                    name="left"
                    class="size-5.5 group-data-[state=open]/option:-rotate-90 transition-rotate duration-200" />
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
    </SidebarGroupContent>
  </SidebarContentWrapper>
</template>