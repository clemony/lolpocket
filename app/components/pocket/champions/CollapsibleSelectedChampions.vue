<script lang="ts" setup>
import { motion } from 'motion-v'

const target = useTemplateRef<HTMLElement>('target')

const open = ref<boolean>(false)

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const l = computed(() => pocket.champions.length > 5).value

const groups = computed(() =>
  l ? pocket.champions.slice(0, 4) : pocket.champions.slice(0, 5)
)

const variants = {
  closed: {},
  open: {},
}

const itemVariants = {
  closed: {
    opacity: 0,
    scale: 0.4,
    transform: 'translateY(100%)',
  },
  open: {
    opacity: 1,
    scale: 1,
    transform: 'translateY(0)',
  },
}
</script>

<template>
  <div class="">
    <Collapsible v-model:open="open">
      <CollapsibleContent>
        <motion.div
          ref="target"
          class="flex h-[40vh] max-h-full flex-col-reverse overflow-auto rounded-3xl mask-y-from-90% mask-y-to-100% py-4"
          :variants
          initial="closed"
          animate="open"
          :transition="{
            bounce: 0.15,
            delayChildren: 0.2,
            staggerChildren: 0.1,
            type: 'spring',
          }">
          <Button
            v-for="(champion, i) in pocket.champions"
            :key="champion"
            v-tippy="{
              content: champNameByKey(champion),
              theme: 'base',
              placement: 'left',
            }"
            class="grid size-22! place-items-center border-0 bg-p0 fx-0"
            color="default"
            shape="circle"
            :style="{
              zIndex: `-${i}`,
            }"
            as-child>
            <motion.div
              :variants="itemVariants"
              :transition="{
                bounce: 0.15,
                type: 'spring',
              }">
              <Champion
                class="size-18! rounded-full"
                :k="champion" />
            </motion.div>
          </Button>
        </motion.div>
      </CollapsibleContent>
      <CollapsibleTrigger as-child>
        <div
          class="group fixed right-22 bottom-22 z-11 flex flex-col -space-y-10">
          <template v-if="!open">
            <Element
              v-for="champion in groups"
              :key="champion"
              class="z-1 grid size-22! place-items-center border-0 bg-p0 fx-0"
              color="default"
              shape="circle">
              <Champion
                class="size-18! rounded-full"
                :k="champion" />
            </Element>
          </template>
          <Element
            v-if="l"
            class="relative z-1 grid size-22! place-items-center border-0 bg-p0 fx-0"
            color="default"
            shape="circle">
            <Element
              class="size-18! *:transition-all *:duration-300"
              shape="circle"
              color="neutral">
              <icon
                class="absolute group-closed:opacity-0"
                name="up" />
              <h3 class="group-open:text-transparent group-open:opacity-0">
                +{{ pocket.champions.length - 4 }}
              </h3>
            </Element>
          </Element>
        </div>
      </CollapsibleTrigger>
    </Collapsible>
  </div>
</template>
