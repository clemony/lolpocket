<script lang="ts" setup>
import { accounts, mails } from 'components/layout/box/mails'

definePageMeta({
  name: 'backpack',
  icon: 'backpack',
})
const isCollapsed = ref(false)
const route = useRoute()
const newTag = ref('')
const mode = ref<'default' | 'edit'>('default')
</script>

<template>
  <div>
    <BoxLayout
      :is-collapsed
      :accounts
      :mails
      @expand="isCollapsed = true"
      @collapse="isCollapsed = false">
      <template #nav>
        <div class="h-16 w-full items-center p-2">
          <DropdownMenu v-slot="open">
            <DropdownMenuTrigger
              variant="ghost"
              size="lg"
              class="justify-start w-full group pl-2 !gap-3">
              <SummonerIcon class="rounded-full size-8" />
              <span class="grow dst font-normal *:first:capitalize items-center flex">
                <SummonerName />'s Backpack
              </span>
              <icon
                name="up-sm"
                :class="cn('transition-all duration-200 scale-y-0', { '-scale-y-100 ': open })" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                hi
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator />
        <BoxNav
          :is-collapsed
          :links="route.matched[0].children.sort((a, b) => (Number(a.meta?.order) - Number(b.meta?.order)))" />
        <Separator />
        <div class="p-4 flex flex-col gap-4">
          <TagsInput
            v-model="ps().tags"
            class="border-0 group focus-within:ring-0 p-0 gap-0 space-y-4">
            <div class="flex input items-center gap-3 h-12   w-full">
              <icon
                name="tag"
                class="size-4.75 opacity-50" />
              <TagsInputInput
                v-model="newTag"

                placeholder="new pocket tag..."
                class="h-12 p-0 placeholder:italic bg-transparent text-2 grow !m-0" />
              <Button
                variant="shadow"
                size="xs"
                class="btn-square group-has-[:placeholder-shown]:opacity-0 bg-tint-b2/70 shadow-black/12 border-b4/80 *:opacity-70 hover:*:opacity-100 size-6"
                @click="newTag = ''">
                <icon name="x-sm" />
              </Button>
            </div>
            <TransitionScalePop
              group
              class="flex gap-2 items-center">
              <TagsInputItem
                v-for="item in ps().tags"
                :key="item"
                class="gap-0 pr-1"
                :value="item">
                <icon
                  name="hash"
                  class="size-3.5 -mr-2" />
                <TagsInputItemText class="!text-2" />
                <TagsInputItemDelete v-if="mode == 'edit'" />
              </TagsInputItem>
            </TransitionScalePop>
          </TagsInput>
        </div>
      </template>

      <LazyNuxtPage />
    </BoxLayout>
  </div>
</template>
