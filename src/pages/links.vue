<script lang="ts" setup>
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
  component: '/builds' | '/tree' | '/champions' | '/items' | '/home' | '/runes' | '/settings' | null;
  expandable: 'true' | 'false' | null;
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
const isOpen = ref(false);
</script>

<template>




  <div :data-collapsed="props.isCollapsed" class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
    <nav class="grid gap-1 px-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <template v-for="(link, index) in props.links" :key="index">
        <Tooltip v-if="props.isCollapsed" :delay-duration="0">
          <TooltipTrigger as-child class="cursor-pointer">
            <a @click="navigate(link.component)" :class="cn(
              buttonVariants({ variant: route.path === (link.component || '') ? 'default' : link.variant, size: 'icon' }),
              'h-9 w-9',
              link.variant === 'default'
              && 'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
            )">
              <Icon :icon="link.icon" class="size-4" />
              <span class="sr-only">{{ link.title }}</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right" class="flex items-center gap-4">
            {{ link.title }}
            <span v-if="link.label" class="ml-auto text-muted-foreground">
              {{ link.label }}
            </span>
          </TooltipContent>
        </Tooltip>



        <div v-else class="expand-links">
          <div>
            <Icon v-if="link.expandable === 'true'" icon="fluent:add-square-24-filled" class="size-5" />
            <span v-if="link.expandable === 'false'" class="pl-5"></span>
          </div>
          <a @click="navigate(link.component)" class="cursor-pointer" :class="cn(
            buttonVariants({ variant: route.path === (link.component || '') ? 'default' : link.variant, size: 'sm' }),
            link.variant === 'default'
            && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
            'justify-start'
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

<style>
.expand-links {
  @apply flex items-center;
}
</style>
