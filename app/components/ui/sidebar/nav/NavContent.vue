<script lang="ts" setup>
import { navLinks } from '#shared/appdata'

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
</script>

<template>
  <SidebarContentWrapper
    title="Navigation"
    class="">
    <div class="px-6 flex flex-col gap-4">
      <Blink
        size="lg"
        variant="ghost"
        class=" order-first -ml-3 justify-start w-full"
        to="/nexus">
        <span class=" font-bold dst  text-6">
          Nexus
        </span>
      </Blink>
      <Collapsible
        v-for="linkObject in summonerLinks"
        :key="linkObject.name"
        class="pr-2"
        default-open>
        <CollapsibleTrigger as-child>
          <Label class="my-1 gap-3 items-center">
            <!--         <span
            class="grid place-items-center [&_svg]:!shadow-none rounded-full relative  size-5.5 py-px"
            :class="cn('', { 'size-6 rounded-full drop-shadow-sm shadow-sm overflow-hidden': linkObject.icon?.class == 'summoner-icon' })">
            <hicon
              :name="linkObject.icon?.name"
              :class="cn('dst absolute overflow-visible size-5 ', linkObject.icon?.class, { 'size-full': linkObject.icon?.class == 'summoner-icon' })" />

          </span> -->
            <span class="grow text-6 font-bold dst">
              {{ linkObject.name }}
            </span>
            <CaretRotate />
          </Label>
        </CollapsibleTrigger>

        <CollapsibleContent
          class="after:!bg-b3 after:top-3 mt-2 pt-1 gap-1 pl-5 relative flex flex-col justify-items-center"
          menu>
          <Button
            v-for="link in linkObject.links"
            :key="link?.name"
            variant="ghost"
            size="lg"
            class="gap-2.75 !duration-0 !text-bc/60 h-10 text-3 capitalize text-nowrap flex-nowrap overflow-hidden hover:!text-bc justify-start"
            @click="navigateTo(link.link)">
            {{ link.name }}
          </Button>
        </CollapsibleContent>
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
    </div>
  </SidebarContentWrapper>
</template>