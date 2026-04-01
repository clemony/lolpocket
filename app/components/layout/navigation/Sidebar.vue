<script lang="ts" setup>
import { userMenuItems } from "../../user/ui/userMenuItems"
const emit = defineEmits(["openSearch", "closeSidebar"])

const { account } = storeToRefs(user())

const items = [
  {
    icon: "i-external",
    label: "Resources",
    ui: {
      content: "w-54",
      leadingIcon: "scale-100"
    }
  },
  {
    label: "Support",
    icon: "i-lucide-circle-question-mark",
    children: helpNav.filter((i) => i !== undefined),
    ui: {
      content: "w-54"
    }
  }
]
</script>

<template>
  <div class="absolute inset-0 flex flex-col gap-6">
    <div
      class="sticky top-0 w-full space-y-4 bg-p0/90 px-3 pt-4 pb-2 backdrop-blur-sm">
      <!-- header -->
      <div class="flex items-center justify-between gap-4">
        <ULink class="grow cursor-pointer" to="/">
          <h3>lolpocket</h3>
        </ULink>

        <UButton
          icon="x"
          size="sm"
          :ui="{
            base: '',
            leadingIcon: '**:stroke-[2.4]'
          }"
          variant="ghost" />
      </div>

      <!-- search -->
      <UButton
        variant="ring"
        label="Search"
        icon="i-search"
        :ui="{
          base: 'w-full cursor-text border border-p4/60 inset-shadow-sm hover:bg-p0! hover:noise-0',
          label: 'grow text-pc/40',
          leadingIcon: 'text-pc/50 drop-shadow-2xs **:stroke-[2.2]'
        }"
        @click="emit('openSearch', true)">
        <template #trailing>
          <div class="mr-1 flex items-center gap-1">
            <UKbd
              v-for="k in ['meta', 'K']"
              :key="k"
              square
              size="md"
              :value="k" />
          </div>
        </template>
      </UButton>
    </div>

    <!-- nexus -->
    <ul class="w-full space-y-2 px-2">
      <li v-for="item in nexusNav.concat(userNav)" :key="item.label">
        <UButton
          variant="link"
          size="xl"
          :to="item.to"
          :ui="{ base: 'w-full px-2.5 hover:underline' }">
          <h1>{{ item.label }}</h1>
        </UButton>
      </li>
    </ul>

    <!-- pockets -->
    <ul class="flex flex-col gap-1 px-2">
      <NewPocketButton
        :kbd="{
          ui: { wrapper: 'mr-1' },
          size: 'md',
          color: 'neutral'
        }"
        :ui="{ base: 'pl-4.5', label: 'text-md font-semibold' }"
        as="li"
        size="lg" />

      <!-- backpack -->
      <UCollapsible as="div" class="w-full" :default-open="true">
        <template #default="{ open }">
          <UButton
            size="md"
            trailing-icon="down"
            variant="link"
            label="Backpack"
            :ui="{
              base: 'w-full px-3 hover:underline',
              label: 'font-semibold opacity-50 group-hover/btn:opacity-100',
              trailingIcon: cn(
                'size-4.5 opacity-50 **:stroke-[2.4] group-hover/btn:opacity-100',
                open ? 'rotate-180' : ''
              )
            }" />
        </template>

        <template #content>
          <ul class="pr-6 pl-2">
            <BackpackNav
              as="li"
              size="lg"
              :ui="{
                label: 'text-md font-semibold',
                trailingIcon: 'size-4'
              }" />
          </ul>
        </template>
      </UCollapsible>

      <!-- tools -->
      <UCollapsible as="div" class="w-full" :default-open="true">
        <template #default="{ open }">
          <UButton
            size="md"
            trailing-icon="down"
            variant="link"
            label="Tools"
            :ui="{
              base: 'w-full px-3 hover:underline',
              label: 'font-semibold opacity-50 group-hover/btn:opacity-100',
              trailingIcon: cn(
                'size-4.5 opacity-50 **:stroke-[2.4] group-hover/btn:opacity-100',
                open ? 'rotate-180' : ''
              )
            }" />
        </template>

        <template #content>
          <ul class="pr-6 pl-2">
            <ToolsNav
              as="li"
              :ui="{
                base: 'px-3.5',
                leadingIcon: 'size-5',
                label: '*:first:text-md *:first:leading-7 *:last:text-sm'
              }" />
          </ul>
        </template>
      </UCollapsible>
    </ul>

    <!-- Library -->
    <UCollapsible as="div" class="w-full px-2" :default-open="true">
      <template #default="{ open }">
        <UButton
          size="md"
          trailing-icon="down"
          variant="link"
          label="Library"
          :ui="{
            base: 'w-full px-3 hover:underline',
            label: 'font-semibold opacity-50 group-hover/btn:opacity-100',
            trailingIcon: cn(
              'size-4.5 opacity-50 **:stroke-[2.4] group-hover/btn:opacity-100',
              open ? 'rotate-180' : ''
            )
          }" />
      </template>

      <template #content>
        <ul class="pr-6 pl-2">
          <LibraryNav
            as="li"
            size="lg"
            :ui="{ label: 'text-md font-semibold' }" />
        </ul>
      </template>
    </UCollapsible>

    <UDropdownMenu
      :items="resourceNav"
      :content="{
        side: 'left',
        align: 'start',
        sideOffset: 0,
        alignOffset: -2
      }"
      :ui="{ content: 'w-64 pt-1' }">
      <template #default="{ open }">
        <UButton
          variant="ghost"
          size="xl"
          trailing-icon="right"
          :ui="{
            trailingIcon: cn(
              'transition-rotate duration-200',
              open ? 'rotate-180' : ''
            )
          }"
          leading-icon="i-external"
          label="Resources" />
      </template>
    </UDropdownMenu>
    <TestingMenu />
    <Grow />
    <!-- user -->
    <UDropdownMenu
      :items="userMenuItems"
      size="md"
      :content="{ side: 'top', collisionPadding: 0, sideOffset: 0 }"
      :ui="{
        itemLeadingAvatarSize: 'sm',
        itemLeadingAvatar: '-ml-1.5',
        content: 'w-(--reka-dropdown-menu-trigger-width)',
        itemLeadingIcon: 'size-4.5',
        itemTrailingIcon: 'opacity-70 group-hover:opacity-100'
      }">
      <UButton
        size="custom"
        :ui="{
          base: 'sticky bottom-0 h-20 w-full gap-3 rounded-none border-x-0 border-b-0',
          trailingIcon: 'size-4 opacity-50 group-hover/btn:opacity-100'
        }"
        variant="outline">
        <MatchStatus variant="user" :summoner="user().account" />
        <div class="flex grow flex-col items-start gap-0">
          <span class="truncate text-md! font-bold">{{}}</span>
          <span
            class="align-center inline-flex items-center gap-2 justify-self-start text-xs opacity-50">
            {{
          }}</span>
        </div>
      </UButton>

      <template #inbox-trailing>
        <LazyUBadge size="sm" variant="outline">
          {{ user().inbox?.messages.length ?? 0 }}
        </LazyUBadge>
      </template>
    </UDropdownMenu>
  </div>
</template>
