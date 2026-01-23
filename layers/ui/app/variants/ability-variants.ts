import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const abilityVariants = tv({
  defaultVariants: {
    color: 'base',
    size: 'lg',
  },
  slots: {
    title: 'grow justify-start text-start tracking-tight',
    //
    attributeBadge:
      'b z-10 -mt-1 badge inline items-center gap-0 border px-2 !text-sm text-nowrap whitespace-nowrap',
    attributeContent:
      'isolation-auto !m-0 inline w-full gap-3 align-middle leading-7.5',
    attributeWrapper: 'mb-3 flex w-full flex-col gap-2 !p-0',
    collapsible: 'flex w-full flex-col justify-center',
    content: 'relative size-full self-center overflow-hidden',
    description:
      'group/d flex flex-col items-start justify-start text-md leading-6 **:leading-6 *:last-of-type:mb-5',
    iconWrapper: 'overflow-hidden shadow-sm drop-shadow-sm',
    notesContent: 'text-balanced leading-5',
    statsWrapper:
      'flex w-full flex-wrap items-center justify-start gap-y-2 px-1 pr-1 **:font-medium',
    trigger: 'flex items-center justify-items-start',
  },
  variants: {
    color: {
      base: {
        attributeBadge: 'border-b3 bg-b1 bg-b2/10 **:text-bc',
        attributeContent:
          'chat-bubble bg-b1 drop-shadow-xs drop-shadow-black/4',
        attributeWrapper: 'chat-start chat',
        collapsible: 'field-box',
        statsWrapper: '[&_svg]:text-bc/80',
        trigger: 'border-b-b3 data-[state=open]:border-b',
      },
      neutral: {
        collapsible: '',
        trigger: '',
      },
    },
    size: {
      lg: {
        title: '!text-4xl leading-8',
        attributeContent: '*:not-first:whitespace-pre',
        collapsible: 'max-w-230 gap-6 **:text-md',
        description: 'pr-2',
        iconWrapper: 'size-18 rounded-lg',
        notesContent: 'px-3',
        statsWrapper: 'gap-x-8',
        trigger: 'gap-6 px-6 py-4',
      },
      sm: {
        title: '!text-lg leading-4',
        attributeContent: '*:not-first:whitespace-wrap',
        collapsible: 'w-full max-w-[250px] p-0',
        content: 'w-full *:px-0',
        description: 'whitespace-wrap inline-flex w-full text-wrap',
        iconWrapper: 'size-8 rounded-md',
        notesContent: 'px-0',
        trigger: 'px-0',
      },
    },
  },
})

export type AbilityVariants = VariantProps<typeof abilityVariants>
