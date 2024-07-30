// src/data/types.ts

// Define LinkVariant type
export type LinkVariant = 'default' | 'ghost' | 'link' | 'destructive' | 'outline' | 'secondary' | null;

// Define LinkProp interface
export interface LinkProp {
  title: string;
  label: string;
  icon: string;
  variant: LinkVariant;
  component: string | null;
}

export interface NavProps {
  isCollapsed: boolean
  links: LinkProp[]
}

defineProps<NavProps>()