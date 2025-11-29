
export function getByIndex<T extends Record<string, any>>(
  dataset: T[],
  inputKey: keyof T,
  value: T[keyof T]
): T | undefined {
  return dataset.find(i => i[inputKey] === value)
}

export function findInIndex<T extends Record<string, any>>(
  dataset: T[],
  inputKey: keyof T,
  value: T[keyof T],
  outputKey: keyof T
): T[keyof T] | undefined {
  return dataset.find(i => i[inputKey] === value)?.[outputKey]
}
