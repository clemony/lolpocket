<script lang="ts" setup></script>

<template>
  <Menubar class="border-none bg-transparent shadow-none">
    <MenubarMenu>
      <MenubarTrigger>
        <icon
          name="ph:floppy-disk"
          class="text-bc/60 group-hover:text-bc size-6" />
      </MenubarTrigger>

      <MenubarContent>
        <MenubarItem inset>
          Set 1
        </MenubarItem>

        <MenubarItem inset>
          Set 2
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <icon
          name="ph:upload-simple"
          class="text-bc/60 group-hover:text-bc size-6" />
      </MenubarTrigger>

      <MenubarContent></MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <icon
          name="reset"
          class="text-bc/60 group-hover:text-bc size-5.25" />
      </MenubarTrigger>

      <MenubarContent></MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
