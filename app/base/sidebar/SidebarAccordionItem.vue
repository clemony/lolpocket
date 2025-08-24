<script setup lang="ts">
const { class: className, linkObject, parentIcon } = defineProps<{
  class?: HTMLAttributes['class']
  linkObject?: LinkObject
  parentIcon?: boolean
}>()
</script>

<template>
  <SidebarGroup class="border-0 px-3">
    <SidebarGroupLabel class="my-1 ">
      <span
        v-if="parentIcon"
        class="grid place-items-center [&_svg]:!shadow-none rounded-full relative  size-5.5 py-px"
        :class="cn('', { 'size-6 rounded-full drop-shadow-sm shadow-sm overflow-hidden': linkObject.icon?.class == 'summoner-icon' })">
        <hicon
          :name="linkObject.icon?.name"
          :class="cn('dst absolute overflow-visible size-5 ', linkObject.icon?.class, { 'size-full': linkObject.icon?.class == 'summoner-icon' })" />

      </span>
      {{ linkObject.name }}
    </SidebarGroupLabel>
    <SidebarGroupContent class="size-full  pl-3.5 relative flex flex-col justify-items-center">
      <!--       <Separator
        class="absolute left-3 bg-b3/80 top-3 h-[80%] "
        orientation="vertical" /> -->
      <Button
        v-for="link in linkObject.links"
        :key="link.name"
        variant="ghost"
        size="lg"
        class="gap-2.75  h-10 text-2 font-medium capitalize text-nowrap flex-nowrap overflow-hidden  justify-start"
        @click="navigateTo(link.link)">
        <span class="grid place-items-center [&_svg]:!shadow-none  relative  size-5.5 py-px">
          <hicon
            :name="link.icon?.alt ? link.icon?.alt.name : link.icon?.name"
            :class="cn('dst absolute overflow-visible size-5 ', link.icon?.alt ? link.icon?.alt.class : link.icon?.class)" />

          <hicon
            v-if="link.icon?.modifier"
            :name="link.icon?.modifier?.name"
            :class="cn('dst absolute  size-5 ', link.icon?.modifier.class)" />
        </span>
        {{ link.name }}
      </Button>
    </SidebarGroupContent>
  </SidebarGroup>
</template>