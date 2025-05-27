// utils/loadMotionFeatures.ts
export const loadMinMotion = () => import('./minMotion').then(m => m.default)
export const loadMaxMotion = () => import('./maxMotion').then(m => m.default)