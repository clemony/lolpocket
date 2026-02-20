import { defineUiTheme } from "./defineUiTheme"

export const accordionTheme = defineUiTheme({
  slots: {
    root: 'w-full',
    item: 'border-b border-default last:border-b-0',
    header: 'flex',
    trigger: 'group flex min-w-0 flex-1 items-center gap-1.5 py-3.5 text-sm font-medium focus-visible:outline-primary',
    content: 'overflow-hidden focus:outline-none data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]',
    body: 'pb-3.5 text-sm',
    leadingIcon: 'size-5 shrink-0',
    trailingIcon: 'ms-auto size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
    label: 'text-start break-words'
  },
  variants: {
    disabled: {
      true: {
        trigger: 'cursor-not-allowed opacity-75'
      }
    }
  }
})

export default accordionTheme
