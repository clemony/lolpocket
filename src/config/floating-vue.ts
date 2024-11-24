// src/plugins/floatingVueConfig.js
import FloatingVue, { placements } from 'floating-vue'

const floatingVueOptions = {
    disabled: false,
    distance: 0,
    skidding: 0,
    container: 'body',
    boundary: undefined,
    instantMove: false,
    disposeTimeout: 5000,
    popperTriggers: [''],
    strategy: 'absolute',
    preventOverflow: true,
    flip: true,
    shift: true,
    overflowPadding: 15,
    arrowPadding: 30,
    arrowOverflow: true,
    themes: {
        default: {
            $resetCss: false,
            triggers: ['click', 'focus'],
            autoHide: true,
            eagerMount: false,
            flip: true,
            instantMove: true,
            placement: 'auto',
            handleResize: true,
            overflowPadding: 0,
        },
        hover: {
            $resetCss: false,
            $extend: 'default',
            skidding: 30,
            triggers: ['hover', 'focus'],
            popperTriggers: ['hover', 'focus'],
        },
        'hover-inner': {
            $resetCss: false,
            $extend: 'default',
            placement: 'right-end',
            triggers: ['hover', 'focus'],
            popperTriggers: ['hover', 'focus'],
        },
        hidden: {
            $resetCss: false,
            autoHide: false,
            $extend: 'hover',
            triggers: ['hover', 'focus'],
            popperTriggers: ['hover', 'focus'],
        },
        tt: {
            $extend: 'tooltip',
        },
        tta: {
            $extend: 'tooltip',
        },
        select: {
            $extend: 'dropdown',
            triggers: ['click', 'focus'],
            autoHide: true,
            eagerMount: false,
            flip: true,
            distance: 1,
            instantMove: true,
            placement: 'bottom-start',
            handleResize: true,
        },
        menuLight: {
            $extend: 'dropdown',
            triggers: ['click'],
            autoHide: true,
            placement: 'bottom',
            distance: 8,
            instantMove: true,
            boundary: '#itemGrid',
            delay: {
                show: 100,
                hide: 0,
            },
        },
        btn: {
            $extend: 'tooltip',
            triggers: ['click'],
            eagerMount: false,
            delay: {
                show: 600,
                hide: 200,
            },
            autoHide: true,
        },

        context: {
            $extend: 'dropdown',
            triggers: [''],
            autoHide: true,
            distance: -94,
            placement: 'bottom-start',
            container: 'body',
            boundary: 'body',
            strategy: 'absolute',
        },
        menuDark: {
            $extend: 'menu',
            eagerMount: false,
            distance: 1,
            placement: 'right-start',
            instantMove: true,
        },
    },
}

export { FloatingVue, floatingVueOptions }
