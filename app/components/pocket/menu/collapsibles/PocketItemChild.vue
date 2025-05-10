<script lang="ts" setup>
const props = defineProps<{
  set: ItemSet
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const coreItem = computed (() => {
  return props.set.items[2] || null
})
</script>

<template>


  <Collapsible>
    <CollapsibleTrigger class="flex gap-3 items-center cursor-pointer flex-nowrap group/cli pl-3  w-full ">
      <span class="!size-8 shrink-0">
        <Image v-if="coreItem" :image="`/img/item/${coreItem.id}.webp`" :alt="coreItem.name" class="rounded-full shrink-0 aspect-square" />

        <Placeholder v-else class="rounded-full size-full" />
      </span>
      <span class="grow truncate text-left">
        {{ props.set.name }}
      </span>
      <RemoveButton tip="Delete Set" @click="deleteItemSet( pocket, set)" @click.stop />
      <StarButton :model="pocket.items.default" tip="Default Item Set" :value="set" @update:model="e => pocket.items.default = e" @click.stop />

      <icon name="up-sm" class="group-data-[state=open]/cli:rotate-180 size-4.5 tldr-30" />
    </CollapsibleTrigger>
    <ul class="w-full">
      <ul class="w-full">
        <li v-for="item in props.set.items" :key="item.id" class="flex gap-3 py-2 items-center w-full pl-2">
          <span class="shrink-0 aspect-square">
            <Image :image="`/img/item/${item.id}.webp`" :alt="item.name" class="rounded-full aspect-square shrink-0 !size-8.5" />
          </span>
          <span class="grow truncate">
            {{ item.name }}
          </span>
        </li>
      </ul>
    </ul>
  </Collapsible>
</template>