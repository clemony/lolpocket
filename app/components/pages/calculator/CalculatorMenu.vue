<script lang="ts" setup></script>

<template>
  <Menubar class="shadow-none bg-transparent border-none">
    <MenubarMenu>
      <MenubarTrigger>
        <icon
          name="ph:floppy-disk"
          class="size-6 group-hover:text-bc text-bc/60" />
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
          class="size-6 text-bc/60 group-hover:text-bc" />
      </MenubarTrigger>

      <MenubarContent></MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <icon
          name="reset"
          class="size-5.25 text-bc/60 group-hover:text-bc" />
      </MenubarTrigger>

      <MenubarContent></MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
