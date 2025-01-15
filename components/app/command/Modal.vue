<script setup lang="ts">
  /*
  import { DialogOverlay } from 'radix-vue';
  const as = useAccountStore();

  const emit = defineEmits(['update:open']);

  // Watch for `open` prop changes to sync the modalValuestate

  const pocket = ref(undefined);
  watch(
    () => as.modalValue,

    (newOpen) => {
      as.modalValue = newOpen;
      as.modalPocket ? (pocket.value = as.modalPocket) : null;
      as.modalState = true;
    }
  );

  function onClose() {
    as.modalState = false;
    emit('update:open', false);
    as.modalPocket = undefined;
  }

  onMounted(async () => {
    await as.modalValue;
  }); */
</script>

<template>
  <!-- <template v-if="as.modalState">
    <Dialog
      :key="as.modalValue.id"
      v-model:open="as.modalState"
      @close="onClose">
      <DialogContent
        :class="
          cn(
            'px-12! py-8',
            {
              'ring-none m-0! size-full max-w-screen border-none bg-transparent p-0! shadow-none': as.modalValue.id == 'command',
            },
            { 'max-w-[550px]': as.modalValue.id != 'command' }
          )
        ">
        <Hide :if="as.modalValue.id == 'command'">
          <DialogHeader>
            <DialogTitle>
              <h2>{{ as.modalValue.title }}</h2>
            </DialogTitle>
            <DialogDescription
              v-html="as.modalValue.description"
              class="text-3"></DialogDescription>
          </DialogHeader>
        </Hide>

        <component
          :is="as.modalValue.component"
          :submitText="as.modalValue.submitText"
          :pocket="pocket"
          @update:open="onClose" />
      </DialogContent>

      <DialogOverlay />
    </Dialog>
  </template>-->
</template>
