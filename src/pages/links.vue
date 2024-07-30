<script lang="ts" setup>
import { ref, Ref, defineProps } from 'vue';
import { Icon } from '@iconify/vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@ui/button';
import { useRouter, useRoute } from 'vue-router';

export type LinkVariant = 'default' | 'ghost' | 'link' | 'destructive' | 'outline' | 'secondary' | null;

export interface LinkProp {
  title: string;
  label: string;
  icon: string;
  variant: LinkVariant;
  component: '/builds' | '/champ/ChampionInfo' | '/champions' | '/items' | '/home' | '/runes' | '/settings' | null;
}

const props = defineProps<{ links: LinkProp[]; isCollapsed: boolean }>();
const router = useRouter();
const route = useRoute();

// Define collapsibleStates as a Ref with a Record type
const collapsibleStates: Ref<Record<number, boolean>> = ref(
  props.links.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
);

// Function to navigate
const navigate = (component: string | null) => {
  if (component) {
    router.push(component);
  }
};

// Toggle function for collapsible state
const toggleCollapsible = (index: number) => {
  collapsibleStates.value[index] = !collapsibleStates.value[index];
};
</script>



<template>
  <div :data-collapsed="props.isCollapsed" class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
    <nav class="grid gap-1 px-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <template v-for="(link, index) in props.links" :key="index">
        <div class="flex items-center">
          <!-- Collapsible Component -->
          <Collapsible v-model:open="collapsibleStates[index]">
            <!-- Collapsible Trigger -->
            <CollapsibleTrigger @click="toggleCollapsible(index)">
              <Button variant="ghost" size="sm" class="p-0 w-9">
                <Icon v-if="collapsibleStates[index]" icon="fluent-mdl2:calculator-subtract" class="w-4 h-4" />
                <Icon v-else icon="fluent-mdl2:calculator-addition" class="w-4 h-4" />
                <span class="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>

            <!-- Collapsible Content -->
            <CollapsibleContent class="space-y-2">
              <div class="px-4 py-3 font-mono text-sm border rounded-md">
                @radix-ui/colors
              </div>
              <div class="px-4 py-3 font-mono text-sm border rounded-md">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>

          <!-- Navigation Link -->
          <a @click="navigate(link.component)" :class="cn(
            buttonVariants({ variant: route.path === (link.component || '') ? 'default' : link.variant, size: 'sm' }),
            link.variant === 'default'
            && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
            'justify-start ml-2'
          )">
            <Icon :icon="link.icon" class="mr-4 size-4" />
            {{ link.title }}
            <span v-if="link.label" :class="cn(
              'ml-auto',
              link.variant === 'default' && 'text-background dark:text-white'
            )">
              {{ link.label }}
            </span>
          </a>
        </div>
      </template>
    </nav>
  </div>
</template>
