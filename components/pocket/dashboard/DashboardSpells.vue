<script setup lang="ts">
  const ps = usePocketStore();
  const props = defineProps<{
    pocket: pocket;
  }>();

  const spells = ref(props.pocket.spells);
  const altIsOpen = ref(false);
  const spellbookIsOpen = ref(false);
  const spellIsOpen = ref(false);

  //const isHovered = useElementHover(myHoverableElement)
  const spell1 = ref(props.pocket.spells[0]);
  const spell2 = ref(props.pocket.spells[1]);
  const el = ref();

  console.log('hihi', props.pocket.spells[0]);
  function update(event, i) {
    console.log(event);
    props.pocket.spells[i] = event;
  }
  onMounted(async () => {
    await el.value;
  });
</script>

<template>
  <DisplayCard
    class="relative"
    headerClass="hidden!">
    <div
      class="grid grid-cols-[2fr_1fr_1fr] gap-3 px-5 pt-6"
      ref="el">
      <div>
        <h4 class="h-sans self-start pt-1 font-medium!">
          Summoner
          <br />
          Spells
        </h4>
      </div>
      <div class="items-center justify-self-end">
        <SpellPicker
          v-model:model="props.pocket.spells[0]"
          @update:model="update($event, 0)"
          :alignOffset="-98" />
      </div>
      <div class="items-center justify-self-end">
        <SpellPicker
          v-model:model="props.pocket.spells[1]"
          @update:model="update($event, 1)"
          :target="el" />
      </div>
    </div>
  </DisplayCard>

  <Collapsible v-model:open="altIsOpen">
    <CollapsibleTrigger class="group/spellbook flex w-full items-center gap-3 p-3 font-medium">
      <icon
        name="qlementine-icons:swap-16"
        class="size-4.5" />
      Alternate
      <icon
        name="teenyicons:left-small-outline"
        class="ml-auto transition-transform duration-200 group-data-[state=open]/spellbook:-rotate-90" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <DisplayCard class="flex justify-between px-5 pb-4">
        <Placeholder class="size-14 rounded-lg" />
        <Placeholder class="size-14 rounded-lg" />
      </DisplayCard>
    </CollapsibleContent>
  </Collapsible>

  <Collapsible v-model:open="spellbookIsOpen">
    <CollapsibleTrigger class="group/spellbook flex w-full items-center gap-3 p-3 font-medium">
      <icon
        name="teenyicons:book-outline"
        class="size-4.5" />
      Spellbook
      <icon
        name="teenyicons:left-small-outline"
        class="ml-auto transition-transform duration-200 group-data-[state=open]/spellbook:-rotate-90" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <DisplayCard class="px-5 pb-4">
        <SpellPicker :model="spell1" />
      </DisplayCard>
    </CollapsibleContent>
  </Collapsible>

  <Collapsible v-model:open="spellIsOpen">
    <CollapsibleTrigger class="group/spell flex w-full items-center gap-3 p-3 font-medium">
      <icon
        name="teenyicons:info-outline"
        class="size-4.5" />
      Spell Info
      <icon
        name="teenyicons:left-small-outline"
        class="ml-auto transition-transform duration-200 group-data-[state=open]/spellbook:-rotate-90" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <DisplayCard class="px-5 pb-4">
        <SpellPicker :model="spell2" />
      </DisplayCard>
    </CollapsibleContent>
  </Collapsible>
</template>

<style>
  input[type='range']:state(webkit-slider-thumb) {
    border-radius: 0.375rem;
  }
</style>
