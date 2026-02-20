import { defineUiTheme } from "./defineUiTheme"

export const toasterTheme = defineUiTheme({
  slots: {
    viewport: 'fixed z-[100] flex w-[calc(100%-2rem)] flex-col focus:outline-none data-[expanded=true]:h-(--height) sm:w-96',
    base: 'pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) transition-[transform,translate,height] duration-200 ease-out data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none'
  },
  variants: {
    position: {
      'top-left': {
        viewport: 'left-4'
      },
      'top-center': {
        viewport: 'left-1/2 -translate-x-1/2 transform'
      },
      'top-right': {
        viewport: 'right-4'
      },
      'bottom-left': {
        viewport: 'left-4'
      },
      'bottom-center': {
        viewport: 'left-1/2 -translate-x-1/2 transform'
      },
      'bottom-right': {
        viewport: 'right-4'
      }
    },
    swipeDirection: {
      up: 'data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]',
      right: 'data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]',
      down: 'data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]',
      left: 'data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]'
    }
  },
  compoundVariants: [{
    position: ['top-left', 'top-center', 'top-right'],
    class: {
      viewport: 'top-4',
      base: 'top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]'
    }
  }, {
    position: ['bottom-left', 'bottom-center', 'bottom-right'],
    class: {
      viewport: 'bottom-4',
      base: 'bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]'
    }
  }, {
    swipeDirection: ['left', 'right'],
    class: 'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x)'
  }, {
    swipeDirection: ['up', 'down'],
    class: 'data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y)'
  }],
  defaultVariants: {
    position: 'bottom-right'
  }
})

export default toasterTheme
