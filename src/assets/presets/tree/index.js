export default {
    root: {
        class: [
            'text-xs',
            // Space
            'm-0 p-0',

            // Shape,
            'border-none ',

            // Color
            'text-foreground',
            '[&_[data-pc-name=pcfilter]]:w-full'
        ]
    },
    wrapper: {
        class: ['overflow-auto m-1 mt-2']
    },
    container: {
        class: [
            // Spacing
            'm-0 p-0',

            // Misc
            'list-none overflow-auto'
        ]
    },
    node: {
        class: ['focus:outline-none']
    },
    nodeContent: ({ context, props }) => ({
        class: [
            // Flex and Alignment
            'inline-flex items-center rounded',


            // Spacing
            'mr-1.5 ml-0.5',

            // Colors
            context.selected ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-muted',

            // States
            { 'hover:bg-muted': (props.selectionMode == 'single' || props.selectionMode == 'multiple') && !context.selected },

            // Transition
            'transition-shadow duration-200',

            { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' },

  
        ]
    }),
    nodeToggleButton: ({ context }) => ({
        class: [
            // Flex and Alignment
            'inline-flex items-center size-8 order-3  mr-2.5',

            // Shape
            'border-0',

            // Size

            // Colors
            'bg-transparent',
            {
                'text-foreground': !context.selected,
                'text-background': context.selected,

                
                invisible: context.leaf,
                'hidden': context.leaf,
            },

            // States
            'hover:bg-surface-200/20 dark:hover:bg-surface-500/20',
            'focus:outline-none focus:outline-offset-0 focus:ring-0',

            // Transition
            'transition duration-200',

            // Misc
            'cursor-pointer select-none'
        ],
    }),

    nodeToggleIcon: ({ context }) => ({
        
        class: [
            'rotato'
        ]
    }),

    nodeIcon: ({ context }) => ({
        class: [
            // Space
            'mr-3 size-5 overflow-hidden order-1',

            // Color
            {
                'text-foreground': !context.selected,
                'text-background': context.selected,
                'pl-0': context.leaf,
            }
        ]
    }),
    nodeLabel: ({ context }) => ({
        class: [

            'order-1',

            {  
                'text-foreground': !context.selected,
                'text-background': context.selected
            }
        ]
    }),
    nodeChildren: {
        class: ['list-none',    //last:mb-3
        ]
    },
    loadingIcon: {
        class: ['text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin']
    }
    // pcFilterContainer: {
    //     root: {
    //         class: '[&>[data-pc-name=inputtext]]:w-full'
    //     }
    // }
};
