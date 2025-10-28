import type { Component, VNode } from 'vue'
import type { ToastProps } from './toast-variants'

/* <icon
        name="mingcute:check-circle-fill"
        class="absolute top-4.75 left-5 size-6 drop-shadow-sm rounded-full" /> */
const TOAST_LIMIT = 3
<<<<<<< HEAD
const TOAST_REMOVE_DELAY = 10000
=======
const TOAST_REMOVE_DELAY = 1000000
>>>>>>> refs/remotes/origin/main

export type StringOrVNode
  = | string
    | VNode
    | (() => VNode)

type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: StringOrVNode
  action?: Component
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action
  = | {
    type: ActionType['ADD_TOAST']
    toast: ToasterToast
  }
  | {
    type: ActionType['UPDATE_TOAST']
    toast: Partial<ToasterToast>
  }
  | {
    type: ActionType['DISMISS_TOAST']
    toastId?: ToasterToast['id']
  }
  | {
    type: ActionType['REMOVE_TOAST']
    toastId?: ToasterToast['id']
  }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId))
    return

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      toastId,
      type: actionTypes.REMOVE_TOAST,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const state = ref<State>({
  toasts: [],
})

function dispatch(action: Action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      state.value.toasts = [action.toast, ...state.value.toasts].slice(0, TOAST_LIMIT)
      break

    case actionTypes.UPDATE_TOAST:
      state.value.toasts = state.value.toasts.map(t =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t,
      )
      break

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      }
      else {
        state.value.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      state.value.toasts = state.value.toasts.map(t =>
        t.id === toastId || toastId === undefined
          ? {
              ...t,
              open: false,
            }
          : t,
      )
      break
    }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined)
        state.value.toasts = []
      else
        state.value.toasts = state.value.toasts.filter(t => t.id !== action.toastId)

      break
  }
}

function useToast() {
  return {
    dismiss: (toastId?: string) => dispatch({ toastId, type: actionTypes.DISMISS_TOAST }),
    toast,
    toasts: computed(() => state.value.toasts),
  }
}

type Toast = Omit<ToasterToast, 'id'>

function toast(props: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      toast: { ...props, id },
      type: actionTypes.UPDATE_TOAST,
    })

  const dismiss = () => dispatch({ toastId: id, type: actionTypes.DISMISS_TOAST })

  dispatch({
    toast: {
      ...props,
      id,
      onOpenChange: (open: boolean) => {
        if (!open)
          dismiss()
      },
      open: true,
    },
    type: actionTypes.ADD_TOAST,
  })

  return {
    id,
    dismiss,
    update,
  }
}

export { toast, useToast }
