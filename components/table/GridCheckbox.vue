<script setup lang="ts">
  import { ContextMenuTrigger } from 'radix-vue';

  const ps = usePocketStore();
  const props = defineProps<{
    params: {
      data: {
        key: string;
        name: string;
        notes?: string; // Notes can be undefined
      };
      api;
      node;
    };
  }>();

  // Get the pocket by its key
  const pocket = getPocket(props.params.data.key);

  function select(e) {
    props.params.node.setSelected(e.target.checked);
    console.log(e);
  }

  const selected = ref(props.params.node.isSelected());

  watch(
    () => ps.tableSelectAll,
    (newVal) => {
      console.log('hi', newVal);
      selected.value = newVal;
    }
  );
</script>

<template>
  <div class="size-full">
    <label class="grid size-full place-items-center">
      <input
        type="checkbox"
        class="checkbox checkbox-sm border-neutral/60 rounded-sm border"
        v-model="selected"
        @change="select($event)" />
    </label>
  </div>
</template>

<style scoped></style>
