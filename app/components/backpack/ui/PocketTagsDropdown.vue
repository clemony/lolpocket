<script lang="ts" setup>
import { championPositions } from '~~/shared/appdata'

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const pocket = computed (() => p)

const tags = ref<string[]>([])
const newTag = ref<string>('')
</script>

<template>
  <!-- tag -->
  <DropdownMenu>
    <slot>
      <DropdownMenuTrigger
        variant="ghost"
        class="size-11">
        <icon name="tag" />
      </DropdownMenuTrigger>
    </slot>
    <LazyDropdownMenuContent
      side="bottom"
      class="w-54  overflow-x-hidden p-0 grid auto-rows-max justify-center  max-h-70 h-70">
      <div class=" pt-2 max-w-54 px-3 h-11 gap-3 flex items-center w-full ">
        <icon
          name="lucide:tags"
          class="size-5 opacity-50 " />
        <input
          placeholder="attach new tag"
          class="h-10 placeholder:italic text-2  focus:placeholder:opacity-0 transition-all duration-200"
          @keydown.enter="() => { ps().tags.push(newTag), pocket.tags.push(newTag), newTag = '' }" />

        <Button
          variant="ghost"
          size="xs"
          class="btn-square group-has-[:placeholder-shown]:opacity-0  size-6"
          @click="newTag = ''">
          <icon name="x-sm" />
        </Button>
      </div>
      <DropdownMenuSeparator />
      <div class=" h-55 overflow-y-auto">
        <!-- tags -->
        <Collapsible
          class="pt-1 z-0 w-full px-1.5"
          :default-open="true">
          <CollapsibleTrigger class="pr-1.5">
            <DropdownMenuLabel>
              Tags
            </DropdownMenuLabel>
            <icon
              name="left"
              class="text-bc/40 group-data-[state=open]/collapse:-rotate-90 transition-rotate duration-200" />
          </CollapsibleTrigger>

          <CollapsibleContent class="CollapsibleContent justify-center">
            <DropdownMenuItem
              v-for="item in ps().tags"
              :key="item"
              as="label"
              class="pl-3.25 gap-2.5"
              @select.prevent>
              <input
                v-model="pocket.tags"
                :value="item"
                type="checkbox"
                :checked="pocket.tags.includes(item)"
                class="checkbox checkbox-sm checkbox-neutral drop-shadow-xs shadow-xs checked:bg-neutral/80" />
              <icon
                name="hash"
                class="!size-3.75 text-bc/80" />
              <span class="truncate w-full -ml-2.5">
                {{ item }}
              </span>
            </DropdownMenuItem>
          </CollapsibleContent>
        </Collapsible>

        <DropdownMenuSeparator />
        <!-- positions -->
        <Collapsible
          :default-open="true"
          class="z-0 w-full px-1.5">
          <CollapsibleTrigger class="pr-1.5">
            <DropdownMenuLabel>
              Positions
            </DropdownMenuLabel>
            <icon
              name="left"
              class="text-bc/40 group-data-[state=open]/collapse:-rotate-90 transition-rotate duration-200" />
          </CollapsibleTrigger>

          <CollapsibleContent class="CollapsibleContent">
            <DropdownMenuItem
              v-for="item in championPositions"
              :key="item.name"
              as="label"
              class="pl-3.25 gap-2.5"
              @select.prevent>
              <input
                v-model="pocket.tags"
                type="checkbox"
                :value="item.name"
                class="checkbox checkbox-sm checkbox-neutral"
                :style="{
                  backgroundColor: pocket.tags.includes(item.name) ? item.color : 'transparent',
                }" />

              <component
                :is="`i-roles-${item.name}`"
                :class="cn('size-3 dst brightness-70 saturate-240', { '!text-bc/70': item.name == 'All' })"
                :style="{
                  color: item.color }" />
              <span
                :class="cn('role-text font-medium', { '!text-bc/70': item.name == 'All' })"
                :style="{
                  color: item.color,
                }">
                {{ item.name }}
              </span>
            </DropdownMenuItem>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </LazyDropdownMenuContent>
  </DropdownMenu>
</template>