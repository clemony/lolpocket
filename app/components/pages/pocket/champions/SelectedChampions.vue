<script lang="ts" setup>
import { motion } from 'motion-v'

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
  <div class="fixed bottom-42 right-22">
    <Collapsible
      v-model:open="open">
      <CollapsibleContent>
        <motion.div
          ref="target"
          :variants
          initial="closed"
          animate="open"
          :transition="{
            bounce: 0.15,
            delayChildren: 0.2,
            staggerChildren: 0.1,
            type: 'spring',
          }"
          class="py-4 rounded-3xl flex mask-y-from-90% mask-y-to-100% overflow-auto  max-h-full  h-[40vh] flex-col-reverse">
          <Button
            v-for="champion, i in pocket.champions"
            :key="champion"
            v-tippy="{ content: ix().champNameByKey(champion), theme: 'base', placement: 'left' }"
            variant="base"
            shape="circle"
            :style="{
              zIndex: `-${i}`,
            }"
            as-child
            class="!size-22 bg-b1 fx-0 border-0 grid place-items-center">
            <motion.div
              :variants="itemVariants"
              :transition="{
                bounce: 0.15,
                type: 'spring',
              }">
              <ChampionIcon
                :k="champion"
                class="!size-18 rounded-full" />
            </motion.div>
          </Button>
        </motion.div>
      </CollapsibleContent>
      <CollapsibleTrigger as-child>
        <div class="group -space-y-10 flex z-11 fixed right-22 bottom-22 flex-col">
          <template v-if="!open">
            <Element
              v-for="champion in groups"
              :key="champion"
              variant="base"
              shape="circle"
              class="!size-22 bg-b1 z-1 fx-0 border-0 grid place-items-center">
              <ChampionIcon
                :k="champion"
                class="!size-18 rounded-full" />
            </Element>
          </template>
          <Element
            v-if="l"
            variant="base"
            shape="circle"
            class="!size-22 bg-b1 z-1 fx-0 border-0 relative grid place-items-center ">
            <Element
              shape="circle"
              variant="neutral"
              class="!size-18 *:transition-all *:duration-300">
              <icon
                name="up"
                class="absolute group-closed:opacity-0" />
              <h3 class="group-open:opacity-0 group-open:text-transparent">
                +{{ pocket.champions.length - 4 }}
              </h3>
            </Element>
          </Element>
        </div>
      </CollapsibleTrigger>
    </Collapsible>
  </div>
</template>
