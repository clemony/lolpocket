<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const route = useRoute()
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="join w-full">
      <NuxtLink :to="`/pocket/${pocket.key}/items`" class="btn grow gap-4 items-center capitalize btn-ghost btn-lg group/btn justify-start text-3 font-medium join-item" :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'items' }" @click.stop>
        <span class="size-8.5 border-b3 inset-shadow-sm rounded-full flex items-center justify-center bg-b2 group-hover/btn:bg-b3/60">
          <icon
            name="bow"
            class="h-4.5 w-auto dst shrink-0 peer-checked:text-nc" />
        </span>
        Items
        <Grow />

        <ItemsCounter :pocket="pocket" />
      </NuxtLink>
      <div class="btn btn-square btn-lg join-item  items-center  btn-ghost btn-lg group/btn cursor-pointer " :class="{ 'btn-active  border-l-none': route.name == 'items' }">
        <icon name="up-sm" class="group-data-[state=open]/btn:rotate-180 size-4.5" />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent w-full ">
      h
    </CollapsibleContent>
  </Collapsible>
</template>