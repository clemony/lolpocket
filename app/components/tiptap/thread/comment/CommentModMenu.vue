<script setup lang="ts">
</script>

<template>
  <HoverCard>
    <HoverCardTrigger
      size="8"
      class="w-full justify-between"
      base="btn"
      variant="ghost">
      Mod Tools
      <icon
        name="right"
        class="size-4" />
    </HoverCardTrigger>
    <HoverCardContent
      class="w-54 py-2 grid py-1 **:text-2 px-0"
      :side-offset="0"
      side="right"
      align="start">
      <div class="pr-1 pl-1.25 ">
        <PopoverItem>
          <AIcon
            name="ban"
            class="!size-3.75" />
          Remove Comment
        </PopoverItem>
        <PopoverItem>
          <AIcon
            name="lucide:pencil-line"
            class="!size-3.75" />
          Edit Message
        </PopoverItem>
      </div>
      <Separator class="!-mx-2 justify-self-center my-0.5" />
      <div class="pr-1 pl-1.25">
        <PopoverItem>
          <AIcon name="tabler:hammer" />

          Timeout User
        </PopoverItem>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>