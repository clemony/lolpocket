<script setup lang="ts">
const props = defineProps<{
  params?: {
    data: {
      key: string
      bgColor: string
      iconColor: string
      icon: string
      name: string
      items: {}
      pinned: boolean
    }
    api: any
    node: any
  }
}>()
const ps = usePocketStore()
const pocket = ref(getPocket(props.params.data.key))
</script>

<template>
  <PocketMenu
    class="w-inherit inset-0 mx-1"
    content-class=" flex h-full w-full max-w-[99%] items-center justify-start self-center justify-self-start pr-px"
    type="dropdown"
    :pocket="pocket"
    @click.stop
  >
    <Button
      variant="ghost"
      class="hover:ring-b3/40 mt-px ml-px flex h-[calc(100%+8px)] w-full! grow rounded-lg px-1 hover:ring-1"
    >
      <PocketIcon
        :pocket="pocket"
        class="size-14 rounded-lg [&_svg]:p-3"
        icon-class="rounded-lg"
      />

      <span class="w-full! grow truncate text-left">
        {{ pocket.name }}
      </span>
    </Button>
  </PocketMenu>
</template>

<style scoped></style>
