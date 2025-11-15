export function omitUIProps<T extends Record<string, any>>(props: T) {
  return reactiveOmit(
    props,
    'class',
    'variant',
    'size',
    'on',
    'base',
    'hover',
  ) as unknown as Omit<
    T,
    'class' | 'variant' | 'size' | 'on' | 'base' | 'hover'
  >
}
