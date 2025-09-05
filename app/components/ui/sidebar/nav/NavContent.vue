<script lang="ts" setup>
import { useSidebar } from '/base/sidebar/utils'

const { basicLayout } = defineProps<{
  basicLayout?: boolean
}>()

const links = computed (() => {
  if (!as().account?.name)
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
        class="capitalize pl-4 pr-3 order-first   font-medium [&_svg]:!size-5.25"
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
      <SidebarGroup class="pl-4 pr-3">
        <CollapsibleTrigger as-child>
          <SidebarGroupLabel class="my-1 gap-3 items-center">
            <span
              class="grid place-items-center [&_svg]:!shadow-none rounded-full relative  size-5.5 py-px"
              :class="cn('', { 'size-6 rounded-full drop-shadow-sm shadow-sm overflow-hidden': linkObject.icon?.class == 'summoner-icon' })">
              <hicon
                :name="linkObject.icon?.name"
                :class="cn('dst absolute overflow-visible size-5 ', linkObject.icon?.class, { 'size-full': linkObject.icon?.class == 'summoner-icon' })" />

            </span>
            <span class="grow text-4 font-bold">
              {{ linkObject.name }}
            </span>
            <CaretRotate />
          </SidebarGroupLabel>
        </CollapsibleTrigger>

        <CollapsibleContent
          class="after:!bg-b3"
          menu
          as-child>
          <SidebarGroupContent class="pt-1 gap-1 pl-5 relative flex flex-col justify-items-center">
            <Button
              v-for="link in linkObject.links"
              :key="link?.name"
              variant="ghost"
              size="lg"
              class="gap-2.75 !duration-0 !text-bc/60 h-10 text-3 capitalize text-nowrap flex-nowrap overflow-hidden hover:!text-bc justify-start"
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