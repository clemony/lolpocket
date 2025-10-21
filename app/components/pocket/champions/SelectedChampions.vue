<script lang="ts" setup>
import { motion } from 'motion-v'
import { vDraggable } from 'vue-draggable-plus'

const target = useTemplateRef<HTMLElement>('target')

const open = ref<boolean>(false)

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const l = computed (() => pocket.champions.length > 5).value

const groups = computed (() => l ? pocket.champions.slice(0, 4) : pocket.champions.slice(0, 5))

const variants = {
  closed: {
  },
  open: {
  }
}

const itemVariants = {
  closed: {
    opacity: 0,
    scale: 0.4,
    transform: 'translateY(100%)'
  },
  open: {
    opacity: 1,
    scale: 1,
    transform: 'translateY(0)'
  },
}
</script>

<template>
  <TransitionScalePop
    v-draggable="[
      pocket.champions, {
        group: {
          name: 'champions',
          pull: true,
          put: true,
        },
      }]"
    class="w-full h-fit min-h-32 flex grow items-center">
    <Card
      v-for="champion in pocket.champions"
      :key="champion"
      as-child>
      <AspectRatio
        :ratio="16 / 9"
        class="basis-1/5 min-h-32 grow">
        <Champion
          :k="champion"
          class="size-full  min-h-32 " />
      </AspectRatio>
    </Card>
  </TransitionScalePop>
</template>
