<script setup lang="ts">
  const as = useAccountStore();
  const emit = defineEmits(['update:open']);

  const searchQuery = ref('');
  function onClose() {
    as.commandOpen = false;
    emit('update:open', false);
  }
</script>

<template>
  <div
    class="relative size-full"
    @click="onClose">
    <div
      class="border-b2 bg-b1/85 focus-within:ring-neutral/30 hover:ring-neutral/40 absolute top-[23%] left-[35%] w-1/3 max-w-[450px] rounded-2xl border p-0 backdrop-blur-md focus-within:ring-1 focus-within:outline-hidden hover:ring-1">
      <SearchBox
        class="h-16 w-full"
        inputClass="rounded-[1rem] pl-14 text-4 pt-1.5 align-baseline focus:ring-0! focus:outline-0!"
        iconClass="p-5 left-0"
        @update:search="(v) => (searchQuery = v)" />
    </div>
  </div>
</template>

<style scoped></style>
