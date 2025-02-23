import { cva } from 'class-variance-authority'

// export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'

export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-b1 px-4 py-2 text-2 font-medium transition-colors hover:bg-b2/60 hover:text-bc focus:bg-b2/60 focus:text-bc focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-b2/60/50 data-[state=open]:bg-b2 /60/50',
)
