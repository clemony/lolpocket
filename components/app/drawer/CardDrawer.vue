<script setup lang="ts">
  const as = useAccountStore();

  const ts = useTempStore();
  const imports = import.meta.glob('/public/img/cards/*.webp', {
    import: 'default',
    eager: true,
  });
  const arr = Object.values(imports);
  const images = arr.forEach((image) => {
    image.toString().replace('/public', '');
  });

  const cards = [
    {
      name: 'Coven Ashe',
      id: 'ashe',
    },
    {
      name: 'Cosmic',
      id: 'cosmic',
    },
    {
      name: 'Eclipse Knight',
      id: 'eclipseknight',
    },
    {
      name: 'Moonfall',
      id: 'moonfall',
    },
    {
      name: 'Nidalee and Neeko ',
      id: 'neekonid',
    },
    {
      name: "Scout's Honor",
      id: 'scout',
    },
    {
      name: 'Spirit Blossom',
      id: 'spiritblossom',
    },
    {
      name: 'Starphone',
      id: 'ashe',
    },
  ];
  console.log('gug', images);
</script>
<template>
  <div class="relative w-full justify-center">
    <DrawerHeader>
      <DrawerTitle>Card Backs</DrawerTitle>
      <DrawerDescription>Choose</DrawerDescription>
    </DrawerHeader>
  </div>
</template>
<style scoped></style>
