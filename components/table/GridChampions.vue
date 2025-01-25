<script setup lang="ts">
const props = defineProps<{
  params: {
    data: {
      name: string
      items: any
      pinned: boolean
      key: string
      champions: {
        champions: {
          name: string
        }
        starred: Champion[]
      }
    }
    api: any
    node: any
  }
}>()

const pocket = ref(getPocket(props.params.data.key))
</script>

<template>
  <!------------------------⟢ champions⟣------------------------->

  <PocketMenu
    v-if="pocket"
    type="context"
    :pocket="pocket"
    class="group relative flex size-full cursor-pointer content-center items-center justify-start gap-2 px-2"
  >
    <template v-for="(champion, index) in pocket.champions[0].champions">
      <div
        v-if="index < 3"
        class="border-b3 shadow-warm size-14 shrink-0 overflow-hidden rounded-lg border"
      >
        <img
          :url="`/img/champions/${champion.apiname}.webp`"
          class="size-14 scale-[108%] object-cover"
        />
      </div>
    </template>
    <ShadowedPlaceholder
      v-for="index in makeBox(pocket.champions[0].champions.length, 3)"
      class="size-14"
    />
  </PocketMenu>
</template>

<style scoped></style>
