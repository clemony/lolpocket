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
    <SidebarMenuButton
      size="lg"
      variant="default"
      class="capitalize order-first mx-3 mt-3 mb-1 font-medium [&_svg]:!size-5.25"
      @click="navigateTo('/nexus')">
      <icon
        name="nexus" />
      Nexus
    </SidebarMenuButton>
    <SidebarAccordionItem
      v-for="linkObject in summonerLinks"
      :key="linkObject.name"
      :link-object="linkObject" />

    <!-- <Separator class="self-end mx-4 " /> -->
    <!--     <SidebarGroup>
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