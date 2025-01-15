<script setup lang="ts">
  const props = defineProps<{
    set: ItemSet;
    pocket: pocket;
  }>();

  const pocket = ref(props.pocket);
  const start = ref(pocket.value.items[0].start[0].key);
  const core = ref(pocket.value.items[0].core[0].key);

  const final = ref(pocket.value.items[0].final[0].key);

  function clear(set) {
    if (set.key == core[0].key) {
      core.value = null;
    } else if (set.key == start[0].key) {
      start.value = null;
    } else if (set.key == final[0].key) {
      final.value = null;
    }
  }

  function startChange(set, event) {
    event.target.value == true ? (pocket.value.items[0].final[0].key = set.key) : (pocket.value.items[0].start[0].key = null);
  }

  function coreChange(set, event) {
    event.target.value == true ? (pocket.value.items[0].core[0].key = set.key) : (pocket.value.items[0].core[0].key = null);
  }

  function finalChange(set, event) {
    event.target.value == true ? (pocket.value.items[0].final[0].key = set.key) : (pocket.value.items[0].final[0].key = null);
  }
  /*
const variant = computed (() => {

             const a  =  set.key == pocket.items[0].start[0].key ?
                    'inspiration'
                :   'ghost'

                set.key == pocket.items[0].core[0].key ? 'precision' : 'ghost'
     
                
                set.key == pocket.items[0].final[0].key ? 'resolve' : 'ghost'
}) */
</script>

<template>
  <label>
    <Button
      class="w-full justify-start"
      variant="ghost"
      size="sm">
      Start
    </Button>
    <input
      type="radio"
      name="set-type"
      @change="pocket.items[0].start[0].key = set.key"
      class="hidden"
      :value="set" />
  </label>
  <label>
    <Button
      class="w-full justify-start"
      variant="ghost"
      size="sm">
      Core
    </Button>
    <input
      type="radio"
      name="set-type"
      @change="coreChange(set, $event)"
      class="hidden"
      :value="set" />
  </label>
  <label>
    <Button
      class="w-full justify-start"
      variant="ghost"
      size="sm">
      Complete
    </Button>
    <input
      type="checkbox"
      :true-value="set"
      @change="finalChange(set, $event)"
      class="hidden"
      :value="set" />
  </label>

  <Button
    class="w-full justify-start"
    size="sm"
    :variant="set.key != pocket.items[0].final[0].key && set.key != pocket.items[0].core[0].key && set.key != pocket.items[0].start[0].key ? 'default' : 'ghost'"
    @click="clear(set)">
    none
  </Button>
</template>

<style scoped></style>
