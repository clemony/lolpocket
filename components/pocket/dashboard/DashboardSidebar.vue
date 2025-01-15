<script setup lang="ts">
  import { getQuote } from 'shared/data/champion/quotes';

  const ps = usePocketStore();
  const props = defineProps<{
    pocket: pocket;
  }>();

  const pocket = ref(props.pocket);

  const ts = useTempStore();

  // Create a local ref for the text input
  const notesInput = ref<string>('');

  // Initialize notesInput when the component is mounted
  onMounted(() => {
    if (pocket) {
      if (pocket.value.notes) {
        notesInput.value = pocket.value.notes;
      }
    }
  });

  watch(
    () => pocket.value.notes,
    (newNotes) => {
      if (newNotes !== undefined) {
        notesInput.value = newNotes;
      }
    }
  );

  // Update pocket.notes only when the field loses focus
  function updateNotes() {
    if (pocket) {
      if (pocket) {
        pocket.value.notes = notesInput.value;
        ps.$persist();
      }
    }
  }

  const sTabs = ref('sTabs');
</script>
<template>
  <div
    v-if="pocket"
    :key="pocket.key"
    class="flex flex-col">
    <Card class="shadow-smooth">
      <CardContent class="h-36 overflow-hidden rounded-lg p-0">
        <LgChampion
          v-if="pocket.champions[0].champions[0]"
          :pocket="pocket" />

        <div
          v-else
          class="text-middle flex size-full items-center justify-center">
          <p
            v-html="getQuote()"
            class="text-4 items-center px-12 align-middle font-serif text-pretty whitespace-pre-line [text-align-last:right]"></p>
        </div>
      </CardContent>
    </Card>

    <Tabs default-value="spells">
      <TabsList class="mt-5 mb-1! [&_button]:rounded-md">
        <TabsTrigger value="spells">Spells</TabsTrigger>
        <TabsTrigger value="runes">Runes</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
      </TabsList>

      <TabsContent value="spells">
        <DashboardSpells :pocket="pocket" />
      </TabsContent>

      <TabsContent value="runes">
        <DashboardRunes :pocket="pocket" />
      </TabsContent>

      <TabsContent value="notes">
        <div class="h-inherit">
          <textarea
            class="peer border-b2/40 bg-b2/25 hover:border-b3/70 focus:border-b3/70 flex size-full cursor-pointer [resize:none] items-start overflow-y-scroll rounded-[4px] border px-1.5 py-1 align-top text-[10px] leading-3 font-light tracking-[0.015em] outline-hidden transition-all duration-300 first-line:indent-2 placeholder:italic hover:opacity-70 hover:shadow-inner focus:opacity-100 focus:shadow-inner"
            v-model="notesInput"
            @blur="updateNotes"
            @click.stop
            :placeholder="pocket.notes"
            spellcheck="false">
<icon v-if="pocket.icon" :name="pocket.icon" />
        <!--  -->        </textarea
          >
        </div>

        <icon
          name="hugeicons:note-01"
          class="absolute right-1.5 bottom-1.5 size-3.5 opacity-30"
          :class="{
            'peer-focus:opacity-0': notesInput != '' && notesInput != '',
          }" />
        <icon
          :class="{
            'peer-focus:opacity-40': notesInput != '' && notesInput != '',
          }"
          name="hugeicons:note-remove"
          class="absolute right-1.5 bottom-1.5 size-3.5 opacity-0"
          @click.stop="notesInput = '　'" />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped></style>
