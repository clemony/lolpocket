/**
 * Takes a Date, string, null, or undefined and returns a Date
 * object. If the input is a string, it will be parsed as a date.
 * If the input is null or undefined, the function will return null.
 */
export function parseDate(
  input: Date | string | null | undefined
): Date | null {
  if (!input)
    return null
  return typeof input === 'string' ? new Date(input) : input
}