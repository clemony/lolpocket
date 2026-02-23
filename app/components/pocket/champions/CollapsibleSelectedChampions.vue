<script lang="ts" setup>
import { motion } from "motion-v"

const target = useTemplateRef<HTMLElement>("target")

const open = ref<boolean>(false)

const route = useRoute()
const pocket = computed(() =>
  usePockets().getPocket(String(route.params.pocket_key))
)

const champions = computed(() => pocket.value?.champions ?? [])
const l = computed(() => champions.value.length > 5)

const groups = computed(() =>
  l.value ? champions.value.slice(0, 4) : champions.value.slice(0, 5)
)

const variants = {
  closed: {},
  open: {},
}

const itemVariants = {
  closed: {
    opacity: 0,
    scale: 0.4,
    transform: "translateY(100%)",
  },
  open: {
    opacity: 1,
    scale: 1,
    transform: "translateY(0)",
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
          <UButton
            v-for="(champion, i) in champions"
            :key="champion"
            label="{
              content: champNameByKey(champion),
              theme: 'base',
              placement: 'left',
            }"
            class="fx-0 grid size-22! place-items-center border-0 bg-p0"
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
              <Champion class="size-18! rounded-full" :k="champion" />
            </motion.div>
          </UButton>
        </motion.div>
      </CollapsibleContent>
      <CollapsibleTrigger as-child>
        <div
          class="group fixed right-22 bottom-22 z-11 flex flex-col -space-y-10">
          <template v-if="!open">
            <div
              v-for="champion in groups"
              :key="champion"
              class="fx-0 z-1 grid size-22! place-items-center border-0 bg-p0"
              shape="circle">
              <Champion class="size-18! rounded-full" :k="champion" />
            </div>
          </template>
          <div
            v-if="l"
            class="fx-0 relative z-1 grid size-22! place-items-center border-0 bg-p0"
            shape="circle">
            <div
              class="size-18! *:transition-all *:duration-300"
              shape="circle"
              color="neutral">
              <icon class="absolute group-closed:opacity-0" name="up" />
              <h3 class="group-open:text-transparent group-open:opacity-0">
                +{{ champions.length - 4 }}
              </h3>
            </div>
          </div>
        </div>
      </CollapsibleTrigger>
    </Collapsible>
  </div>
</template>
