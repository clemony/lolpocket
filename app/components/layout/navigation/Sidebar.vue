<script lang="ts" setup>
import { userMenu } from "~/components/layout/navigation/content/nav-user-menu"
import { getSummonerIcon } from "~/domain/utils/img"
const emit = defineEmits(["openSearch", "openLogIn"])

const { account } = storeToRefs(user())
</script>

<template>
  <div class="absolute inset-0 flex flex-col gap-6">
    <div
      class="sticky top-0 w-full space-y-4 bg-p0/90 px-3 pt-4 pb-2 backdrop-blur-sm">
      <!-- header -->
      <div class="flex items-center justify-between gap-4">
        <ULink class="grow hover:underline" to="/">
          <h3>lolpocket</h3>
        </ULink>
        <UButton
          icon="x"
          size="sm"
          :ui="{ base: 'cursor-text', leadingIcon: '**:stroke-[2.4]' }"
          variant="ghost"
          @click="emit('openSearch', true)" />
      </div>

      <!-- search -->
      <UButton
        variant="outline"
        label="Search"
        icon="i-search"
        :ui="{ base: 'w-full', label: 'grow' }">
        <template #trailing>
          <div class="mr-1 flex items-center gap-2">
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
          color: 'neutral',
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
                open ? 'rotate-180' : '',
              ),
            }" />
        </template>

        <template #content>
          <ul class="pr-6 pl-2">
            <BackpackNav
              as="li"
              size="lg"
              :ui="{
                label: 'text-md font-semibold',
                trailingIcon: 'size-4',
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
                open ? 'rotate-180' : '',
              ),
            }" />
        </template>

        <template #content>
          <ul class="pr-6 pl-2">
            <ToolsNav
              as="li"
              :ui="{
                base: 'px-3.5',
                leadingIcon: 'size-5',
                label: '*:first:text-md *:first:leading-7 *:last:text-sm',
              }" />
          </ul>
        </template>
      </UCollapsible>
      <li>
        <button @click="emit('openLogIn')">open log in</button>
      </li>
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
              open ? 'rotate-180' : '',
            ),
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

    <Grow />
    <!-- user -->
    <UDropdownMenu
      :items="userMenu"
      size="md"
      :content="{ side: 'top', collisionPadding: 0, sideOffset: 0 }"
      :ui="{
        itemLeadingAvatarSize: 'sm',
        itemLeadingAvatar: '-ml-1.5',
        content: 'w-(--reka-dropdown-menu-trigger-width)',
        itemLeadingIcon: 'size-4.5',
        itemTrailingIcon: 'opacity-70 group-hover:opacity-100',
      }">
      <UButton
        size="custom"
        trailing-icon="up-down"
        :ui="{
          base: 'sticky bottom-0 h-20 w-full gap-3 rounded-none border-x-0 border-b-0',
          trailingIcon: 'size-4 opacity-50 group-hover/btn:opacity-100',
        }"
        variant="outline">
        <template #leading>
          <ClientOnly>
            <LazyUChip
              size="md"
              square
              position="bottom-right"
              :ui="{ root: 'align-center' }"
              :color="user().matchStatus ? 'p4' : 'p3'"
              inset>
              <UAvatar
                :src="getSummonerIcon(account?.icon) ?? null"
                icon="i-plug"
                size="2xl" />
            </LazyUChip>
          </ClientOnly>
        </template>
        <div class="flex grow flex-col items-start gap-0">
          <span class="truncate text-md! font-bold">{{
            account?.name ?? account?.username ?? "Not Connected"
          }}</span>
          <span
            class="align-center inline-flex items-center gap-2 justify-self-start text-xs opacity-50">
            {{ user().matchStatus ? "In Game" : "afk" }}</span
          >
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
