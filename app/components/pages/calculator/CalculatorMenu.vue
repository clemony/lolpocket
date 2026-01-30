<script lang="ts" setup></script>

<template>
  <Menubar class="border-none bg-transparent shadow-none">
    <MenubarMenu>
      <MenubarTrigger>
        <icon
          class="text-bc/60 group-hover:text-bc size-6"
          name="ph:floppy-disk"
        />
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
          class="text-bc/60 group-hover:text-bc size-6"
          name="ph:upload-simple"
        />
      </MenubarTrigger>

      <MenubarContent />
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <icon class="text-bc/60 group-hover:text-bc size-5.25" name="reset" />
      </MenubarTrigger>

      <MenubarContent />
    </MenubarMenu>
  </Menubar>
</template>
