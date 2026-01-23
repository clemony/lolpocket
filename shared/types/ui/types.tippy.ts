export type TippyTheme
  = | 'base'
    | 'default'
    | 'transparent'
    | 'base, clean'
    | 'neutral, clean'
export type TippyAnimation
  = | 'shift-toward-subtle'
    | 'shift-toward'
    | 'shift-toward-extreme'
    | 'scale-subtle'
    | 'scale'
    | 'scale-extreme'
    | 'shift-away'

export interface TippyUtils {
  hide?: () => void
  destroy?: () => void
}
