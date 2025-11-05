import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const abilityVariants = tv({
  defaultVariants: {
    color: 'base',
    size: 'lg'
  },
  slots: {
    title: ' grow justify-start  text-start tracking-tight',
    collapsible: 'flex w-full flex-col justify-center',
    content: 'relative size-full self-center overflow-hidden',
    iconWrapper: 'overflow-hidden  shadow-sm drop-shadow-sm',
    statsWrapper: 'flex w-full flex-wrap items-center justify-start  gap-y-2 px-1 pr-1 **:font-medium',
    trigger: ' flex items-center justify-items-start',

    //
    attributeBadge: 'bg-b2/10 badge border-b3 !text-2 bg-b1 **:text-bc z-10 -mt-1 inline items-center gap-0 border px-2 text-wrap whitespace-pre',
    attributeContent: 'isolation-auto !m-0 inline w-full gap-3 align-middle leading-7.5',
    attributeWrapper: 'mb-3 flex w-full flex-col gap-2 !p-0',
    description: 'group/d text-3 flex flex-col items-start justify-start leading-6 **:leading-6 *:last-of-type:mb-5'
  },
  variants: {
    color: {
      base: {
        attributeContent: 'chat-bubble drop-shadow-black/4 bg-b1  drop-shadow-xs',
        attributeWrapper: 'chat chat-start ',
        collapsible: 'field-box ',
        trigger: 'border-b-b3 data-[state=open]:border-b',
      },
      neutral: {
        collapsible: '',
        trigger: '',
      },
    },
    size: {
      lg: {
        title: '!text-8 leading-8 ',
        collapsible: '**:text-3  max-w-230 gap-6',
        description: ' pr-2 ',
        iconWrapper: 'size-18 rounded-lg ',
        statsWrapper: 'gap-x-8',
        trigger: 'gap-6 px-6 py-4 ',
      },
      sm: {
        title: '!text-4 leading-4',
        attributeContent: 'text-wrap',
        collapsible: 'w-full max-w-[250px] ',
        content: 'w-full max-w-[250px] px-0',
        description: 'w-full max-w-[250px] text-wrap',
        iconWrapper: 'size-8 rounded-md',
        trigger: 'px-0',
      }
    }
  }
})

export type AbilityVariants = VariantProps<typeof abilityVariants>
