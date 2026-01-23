<script setup lang="ts">
import type { TippyOptions } from 'vue-tippy'

const props = withDefaults(defineProps<TippyOptions>(), {})

const open = shallowRef<boolean>(false)
</script>

<template>
  <div class="px-1">
    <tippy
      v-bind="props"
      placement="right"
      animation="shift-toward-subtle"
      :delay="300"
      :offset="[0, -2]"
      :arrow="false"
      class="flex w-full flex-col gap-1">
      <Button
        size="8"
        class="w-full grow justify-between pr-2 pl-7!"
        base="btn"
        variant="ghost">
        Mod Tools
        <icon
          name="right"
          class="group-on:opacity-100 size-4 opacity-60" />
      </Button>

      <template #content>
        <div
          class="grid w-54 px-0 py-1 pt-2 **:text-sm [&_button]:px-2">
          <div class="flex flex-col gap-1 pr-1 pl-1.25">
            <PopoverItem>
              <Icons
                name="ban"
                class="size-3.75!" />
              Remove Comment
            </PopoverItem>
            <PopoverItem>
              <Icons
                name="lucide:pencil-line"
                class="size-3.75!" />
              Edit Message
            </PopoverItem>
          </div>
          <Separator :size="1" />
          <div class="pr-1 pl-1.25">
            <PopoverItem>
              <Icons name="tabler:hammer" />

              Timeout User
            </PopoverItem>
          </div>
        </div>
      </template>
    </tippy>
  </div>
</template>
