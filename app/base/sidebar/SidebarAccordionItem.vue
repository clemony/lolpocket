<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  linkObject: LinkObject
}>()
</script>

<template>
  <SidebarMenu>
    <AccordionItem
      :value="linkObject.name">
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          class="group/option justify-between text-3 font-semibold text-bc/60"
          as-child>
          <AccordionTrigger
            v-if="linkObject.links"
            :disabled="!linkObject.links">
            {{ linkObject.name }}
          </AccordionTrigger>

          <NuxtLink
            v-else
            class="capitalize">
            {{ linkObject.name }}
          </NuxtLink>
        </SidebarMenuButton>

        <AccordionContent class="AccordionContent">
          <SidebarMenuSub class="gap-0">
            <SidebarMenuSubItem
              v-for="link in linkObject.links"
              :key="link.name">
              <SidebarMenuSubButton
                as-child
                size="md">
                <NuxtLink
                  v-if="link.link"
                  :to="link.link"
                  class="gap-2.75  h-10 text-2 font-medium capitalize  !overflow-visible">
                  <span class="grid place-items-center relative !overflow-visible size-5.5 py-px">
                    <hicon
                      :name="link.icon?.alt ? link.icon?.alt.name : link.icon?.name"
                      :class="cn('dst absolute  overflow-visible size-5 ', link.icon?.alt ? link.icon?.alt.class : link.icon?.class)" />

                    <hicon
                      v-if="link.icon?.modifier"
                      :name="link.icon?.modifier?.name"
                      :class="cn('dst absolute  size-5 ', link.icon?.modifier.class)" />
                  </span>
                  {{ link.name }}
                </NuxtLink>
                <span v-else>{{ link.name }}</span>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </AccordionContent>
      </SidebarMenuItem>
    </AccordionItem>
  </SidebarMenu>
</template>