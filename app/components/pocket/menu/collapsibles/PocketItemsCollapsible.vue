<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})
const coreItem = computed (() => {
  return pocket.value.items.default.items
})
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="w-full group/state">
      <NavBtn>
        <span>
          <Image v-if="pocket.items.default && pocket.items.default?.items[2]?.id" :image="`/img/item/${coreItem[2]?.id}.webp`" :alt="coreItem[2]?.name" class="rounded-full" />
          <icon
            v-else
            name="bow"
            class="h-4.5 w-auto dst shrink-0 peer-checked:text-nc" />
        </span>

        Items
        <Grow />

        <ItemsCounter :pocket="pocket" />&nbsp;

        <StateCaret />
      </NavBtn>
    </CollapsibleTrigger>
    <Motion as-child :layout="true">
      <CollapsibleContent class="CollapsibleContent relative">
            <ul class="w-full">
        <PocketItemChild v-for="set in pocket.items.sets" :key="set.key" :set="set" :pocket="pocket" />
            </ul>
        <div class="w-full flex pr-9 pl-10 mt-2 ">
          <button class="btn btn-sm px-5 w-full btn-neutral justify-end text-2 *:text-nc/80 hover:!bg-neutral/85" @click="newItemSet(pocket.key)">
            <icon name="add-sm" class="stroke-[1.5] size-6" />Item Set
          </button>
        </div>
      </CollapsibleContent>
    </Motion>
  </Collapsible>
</template>