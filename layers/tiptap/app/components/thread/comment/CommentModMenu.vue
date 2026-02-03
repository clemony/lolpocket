<script setup lang="ts">
const open = shallowRef<boolean>(false)
</script>

<template>
  <div class="px-1">
    <Tooltip
      class="flex w-full flex-col gap-1"
      placement="right"
      animation="shift-toward-subtle"
      :delay="300"
      :offset="[0, -2]"
      :arrow="false"
    >
      <Button
        class="w-full grow justify-between pr-2 pl-7!"
        size="sm"
        base="btn"
        variant="ghost"
      >
        Mod Tools
        <icon class="group-on:opacity-100 size-4 opacity-60" name="right" />
      </Button>

      <template #content>
        <div class="grid w-54 px-0 py-1 pt-2 **:text-sm [&_button]:px-2">
          <div class="flex flex-col gap-1 pr-1 pl-1.25">
            <PopoverItem>
              <Icons class="size-3.75!" name="ban" />
              Remove Comment
            </PopoverItem>
            <PopoverItem>
              <Icons class="size-3.75!" name="lucide:pencil-line" />
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
    </Tooltip>
  </div>
</template>
