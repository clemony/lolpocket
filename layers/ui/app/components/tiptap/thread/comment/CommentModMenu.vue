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
      :arrow="false">
      <UButton
        class="w-full grow justify-between pr-2 pl-7!"
        size="sm"
        base="btn"
        variant="ghost">
        Mod Tools
        <icon class="size-4 opacity-60 group-on:opacity-100" name="right" />
      </UButton>

      <template #content>
        <div class="grid w-54 px-0 py-1 pt-2 **:text-sm [&_button]:px-2">
          <div class="flex flex-col gap-1 pr-1 pl-1.25">
            <UButton>
              <Icons class="size-3.75!" name="ban" />
              Remove Comment
            </UButton>
            <UButton>
              <Icons class="size-3.75!" name="lucide:pencil-line" />
              Edit Message
            </UButton>
          </div>
          <Separator />
          <div class="pr-1 pl-1.25">
            <UButton>
              <Icons name="tabler:hammer" />

              Timeout User
            </UButton>
          </div>
        </div>
      </template>
    </Tooltip>
  </div>
</template>
