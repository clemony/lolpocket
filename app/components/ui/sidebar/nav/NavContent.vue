<script lang="ts" setup>
import { useSidebar } from 'base/sidebar/utils'

const { basicLayout } = defineProps<{
  basicLayout?: boolean
}>()

const links = computed (() => {
  if (!as().account.name)
    return null

  else return generateSummonerLinks(as().account)
})

const summonerLinks = computed(() => {
  if (!links.value)
    return navLinks

  else
    return navLinks.reverse().concat(links.value).reverse()
})
const option = computed (() => {
  const arr = ['Backpack', 'Analytics', 'Library']
  if (links.value.name)
    arr.push(links.value.name)

  return arr
})

const { open } = useSidebar()
function closeAndNavigate(link: string) {
  open.value = false
  navigateTo(link)
}
</script>

<template>
  <SidebarContentWrapper
    :basic-layout="basicLayout"
    title="Navigation">
    <SidebarGroup>
      <SidebarMenuButton
        size="lg"
        variant="default"
        class="capitalize w-4/5 order-first mx-3 mt-3 mb-1 font-medium [&_svg]:!size-5.25"
        @click="navigateTo('/nexus')">
        <icon
          name="nexus" />
        Nexus
      </SidebarMenuButton>
    </SidebarGroup>
    <Collapsible
      v-for="linkObject in summonerLinks"
      :key="linkObject.name"
      default-open
      as-child>
      <SidebarGroup class="border-0 px-3">
        <CollapsibleTrigger as-child>
          <SidebarGroupLabel class="my-1 gap-2 items-center">
            <span
              class="grid place-items-center [&_svg]:!shadow-none rounded-full relative  size-5.5 py-px"
              :class="cn('', { 'size-6 rounded-full drop-shadow-sm shadow-sm overflow-hidden': linkObject.icon?.class == 'summoner-icon' })">
              <hicon
                :name="linkObject.icon?.name"
                :class="cn('dst absolute overflow-visible size-5 ', linkObject.icon?.class, { 'size-full': linkObject.icon?.class == 'summoner-icon' })" />

            </span>
            <span class="grow">
              {{ linkObject.name }}
            </span>
            <CaretRotate />
          </SidebarGroupLabel>
        </CollapsibleTrigger>

        <CollapsibleContent
          menu
          as-child>
          <SidebarGroupContent class="pt-1 gap-1  relative flex flex-col justify-items-center">
            <Button
              v-for="link in linkObject.links"
              :key="link.name"
              variant="ghost"
              size="lg"
              class="gap-2.75 text-bc h-10 text-2 font-normal capitalize text-nowrap flex-nowrap overflow-hidden  justify-start"
              @click="navigateTo(link.link)">
              {{ link.name }}
            </Button>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>

    <!-- <Separator class="self-end mx-4 " /> -->
    <!--  <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenuButton
          size="lg"
          variant="default"
          class="capitalize order-first mx-3 mt-3 font-medium [&_svg]:!size-5.25"
          @click="navigateTo('/nexus')">
          <icon name="lucide:file-question" />
          Docs
        </SidebarMenuButton>
        <SidebarMenuButton
          size="lg"
          variant="default"
          class="capitalize order-first mx-3   font-medium [&_svg]:!size-5.25"
          @click="navigateTo('/nexus')">
          <icon name="lucide:square-terminal" />
          About
        </SidebarMenuButton>
      </SidebarGroupContent>
    </SidebarGroup> -->
  </SidebarContentWrapper>
</template>