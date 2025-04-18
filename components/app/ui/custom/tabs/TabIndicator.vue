
<script lang="ts" setup>
import { motion } from 'motion-v'
  import { TabsIndicator } from "reka-ui";
  import type { TabsIndicatorProps } from "reka-ui";

  defineOptions({ inheritAttrs: false });

  const props = defineProps<
    TabsIndicatorProps & {
      class?: HTMLAttributes['class']
    }
  >();
  const forwarded = reactiveOmit(props, "class");

</script>

<template>
  <ClientOnly>
    <TabsIndicator v-bind="{ ...forwarded, ...$attrs }" as-child>
      <motion.div

      :animate="{
        transform: 'translateX(calc(var(--reka-tabs-indicator-position)))',
        width:  'calc(var(--reka-tabs-indicator-size))',
        }"
 
        :transition="{
          duration: 0.3
        }"
      :class="cn('h-7 top-1 absolute transition-all  ', props.class)">
      
        <motion.div class="h-full w-full rounded-lg bg-b1 text-bc shadow" />
      </motion.div>
    </TabsIndicator>
  </ClientOnly>
</template>
